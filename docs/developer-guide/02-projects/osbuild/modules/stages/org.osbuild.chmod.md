
# org.osbuild.chmod

**Change file mode bits**

Change the file mode bits of one or more files or directories inside the tree.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "properties": {
      "items": {
        "type": "object",
        "additionalProperties": false,
        "patternProperties": {
          "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$": {
            "type": "object",
            "required": [
              "mode"
            ],
            "properties": {
              "mode": {
                "type": "string",
                "description": "Symbolic or numeric octal mode"
              },
              "recursive": {
                "type": "boolean",
                "description": "Change modes recursively",
                "default": false
              }
            }
          }
        }
      }
    }
  }
}
```
