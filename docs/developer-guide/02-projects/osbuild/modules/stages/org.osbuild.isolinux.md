
# org.osbuild.isolinux

**Create an isolinux bootloader**



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
      "product",
      "kernel"
    ],
    "properties": {
      "product": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "name",
          "version"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "version": {
            "type": "string"
          }
        }
      },
      "kernel": {
        "type": "object",
        "required": [
          "dir"
        ],
        "properties": {
          "dir": {
            "type": "string"
          },
          "opts": {
            "description": "Array of group names for this user",
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        }
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "data"
    ],
    "properties": {
      "data": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
