---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.experimental.ostree.config.meta.json
---
# org.osbuild.experimental.ostree.config
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.experimental.ostree.config.meta.json )
-->

**Change OSTree configuration experimental options**

NOTE: This stage is experimental and subject to changes
Change the configuration for an OSTree repository.
Currently only the following values are supported:
  - `integrity.composefs`
See `ostree.repo-config(5)` for more information.

## Schema 1

```json
{
  "additionalProperties": false,
  "required": [
    "repo"
  ],
  "properties": {
    "repo": {
      "description": "Location of the OSTree repo.",
      "type": "string"
    },
    "config": {
      "type": "object",
      "additionalProperties": false,
      "description": "OSTree configuration groups",
      "properties": {
        "integrity": {
          "type": "object",
          "additionalProperties": false,
          "description": "Options concerning the sysroot",
          "properties": {
            "composefs": {
              "description": "Enable composefs image generation on deploy.",
              "type": "string",
              "enum": [
                "true",
                "false",
                "maybe"
              ]
            }
          }
        }
      }
    }
  }
}
```

## Schema 2

```json
{}
```
