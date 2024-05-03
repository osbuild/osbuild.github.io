
# org.osbuild.authconfig

**Configure authentication sources using authconfig.**

Applies the default settings. Backups are cleared.
Notes:
  - Requires 'chroot' in the buildroot.
  - Runs the 'authconfig' binary from the image in the chroot.

## Schema 1

```json
{
  "additionalProperties": false,
  "description": "Configure authentication sources."
}
```

## Schema 2

```json
{}
```
