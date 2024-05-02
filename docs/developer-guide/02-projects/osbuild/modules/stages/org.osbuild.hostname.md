
# org.osbuild.hostname

**Set system hostname**

Sets system hostname.
Deletes /etc/hostname if present, then runs `systemd-firstboot` from the
buildhost with `--hostname={hostname}`, which checks the validity of the
hostname and writes it to /etc/hostname.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "hostname"
  ],
  "properties": {
    "hostname": {
      "type": "string",
      "description": "hostname for the target system"
    }
  }
}
```

## Schema 2

```json
{}
```
