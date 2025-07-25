---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.vagrant.meta.json
---
# org.osbuild.vagrant
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.vagrant.meta.json )
-->

**Create a Vagrant box**

Creates the required files for a Vagrant box, intended to be used in with the
org.osbuild.tar stage to tar up the metadata, Vagrantfile and VM image.
This stage requires `cp` and `qemu-img`.
Testing:
vagrant box add --name my-box /path/to/the/new.box
vagrant init my-box
vagrant up

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "anyOf": [
      {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "provider"
        ],
        "properties": {
          "provider": {
            "type": "string",
            "enum": [
              "libvirt"
            ]
          }
        }
      },
      {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "provider",
          "virtualbox"
        ],
        "properties": {
          "provider": {
            "type": "string",
            "enum": [
              "virtualbox"
            ]
          },
          "synced_folders": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "/vagrant": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "type": {
                    "type": "string",
                    "enum": [
                      "vboxfs",
                      "rsync"
                    ]
                  }
                }
              }
            }
          },
          "virtualbox": {
            "type": "object",
            "description": "VirtualBox specific settings",
            "additionalProperties": false,
            "required": [
              "mac_address"
            ],
            "properties": {
              "mac_address": {
                "type": "string",
                "pattern": "^[a-fA-F0-9]{12}$"
              }
            }
          }
        }
      }
    ]
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "image"
    ],
    "properties": {
      "image": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
