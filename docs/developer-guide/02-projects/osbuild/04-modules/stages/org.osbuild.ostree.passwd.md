
# org.osbuild.ostree.passwd

**Populate buildroot with /etc/passwd and /etc/group from an OSTree checkout**

Using the OSTree checkout provided as in input, copy /usr/etc/passwd and
/usr/lib/passwd, merge them and store the result into /etc/passwd in the
buildroot. Do the same for /etc/group file.
The use case for this stage is when one wants to preserve UIDs and GIDs
which might change when the system is build from scratch. Creating these
files before any RPMs (or other packages) are installed will prevent changes
in UIDs and GIDs.

## Schema 1

```json
{}
```

## Schema 2

```json
{
  "options": {
    "additionalProperties": false
  },
  "inputs": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "commits"
    ],
    "properties": {
      "commits": {
        "type": "object",
        "additionalProperties": true
      }
    }
  }
}
```
