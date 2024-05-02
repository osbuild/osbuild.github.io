#!/usr/bin/env python3

import json
import pathlib
import subprocess
import sys
import tempfile

TEMPLATE = """
# {title}

**{summary}**

{description}

## Schema 1

```json
{schema_1}
```

## Schema 2

```json
{schema_2}
```
"""

def escape(text):
    text = text.replace("<", r"\<")
    text = text.replace(">", r"\>")
    return text

def main():
    root = pathlib.Path(__file__).parent.parent
    dest = root / "docs/developer-guide/02-projects/osbuild/modules/stages"

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
                "https://github.com/osbuild/osbuild",
                str(repo),
            ]
        )

        for file in dest.glob("*.md"):
            if file.name == "index.md":
                continue
            file.unlink()

        for schema in repo.glob("stages/*.json"):
            title = str(schema.name).removesuffix(".meta.json")
            datas = json.loads(schema.read_text())

            text = TEMPLATE.format(
                title=title,
                summary=escape(datas.get("summary", "")),
                description=escape("\n".join(datas.get("description", [""]))),
                schema_1=json.dumps(datas.get("schema", {}), indent=2),
                schema_2=json.dumps(datas.get("schema_2", {}), indent=2),
            )

            (dest / f"{title}.md").write_text(text)

    return 0


if __name__ == "__main__":
    sys.exit(main())
