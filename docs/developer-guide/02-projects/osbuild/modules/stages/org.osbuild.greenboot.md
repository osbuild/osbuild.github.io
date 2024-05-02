
# org.osbuild.greenboot

**Configure greenboot**

Update configuration of greenboot in /etc/greenboot/greenbot.conf.

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
      "description": "greenboot config options",
      "type": "object",
      "properties": {
        "monitor_services": {
          "type": "array",
          "items": {
            "type": "string"
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
