
# org.osbuild.chattr

**Runs `chattr` to set file/directory attributes.**



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
          "^mount://[^/]+/|^tree:///": {
            "type": "object",
            "required": [
              "immutable"
            ],
            "properties": {
              "immutable": {
                "type": "boolean",
                "description": "Make the file/directory immutable",
                "default": true
              }
            }
          }
        }
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true
  },
  "mounts": {
    "type": "array"
  }
}
```
