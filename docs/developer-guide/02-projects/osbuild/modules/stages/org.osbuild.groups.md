
# org.osbuild.groups

**Create group accounts**

Create group accounts, optionally assigning them static GIDs.
Runs `groupadd` from the buildhost to create the groups listed in `groups`.
If no `gid` is given, `groupadd` will choose one.
If the specified group name or GID is already in use, this stage will fail.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false,
    "properties": {
      "groups": {
        "type": "object",
        "additionalProperties": false,
        "description": "Keys are group names, values are objects with group info",
        "patternProperties": {
          "^[A-Za-z0-9_][A-Za-z0-9_-]{0,31}$": {
            "type": "object",
            "properties": {
              "gid": {
                "type": "number",
                "description": "GID for this group"
              }
            }
          }
        }
      }
    }
  },
  "devices": {
    "type": "object",
    "additionalProperties": true
  },
  "mounts": {
    "type": "array"
  }
}
```
