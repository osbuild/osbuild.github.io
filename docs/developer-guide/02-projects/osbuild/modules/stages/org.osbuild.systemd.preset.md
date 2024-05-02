
# org.osbuild.systemd.preset

**Configure Systemd services through presets.**

Enable or disable systemd services through presets.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "presets": {
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "name",
          "state"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "state": {
            "type": "string",
            "enum": [
              "enable",
              "disable"
            ]
          }
        }
      },
      "description": "Array of systemd unit names and their preset logic."
    }
  }
}
```

## Schema 2

```json
{}
```
