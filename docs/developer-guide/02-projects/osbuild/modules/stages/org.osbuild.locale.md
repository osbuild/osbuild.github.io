
# org.osbuild.locale

**Set system language.**

Sets the system language to the given `language`, which must be a valid locale
identifier, like "en_US.UTF-8".
Removes `/etc/locale.conf` and then uses `systemd-firstboot` from the buildhost,
with the `--locale` flag, which will write a new `/etc/locale.conf` in the
target system with `LANG={language}`.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "language"
  ],
  "properties": {
    "language": {
      "type": "string",
      "description": "Locale identifier (like 'en_US.UTF-8') for system LANG"
    }
  }
}
```

## Schema 2

```json
{}
```
