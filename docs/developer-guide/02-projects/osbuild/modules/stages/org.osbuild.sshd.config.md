
# org.osbuild.sshd.config

**Configure the SSH daemon.**

The tree must already include /etc/ssh/sshd_config, and it is modified
in place. Every attempt is made to preserve the structure of the file,
though comments are completely ignored.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "config"
  ],
  "properties": {
    "config": {
      "additionalProperties": false,
      "description": "SSHD config options",
      "type": "object",
      "properties": {
        "PasswordAuthentication": {
          "description": "Enable or disable password authentication.",
          "type": "boolean"
        },
        "ChallengeResponseAuthentication": {
          "description": "Enable or disable challenge/response authentication.",
          "type": "boolean"
        },
        "ClientAliveInterval": {
          "description": "Number of seconds between keep-alive pings. 0 disables it.",
          "type": "integer"
        },
        "PermitRootLogin": {
          "description": "Specifies whether root can log in using ssh.",
          "oneOf": [
            {
              "enum": [
                "prohibit-password",
                "forced-commands-only"
              ],
              "type": "string"
            },
            {
              "type": "boolean"
            }
          ]
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
