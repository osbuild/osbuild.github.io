
# org.osbuild.rpmkeys.import

**Import public keys into the RPM database**



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
      "keys"
    ],
    "properties": {
      "keys": {
        "type": "object",
        "additionalProperties": true
      }
    }
  },
  "options": {
    "additionalProperties": false
  }
}
```
