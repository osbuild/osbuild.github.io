
# org.osbuild.pacman

**Verify, and install pacman packages**

`packages` is an array of objects representing pacman packages. Each package is
identified by its checksums. Specifically, the content hash of the package.
This stage will fail if any of the packages can't be found.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "type": "object",
    "additionalProperties": false,
    "properties": {}
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "packages"
    ],
    "properties": {
      "packages": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
