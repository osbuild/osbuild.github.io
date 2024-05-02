
# org.osbuild.anaconda

**Configure basic aspects of the anaconda installer**

Create an anaconda configuration file `90-osbuild.conf` in
the folder `/etc/anaconda/conf.d` to configure anaconda.
Currently only the list of enabled kickstart modules is
configurable via the `kickstart-modules` option.

## Schema 1

```json
{
  "additionalProperties": true,
  "properties": {
    "kickstart-modules": {
      "type": "array",
      "description": "Kick start modules to enable",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "activatable-modules": {
      "type": "array",
      "description": "Kick start modules to activate",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "forbidden-modules": {
      "type": "array",
      "description": "Kick start modules to forbid",
      "items": {
        "type": "string"
      },
      "minItems": 1
    },
    "optional-modules": {
      "type": "array",
      "description": "Kick start modules to activate but are allowed to fail",
      "items": {
        "type": "string"
      },
      "minItems": 1
    }
  }
}
```

## Schema 2

```json
{}
```
