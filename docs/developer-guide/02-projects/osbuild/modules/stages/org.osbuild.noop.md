---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.noop.meta.json
---
# org.osbuild.noop
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.noop.meta.json )
-->

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
