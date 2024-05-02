
# org.osbuild.clevis.luks-bind

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
