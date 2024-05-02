
# org.osbuild.dnf4.mark

**Mark packages in the DNF state database.**



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
      "packages": {
        "type": "array",
        "minItems": 1,
        "description": "Packages and their marks.",
        "items": {
          "type": "object",
          "additionalProperties": false,
          "required": [
            "name",
            "mark"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "Package name."
            },
            "mark": {
              "type": "string",
              "enum": [
                "install",
                "group"
              ],
              "description": "Package mark."
            }
          }
        }
      }
    }
  }
}
```
