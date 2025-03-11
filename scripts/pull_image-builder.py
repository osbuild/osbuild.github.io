#!/usr/bin/env python3

import pathlib
import subprocess
import sys
import shutil
import tempfile
import os

from utils import patch_md

def main():
    root = pathlib.Path(__file__).parent.parent

    base_url = "https://github.com/osbuild/image-builder-cli"
    with tempfile.TemporaryDirectory() as tmp:
        path = pathlib.Path(tmp)

        repo = path / "repo"
        repo.mkdir()

        subprocess.run(
            [
                "git",
                "clone",
                "--depth",
                "1",
                base_url,
                str(repo),
            ]
        )

        dest = root / "docs/developer-guide/02-projects/image-builder"

        if dest.exists():
            shutil.rmtree(dest)

        shutil.copytree(
            repo / "doc",
            dest,
        )

        for root, _, files in os.walk(dest):
            for file in files:
                if file.endswith(".md"):
                    md_file = pathlib.Path(root) / file
                    originating_url = f"{base_url}/main/doc/{file}"
                    patch_md(md_file, originating_url, relative_link_replacement=False)

    return 0


if __name__ == "__main__":
    sys.exit(main())
