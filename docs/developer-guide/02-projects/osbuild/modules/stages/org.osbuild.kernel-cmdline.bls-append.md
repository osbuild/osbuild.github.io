
# org.osbuild.kernel-cmdline.bls-append

**Add kernel command line parameters to a BLS [1] config either in
the tree or in a mount.**

[1] https://freedesktop.org/wiki/Specifications/BootLoaderSpec/

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "required": [
      "kernel_opts"
    ],
    "properties": {
      "kernel_opts": {
        "description": "Additional kernel command line options",
        "type": "array",
        "items": {
          "description": "A single kernel command line option",
          "type": "string"
        }
      },
      "bootpath": {
        "type": "string",
        "description": "The mounted location of the boot filesystem tree where the BLS entries will be under ./loader/entries/*.conf",
        "pattern": "^(mount|tree):///",
        "examples": [
          "tree:///boot",
          "mount:///",
          "mount:///boot"
        ],
        "default": "tree:///boot"
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true
  },
  "mounts": {
    "type": "array"
  }
}
```
