
# org.osbuild.ovf

**Create OVF descriptor and manifest**

Generates a OVF descriptor (xml) for a vmdk intended for vSphere.
The OVF descriptor has minimal virtual hardware and no network.
Hardware and network can be configured during or after importing
into vSphere.
Buildhost commands used: `qemu-img`.

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
      "vmdk"
    ],
    "properties": {
      "vmdk": {
        "description": "The vmdk image filename present in the root of the tree",
        "type": "string",
        "pattern": "[a-zA-Z0-9+_.-]+.vmdk"
      }
    }
  }
}
```
