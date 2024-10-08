---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd-logind.meta.json
---
# org.osbuild.systemd-logind
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd-logind.meta.json )
-->

**Configure systemd-logind**

The 'config' option allows to create a systemd-logind configuration
drop-in file in `/usr/lib/systemd/logind.conf.d` with the name
`filename`.
Drop-in configuration files can currently specify the following subset of
options:
  - 'Login' section
    - 'NAutoVTs' option
    - 'ReserveVT' option
At least one option must be specified in the 'Login' section.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "config",
    "filename"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "description": "Name of the systemd-logind drop-in.",
      "pattern": "^[\\w.-]{1,250}\\.conf$"
    },
    "config": {
      "additionalProperties": false,
      "type": "object",
      "description": "systemd-logind configuration",
      "minProperties": 1,
      "properties": {
        "Login": {
          "additionalProperties": false,
          "type": "object",
          "description": "'Login' configuration section.",
          "minProperties": 1,
          "properties": {
            "NAutoVTs": {
              "type": "integer",
              "minimum": 0,
              "description": "Configures how many virtual terminals (VTs) to allocate by default."
            },
            "ReserveVT": {
              "type": "integer",
              "minimum": 0,
              "description": "Reserve a VT exclusively for autovt@.service activation (defaults to 6)."
            }
          }
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
