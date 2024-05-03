
# org.osbuild.xz

**Compress a file**

Buildhost commands used: `xz`.

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
    "required": [
      "filename"
    ],
    "properties": {
      "filename": {
        "description": "Filename to use for the compressed file",
        "type": "string"
      }
    }
  }
}
```
