
# org.osbuild.ostree.commit

**Assemble a file system tree into a ostree commit**

Needs a file system tree that is already conforming to the ostree
system layout[1], specified via the `tree` input and commits it
to a repository. The repository must have been created at `/repo`.
Additional metadata is stored in `/compose.json` which contains
the commit compose information. This is also returned via the
metadata API to osbuild.
[1] https://ostree.readthedocs.io/en/stable/manual/adapting-existing/

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
      "ref"
    ],
    "properties": {
      "ref": {
        "description": "OStree ref to create for the commit",
        "type": "string",
        "default": ""
      },
      "os_version": {
        "description": "Set the version of the OS as commit metadata",
        "type": "string"
      },
      "parent": {
        "description": "commit id of the parent commit",
        "type": "string"
      },
      "selinux-label-version": {
        "description": "Set selinux label version",
        "type": "integer",
        "default": 0
      }
    }
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "tree"
    ],
    "properties": {
      "tree": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
