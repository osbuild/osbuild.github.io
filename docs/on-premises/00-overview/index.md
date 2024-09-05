# Overview

Image Builder is available in various distributions:
- [Fedora](https://packages.fedoraproject.org/search?query=osbuild)
- [CentOS Stream](https://www.centos.org/centos-stream/)
- [Red Hat Enterprise Linux (RHEL)](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)

You can see an overview of [which version is released where here](./02-release-overview.md).

![Diagram](./image-builder-on-premises.svg)

`osbuild-composer` is a service for building customized operating system images (currently only Fedora and RHEL). These images can be used with various virtualization software such as [QEMU](https://www.qemu.org/), [VirtualBox](https://www.virtualbox.org/), [VMWare](https://www.vmware.com/) and also with cloud computing providers like [AWS](https://aws.amazon.com/), [Azure](https://azure.microsoft.com/) or [GCP](https://cloud.google.com/).

There are two frontends that you can use to communicate with osbuild-composer:

- **Cockpit Composer**: The web-based management console [Cockpit](https://cockpit-project.org/) comes bundled with a UI extension to build operating system artifacts. See the documentation of Cockpit Composer for information, or consult the Cockpit Guide for help on general Cockpit questions.

- **Command-line Interface**: With composer-cli there exists a linux command-line interface (CLI) to some of the functionality provided by OSBuild. The CLI is part of the Weldr project, a precursor of OSBuild.

This guide contains instructions on installing `osbuild-composer` service and its basic usage.

If you want to fix a typo, or even contribute new content, the sources for this webpage are hosted in [osbuild/osbuild.github.io GitHub repository](https://github.com/osbuild/osbuild.github.io).

For Red Hatters, the internal guides can be found [here](https://osbuild.pages.redhat.com/internal-guides/).
