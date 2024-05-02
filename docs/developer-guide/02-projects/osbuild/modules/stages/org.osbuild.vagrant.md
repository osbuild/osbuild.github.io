
# org.osbuild.vagrant

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
    "additionalProperties": false,
    "required": [
      "provider"
    ],
    "properties": {
      "provider": {
        "type": "string",
        "description": "type of Vagrant box",
        "enum": [
          "libvirt"
        ]
      }
    }
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
