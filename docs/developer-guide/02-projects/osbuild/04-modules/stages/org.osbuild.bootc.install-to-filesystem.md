
# org.osbuild.bootc.install-to-filesystem

**Run bootc install to-filesystem**

Note that this needs the disk.img in the inputs as one continous
devices so that bootupd can install grub to the mbr. It also needs
all relevant mount points for booting (e.g. /boot, /boot/efi) in
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
