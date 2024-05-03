
# org.osbuild.lvm2.metadata

**Set LVM2 volume group metadata**

This stage allows you to modify the LVM2 volume group
metadata. This data describes various properties about
the volume group, physical volume and logical volumes.
Most importantly it contains the volume group name, so
this stage can be used to rename the volume group.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "devices": {
    "type": "object",
    "additionalProperties": true,
    "required": [
      "device"
    ],
    "properties": {
      "device": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": true,
    "required": [
      "vg_name"
    ],
    "properties": {
      "creation_host": {
        "type": "string",
        "minLength": 1,
        "maxLength": 255
      },
      "creation_time": {
        "type": "string",
        "pattern": "[0-9]+",
        "description": "Creation time (uint64 represented as string)"
      },
      "description": {
        "type": "string",
        "minLength": 1
      },
      "vg_name": {
        "type": "string",
        "pattern": "[a-zA-Z0-9+_.][a-zA-Z0-9+_.-]*"
      }
    }
  }
}
```
