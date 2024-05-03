
# org.osbuild.dnf-automatic.config

**Change DNF Automatic configuration.**

The stage changes persistent DNF Automatic configuration. Currently, only
a subset of options can be set:
  - 'commands' section
    - apply_updates
    - upgrade_type

## Schema 1

```json
{
  "definitions": {
    "commands": {
      "type": "object",
      "additionalProperties": false,
      "description": "'commands' configuration section.",
      "properties": {
        "apply_updates": {
          "type": "boolean",
          "description": "Whether packages comprising the available updates should be installed."
        },
        "upgrade_type": {
          "type": "string",
          "description": "What kind of upgrades to look at.",
          "enum": [
            "default",
            "security"
          ]
        }
      }
    }
  },
  "additionalProperties": false,
  "description": "DNF Automatic configuration.",
  "properties": {
    "config": {
      "type": "object",
      "additionalProperties": false,
      "description": "configuration definition.",
      "properties": {
        "commands": {
          "$ref": "#/definitions/commands"
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
