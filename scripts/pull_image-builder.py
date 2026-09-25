#!/usr/bin/env python3

import json
import pathlib
import subprocess
import sys
import shutil
import tempfile
import os

from utils import patch_md


def write_category(directory: pathlib.Path, label: str, position: int):
    """Give a generated folder a sidebar label. The puller recreates these on every run."""
    category = {
        "label": label,
        "position": position,
    }
    (directory / "_category_.json").write_text(json.dumps(category, indent=2) + "\n", encoding="utf-8")


def patch_markdown(dest: pathlib.Path, base_url: str):
    """
    Point edit links at the file in osbuild/image-builder.

    Pages copied from doc/ keep in-site relative links. Library and test pages
    use repo-relative links to source files, so those are rewritten to GitHub.
    """
    for dirpath, _, files in os.walk(dest):
        for file in files:
            if not file.endswith(".md"):
                continue

            md_file = pathlib.Path(dirpath) / file
            rel = md_file.relative_to(dest)
            if rel.parts[0] in {"docs", "test"}:
                repo_rel = rel.as_posix()
                replace_links = True
            else:
                repo_rel = f"doc/{rel.as_posix()}"
                replace_links = False

            originating_url = f"{base_url}/main/{repo_rel}"
            patch_md(md_file, originating_url, relative_link_replacement=replace_links)


def main():
    site_root = pathlib.Path(__file__).parent.parent

    base_url = "https://github.com/osbuild/image-builder"
    with tempfile.TemporaryDirectory() as tmp:
        repo = pathlib.Path(tmp) / "repo"

        subprocess.run(
            [
                "git",
                "clone",
                "--depth",
                "1",
                base_url,
                str(repo),
            ],
            check=True,
        )

        dest = site_root / "docs/developer-guide/02-projects/image-builder"

        if dest.exists():
            shutil.rmtree(dest)

        shutil.copytree(repo / "doc", dest)
        shutil.copytree(repo / "docs" / "developer", dest / "docs" / "developer")
        test_dest = dest / "test"
        test_dest.mkdir()
        shutil.copy2(repo / "test" / "README.md", test_dest / "README.md")

        write_category(dest / "docs", "Library development", 40)
        write_category(test_dest, "Testing", 41)

        patch_markdown(dest, base_url)

    return 0


if __name__ == "__main__":
    sys.exit(main())
