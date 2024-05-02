
# org.osbuild.rhsm.facts

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
