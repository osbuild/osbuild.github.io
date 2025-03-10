#!/usr/bin/env python3

import pathlib
import subprocess
import sys
import shutil
import tempfile


def main():
    root = pathlib.Path(__file__).parent.parent

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
                "https://github.com/osbuild/image-builder-cli",
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

    return 0


if __name__ == "__main__":
    sys.exit(main())
