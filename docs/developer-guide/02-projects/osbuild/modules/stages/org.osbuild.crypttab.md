
# org.osbuild.crypttab

**Create /etc/crypttab entries for encrypted block devices**

See crypttab(5) for a detailed description of the format but in brief:
each item in the list of `volumes` describes an encrypted block device
and how it should it should be setup. The block device is identified
either by `uuid` or by `path` (device node path). The volume will be
named as `volume`, i.e. made available as `/dev/mapper/$volume`.
Additionally, a keyfile can (optionally) be specified via `keyfile`.
Specific device options can be specified via `options`.
This stage replaces /etc/crypttab, removing any existing entries.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "volumes"
  ],
  "properties": {
    "volumes": {
      "type": "array",
      "description": "array of volume objects",
      "items": {
        "type": "object",
        "oneOf": [
          {
            "required": [
              "uuid",
              "volume"
            ]
          },
          {
            "required": [
              "path",
              "volume"
            ]
          }
        ],
        "properties": {
          "volume": {
            "description": "volume mountpoint",
            "type": "string"
          },
          "uuid": {
            "description": "device UUID",
            "type": "string"
          },
          "path": {
            "description": "device path",
            "type": "string"
          },
          "keyfile": {
            "description": "",
            "type": "string",
            "default": "none"
          },
          "options": {
            "description": "options (comma-separated)",
            "type": "string",
            "default": ""
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
