
# org.osbuild.selinux.config

**Configure the SELinux state on the system.**

The stage configures the SELinux state on the system in /etc/selinux/config.
The policy enforcement state and active policy type can be configured.

## Schema 1

```json
{
  "additionalProperties": false,
  "description": "SELinux state configuration.",
  "properties": {
    "state": {
      "type": "string",
      "description": "The active policy enforcement state.",
      "enum": [
        "enforcing",
        "permissive",
        "disabled"
      ]
    },
    "type": {
      "type": "string",
      "description": "The active policy type.",
      "enum": [
        "targeted",
        "minimum",
        "mls"
      ]
    }
  }
}
```

## Schema 2

```json
{}
```
