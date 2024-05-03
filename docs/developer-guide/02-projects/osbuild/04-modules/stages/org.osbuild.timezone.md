
# org.osbuild.timezone

**Set system timezone**

Set the system's timezone to `zone`, which should be a valid time zone
identifier from the tz database - like "America/New York" or "Europe/Berlin".
Removes `/etc/localtime`, then runs the host's `systemd-firstboot` binary with
the `--timezone` option, which will re-create `/etc/localtime`.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "zone"
  ],
  "properties": {
    "zone": {
      "type": "string",
      "description": "Timezone identifier (from tzdb/zoneinfo)"
    }
  }
}
```

## Schema 2

```json
{}
```
