
# org.osbuild.buildstamp

**Create a /.buildstamp file describing the system**

This will create a './buildstamp' with the specified parameters.

## Schema 1

```json
{
  "additionalProperties": true,
  "required": [
    "arch",
    "product",
    "version",
    "final"
  ],
  "properties": {
    "arch": {
      "description": "Build architecture.",
      "type": "string"
    },
    "product": {
      "description": "The product name.",
      "type": "string"
    },
    "version": {
      "description": "The version .",
      "type": "string"
    },
    "final": {
      "description": "The product.",
      "type": "boolean"
    },
    "variant": {
      "description": "The variant of the product.",
      "type": "string"
    },
    "bugurl": {
      "description": "The bugurl of the product.",
      "type": "string"
    }
  }
}
```

## Schema 2

```json
{}
```
