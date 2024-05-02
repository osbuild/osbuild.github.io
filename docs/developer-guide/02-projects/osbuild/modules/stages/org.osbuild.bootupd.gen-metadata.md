
# org.osbuild.bootupd.gen-metadata

**Transforms /usr/lib/ostree-boot into a bootupd-compatible update payload.**

Scrapes metadata (e.g. RPM versions) about shim/grub and puts them along with their component files in
`/usr/lib/bootupd/updates/`.
Notes:
  - Requires 'chroot' in the buildroot.
  - Runs the 'bootupctl' binary from the image in the chroot.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false
  }
}
```
