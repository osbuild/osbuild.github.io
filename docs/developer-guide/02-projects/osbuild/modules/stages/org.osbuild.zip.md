
# org.osbuild.zip

**Assembles the tree into a zip archive named `filename`**

Buildhost commands used: `zip`

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
        "description": "Filename for zip archive",
        "type": "string",
        "minLength": 1
      },
      "include": {
        "type": "array",
        "items": {
          "type": "string",
          "description": "If specified, the archive will only contain the specified paths in the specified order. Expects glob style expressions that is passed directly to the `zip` command."
        }
      },
      "level": {
        "description": "Compression level",
        "type": "integer",
        "minimum": 0,
        "maximum": 9,
        "default": 6
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "tree"
    ],
    "properties": {
      "tree": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
