
# org.osbuild.debug-shell

**Set up an early root shell on a certain tty**

Creates a systemd unit file at /etc/systemd/system/osbuild-debug-shell.service
which starts an early-boot root shell on the given `tty`.
Also symlinks the service file into /etc/systemd/system/sysinit.target.wants/.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "tty"
  ],
  "properties": {
    "tty": {
      "type": "string",
      "description": "Absolute path of the tty device to start a root shell on."
    }
  }
}
```

## Schema 2

```json
{}
```
