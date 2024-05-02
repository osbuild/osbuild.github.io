
# org.osbuild.container-deploy

**Deploy a container.**

Buildhost commands used: podman skopeo

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "images"
    ],
    "properties": {
      "images": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "properties": {
      "exclude": {
        "type": "array",
        "description": "Exclude paths from the deployment",
        "minItems": 1,
        "items": {
          "type": "string"
        }
      }
    }
  }
}
```
