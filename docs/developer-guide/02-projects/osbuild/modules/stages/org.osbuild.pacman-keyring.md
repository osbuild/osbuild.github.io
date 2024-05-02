
# org.osbuild.pacman-keyring

**Initialize the Arch Linux keyring for Arch based distributions**

WARNING: This stage uses chroot() to run the `archlinux-keyring` binary
from inside the tree.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "keyrings": {
      "type": "array",
      "description": "keyrings",
      "default": "archlinux"
    }
  }
}
```

## Schema 2

```json
{}
```
