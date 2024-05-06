
# org.osbuild.waagent.conf

**Configure the WALinuxAgent.**

The tree must already include /etc/waagent.conf, and it is modified
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
      "description": "WALinuxAgent config options",
      "type": "object",
      "properties": {
        "ResourceDisk.Format": {
          "description": "Enable or disable disk formatting.",
          "type": "boolean"
        },
        "ResourceDisk.EnableSwap": {
          "description": "Enable or disable swap.",
          "type": "boolean"
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
