
# org.osbuild.luks2.remove-key

**Removes the supplied passphrase from the LUKS device.**

Buildhost commands used: `cryptsetup`.

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
      "passphrase"
    ],
    "properties": {
      "passphrase": {
        "description": "Passphrase to remove",
        "type": "string"
      }
    }
  }
}
```
