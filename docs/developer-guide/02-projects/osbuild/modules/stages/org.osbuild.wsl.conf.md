
# org.osbuild.wsl.conf

**Configure advanced settings in Windows Subsystem for Linux.**

The stage configures the WSL settings on the system.

## Schema 1

```json
{
  "description": "WSL configuration.",
  "additionalProperties": false,
  "minProperties": 1,
  "properties": {
    "boot": {
      "type": "object",
      "description": "Configures the [boot] section.",
      "additionalProperties": false,
      "minProperties": 1,
      "properties": {
        "systemd": {
          "type": "boolean",
          "default": false,
          "description": "Enable systemd."
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
