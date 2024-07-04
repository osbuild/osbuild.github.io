
# org.osbuild.dmverity

**Enables dm-verity protection**

Sets up dm-verity for data_device and stores hash blockes on hash_device.
Root hash gets written to `root_hash_file`

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "required": [
      "root_hash_file"
    ],
    "properties": {
      "blocksize": {
        "type": "number",
        "default": 512
      },
      "root_hash_file": {
        "type": "string"
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true,
    "required": [
      "data_device",
      "hash_device"
    ],
    "properties": {
      "data_device": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "path"
        ],
        "properties": {
          "path": {
            "type": "string"
          }
        }
      },
      "hash_device": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "path"
        ],
        "properties": {
          "path": {
            "type": "string"
          }
        }
      }
    }
  }
}
```
