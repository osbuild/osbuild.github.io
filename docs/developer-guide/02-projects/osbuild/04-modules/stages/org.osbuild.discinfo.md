
# org.osbuild.discinfo

**Create a `.discinfo` file describing disk**

This will create a `.discinfo` file with the specified parameters.

## Schema 1

```json
{
  "additionalProperties": true,
  "required": [
    "basearch",
    "release"
  ],
  "properties": {
    "basearch": {
      "description": "Build architecture.",
      "type": "string"
    },
    "release": {
      "description": "The product name.",
      "type": "string"
    }
  }
}
```

## Schema 2

```json
{}
```
