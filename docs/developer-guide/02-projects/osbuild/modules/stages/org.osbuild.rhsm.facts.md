---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.rhsm.facts.meta.json
---
# org.osbuild.rhsm.facts
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.rhsm.facts.meta.json )
-->

**This stage allows storing artifact-properties of the Red Hat Subscription
Manager (rhsm-facts) in the built image.**



## Schema 1

```json
{
  "properties": {
    "facts": {
      "type": "object",
      "description": "Map of Red Hat Subscription Manager facts.",
      "additionalProperties": true
    }
  }
}
```

## Schema 2

```json
{}
```
