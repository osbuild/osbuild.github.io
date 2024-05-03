
# org.osbuild.untar

**Extract a tarball**

Buildhost commands used: `tar`.

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
      "file"
    ],
    "properties": {
      "file": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "properties": {
      "prefix": {
        "description": "Unpack here.",
        "type": "string",
        "default": "/"
      }
    }
  }
}
```
