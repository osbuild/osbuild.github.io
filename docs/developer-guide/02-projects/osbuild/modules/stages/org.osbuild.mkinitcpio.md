---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.mkinitcpio.meta.json
---
# org.osbuild.mkinitcpio
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.mkinitcpio.meta.json )
-->

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
