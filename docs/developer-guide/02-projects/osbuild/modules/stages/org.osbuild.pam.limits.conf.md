---
custom_edit_url: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.pam.limits.conf.meta.json
---
# org.osbuild.pam.limits.conf
<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_osbuild_modules.py` )
[//]: # ( Rather change the source of this: https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.pam.limits.conf.meta.json )
-->

**Create pam_limits module configuration.**

This stage creates a pam_limits module configuration file with the given name in
/etc/security/limits.d. Provided list of configuration directives is written
as separate lines into the configuration file. At least one configuration
directive must be specified.

## Schema 1

```json
{
  "definitions": {
    "configuration": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "domain",
        "type",
        "item",
        "value"
      ],
      "description": "pam_limits module configuration directive representing one line in the configuration.",
      "properties": {
        "domain": {
          "type": "string",
          "description": "Domain to which the limit applies. E.g. username, groupname, etc."
        },
        "type": {
          "type": "string",
          "description": "Type of the limit.",
          "enum": [
            "hard",
            "soft",
            "-"
          ]
        },
        "item": {
          "type": "string",
          "description": "The resource type, which is being limited.",
          "enum": [
            "core",
            "data",
            "fsize",
            "memlock",
            "nofile",
            "rss",
            "stack",
            "cpu",
            "nproc",
            "as",
            "maxlogins",
            "maxsyslogins",
            "nonewprivs",
            "priority",
            "locks",
            "sigpending",
            "msgqueue",
            "nice",
            "rtprio"
          ]
        },
        "value": {
          "oneOf": [
            {
              "type": "string",
              "enum": [
                "unlimited",
                "infinity"
              ]
            },
            {
              "type": "integer"
            }
          ],
          "description": "The limit value."
        }
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "filename",
    "config"
  ],
  "properties": {
    "filename": {
      "type": "string",
      "description": "Name of the pam_limits module configuration file to create.",
      "pattern": "^[\\w.-]{1,250}\\.conf$"
    },
    "config": {
      "additionalProperties": false,
      "type": "array",
      "description": "List of configuration directives written into the configuration file.",
      "minItems": 1,
      "items": {
        "$ref": "#/definitions/configuration"
      }
    }
  }
}
```

## Schema 2

```json
{}
```
