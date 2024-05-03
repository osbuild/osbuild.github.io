
# org.osbuild.livesys

**Configure basic aspects of the `/etc/sysconfig/livesys` file, necessary for
live installations.**



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
      "livesys_session"
    ],
    "properties": {
      "livesys_session": {
        "type": "string",
        "description": "Livesys session to use"
      }
    }
  }
}
```
