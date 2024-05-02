
# org.osbuild.mkfs.btrfs

**Construct an btrfs file-system via mkfs.btrfs(8)**

Construct a btrfs file-system with the given options at the device
specified via `device`.
Buildhost commands used: `mkfs.btrfs`.

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
      "uuid"
    ],
    "properties": {
      "uuid": {
        "description": "Volume identifier",
        "type": "string"
      },
      "label": {
        "description": "Label for the file system",
        "type": "string",
        "maxLength": 256
      },
      "metadata": {
        "description": "Profile for the metadata block groups",
        "type": "string",
        "enum": [
          "single",
          "dup"
        ]
      }
    }
  }
}
```
