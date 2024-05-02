
# org.osbuild.chown

**Change file owner and group**

Change the file user and/or group ownership of one or more files or directories inside the tree.
Notes:
  - Requires 'chroot' in the buildroot.
  - Runs the 'chown' binary from the image in the chroot.

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
            "anyOf": [
              {
                "required": [
                  "user"
                ]
              },
              {
                "required": [
                  "group"
                ]
              }
            ],
            "properties": {
              "user": {
                "oneOf": [
                  {
                    "type": "string",
                    "pattern": "^[A-Za-z0-9_.][A-Za-z0-9_.-]{0,31}$"
                  },
                  {
                    "type": "number",
                    "minimum": 0
                  }
                ],
                "description": "User name or UID"
              },
              "group": {
                "oneOf": [
                  {
                    "type": "string",
                    "pattern": "^[A-Za-z0-9_][A-Za-z0-9_-]{0,31}$"
                  },
                  {
                    "type": "number",
                    "minimum": 0
                  }
                ],
                "description": "Group name or GID"
              },
              "recursive": {
                "type": "boolean",
                "default": false,
                "description": "Change ownership recursively"
              }
            }
          }
        }
      }
    }
  }
}
```
