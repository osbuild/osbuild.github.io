
# org.osbuild.update-crypto-policies

**Sets the policy applicable for the various cryptographic back-ends,
such as SSL/TLS libraries.**

This stage calls `update-crypto-policies` to set the system's
cryptographic policy.
Notes:
  - Requires 'chroot' in the buildroot.
  - Runs the 'update-crypto-policies' script from the image in the chroot.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "description": "Sets the current policy and overwrites the config file",
    "required": [
      "policy"
    ],
    "properties": {
      "policy": {
        "type": "string",
        "minLength": 1,
        "description": "The policy to be applied."
      }
    }
  }
}
```
