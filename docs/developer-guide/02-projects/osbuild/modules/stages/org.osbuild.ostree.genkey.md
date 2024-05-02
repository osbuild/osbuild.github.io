
# org.osbuild.ostree.genkey

**Generate ed25519 public/private keypair in format used by `ostree sign`.**

This is used with the org.osbuild.ostree.sign stage, and these can be
used with composefs to tie an initrd and ostree commit together. See
https://ostreedev.github.io/ostree/composefs/#signatures for details
of how this works.
Notes:
  - Requires 'openssl' in the buildroot.

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
      "publickey",
      "secretkey"
    ],
    "properties": {
      "publickey": {
        "description": "Path of generated public key",
        "type": "string",
        "pattern": "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$"
      },
      "secretkey": {
        "description": "Path of generated secret key",
        "type": "string",
        "pattern": "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$"
      }
    }
  }
}
```
