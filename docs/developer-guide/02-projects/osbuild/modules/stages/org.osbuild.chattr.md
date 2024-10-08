---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.chattr.meta.json
---
# org.osbuild.chattr
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.chattr.meta.json )
-->

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
