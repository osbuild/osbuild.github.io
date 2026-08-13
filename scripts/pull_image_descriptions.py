#!/usr/bin/env python3

import argparse
import fnmatch
import json
import os
import pathlib
import re
import shutil
import subprocess
import sys
import tempfile
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from typing import Dict, List, Optional, Set, Tuple

import yaml

CONTAINER_IMAGE = "ghcr.io/osbuild/image-builder-cli:latest"
CONTAINER_NAME = "image-builder-describer"
GENERATION_DATE = datetime.now().strftime("%Y-%m-%d %H:%M:%S UTC")
TARGET_DIR = pathlib.Path(__file__).parent.parent / "docs" / "user-guide" / "09-image-descriptions"
# Parallel image-type workers; override with PULL_IMAGE_DESCRIPTIONS_JOBS.
DEFAULT_JOBS = 1
# Consumed by docusaurus.config.ts (@docusaurus/plugin-client-redirects).
LATEST_RHEL_REDIRECT_FILE = (
    pathlib.Path(__file__).parent.parent / "src" / "data" / "latest-rhel-redirect.json"
)
RHEL_FAMILY_NAME = "Red Hat Enterprise Linux"
# Published URL paths (Docusaurus strips numeric sidebar prefixes from dirs).
LATEST_RHEL_ALIAS_DIR = "/docs/user-guide/image-descriptions/latest-rhel"

# Bootc image types (not distro-tied). Pages live under 00-bootc/; YAML is embedded in
# image-builder (go:embed) so it is not a loose file inside the CLI container.
BOOTC_DIR_NAME = "00-bootc"
BOOTC_FAMILY_NAME = "Bootc"
BOOTC_IMAGETYPES_GITHUB_RAW = (
    "https://raw.githubusercontent.com/osbuild/image-builder/main/"
    "data/distrodefs/bootc-generic/imagetypes.yaml"
)
# Portable footer label for generated bootc pages (never a local filesystem path).
BOOTC_SOURCE_LABEL = (
    "github.com/osbuild/image-builder/data/distrodefs/bootc-generic/imagetypes.yaml"
)
BLUEPRINT_OPTION_SUPPORT_FILE = (
    pathlib.Path(__file__).parent.parent / "src" / "data" / "blueprint-option-support.json"
)

# Always accepted blueprint metadata; omit from the per-type customization list.
META_BLUEPRINT_OPTIONS = frozenset({"name", "version", "description"})

# Image types that are compatibility aliases / on their way out (still listed).
BOOTC_LEGACY_IMAGE_TYPES = frozenset({"anaconda-iso", "iso"})

# Map option paths to Blueprint Reference heading anchors (when a section exists).
OPTION_DOC_ANCHORS = {
    "distro": "distribution-selection-with-blueprints",
    "packages": "packages",
    "modules": "packages",
    "enabled_modules": "enabled-modules",
    "groups": "groups",
    "containers": "containers",
    "customizations.hostname": "hostname",
    "customizations.kernel": "kernel",
    "customizations.kernel.name": "kernel",
    "customizations.kernel.append": "kernel",
    "customizations.bootloader": "bootloader",
    "customizations.rhsm": "rhsm",
    "customizations.rpm": "rpm",
    "customizations.cacerts": "cacerts",
    "customizations.dnf": "dnf",
    "customizations.sshkey": "ssh-keys",
    "customizations.sshd": "sshd",
    "customizations.user": "additional-users",
    "customizations.group": "additional-groups",
    "customizations.timezone": "timezone",
    "customizations.locale": "locale",
    "customizations.firewall": "firewall",
    "customizations.services": "systemd-services",
    "customizations.files": "files-and-directories",
    "customizations.directories": "files-and-directories",
    "customizations.firstboot": "firstboot",
    "customizations.installation_device": "installation-device",
    "customizations.ignition": "ignition",
    "customizations.fdo": "fdo",
    "customizations.repositories": "repositories",
    "customizations.partitioning_mode": "partitioning-mode",
    "customizations.filesystem": "filesystems",
    "customizations.disk": "disk",
    "customizations.openscap": "openscap",
    "customizations.fips": "fips",
    "customizations.installer": "installer",
    "customizations.iso": "iso",
}


def run_command(cmd: List[str]) -> Tuple[bool, str, str]:
    """
    Run a command and return success status, stdout, and stderr.
    """
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        return True, result.stdout, result.stderr
    except subprocess.CalledProcessError as e:
        return False, e.stdout, e.stderr


def run_sudo(args: List[str], reason: str) -> Tuple[bool, str, str]:
    """Run a command with sudo, announcing why first (for password prompts)."""
    print(f"{reason} (needs root)", flush=True)
    return run_command(["sudo", *args])


def pull_container_image() -> bool:
    """
    Pull the latest image-builder-cli container image.
    """
    success, _, stderr = run_sudo(
        ["podman", "pull", CONTAINER_IMAGE],
        f"pull container image {CONTAINER_IMAGE}",
    )
    if not success:
        print(f"Warning: Failed to pull container image: {stderr}")
        return False
    print("Container image pulled successfully")
    return True


def get_container_version() -> str:
    """
    Get the version/ref of the image-builder-cli container.
    """
    # Get the image ID and digest information
    success, stdout, _ = run_sudo(
        ["podman", "images", CONTAINER_IMAGE, "--format", "{{.Repository}}:{{.Tag}}@{{.Digest}}"],
        f"read image digest for {CONTAINER_IMAGE}",
    )
    if success and stdout.strip():
        return stdout.strip()

    # Fallback to just the image ID if digest is not available
    success, stdout, _ = run_sudo(
        ["podman", "images", CONTAINER_IMAGE, "--format", "{{.Repository}}:{{.Tag}} ({{.ID}})"],
        f"read image id for {CONTAINER_IMAGE}",
    )
    if success and stdout.strip():
        return stdout.strip()

    return f"{CONTAINER_IMAGE} (unknown)"


def list_images() -> Dict:
    """
    Get list of all supported images using list-images command.

    The returned dict structure is
    {
        "distro_name": {
            "arch_name": [image_type_name, image_type_name, ...],
            "arch_name": [image_type_name, image_type_name, ...],
        }
    }
    """
    success, stdout, stderr = run_sudo(
        ["podman", "run", "--rm", "--privileged", CONTAINER_IMAGE, "list-images", "--format", "json"],
        f"run list-images in {CONTAINER_IMAGE}",
    )

    if not success:
        print(f"Error running list-images command: {stderr}")
        return {}

    try:
        flat_list = json.loads(stdout)
        # Convert to nested structure: distro -> arch -> [image_types]
        nested_dict = {}
        for item in flat_list:
            distro_name = item["distro"]["name"]
            arch_name = item["arch"]["name"]
            image_type_name = item["image_type"]["name"]
            nested_dict.setdefault(distro_name, {}).setdefault(arch_name, []).append(image_type_name)

        return nested_dict
    except json.JSONDecodeError as e:
        print(f"Error parsing JSON output from list-images: {e}")
        return {}
    except (KeyError, TypeError) as e:
        print(f"Error processing list-images data structure: {e}")
        return {}


def start_container() -> bool:
    """
    Start the image-builder-cli container in the background if not already running.
    """
    # Check if container is already running
    success, stdout, _ = run_sudo(
        ["podman", "ps", "-q", "-f", f"name={CONTAINER_NAME}"],
        f"check if container {CONTAINER_NAME} is already running",
    )
    if success and stdout.strip():
        return True
    # Remove any stopped container with the same name
    run_sudo(
        ["podman", "rm", "-f", CONTAINER_NAME],
        f"remove stopped container {CONTAINER_NAME}",
    )
    # Start the container
    # running a dummy bash to stay there
    success, _, stderr = run_sudo(
        [
            "podman", "run", "-d", "--privileged", "--rm",
            "--name", CONTAINER_NAME, "--entrypoint", "/usr/bin/bash",
            CONTAINER_IMAGE, "-c", "trap 'exit' TERM; while true; do sleep 1; done",
        ],
        f"start background container {CONTAINER_NAME}",
    )
    if not success:
        print(f"Error: Failed to start container: {stderr}")
        return False
    return True


def stop_container():
    """
    Stop and remove the running container.
    """
    run_sudo(
        ["podman", "rm", "-f", CONTAINER_NAME],
        f"stop and remove container {CONTAINER_NAME}",
    )


def exec_in_container(args: List[str]) -> Tuple[bool, str, str]:
    """
    Execute a command inside the running container.
    """
    return run_sudo(
        ["podman", "exec", CONTAINER_NAME, *args],
        f"podman exec in {CONTAINER_NAME}: {' '.join(args)}",
    )


def describe_image(distro: str, arch: str, image_type: str) -> str:
    """
    Get image description using describe command inside the running container.
    """
    args = [
        "/usr/bin/image-builder",
        "describe", image_type, "--distro", distro, "--arch", arch
    ]

    success, stdout, stderr = exec_in_container(args)
    if not success:
        print(f"Error running describe command for {distro}/{arch}/{image_type}: {stderr}")
        return ""

    lines = stdout.strip().splitlines()
    if len(lines) < 1:
        print(f"Unexpected output format for {distro}/{arch}/{image_type}")
        return ""

    # Remove the warning line if it exists (breaks YAML syntax)
    yaml_lines = lines
    if lines[0].startswith("@WARNING"):
        yaml_lines = lines[1:]

    if len(yaml_lines) < 1:
        print(f"No YAML content found for {distro}/{arch}/{image_type}")
        return ""

    return '\n'.join(yaml_lines)


def matches_filters(value: str, filters: List[str]) -> bool:
    """
    Check if a value matches any of the provided filters (regex or glob patterns).
    """
    if not filters:
        return True

    for filter_pattern in filters:
        # Try as regex first
        try:
            if re.match(filter_pattern, value):
                return True
        except re.error:
            pass

        # Try as glob pattern
        if fnmatch.fnmatch(value, filter_pattern):
            return True

    return False


def filter_images(
    images_data: Dict,
    distro_filters: List[str],
    arch_filters: List[str],
    type_filters: List[str]
) -> Dict:
    """
    Filter images based on provided filters.
    """
    filtered = {}
    # save unique ignored distro, arch, and type filters
    ignored_distro_filters = set()

    for distro, distro_data in images_data.items():
        if not matches_filters(distro, distro_filters):
            ignored_distro_filters.add(distro)
            continue

        filtered_distro = {}
        for arch, arch_data in distro_data.items():
            if not matches_filters(arch, arch_filters):
                continue

            filtered_arch = []
            for image_type in arch_data:
                if matches_filters(image_type, type_filters):
                    filtered_arch.append(image_type)

            if filtered_arch:
                filtered_distro[arch] = filtered_arch

        if filtered_distro:
            filtered[distro] = filtered_distro

    # print ignored filters
    print(f"Ignored distros: {sorted(ignored_distro_filters)}")

    return filtered


def create_anchor(text: str) -> str:
    """
    Create a URL-safe anchor from any text string.
    Converts to lowercase, replaces spaces and underscores with hyphens,
    removes dots, and handles other special characters.
    """
    text = text.lower().replace(' ', '-').replace('_', '-')
    for ch in '().':
        text = text.replace(ch, '')
    return text.strip('-')


def nice_distro_name(distro: str) -> Tuple[str, str]:
    """
    Convert a distro name to a nice name.
    """
    nice_names = {
        "fedora": "Fedora",
        "rhel": "Red Hat Enterprise Linux",
        "rocky": "Rocky Linux",
        "centos": "CentOS Stream",
        "centos-stream": "CentOS Stream",
        "almalinux": "AlmaLinux OS",
        "almalinux_kitten": "AlmaLinux OS Kitten",
    }

    distro_name, distro_version = distro.rsplit('-', 1)
    return nice_names.get(distro_name, distro_name.title()), distro_version


def images_list_to_distro_families(images_list: Dict) -> Dict:
    """
    Process the images data to group distributions by distro family.
    Returns a dict of distro families, sorted by family name in reverse order to get RHEL at the top.
    The versions within each family are sorted from the newest to the oldest.
    The returned dict is useful for generating index pages and the correct directory structure.

    The returned dict structure is
    {
        "nice_distro_name": [
            ("distro_id", "version"),
            ("distro_id", "version"),
        ]
    }
    """
    def version_key(item):
        try:
            version_parts = item[1].split('.', 1)
            if len(version_parts) == 1:
                return (int(version_parts[0]), 0)
            else:
                return (int(version_parts[0]), int(version_parts[1]))
        except ValueError:
            return (0, 0)

    distro_families = {}
    for distro in images_list.keys():
        try:
            nice_name, version = nice_distro_name(distro)
            distro_families.setdefault(nice_name, []).append((distro, version))
        except ValueError:
            # Handle cases where distro name doesn't contain a version
            distro_families[distro] = [(distro, "")]

    # keep rhel at the top, then sort alphabetically
    distro_families = dict(
        sorted(
            distro_families.items(),
            key=lambda x: (x[0] != "Red Hat Enterprise Linux", x[0])
        )
    )

    for family_name in distro_families.keys():
        distro_families[family_name] = sorted(distro_families[family_name], key=version_key, reverse=True)

    return distro_families


def generate_page_footer(container_version: str, generation_date: str) -> str:
    return f"""---
*Generated using: `{container_version}`*

*Last updated on: {generation_date}*"""


def extract_blueprint_options_from_describe_yaml(description: str) -> Tuple[Set[str], Set[str]]:
    """Return (supported_options, required_options) from a describe YAML document."""
    try:
        data = yaml.safe_load(description)
    except yaml.YAMLError:
        return set(), set()
    if not isinstance(data, dict):
        return set(), set()
    bp = data.get("blueprint") or {}
    supported = set(bp.get("supported_options") or [])
    required = set(bp.get("required_options") or [])
    return supported, required


def collect_blueprint_options(
    arch_descriptions: Dict[str, str],
) -> Tuple[List[str], List[str]]:
    """Union supported/required options across architectures; drop metadata fields."""
    supported: Set[str] = set()
    required: Set[str] = set()
    for description in arch_descriptions.values():
        s, r = extract_blueprint_options_from_describe_yaml(description)
        supported.update(s)
        required.update(r)
    supported -= META_BLUEPRINT_OPTIONS
    required -= META_BLUEPRINT_OPTIONS
    return sorted(supported), sorted(required)


def format_option_list_item(option: str) -> str:
    anchor = OPTION_DOC_ANCHORS.get(option)
    if anchor:
        return f"- [`{option}`](../../01-blueprint-reference.md#{anchor})"
    return f"- `{option}`"


def render_supported_customizations_section(
    supported: List[str],
    required: List[str],
) -> str:
    """Markdown section listing supported blueprint customizations for an image type."""
    lines = [
        "## Supported blueprint customizations",
        "",
        "Blueprint fields accepted for this image type (from [`image-builder describe`]"
        "(../../../developer-guide/02-projects/image-builder/01-usage.md#image-builder-describe)). "
        "See the [Blueprint Reference](../../01-blueprint-reference.md) for syntax and examples. "
        "The metadata fields `name`, `version`, and `description` are always accepted and omitted below.",
        "",
    ]
    if not supported and not required:
        lines.append("_No blueprint customization options were reported for this image type._")
        lines.append("")
        lines.append("")
        return "\n".join(lines)

    if supported:
        lines.append("**Supported options:**")
        lines.append("")
        lines.extend(format_option_list_item(opt) for opt in supported)
        lines.append("")
    if required:
        lines.append("**Required options:**")
        lines.append("")
        lines.extend(format_option_list_item(opt) for opt in required)
        lines.append("")
    # Trailing blank line before the next admonition/heading.
    lines.append("")
    return "\n".join(lines)


def generate_image_type_page(
    distro_name: str,
    distro_version: str,
    image_type: str,
    arch_descriptions: Dict[str, str],
    output_dir: pathlib.Path,
    footer: str
) -> pathlib.Path:
    """
    Generate a dedicated page for a specific image type.
    Returns the filepath of the generated page.
    """
    supported, required = collect_blueprint_options(arch_descriptions)
    customizations_section = render_supported_customizations_section(supported, required)

    content = f"""---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# {image_type}

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: {GENERATION_DATE} )
-->

Image description for **{image_type}** on **{distro_name} {distro_version}**.

The descriptions below describe the base image version,
that can be further customized by the user using the [Blueprint customizations](../../01-blueprint-reference.md).

{customizations_section}:::note[Package sets]

Each image description contains a list of base packages that make up the image.
This list is dependency-resolved using the distribution's package manager and subsequently installed into the image.
This means that the list of actually installed packages depends on the available RPM repositories
and the dependencies of the packages listed in the image's base package set.

:::

:::warning[Do not rely on the image description format]

The format of the image description is not guaranteed to be stable. It is published for informational purposes only.

:::

"""
    # Add table of contents for architectures if multiple architectures exist
    if len(arch_descriptions) > 1:
        content += "## Architectures\n\n"
        for arch in sorted(arch_descriptions.keys()):
            content += f"- [{arch}](#{create_anchor(arch)})\n"
        content += "\n"

    # Add individual architecture descriptions
    for arch, description in sorted(arch_descriptions.items()):
        content += f"## {arch} {{#{create_anchor(arch)}}}\n\n"
        content += f"```yaml\n{description}\n```\n\n"

    # Add footer
    content += f"\n{footer}\n"

    filepath = output_dir / f"{image_type}.md"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return filepath


def retrofit_supported_customizations(page_path: pathlib.Path) -> bool:
    """Insert/replace the supported-customizations section on an existing page.

    Returns True if the file was modified.
    """
    text = page_path.read_text(encoding="utf-8")
    if page_path.name == "index.md":
        return False

    blocks = re.findall(r"```yaml\n(.*?)```", text, re.S)
    arch_descriptions: Dict[str, str] = {}
    for i, block in enumerate(blocks):
        try:
            data = yaml.safe_load(block)
        except yaml.YAMLError:
            continue
        if not isinstance(data, dict):
            continue
        arch = data.get("arch") or f"arch-{i}"
        arch_descriptions[arch] = block
    if not arch_descriptions:
        return False

    supported, required = collect_blueprint_options(arch_descriptions)
    section = render_supported_customizations_section(supported, required)

    # Remove a previously generated section if present.
    text = re.sub(
        r"\n## Supported blueprint customizations\n.*?(?=\n:::note\[Package sets\]|\n## )",
        "\n",
        text,
        count=1,
        flags=re.S,
    )

    marker = ":::note[Package sets]"
    if marker not in text:
        return False
    new_text = text.replace(marker, section + marker, 1)
    if new_text == text:
        return False
    page_path.write_text(new_text, encoding="utf-8")
    return True


def generate_distro_index_page(
    distro_name: str,
    distro_version: str,
    image_type_page_info: Dict,
    output_dir: pathlib.Path,
    footer: str
) -> pathlib.Path:
    """
    Generate a dedicated page for a specific distribution.
    Returns the filepath of the generated page.
    """
    content = f"""---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# {distro_name} {distro_version}

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: {GENERATION_DATE} )
-->

This page describes the image types and architectures available for **{distro_name} {distro_version}**.

## Image Types

"""
    for image_type in sorted(image_type_page_info.keys()):
        image_page_relative, arch_anchors = image_type_page_info[image_type]
        arch_links = [f"[{arch}](./{image_page_relative}#{arch_anchor})" for arch, arch_anchor in arch_anchors.items()]
        content += f"- [{image_type}](./{image_page_relative}) ({', '.join(arch_links)})\n"
    content += "\n"

    # Add footer
    content += f"\n{footer}\n"

    filepath = output_dir / "index.md"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    return filepath


def generate_main_index_page(
    distro_pages_info: Dict,
    output_dir: pathlib.Path,
    footer: str
) -> pathlib.Path:
    """
    Generate the main index page.
    Returns the filepath of the generated page.
    """
    content = f"""---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# Image Descriptions

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: {GENERATION_DATE} )
-->

This section describes the distributions available in the latest upstream version of the Image Builder tooling.

:::note

The list of available distributions may vary depending on the method used to build an image
(e.g., `image-builder` CLI, `osbuild-composer`, Red Hat Insights service, etc.).
It also depends on the host distribution and its version when building images locally.

:::

"""
    # Add table of contents
    content += "## Available Distributions\n\n"
    for family_name, family_distros in distro_pages_info.items():

        content += f"### {family_name}\n\n"
        for distro_version, distro_page_relative in family_distros:
            if distro_version:
                content += f"- [{family_name} **{distro_version}**](./{distro_page_relative})\n"
            else:
                content += f"- [{family_name}](./{distro_page_relative})\n"
        content += "\n"

    # Add footer
    content += f"\n{footer}\n"

    index_path = output_dir / "index.md"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return index_path


def parse_bootc_imagetypes(imagetypes_path: pathlib.Path) -> Dict[str, List[str]]:
    """
    Parse bootc-generic imagetypes.yaml into image_type -> supported_options.

    YAML anchors are resolved by PyYAML. Alias types (e.g. iso -> anaconda-iso) appear
    as separate keys after load.
    """
    data = yaml.safe_load(imagetypes_path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError(f"Unexpected imagetypes root in {imagetypes_path}")
    image_types = data.get("image_types") or {}
    result: Dict[str, List[str]] = {}
    for name, typedef in image_types.items():
        if not isinstance(typedef, dict):
            continue
        bp = typedef.get("blueprint") or {}
        opts = [
            o for o in (bp.get("supported_options") or [])
            if o not in META_BLUEPRINT_OPTIONS
        ]
        result[str(name)] = sorted(opts)
    return result


def render_bootc_customizations_section(supported: List[str]) -> str:
    """Supported-customizations section for bootc pages (YAML allowlist, not describe)."""
    lines = [
        "## Supported blueprint customizations",
        "",
        "Blueprint fields accepted for this bootc image type (from "
        "`data/distrodefs/bootc-generic/imagetypes.yaml` in "
        "[osbuild/image-builder](https://github.com/osbuild/image-builder)). "
        "See the [Blueprint Reference](../../01-blueprint-reference.md) for syntax and examples. "
        "The metadata fields `name`, `version`, and `description` are always accepted and omitted below.",
        "",
    ]
    if not supported:
        lines.append("_No blueprint customization options were reported for this image type._")
        lines.append("")
        lines.append("")
        return "\n".join(lines)

    lines.append("**Supported options:**")
    lines.append("")
    lines.extend(format_option_list_item(opt) for opt in supported)
    lines.append("")
    lines.append("")
    return "\n".join(lines)


def generate_bootc_image_type_page(
    image_type: str,
    supported: List[str],
    output_dir: pathlib.Path,
    footer: str,
) -> pathlib.Path:
    """Write one bootc image-type markdown page (no per-arch describe dumps)."""
    customizations_section = render_bootc_customizations_section(supported)
    legacy_note = ""
    if image_type in BOOTC_LEGACY_IMAGE_TYPES:
        legacy_note = (
            "\n:::warning[Compatibility image type]\n\n"
            f"`{image_type}` is kept for compatibility with older bootc-image-builder workflows "
            "and is on its way out. Prefer `bootc-generic-iso` or `bootc-installer` for new ISO work.\n\n"
            ":::\n"
        )

    content = f"""---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# {image_type}

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: {GENERATION_DATE} )
-->

Bootc **artifact** image type **{image_type}**.

The bootable container is an **input**; Image Builder turns it into this output artifact.
Customize via a blueprint / `config.toml` using only the options listed below
(see [Blueprint Reference](../../01-blueprint-reference.md)).
{legacy_note}
{customizations_section}:::note[Container input, not package sets]

Bootc images are built from a container reference (`--bootc-ref`), not from a distribution
RPM base package set. Package content comes from the container image itself.

:::

:::warning[Do not rely on the image description format]

The format of these pages is not guaranteed to be stable. It is published for informational purposes only.

:::

{footer}
"""
    filepath = output_dir / f"{image_type}.md"
    filepath.write_text(content, encoding="utf-8")
    return filepath


def generate_bootc_family(
    imagetypes_path: pathlib.Path,
    output_parent: pathlib.Path,
    footer: Optional[str] = None,
    dir_name: str = BOOTC_DIR_NAME,
) -> Tuple[pathlib.Path, Dict[str, List[str]]]:
    """
    Generate the bootc family directory (index + per-type pages).

    Footer always cites the portable upstream YAML path (not a local file path).
    Returns (index_path, type -> supported_options).
    """
    if footer is None:
        footer = generate_page_footer(BOOTC_SOURCE_LABEL, GENERATION_DATE)
    type_options = parse_bootc_imagetypes(imagetypes_path)
    bootc_dir = output_parent / dir_name
    if bootc_dir.exists():
        shutil.rmtree(bootc_dir)
    bootc_dir.mkdir(parents=True, exist_ok=True)

    image_type_page_info: Dict[str, Tuple[pathlib.Path, Dict[str, str]]] = {}
    for image_type, supported in sorted(type_options.items()):
        page = generate_bootc_image_type_page(image_type, supported, bootc_dir, footer)
        image_type_page_info[image_type] = (page.relative_to(bootc_dir), {})

    # Distro index: reuse layout with empty version label
    content = f"""---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# Bootc

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: {GENERATION_DATE} )
-->

Image types for **bootc** builds (container input → disk/ISO/PXE artifact).

These types are **not** tied to a Fedora/RHEL distro id. Allowlists come from
[`bootc-generic/imagetypes.yaml`]({BOOTC_IMAGETYPES_GITHUB_RAW}).

## Image Types

"""
    for image_type in sorted(image_type_page_info.keys()):
        rel, _ = image_type_page_info[image_type]
        content += f"- [{image_type}](./{rel})\n"
    content += f"\n\n{footer}\n"

    index_path = bootc_dir / "index.md"
    index_path.write_text(content, encoding="utf-8")
    return index_path, type_options


def resolve_bootc_imagetypes_path(explicit: Optional[str]) -> pathlib.Path:
    """
    Locate bootc-generic imagetypes.yaml.

    Order: --bootc-imagetypes / BOOTC_IMAGETYPES env → download from image-builder main.
    Distrodefs are go:embed in the CLI image, so they are not available as loose files there.
    """
    if explicit:
        path = pathlib.Path(explicit).expanduser().resolve()
        if not path.is_file():
            raise FileNotFoundError(f"bootc imagetypes not found: {path}")
        return path

    env = os.environ.get("BOOTC_IMAGETYPES")
    if env:
        path = pathlib.Path(env).expanduser().resolve()
        if not path.is_file():
            raise FileNotFoundError(f"BOOTC_IMAGETYPES not found: {path}")
        return path

    import urllib.request

    dest = pathlib.Path(tempfile.gettempdir()) / "bootc-generic-imagetypes.yaml"
    print(f"Fetching bootc imagetypes from {BOOTC_IMAGETYPES_GITHUB_RAW} ...")
    with urllib.request.urlopen(BOOTC_IMAGETYPES_GITHUB_RAW, timeout=60) as resp:
        dest.write_bytes(resp.read())
    return dest


def patch_main_index_for_bootc(index_path: pathlib.Path, bootc_index_rel: str) -> None:
    """Insert or replace the Bootc family section at the top of Available Distributions."""
    text = index_path.read_text(encoding="utf-8")
    section = (
        f"### {BOOTC_FAMILY_NAME}\n\n"
        f"- [{BOOTC_FAMILY_NAME}](./{bootc_index_rel})\n\n"
    )
    # Remove existing Bootc block if present
    text = re.sub(
        rf"### {re.escape(BOOTC_FAMILY_NAME)}\n\n(?:- .*\n)+\n",
        "",
        text,
    )
    marker = "## Available Distributions\n\n"
    if marker not in text:
        raise ValueError(f"Cannot find Available Distributions in {index_path}")
    text = text.replace(marker, marker + section, 1)
    index_path.write_text(text, encoding="utf-8")


_OPTION_ITEM_RE = re.compile(
    r"^- (?:\[`([^`]+)`\]\([^)]+\)|`([^`]+)`)\s*$",
    re.M,
)


def extract_supported_options_from_page(page_text: str) -> List[str]:
    """Parse supported option paths from a generated image-type markdown page."""
    m = re.search(
        r"## Supported blueprint customizations\n(.*?)(?=\n## |\n:::|\Z)",
        page_text,
        re.S,
    )
    if not m:
        return []
    block = m.group(1)
    # Only the Supported options list (ignore Required)
    supp = re.search(r"\*\*Supported options:\*\*\n\n(.*?)(?=\n\*\*|\Z)", block, re.S)
    if not supp:
        return []
    opts = []
    for match in _OPTION_ITEM_RE.finditer(supp.group(1)):
        opts.append(match.group(1) or match.group(2))
    return opts


def distro_id_from_dir_name(dir_name: str) -> str:
    """Strip leading NN- sidebar prefix: 00-rhel-10.2 -> rhel-10.2, 00-bootc -> bootc."""
    return re.sub(r"^\d{2}-", "", dir_name)


def build_option_support_matrix(descriptions_dir: pathlib.Path) -> Dict:
    """
    Invert 09 pages into option -> {bootc: [types], classic_image_types: [types]}.

    Classic entries are unique image-type names across all non-bootc distros.
    """
    bootc: Dict[str, Set[str]] = {}
    classic: Dict[str, Set[str]] = {}

    for page in sorted(descriptions_dir.rglob("*.md")):
        if page.name == "index.md":
            continue
        parent = page.parent.name
        distro_id = distro_id_from_dir_name(parent)
        image_type = page.stem
        opts = extract_supported_options_from_page(page.read_text(encoding="utf-8"))
        bucket = bootc if distro_id == "bootc" else classic
        for opt in opts:
            bucket.setdefault(opt, set()).add(image_type)

    all_opts = sorted(set(bootc) | set(classic))
    options = {}
    for opt in all_opts:
        options[opt] = {
            "bootc": sorted(bootc.get(opt, ())),
            "classic_image_types": sorted(classic.get(opt, ())),
        }
    return {
        "generated": GENERATION_DATE,
        "source": "docs/user-guide/09-image-descriptions",
        "options": options,
    }


def write_option_support_matrix(descriptions_dir: pathlib.Path) -> pathlib.Path:
    data = build_option_support_matrix(descriptions_dir)
    BLUEPRINT_OPTION_SUPPORT_FILE.parent.mkdir(parents=True, exist_ok=True)
    BLUEPRINT_OPTION_SUPPORT_FILE.write_text(
        json.dumps(data, indent=2, sort_keys=True) + "\n",
        encoding="utf-8",
    )
    repo_root = pathlib.Path(__file__).parent.parent
    print(
        f"Wrote blueprint option support matrix: "
        f"{BLUEPRINT_OPTION_SUPPORT_FILE.relative_to(repo_root)} "
        f"({len(data['options'])} options)"
    )
    return BLUEPRINT_OPTION_SUPPORT_FILE


def retrofit_existing_pages(descriptions_dir: pathlib.Path) -> int:
    """Update existing generated pages in place (no container required)."""
    updated = 0
    for path in sorted(descriptions_dir.rglob("*.md")):
        if path.name == "index.md":
            continue
        if retrofit_supported_customizations(path):
            updated += 1
            print(f"Updated: {path.relative_to(descriptions_dir)}")
    return updated


def write_latest_rhel_redirect(distro_id: str) -> None:
    """Write client-redirect metadata for the newest generated RHEL distro.

    Paths are site URLs after Docusaurus strips numeric ordering prefixes
    (e.g. docs/.../00-rhel-10.2/ami.md -> /docs/user-guide/image-descriptions/rhel-10.2/ami).
    """
    data = {
        "targetDir": f"/docs/user-guide/image-descriptions/{distro_id}",
        "aliasDir": LATEST_RHEL_ALIAS_DIR,
    }
    LATEST_RHEL_REDIRECT_FILE.parent.mkdir(parents=True, exist_ok=True)
    LATEST_RHEL_REDIRECT_FILE.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    repo_root = pathlib.Path(__file__).parent.parent
    print(f"Wrote latest RHEL redirect: {LATEST_RHEL_REDIRECT_FILE.relative_to(repo_root)}")
    print(f"  {data['aliasDir']} -> {data['targetDir']}")


def parallel_jobs() -> int:
    """Number of parallel image-type workers from PULL_IMAGE_DESCRIPTIONS_JOBS (default 1)."""
    raw = os.environ.get("PULL_IMAGE_DESCRIPTIONS_JOBS", str(DEFAULT_JOBS))
    try:
        jobs = int(raw)
    except ValueError as exc:
        raise SystemExit(
            f"Invalid PULL_IMAGE_DESCRIPTIONS_JOBS={raw!r}; must be a positive integer"
        ) from exc
    if jobs < 1:
        raise SystemExit(f"Invalid PULL_IMAGE_DESCRIPTIONS_JOBS={jobs}; must be >= 1")
    return jobs


def process_image_type(
    distro_id: str,
    distro_name: str,
    version: str,
    image_type: str,
    distro_data: Dict,
    distro_id_dir: pathlib.Path,
    page_footer: str,
    image_types_count: int,
    progress: Dict[str, int],
    progress_lock: threading.Lock,
) -> Optional[Tuple[str, pathlib.Path, Dict[str, str]]]:
    """
    Describe one image type across arches and write its markdown page.

    Returns (image_type, relative_page_path, arch_anchors) or None if no descriptions.
    """
    with progress_lock:
        print(
            f"[{progress['processed']}/{image_types_count}] "
            f"Processing {distro_id}/{image_type}..."
        )

    arch_descriptions = {}
    for arch, types in distro_data.items():
        if image_type not in types:
            continue
        description = describe_image(distro_id, arch, image_type)
        with progress_lock:
            progress["processed"] += 1
        if not description:
            print(f"WARNING: Failed to describe {distro_id}/{arch}/{image_type}")
            continue
        arch_descriptions[arch] = description

    if not arch_descriptions:
        return None

    image_page = generate_image_type_page(
        distro_name, version, image_type, arch_descriptions, distro_id_dir, page_footer
    )
    image_page_relative = image_page.relative_to(distro_id_dir)
    print(f"Generated: {image_page_relative}")

    arch_anchors = {arch: create_anchor(arch) for arch in arch_descriptions.keys()}
    return image_type, image_page_relative, arch_anchors


def main():
    """Main function."""
    parser = argparse.ArgumentParser(
        description="Pull image descriptions and generate markdown documentation"
    )
    parser.add_argument(
        "--distro-filter",
        action="append",
        help="Filter distributions (regex or glob pattern, can specify multiple)"
    )
    parser.add_argument(
        "--arch-filter",
        action="append",
        help="Filter architectures (regex or glob pattern, can specify multiple)"
    )
    parser.add_argument(
        "--type-filter",
        action="append",
        help="Filter image types (regex or glob pattern, can specify multiple)"
    )
    parser.add_argument(
        "--retrofit-supported-customizations",
        action="store_true",
        help=(
            "Only insert/refresh the 'Supported blueprint customizations' section "
            "on existing pages under docs/user-guide/09-image-descriptions/ "
            "(uses YAML already embedded in those pages; no container needed)"
        ),
    )
    parser.add_argument(
        "--bootc-only",
        action="store_true",
        help=(
            "Only (re)generate the bootc family under 09-image-descriptions/00-bootc/ "
            "from bootc-generic imagetypes.yaml; does not pull the CLI container or "
            "regenerate classic distro pages"
        ),
    )
    parser.add_argument(
        "--bootc-imagetypes",
        default=None,
        help=(
            "Path to bootc-generic/imagetypes.yaml (else BOOTC_IMAGETYPES env, else "
            "fetch from osbuild/image-builder main on GitHub)"
        ),
    )
    parser.add_argument(
        "--skip-bootc",
        action="store_true",
        help="Skip generating the bootc family during a full pull",
    )
    parser.add_argument(
        "--skip-support-matrix",
        action="store_true",
        help="Do not write src/data/blueprint-option-support.json",
    )

    args = parser.parse_args()

    if args.retrofit_supported_customizations:
        if not TARGET_DIR.is_dir():
            print(f"Error: {TARGET_DIR} does not exist", file=sys.stderr)
            return 1
        count = retrofit_existing_pages(TARGET_DIR)
        print(f"Updated {count} image description pages")
        if not args.skip_support_matrix:
            write_option_support_matrix(TARGET_DIR)
        return 0

    if args.bootc_only:
        try:
            imagetypes_path = resolve_bootc_imagetypes_path(args.bootc_imagetypes)
        except (FileNotFoundError, OSError) as exc:
            print(f"Error: {exc}", file=sys.stderr)
            return 1
        TARGET_DIR.mkdir(parents=True, exist_ok=True)
        print(f"Generating bootc pages from {imagetypes_path} ...")
        index_path, _ = generate_bootc_family(imagetypes_path, TARGET_DIR)
        main_index = TARGET_DIR / "index.md"
        if main_index.is_file():
            patch_main_index_for_bootc(
                main_index,
                str(index_path.relative_to(TARGET_DIR)),
            )
            print(f"Updated main index with Bootc link")
        else:
            print("Warning: main index.md missing; created bootc pages only")
        if not args.skip_support_matrix:
            write_option_support_matrix(TARGET_DIR)
        print("Successfully generated bootc image descriptions")
        return 0

    if not pull_container_image():
        print("Failed to pull container image")
        return 1

    print("Getting container version...")
    container_version = get_container_version()
    print(f"Container version: {container_version}")

    print("Fetching list of supported images...")
    images_data = list_images()
    if not images_data:
        print("Failed to get list of images")
        return 1

    print("Applying filters...")
    filtered_images = filter_images(
        images_data,
        args.distro_filter or [],
        args.arch_filter or [],
        args.type_filter or []
    )

    if not filtered_images:
        print("No images match the specified filters")
        return 1

    image_types_count = sum(
        [sum([len(image_types) for image_types in arches.values()]) for arches in filtered_images.values()]
    )
    jobs = parallel_jobs()
    print(f"Processing {image_types_count} image type combinations with {jobs} parallel job(s)...")

    distro_families = images_list_to_distro_families(filtered_images)
    page_footer = generate_page_footer(container_version, GENERATION_DATE)

    bootc_imagetypes_path = None
    if not args.skip_bootc:
        try:
            bootc_imagetypes_path = resolve_bootc_imagetypes_path(args.bootc_imagetypes)
            print(f"Bootc imagetypes: {bootc_imagetypes_path}")
        except (FileNotFoundError, OSError) as exc:
            print(f"Error resolving bootc imagetypes: {exc}", file=sys.stderr)
            return 1

    # Start the container once for all describe calls
    if not start_container():
        print("Failed to start container for describe commands")
        return 1
    try:
        # Create temporary directory for generation
        progress = {"processed": 0}
        progress_lock = threading.Lock()
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_path = pathlib.Path(temp_dir)

            # Dictionary to store distro page info:
            # distro_name -> [("version", "filepath"), ("version", "filepath"), ...]
            distro_pages_info = {}

            distro_id_idx = 0
            if bootc_imagetypes_path is not None:
                print("Generating bootc family...")
                bootc_index, _ = generate_bootc_family(
                    bootc_imagetypes_path, temp_path, dir_name=BOOTC_DIR_NAME
                )
                distro_pages_info[BOOTC_FAMILY_NAME] = [
                    ("", bootc_index.relative_to(temp_path))
                ]
                distro_id_idx = 1

            # Generate individual image type pages
            latest_rhel_id = None
            with ThreadPoolExecutor(max_workers=jobs) as executor:
                for distro_name, family_distros in distro_families.items():
                    for distro_id, version in family_distros:
                        distro_id_dir = temp_path / f"{distro_id_idx:02d}-{distro_id}"
                        # Families are RHEL-first; versions within a family are newest-first.
                        if distro_name == RHEL_FAMILY_NAME and latest_rhel_id is None:
                            latest_rhel_id = distro_id
                        distro_id_idx += 1
                        distro_id_dir.mkdir(parents=True, exist_ok=True)
                        distro_data = filtered_images[distro_id]

                        # Group descriptions by image type across architectures
                        image_types = set()
                        for arch_data in distro_data.values():
                            image_types.update(arch_data)

                        # Dictionary to store image page info: image_type -> (filepath, arch_anchors)
                        image_type_pages_info = {}

                        futures = [
                            executor.submit(
                                process_image_type,
                                distro_id,
                                distro_name,
                                version,
                                image_type,
                                distro_data,
                                distro_id_dir,
                                page_footer,
                                image_types_count,
                                progress,
                                progress_lock,
                            )
                            for image_type in sorted(image_types)
                        ]
                        for future in as_completed(futures):
                            result = future.result()
                            if result is None:
                                continue
                            image_type, image_page_relative, arch_anchors = result
                            image_type_pages_info[image_type] = (image_page_relative, arch_anchors)

                        print(f"Generating {distro_name} {version} index page...")
                        distro_page = generate_distro_index_page(
                            distro_name, version, image_type_pages_info, distro_id_dir, page_footer
                        )
                        distro_page_relative = distro_page.relative_to(temp_dir)
                        print(f"Generated: {distro_page_relative}")

                        distro_pages_info.setdefault(distro_name, []).append((version, distro_page_relative))

            print("Generating main index page...")
            generate_main_index_page(distro_pages_info, temp_path, page_footer)

            print(f"Replacing content in {TARGET_DIR}...")
            if TARGET_DIR.exists():
                shutil.rmtree(TARGET_DIR)
            shutil.move(str(temp_path), str(TARGET_DIR))

            if latest_rhel_id:
                write_latest_rhel_redirect(latest_rhel_id)
            else:
                print("Warning: no RHEL distro generated; left latest-rhel redirect unchanged")

            if not args.skip_support_matrix:
                write_option_support_matrix(TARGET_DIR)

            print("Successfully generated image descriptions documentation!")
            return 0
    finally:
        stop_container()


if __name__ == "__main__":
    sys.exit(main())
