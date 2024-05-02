
# org.osbuild.ostree.os-init

**Initialize a new stateroot for a new OS**

Initializes a new stateroot (see \[1\]) for the OS with the
name `osname`.
\[1\] https://ostree.readthedocs.io/en/latest/manual/deployment/

## Schema 1

```json
{
  "required": [
    "osname"
  ],
  "properties": {
    "osname": {
      "description": "Name of the stateroot to be used in the deployment",
      "type": "string"
    }
  }
}
```

## Schema 2

```json
{}
```
