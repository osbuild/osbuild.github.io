
# org.osbuild.ostree.encapsulate

**Wrap OSTree commits into a oci container image**

For more information see [1].
[1] https://github.com/ostreedev/ostree-rs-ext#module-container-bridging-between-ostree-and-ocidocker-images

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
      "filename"
    ],
    "properties": {
      "filename": {
        "description": "Resulting image filename",
        "type": "string"
      },
      "cmd": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "copymeta": {
        "description": "Propagate an OSTree commit metadata key to container label",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "format_version": {
        "type": "integer",
        "description": "The encapsulated container format version",
        "default": 1
      },
      "labels": {
        "description": "Additional labels for the container",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "max_layers": {
        "description": "Maximum number of container image layers",
        "type": "integer"
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "commit"
    ],
    "properties": {
      "commit": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
