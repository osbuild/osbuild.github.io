
# org.osbuild.shell.init

**Write systemwide initialization files, executed for login shells.**

Write files to /etc/profile.d with key-value pairs to be set in the shell environment.
Each file written is sourced by the login shell on initialization.

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
      "files": {
        "type": "object",
        "additionalProperties": false,
        "patternProperties": {
          "^[a-zA-Z0-9\\.\\-_]{1,250}$": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "env": {
                "type": "array",
                "description": "Environment variables to set and export on shell init.",
                "minItems": 1,
                "items": {
                  "type": "object",
                  "additionalProperties": false,
                  "required": [
                    "key",
                    "value"
                  ],
                  "properties": {
                    "key": {
                      "type": "string",
                      "pattern": "^[A-Z_][A-Z0-9_]*$"
                    },
                    "value": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
```
