
# org.osbuild.test

**Enable osbuild Boot Test service**

Creates a Boot Test service that executes the given `script` (sending output to
/dev/vport0p1) then immediately shuts down the system.
Creates `/etc/systemd/system/osbuild-test.service`, and a symlink to it in
`/etc/systemd/system/multi-user.target.wants/`.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "script"
  ],
  "properties": {
    "script": {
      "type": "string",
      "description": "Full path to a script that verifies successful bootup"
    }
  }
}
```

## Schema 2

```json
{}
```
