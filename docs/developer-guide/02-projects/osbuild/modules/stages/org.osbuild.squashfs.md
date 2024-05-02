
# org.osbuild.squashfs

**Create a squashfs named `filename`.**

Buildhost commands used: `mksquashfs` and any needed compression program.

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
      "compression": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "method"
        ],
        "properties": {
          "method": {
            "enum": [
              "gzip",
              "lz4",
              "xz",
              "zstd"
            ]
          },
          "options": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "bcj": {
                "enum": [
                  "x86",
                  "arm",
                  "armthumb",
                  "powerpc",
                  "sparc",
                  "ia64"
                ]
              }
            }
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
