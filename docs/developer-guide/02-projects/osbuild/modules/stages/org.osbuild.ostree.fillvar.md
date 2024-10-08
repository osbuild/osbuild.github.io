---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.fillvar.meta.json
---
# org.osbuild.ostree.fillvar
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.fillvar.meta.json )
-->

**Pre-populate /var directory for a given stateroot.**



## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "deployment"
  ],
  "properties": {
    "deployment": {
      "additionalProperties": false,
      "oneOf": [
        {
          "properties": {
            "default": {
              "enum": [
                false
              ]
            }
          },
          "required": [
            "osname",
            "ref"
          ]
        },
        {
          "properties": {
            "default": {
              "enum": [
                true
              ]
            }
          },
          "not": {
            "anyOf": [
              {
                "required": [
                  "osname"
                ]
              },
              {
                "required": [
                  "ref"
                ]
              },
              {
                "required": [
                  "serial"
                ]
              }
            ]
          }
        }
      ],
      "properties": {
        "osname": {
          "description": "Name of the stateroot to be used in the deployment",
          "type": "string"
        },
        "ref": {
          "description": "OStree ref to create and use for deployment",
          "type": "string"
        },
        "serial": {
          "description": "The deployment serial (usually '0')",
          "type": "number",
          "default": 0
        },
        "default": {
          "description": "Find and use the default ostree deployment",
          "type": "boolean",
          "default": false
        }
      }
    }
  }
}
```

## Schema 2

```json
{}
```
