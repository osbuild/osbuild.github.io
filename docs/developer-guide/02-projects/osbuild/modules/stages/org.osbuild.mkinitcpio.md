
# org.osbuild.mkinitcpio

**Run mkinitcpio for Arch based distributions**

WARNING: This stage uses chroot() to run the `mkinitcpio` binary
from inside the tree.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "preset": {
      "type": "string",
      "description": "mkinitcpio preset file to use",
      "default": "linux"
    }
  }
}
```

## Schema 2

```json
{}
```
