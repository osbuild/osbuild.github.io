
# org.osbuild.mkfs.xfs

**Construct an XFS file-system via mkfs.xfs(8)**

Construct a XFS file-system with the given options at the device
specified via `device`.
Buildhost commands used: `mkfs.xfs`.

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
        "description": "UUID for the file system",
        "type": "string"
      },
      "label": {
        "description": "Label for the file system",
        "type": "string",
        "maxLength": 12
      }
    }
  }
}
```
