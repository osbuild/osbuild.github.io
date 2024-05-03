
# org.osbuild.kernel-cmdline

**Configure the kernel command-line parameters**

Configures the kernel boot parameters, also known as the kernel
command line.
https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "root_fs_uuid": {
      "description": "UUID of the root filesystem image",
      "type": "string",
      "oneOf": [
        {
          "pattern": "^[0-9A-Za-z]{8}(-[0-9A-Za-z]{4}){3}-[0-9A-Za-z]{12}$",
          "examples": [
            "9c6ae55b-cf88-45b8-84e8-64990759f39d"
          ]
        },
        {
          "pattern": "^[0-9A-Za-z]{4}-[0-9A-Za-z]{4}$",
          "examples": [
            "6699-AFB5"
          ]
        }
      ]
    },
    "kernel_opts": {
      "description": "Additional kernel boot options",
      "type": "string",
      "default": ""
    }
  }
}
```

## Schema 2

```json
{}
```
