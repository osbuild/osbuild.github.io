
# org.osbuild.btrfs.subvol

**Create subvolumes on a mounted btrfs partition.**

See `btrfs`(8).
Buildhost commands used: `btrfs`.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "properties": {
      "subvolumes": {
        "type": "array",
        "items": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true
  },
  "mounts": {
    "type": "array"
  }
}
```
