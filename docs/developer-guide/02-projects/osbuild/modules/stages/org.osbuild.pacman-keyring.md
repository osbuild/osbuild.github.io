---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.pacman-keyring.meta.json
---
# org.osbuild.pacman-keyring
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.pacman-keyring.meta.json )
-->

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
