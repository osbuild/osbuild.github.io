
# org.osbuild.pacman.conf

**Configure pacman**



## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "architecture": {
      "type": "string",
      "description": "pacman architecture",
      "default": "x86_64"
    },
    "repositories": {
      "type": "array",
      "items": {
        "type": "object",
        "oneOf": [
          {
            "required": [
              "name",
              "server"
            ]
          },
          {
            "required": [
              "name",
              "include"
            ]
          }
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "siglevels": {
            "type": "array",
            "minLength": 1,
            "maxLength": 2,
            "items": {
              "type": "string",
              "enum": [
                "Required",
                "Optional",
                "Never",
                "TrustAll",
                "TrustedOnly"
              ]
            }
          },
          "server": {
            "type": "string"
          },
          "include": {
            "type": "string",
            "default": "/etc/pacman.d/mirrorlist"
          }
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
