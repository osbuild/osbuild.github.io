
# org.osbuild.ostree.pull

**Pull OSTree commits into an existing repo**

This stage pulls one or more commits, provided via
the `commits` input into an existing repository at
a location specified via `repo`.
If the returned a reference via `ref` it will use
that to pull the commits.

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
      "repo"
    ],
    "properties": {
      "repo": {
        "description": "Location of the OSTree repo.",
        "type": "string"
      },
      "remote": {
        "description": "Add the 'remote' to the ref spec",
        "type": "string"
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "commits"
    ],
    "properties": {
      "commits": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
