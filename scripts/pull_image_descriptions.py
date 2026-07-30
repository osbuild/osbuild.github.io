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

# Always accepted blueprint metadata; omit from the per-type customization list.
META_BLUEPRINT_OPTIONS = frozenset({"name", "version", "description"})

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
            content += f"- [{family_name} **{distro_version}**](./{distro_page_relative})\n"
        content += "\n"

    # Add footer
    content += f"\n{footer}\n"

    index_path = output_dir / "index.md"
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(content)

    return index_path


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

    args = parser.parse_args()

    if args.retrofit_supported_customizations:
        if not TARGET_DIR.is_dir():
            print(f"Error: {TARGET_DIR} does not exist", file=sys.stderr)
            return 1
        count = retrofit_existing_pages(TARGET_DIR)
        print(f"Updated {count} image description pages")
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

            # Generate individual image type pages
            distro_id_idx = 0
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

            print("Successfully generated image descriptions documentation!")
            return 0
    finally:
        stop_container()


if __name__ == "__main__":
    sys.exit(main())
