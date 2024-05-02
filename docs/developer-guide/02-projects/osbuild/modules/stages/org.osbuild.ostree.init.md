
# org.osbuild.ostree.init

**Create an ostree repository**

Uses `ostree init` to create an ostree repository. The
mode and location can be specified via the `mode` and
`path` option.
See the ostree-init(1) man page for more details.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "mode": {
      "description": "The mode to initialize the repo in.",
      "enum": [
        "bare",
        "bare-user",
        "bare-user-only",
        "archive"
      ],
      "default": "archive"
    },
    "path": {
      "description": "Location where to create the repo at.",
      "type": "string",
      "default": "/repo"
    }
  }
}
```

## Schema 2

```json
{}
```
