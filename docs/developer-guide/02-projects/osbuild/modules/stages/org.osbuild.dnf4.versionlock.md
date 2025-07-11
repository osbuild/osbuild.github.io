---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.versionlock.meta.json
---
# org.osbuild.dnf4.versionlock
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.dnf4.versionlock.meta.json )
-->

**Protect packages from being updated using the DNF versionlock plugin**

This stage writes the versionlock.list file which is read by the DNF 4 versionlock plugin
to lock packages to specific versions.
https://dnf-plugins-core.readthedocs.io/en/latest/versionlock.html

Notes:
 - This stage is only valid for dnf4 and will have no effect on distributions that use dnf5.
 - Items are written as is. This is unlike adding items by calling 'dnf versionlock add',
   which uses the dnf cache to retrieve version information for the listed packages.
 - The stage respects SOURCE_DATE_EPOCH for reproducible builds, which affects the timestamps
   that are included as comments in the file.

## Schema 1

```json
{
  "additionalProperties": false,
  "description": "DNF 4 versionlock plugin.",
  "required": [
    "add"
  ],
  "properties": {
    "add": {
      "type": "array",
      "minitems": 1,
      "description": "Add a versionlock for all available packages matching the spec.",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Schema 2

```json
{}
```
