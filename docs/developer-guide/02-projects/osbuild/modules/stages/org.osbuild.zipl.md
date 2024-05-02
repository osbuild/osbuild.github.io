
# org.osbuild.zipl

**Configure the z Initial Program Loader (zipl)**

Configures `zipl` with a minimal config so it can be used in
the assembler to write the bootmap and bootloader code.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "timeout": {
      "description": "Boot loader timeout value",
      "type": "number"
    }
  }
}
```

## Schema 2

```json
{}
```
