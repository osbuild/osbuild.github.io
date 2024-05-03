
# org.osbuild.cpio.out

**Assembles the tree into a CPIO archive.**

Uses the buildhost's `cpio` command, to create an archive
at `filename` with the contents of the input `tree`. If
`append` is `true`, its files will be added to an existing
archive. The default format is `newc` , the "new (SVR4)
portable format", which is also used by `dracut`(8).
Buildhost commands used: `cpio`

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
      "filename"
    ],
    "properties": {
      "filename": {
        "description": "Filename for tar archive",
        "type": "string"
      },
      "append": {
        "type": "boolean",
        "description": "Append to an existing archive.",
        "default": false
      },
      "format": {
        "description": "Archive format to use",
        "type": "string",
        "enum": [
          "bin",
          "odc",
          "newc",
          "crc",
          "tar",
          "ustar"
        ],
        "default": "newc"
      },
      "root-node": {
        "description": "How to handle the root node: include or omit",
        "enum": [
          "include",
          "omit"
        ],
        "default": "include"
      },
      "reproducible": {
        "type": "boolean",
        "description": "Produce device-independent, reproducible archives.",
        "default": true
      },
      "owner": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "user"
        ],
        "properties": {
          "user": {
            "type": "string"
          },
          "group": {
            "type": "string"
          }
        }
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
