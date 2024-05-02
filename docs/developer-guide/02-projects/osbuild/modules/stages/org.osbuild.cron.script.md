
# org.osbuild.cron.script

**Run a script at regular intervals.**

Execute a script at regular intervals. This uses the cron drop-in
directories in etc, which correspond to the supported intervals:
  `cron.hourly/`, `cron.daily/`, `cron.weekly/`, `cron.monthly/`
NB: Does itself not create the directories so they must be created
via the package that provides the facility, like `cronie` or on
older systems `crontabs`.

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
      "interval",
      "filename"
    ],
    "oneOf": [
      {
        "required": [
          "simple"
        ]
      }
    ],
    "properties": {
      "interval": {
        "type": "string",
        "enum": [
          "hourly",
          "daily",
          "weekly",
          "monthly"
        ]
      },
      "filename": {
        "type": "string",
        "description": "Name of the cron script",
        "pattern": "^[\\w.-]{1,255}$"
      },
      "simple": {
        "type": "object",
        "description": "A simple command to run.",
        "required": [
          "command"
        ],
        "properties": {
          "comment": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "command": {
            "type": "string"
          }
        }
      }
    }
  }
}
```
