
# org.osbuild.ostree.aleph

**Create aleph version file for the deployment.**



## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "required": [
      "deployment"
    ],
    "properties": {
      "coreos_compat": {
        "description": "boolean to allow for CoreOS aleph version backwards compatibility",
        "type": "boolean"
      },
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
}
```
