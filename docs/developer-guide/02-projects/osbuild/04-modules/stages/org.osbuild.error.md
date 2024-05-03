
# org.osbuild.error

**Return an error**

Error stage. Return the given error. Useful for testing, debugging, and
wasting time.

## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "returncode": {
      "description": "What to return code to use",
      "type": "number",
      "default": 255
    }
  }
}
```

## Schema 2

```json
{}
```
