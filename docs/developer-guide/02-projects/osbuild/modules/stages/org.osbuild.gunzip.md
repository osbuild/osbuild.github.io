
# org.osbuild.gunzip

**Extract a gzipped file**

Buildhost commands used: `gunzip`.

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
      "path"
    ],
    "properties": {
      "path": {
        "description": "Unzip here.",
        "type": "string"
      }
    }
  }
}
```
