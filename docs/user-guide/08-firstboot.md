import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight, { tabValues, tabValuesOnPremiseOnly, tabValuesHostedOnly, tabValuesBootcOnly, tabValuesAll } from '@site/src/components/Highlight';
import '@site/src/css/custom.css';

# Firstboot

For work that cannot run at build time, Image Builder can install **firstboot** jobs that run once when the image boots for the first time (not on later reboots).

Prefer the native [`customizations.firstboot`](./01-blueprint-reference.md#firstboot) customization. The [files + systemd services](#manual-firstboot-with-files-and-services) pattern below remains available as a fallback when you need full control over unit files.

Do not confuse this with [`customizations.ignition.firstboot`](./01-blueprint-reference.md#ignition) (Ignition provisioning URL).

## Native firstboot customization

`[customizations.firstboot]` accepts a list of `scripts`. They run in blueprint order via systemd. By default, if one script fails, later scripts do not run; set `ignore_failure = true` to continue.

### Script types

| `type` | Use | Required fields |
|--------|-----|-----------------|
| `custom` | Shell (or shebang) script | `contents` |
| `satellite` | Run a Satellite-generated registration command | `command` |
| `aap` | Ansible Automation Platform job-template callback | `job_template_url`, `host_config_key` |

Common optional fields on every script:

- `name` — unique name (alphanumeric, dashes, underscores). Custom names must not be `satellite`, `aap`, or start with `custom`.
- `ignore_failure` — continue if this script fails
- `after` / `before` — systemd unit names for ordering (for example `network-online.target`); does not add `Wants=`/`Requires=` by itself
- `cacerts` — PEM certificate strings to enroll before `satellite` or `aap` scripts

Image Builder creates units named `osbuild-first-boot-…`. Avoid colliding with reserved names such as `osbuild-first-boot.service`, `systemd-firstboot.service`, and `ignition-firstboot.service`.

Check per-type support in the [image descriptions](./09-image-descriptions/index.md) (`customizations.firstboot`).

### Custom script

<Tabs values={tabValuesOnPremiseOnly} >

<TabItem value="on-premises" >
```toml
name = "firstboot-custom"

[[customizations.firstboot.scripts]]
type = "custom"
name = "touch-marker"
contents = """
#!/bin/bash
touch /var/lib/firstboot-done
"""
```
</TabItem>
<TabItem value="hosted" >
```
ℹ️ - The hosted console compose API does not expose the full TOML `customizations.firstboot` object. Use on-premises blueprints / image-builder-cli, or product-specific registration fields where available.
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

Strings without a shebang are treated as shell scripts; otherwise the shebang selects the interpreter.

### Satellite registration

Use the registration command produced by your Satellite server. Optional `cacerts` enroll CAs before the command runs.

<Tabs values={tabValuesOnPremiseOnly} >

<TabItem value="on-premises" >
```toml
[[customizations.firstboot.scripts]]
type = "satellite"
command = """
#!/bin/bash
# paste the registration command from Satellite
curl -sS https://satellite.example.com/register | bash
"""
ignore_failure = false
# cacerts = [ """-----BEGIN CERTIFICATE-----
# ...
# -----END CERTIFICATE-----""" ]
```
</TabItem>
<TabItem value="hosted" >
```
ℹ️ - See product documentation for hosted registration options.
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

At most one `satellite` script is allowed in a blueprint.

### Ansible Automation Platform (AAP)

<Tabs values={tabValuesOnPremiseOnly} >

<TabItem value="on-premises" >
```toml
[[customizations.firstboot.scripts]]
type = "aap"
name = "aap"
job_template_url = "https://aap.example.com/api/v2/job_templates/9/callback/"
host_config_key = "your-host-config-key"
ignore_failure = true
# cacerts = [ """-----BEGIN CERTIFICATE-----
# ...
# -----END CERTIFICATE-----""" ]
```
</TabItem>
<TabItem value="hosted" >
```
ℹ️ - Hosted Image Builder may expose AAP registration as a separate compose field (`aap_registration`); prefer that API when building via console.redhat.com.
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

At most one `aap` script is allowed. URL shape depends on AAP version (for example `/api/controller/v2/job_templates/…/callback/` vs `/api/v2/job_templates/…/callback/`).

### Ordering multiple scripts

```toml
[[customizations.firstboot.scripts]]
type = "custom"
name = "script1"
contents = """
#!/bin/bash
touch /tmp/script1_done
"""

[[customizations.firstboot.scripts]]
type = "custom"
name = "script2"
after = ["network-online.target"]
contents = """
#!/bin/bash
touch /tmp/script2_done
"""
```

Relative order of scripts in the blueprint is preserved. `after` / `before` adjust systemd ordering against other units in the same transaction.

---

## Manual firstboot with files and services

If you need a hand-written systemd unit (or the native customization is not available for your frontend), embed a oneshot unit with [`customizations.files`](./01-blueprint-reference.md#files-and-directories) and enable it with [`customizations.services`](./01-blueprint-reference.md#systemd-services).

When creating units this way, avoid these names:

* `osbuild-first-boot.service`
* `systemd-firstboot.service`
* `ignition-firstboot.service`

### Firstboot systemd unit

<Tabs values={tabValues} >

<TabItem value="on-premises" >
```toml
name = "firstboot-single"

[[customizations.files]]
path = "/etc/systemd/system/firstboot-single.service"
data = """
[Service]
Type=oneshot
ExecStart=/usr/bin/echo "This message will be logged into system journal"
ExecStart=/usr/bin/echo "Multiple ExecStart statements are allowed"

[Install]
WantedBy=default.target
"""

[customizations.services]
enabled = ["firstboot-single"]
```
</TabItem>
<TabItem value="hosted">

Pass file payloads as base64 when the content filter would otherwise reject shell-like strings (for example `/bin/sh`).

```json
{
  "customizations": {
    "files": [
      {
        "path": "/etc/systemd/system/firstboot-single.service",
        "data": "W1NlcnZpY2VdClR5cGU9b25lc2hvdApFeGVjU3RhcnQ9L3Vzci9iaW4vZWNobyAiVGhpcyBtZXNzYWdlIHdpbGwgYmUgbG9nZ2VkIGludG8gc3lzdGVtIGpvdXJuYWwiCkV4ZWNTdGFydD0vdXNyL2Jpbi9lY2hvICJNdWx0aXBsZSBFeGVjU3RhcnQgc3RhdGVtZW50cyBhcmUgYWxsb3dlZCIKCltJbnN0YWxsXQpXYW50ZWRCeT1kZWZhdWx0LnRhcmdldAo=",
        "data_encoding": "base64",
        "ensure_parents": true
      }
    ],
    "services": {
      "enabled": ["firstboot-single"]
    }
  }
}
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

### Firstboot systemd unit with Ansible

To run Ansible (or another helper) on first boot, ship the playbook/script and a oneshot unit:

<Tabs values={tabValues} >

<TabItem value="on-premises" >
```toml
name = "firstboot-ansible"

[[packages]]
name = "ansible-core"

[[packages]]
name = "linux-system-roles"

[[customizations.files]]
path = "/usr/local/sbin/custom-first-boot"
mode = "0774"
data = """
#!/usr/bin/ansible-playbook -i localhost

- name: Deploy cockpit
  hosts: localhost
  connection: local

  tasks:
  - name: Cockpit
    import_role:
      name: linux-system-roles.cockpit
    vars:
      cockpit_packages: minimal

  - name: Firewall
    import_role:
      name: linux-system-roles.firewall
    vars:
      firewall:
        service: cockpit
        state: enabled
"""

[[customizations.files]]
path = "/etc/systemd/system/custom-first-boot.service"
data = """
[Unit]
ConditionPathExists=/usr/local/sbin/custom-first-boot
Wants=network-online.target
After=network-online.target
After=osbuild-first-boot.service

[Service]
Type=oneshot
ExecStart=/usr/local/sbin/custom-first-boot
ExecStartPost=mv /usr/local/sbin/custom-first-boot /usr/local/sbin/custom-first-boot-done

[Install]
WantedBy=multi-user.target
"""

[customizations.services]
enabled = ["custom-first-boot"]
```
</TabItem>
<TabItem value="hosted">

Base64-encode each file payload. Enable the unit under `customizations.services`.

```json
{
  "customizations": {
    "packages": ["ansible-core", "linux-system-roles"],
    "files": [
      {
        "path": "/etc/systemd/system/custom-first-boot.service",
        "data": "W1VuaXRdCkNvbmRpdGlvblBhdGhFeGlzdHM9L3Vzci9sb2NhbC9zYmluL2N1c3RvbS1maXJzdC1ib290CldhbnRzPW5ldHdvcmstb25saW5lLnRhcmdldApBZnRlcj1uZXR3b3JrLW9ubGluZS50YXJnZXQKQWZ0ZXI9b3NidWlsZC1maXJzdC1ib290LnNlcnZpY2UKCltTZXJ2aWNlXQpUeXBlPW9uZXNob3QKRXhlY1N0YXJ0PS91c3IvbG9jYWwvc2Jpbi9jdXN0b20tZmlyc3QtYm9vdApFeGVjU3RhcnRQb3N0PW12IC91c3IvbG9jYWwvc2Jpbi9jdXN0b20tZmlyc3QtYm9vdCAvdXNyL2xvY2FsL3NiaW4vY3VzdG9tLWZpcnN0LWJvb3QtZG9uZQoKW0luc3RhbGxdCldhbnRlZEJ5PW11bHRpLXVzZXIudGFyZ2V0Cg==",
        "data_encoding": "base64",
        "ensure_parents": true
      },
      {
        "path": "/usr/local/sbin/custom-first-boot",
        "data": "IyEvdXNyL2Jpbi9hbnNpYmxlLXBsYXlib29rIC1pIGxvY2FsaG9zdAoKLSBuYW1lOiBEZXBsb3kgY29ja3BpdAogIGhvc3RzOiBsb2NhbGhvc3QKICBjb25uZWN0aW9uOiBsb2NhbAoKICB0YXNrczoKICAtIG5hbWU6IENvY2twaXQKICAgIGltcG9ydF9yb2xlOgogICAgICBuYW1lOiBsaW51eC1zeXN0ZW0tcm9sZXMuY29ja3BpdAogICAgdmFyczoKICAgICAgY29ja3BpdF9wYWNrYWdlczogbWluaW1hbAoKICAtIG5hbWU6IEZpcmV3YWxsCiAgICBpbXBvcnRfcm9sZToKICAgICAgbmFtZTogbGludXgtc3lzdGVtLXJvbGVzLmZpcmV3YWxsCiAgICB2YXJzOgogICAgICBmaXJld2FsbDoKICAgICAgICBzZXJ2aWNlOiBjb2NrcGl0CiAgICAgICAgc3RhdGU6IGVuYWJsZWQK",
        "data_encoding": "base64",
        "mode": "0774",
        "ensure_parents": true
      }
    ],
    "services": {
      "enabled": ["custom-first-boot"]
    }
  }
}
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>
