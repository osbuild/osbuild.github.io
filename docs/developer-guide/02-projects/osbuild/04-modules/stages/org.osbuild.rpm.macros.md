
# org.osbuild.rpm.macros

**Persistently set RPM macros**

Stage to be able to set a selection of RPM macros.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "macros",
    "filename"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "description": "Path to the macro file."
    },
    "macros": {
      "additionalProperties": false,
      "type": "object",
      "description": "macros to configure",
      "minProperties": 1,
      "properties": {
        "_install_langs": {
          "description": "Only install the specified locales.",
          "type": "array",
          "minItems": 1,
          "uniqueItems": true,
          "items": {
            "type": "string"
          }
        },
        "_dbpath": {
          "description": "Specify the rpm database path.",
          "type": "string"
        }
      }
    }
  }
}
```

## Schema 2

```json
{}
```
