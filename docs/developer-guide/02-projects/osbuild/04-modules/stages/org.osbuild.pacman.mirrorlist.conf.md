
# org.osbuild.pacman.mirrorlist.conf

**Configure pacman's mirrorlist**



## Schema 1

```json
{
  "additionalProperties": false,
  "properties": {
    "filename": {
      "type": "string",
      "default": "/etc/pacman.d/mirrorlist"
    },
    "mirrors": {
      "type": "array",
      "description": "Mirror locations for pacman",
      "items": {
        "type": "string",
        "examples": [
          "https://archlinux.org/$repo/os/$arch"
        ]
      }
    }
  }
}
```

## Schema 2

```json
{}
```
