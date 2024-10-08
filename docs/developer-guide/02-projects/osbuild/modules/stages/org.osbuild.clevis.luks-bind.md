---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.clevis.luks-bind.meta.json
---
# org.osbuild.clevis.luks-bind
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.clevis.luks-bind.meta.json )
-->

**Bind a LUKS device using the specified policy.**

Buildhost commands used: `clevis`, `clevis-luks`, `clevis-pin-*`.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "devices": {
    "type": "object",
    "additionalProperties": true,
    "required": [
      "device"
    ],
    "properties": {
      "device": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "required": [
      "passphrase",
      "pin",
      "policy"
    ],
    "properties": {
      "passphrase": {
        "description": "Passphrase to unlock the container",
        "type": "string"
      },
      "pin": {
        "description": "The pin to use",
        "type": "string"
      },
      "policy": {
        "description": "Policy to use with the given pin",
        "type": "string"
      }
    }
  }
}
```
