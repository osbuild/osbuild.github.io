# Installation and configuration

To get started with `image-builder` CLI on your local machine, you can install the CLI interface or the Web UI, which is part of Cockpit project. 

## CLI interface

For CLI only, enter the following command to install required packages:

```
$ sudo dnf install image-builder osbuild osbuild-depsolve-dnf
```

To use image-builder CLI without sudo privileges, add your user to the `weldr` group:

```
$ sudo usermod -a -G weldr <user>
$ newgrp weldr
```

To list all available options, enter the following command:

```
$ image-builder list
```

### Standard build

To build a basic QCOW2 image for CentOS Stream 9:

```
$ sudo image-builder build qcow2 --distro centos-9
```

### Custom build

To customize the image, create a blueprint:

```
$ sudo vim centos-9-custom.toml
```

In the `centos-9-custom.toml` file, specify the customizations you want to add. The following example specifies a username, password, and group to preconfigure:

```
[[customizations.user]]
name = "admin"
password = "$6cnwJk44gH" 
groups = ["wheel"]
```

Use the blueprint to build the image: 

```
$ sudo image-builder build qcow2 --distro centos-9 --blueprint ./centos-9-custom.toml
```


## Web UI

If you prefer the Web UI interface, known as Cockpit image builder, install the following package:

```
$ sudo dnf install cockpit-image-builder
```

and enable `cockpit` and `osbuild-composer` services:

```
$ sudo systemctl enable --now osbuild-composer.socket
$ sudo systemctl enable --now cockpit.socket
```

### Web UI before RHEL 10, CentOS 10 and fedora 42

Cockpit composer is the old web UI, still available on RHEL 9 and CentOS 9:

```
$ sudo dnf install cockpit-composer
```

and enable `cockpit` and `osbuild-composer` services:

```
$ sudo systemctl enable --now osbuild-composer.socket
$ sudo systemctl enable --now cockpit.socket
```

