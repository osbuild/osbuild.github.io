import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight, { tabValues, tabValuesOnPremiseOnly, tabValuesHostedOnly, tabValuesBootcOnly, tabValuesAll } from '@site/src/components/Highlight';
import '@site/src/css/custom.css';

# Firstboot script

For customizations that cannot be performed during buildtime, a firstboot script is a widely known solution. It is an executable, typically a shell or python script, which is executed during first boot of an image. Note, it is not executed in subsequent reboots of a system.

There are several ways how to achieve this behavior, on Fedora or Red Hat compatible systems the most common way is to utilize systemd.

When creating systemd units, please avoid the following unit names:

* `osbuild-first-boot.service`
* `systemd-firstboot.service`
* `ignition-firstboot.service`

## Firstboot systemd unit

To execute a single command, create a oneshot systemd service unit:

<Tabs values={tabValues} >

<TabItem value="on-premises" >
```toml
name = "firsboot-single"

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

We recommend to pass the files payloads base64-encoded since Akamai content filter can recognize some string patterns like `/bin/sh` as a possible threats.

```json
"customizations": {
    "files": [
      {
        "path": "/etc/systemd/system/firstboot-single.service",
        "data": "bmFtZSA9ICJmaXJzYm9vdC1zaW5nbGUiCgpbW2N1c3RvbWl6YXRpb25zLmZpbGVzXQpwYXRoID0gIi9ldGMvc3lzdGVtZC9zeXN0ZW0vZmlyc3Rib290LXNpbmdsZS5zZXJ2aWNlIgpkYXRhID0gIiIiCltTZXJ2aWNlXQpUeXBlPW9uZXNob3QKRXhlY1N0YXJ0PS91c3IvYmluL2VjaG8gIlRoaXMgbWVzc2FnZSB3aWxsIGJlIGxvZ2dlZCBpbnRvIHN5c3RlbSBqb3VybmFsIgpFeGVjU3RhcnQ9L3Vzci9iaW4vZWNobyAiTXVsdGlwbGUgRXhlY1N0YXJ0IHN0YXRlbWVudHMgYXJlIGFsbG93ZWQiCgpbSW5zdGFsbF0KV2FudGVkQnk9ZGVmYXVsdC50YXJnZXQKIiIiCgpbY3VzdG9taXphdGlvbnMuc2VydmljZXNdCmVuYWJsZWQgPSBbImZpcnN0Ym9vdC1zaW5nbGUiXQo=",
        "data_encoding": "base64",
        "ensure_parents": true
      }
    ]
}
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

## Firstboot systemd unit with Ansible

To execute a shell script or, in this case Ansible, create a helper file together with a systemd service unit:

<Tabs values={tabValues} >

<TabItem value="on-premises" >
```toml
name = "firsboot-ansible"

[[packages]]
name = "ansible-core"

[[packages]]
name = "linux-system-roles"

[[customizations.files]]
path = "/usr/local/sbin/custom-first-boot"
mode = 0774
data = """
#!/usr/bin/ansible-playbook -i localhost,

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

We recommend to pass the files payloads base64-encoded since Akamai content filter can recognize some string patterns like `/bin/sh` as a possible threats.

```json
"customizations": {
    "files": [
      {
        "path": "/etc/systemd/system/custom-first-boot.service",
        "data": "W1VuaXRdCkRlc2NyaXB0aW9uPVJ1biBmaXJzdCBib290IHNjcmlwdApDb25kaXRpb25QYXRoRXhpc3RzPS91c3IvbG9jYWwvc2Jpbi9jdXN0b20tZmlyc3QtYm9vdApXYW50cz1uZXR3b3JrLW9ubGluZS50YXJnZXQKQWZ0ZXI9bmV0d29yay1vbmxpbmUudGFyZ2V0CkFmdGVyPW9zYnVpbGQtZmlyc3QtYm9vdC5zZXJ2aWNlCgpbU2VydmljZV0KVHlwZT1vbmVzaG90CkV4ZWNTdGFydD0vdXNyL2xvY2FsL3NiaW4vY3VzdG9tLWZpcnN0LWJvb3QKRXhlY1N0YXJ0UG9zdD1tdiAvdXNyL2xvY2FsL3NiaW4vY3VzdG9tLWZpcnN0LWJvb3QgL3Vzci9sb2NhbC9zYmluL2N1c3RvbS1maXJzdC1ib290LmRvbmUKCltJbnN0YWxsXQpXYW50ZWRCeT1tdWx0aS11c2VyLnRhcmdldAo=",
	    "data_encoding": "base64",
        "ensure_parents": true
      },
      {
        "path": "/usr/local/sbin/custom-first-boot",
        "data": "IyEvdXNyL2Jpbi9hbnNpYmxlLXBsYXlib29rIC1pIGxvY2FsaG9zdCwKCi0gbmFtZTogRGVwbG95IGNvY2twaXQKICBob3N0czogbG9jYWxob3N0CiAgY29ubmVjdGlvbjogbG9jYWwKCiAgdGFza3M6CiAgLSBuYW1lOiBDb2NrcGl0CiAgICBpbXBvcnRfcm9sZToKICAgICAgbmFtZTogbGludXgtc3lzdGVtLXJvbGVzLmNvY2twaXQKICAgIHZhcnM6CiAgICAgIGNvY2twaXRfcGFja2FnZXM6IG1pbmltYWwKCiAgLSBuYW1lOiBGaXJld2FsbAogICAgaW1wb3J0X3JvbGU6CiAgICAgIG5hbWU6IGxpbnV4LXN5c3RlbS1yb2xlcy5maXJld2FsbAogICAgdmFyczoKICAgICAgZmlyZXdhbGw6CiAgICAgICAgc2VydmljZTogY29ja3BpdAogICAgICAgIHN0YXRlOiBlbmFibGVkCg==",
	    "data_encoding": "base64",
        "mode": "0774",
        "ensure_parents": true
      }
    ]
}
```
</TabItem>
<TabItem value="bootc" >
```
ℹ️ - Currently not supported
```
</TabItem>
</Tabs>

