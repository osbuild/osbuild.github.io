
# org.osbuild.fdo

**FDO initial DIUN certificates**

FDO stage to write down the initial DIUN pub key root certificates
to be read by the manufacturer client
This will create a '/fdo_diun_root_certs.pem' with content
specified via the `rootcerts` input.

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
      "rootcerts"
    ],
    "properties": {
      "rootcerts": {
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
