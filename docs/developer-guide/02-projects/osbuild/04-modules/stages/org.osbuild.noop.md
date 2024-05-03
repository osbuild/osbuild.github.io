
# org.osbuild.noop

**Do Nothing**

No-op stage. Prints a JSON dump of the options passed into this stage and
leaves the tree untouched. Useful for testing, debugging, and wasting time.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": true
  },
  "devices": {
    "additionalProperties": true
  },
  "inputs": {
    "additionalProperties": true
  },
  "mounts": {
    "additionalProperties": true
  }
}
```
