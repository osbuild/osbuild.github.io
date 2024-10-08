---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.bootc.install-to-filesystem.meta.json
---
# org.osbuild.bootc.install-to-filesystem
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.bootc.install-to-filesystem.meta.json )
-->

**Run bootc install to-filesystem**

Note that this needs the disk.img in the inputs as one continuous
devices so that bootupd can install grub to the mbr. It also needs
all relevant mount points for booting (e.g. `/boot`, `/boot/efi`) in
mounted in the "mounts" path.
Buildhost commands used: bootc

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "images"
    ],
    "properties": {
      "images": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false,
    "properties": {
      "root-ssh-authorized-keys": {
        "description": "array of SSH Public Keys to add to roots authorized_keys",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "kernel-args": {
        "description": "array of additional kernel arguments",
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "target-imgref": {
        "description": "Specify the image to fetch for subsequent updates",
        "type": "string"
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
