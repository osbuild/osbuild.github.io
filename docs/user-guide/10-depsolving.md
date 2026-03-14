# Depsolving: Resolving package dependencies

## Introduction

Depsolving is how we often refer to the act of resolving package dependencies. It's a fundamental part of the functionality of any package manager and we rely on it heavily to determine the content (packages) to install for an image. Image Builder itself does not implement its own solver, not in the strict technical sense. Instead, it relies on and interfaces with the package manager of the target distribution. The way it leverages the package manager to resolve the correct set of packages for an image build, however, is not straightforward. This guide describes how Image Builder resolves package dependencies when building images and, more importantly, the reasons it works the way it does.

Throughout this document, when referring to Image Builder, we mean the whole family of projects under the osbuild / Image Builder umbrella (https://github.com/osbuild). When referring to _the depsolver_, we mean the software that interfaces with the package manager in order to resolve the set of packages required for a build.

There is currently only one production-ready depsolver, [osbuild-depsolve-dnf](https://github.com/osbuild/osbuild/blob/main/tools/osbuild-depsolve-dnf). It uses the Python API to DNF (libdnf) to receive depsolve requests and returns lists of packages that satisfy the requested dependencies. A second depsolver for [Pacman](https://wiki.archlinux.org/title/Pacman) (the Arch Linux Package Manager) can be found as part of [osbuild-mpp](https://github.com/osbuild/osbuild/blob/main/tools/osbuild-mpp), however that is not fully featured and is currently only used for development and testing.

## Navigating this document

Most of the sections were written so they can be read independently. You can jump to any section of the document if you already understand (or don't care about) the information in any other section. The list below can help navigate this document to find the information you need.

- [Introduction](#introduction): **What** is this document about?
- [Audience](#audience): **Who** is this document for?
- [Background](#background): **Why** does Image Builder resolve packages and dependencies the way that it does?
- [Problems](#problems): **What** kind of problems did we run into in the past and **how** did we address them?
- [Current state](#current-state): **How** does Image Builder resolve package and dependencies for builds now?

## Audience

If you read the paragraph above and thought this guide is probably unnecessary, since requesting a package manager to resolve the dependencies for a set of packages is rather straightforward, then you're in the right place.

This document is meant both for users of Image Builder in all its forms (osbuild-composer, cockpit-image-builder, image-builder-cli, and the Image Builder service on console.redhat.com) and developers that may contribute to any functionality that deals with package selection.

## A note on examples

When a problem or solution can be demonstrated using real data, depending on the age of this document, the examples used might no longer be valid.

The general format of a depsolve request is as follows:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "<packages to include>"
        ],
        "exclude-specs": [
          "<packages to exclude>"
        ]
      }
    ]
  }
}
```
We will be using requests like this to demonstrate problems and their solutions.

## Background

### Image definitions and layering

Image Builder defines a set of configurations for images, each configuration itself being defined by a combination of distribution, architecture, and image type. These image configurations contain, among other things, a list of base packages. You can view the base package list for each image configuration in the [Image Descriptions](09-image-descriptions/index.md) subsection of the User Guide on this site. These packages (and their dependencies) are what you can expect to find in an image if you build it without specifying any additional configuration, in other words, with an empty Blueprint. Notice how every image configuration (description) in the guide also lists a set of packages to _exclude_. We'll explain why this is necessary later, but this is one of the sources of friction that lead to the complexity of depsolving.

When building an image, [extra packages](01-blueprint-reference.md#packages) can be selected using a [Blueprint](01-blueprint-reference.md). Also many other Blueprint customizations will automatically add a package to the build in order to enable the relevant functionality. For example, specifying an [NTP server in the timezone customization](01-blueprint-reference.md#timezone) will select the `chrony` package, to run the daemon that sets the system clock from the NTP server, and specifying an [OpenSCAP remediation customization](01-blueprint-reference.md#openscap) will select the appropriate OpenSCAP packages, `openscap-scanner` and `openscap-security-guide`, to apply the remediation.

This means that we have two sources of package sets to reconcile: The built-in base package set for an image configuration and the packages selected by the user via the Blueprint. In fact, the Blueprint packages can be further divided into two sets: The explicitly listed packages and the packages selected automatically for customizations. The importance of this separation will become clear later. What's important to know now is that Image Builder often has to reconcile _three_ layers of packages:
1. The base package set defined by the image configuration.
2. The set of packages explicitly selected by the user.
3. The set of packages automatically selected to satisfy the user's customizations.

Of these three, and as mentioned above, the first one also provides a list of packages to _exclude_. Excluding packages is necessary in a few cases. The most common scenario is with package groups or [comps groups](https://dnf5.readthedocs.io/en/latest/misc/comps.7.html). The default level in a group often contains packages we don't need or want in images. Quoting from the linked documentation:

> **default**
>
> These are packages installed together with mandatory packages.
> They can be excluded, f.e. using the `--exclude=PACKAGE-SPEC-N,...` argument.

This is why, looking at the aforementioned [Image Descriptions](09-image-descriptions/index.md) you will see a list of packages to `exclude`, especially when a comps group is included such as `@core`. The group contains many packages that are not desirable or may not make sense in certain environments.

Take the [RHEL-10.1 AMI](09-image-descriptions/00-rhel-10.1/ami.md) for example. It includes the `@core` group and, among other things, excludes `firewalld`. `firewalld` is usually not installed on cloud instances. Instead, it's common for administrators to manage ports and networking through the cloud console or hypervisor.


### Planning and execution

Builds always work in two phases in Image Builder: A planning phase and an execution phase. In the planning phase, all the configurations are collected, content is resolved and locked to specific versions, and the sequence of steps required to produce the desired image is laid out in as much detail as possible. In the execution phase, the build process is carried out to produce the desired artifact.

The output of the planning phase is the osbuild manifest. You can read more about the manifest in [the manifest guide](../developer-guide/02-projects/osbuild/manifest.md) on this site. The execution phase runs osbuild using the manifest as input in order to execute the build process and produce the image. The details of the structure of the manifest, how osbuild works, and the reasons behind the separation into planning and execution phases are all beyond the scope of this guide. However, it's important to note that this separation requires working with the package manager to reconcile the package lists (described in [Image definitions and layering](#image-definitions-and-layering) above), resolve dependencies, and plan package downloading and installation before starting the build process itself.

## Problems

To understand the problems that can arise when you combine the two elements mentioned above, [layering](#image-definitions-and-layering) and [planning/execution separation](#planning-and-execution), and how we might solve them, we'll describe how we addressed these problems in the past. This section provides historical context to better understand the reasons behind the current state of how we resolve package dependencies and the problems it solves.

### Depsolve everything at once

The initial solution is the obvious one: Collect the package names from all three sources (base image definition, explicitly selected user packages, and packages supporting customizations) into one list and ask the package manager to resolve their dependencies. The first problem one encounters in this scenario is a conflict between the base package set's exclude list and the Blueprint packages. Going back to our `@core` and `firewalld` example from [Image definitions and layering](#image-definitions-and-layering), if a user wants to install `firewalld` on a cloud or VM image, the depsolve will fail because a package is listed in both the include and exclude list. In regular usage of dnf, this would be the equivalent of running:
```console
dnf install @core firewalld --exclude=firewalld
```
which will fail to resolve the transaction.
In reality, the request to `osbuild-depsolve-dnf` will look similar to this:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core",
          "firewalld"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      }
    ]
  }
}
```
Passing this as input to the depsolve command (`osbuild-depsolve-dnf`), will result in the following error:
```console
/usr/libexec/osbuild-depsolve-dnf < request.json
All matches were filtered out by exclude filtering for argument: firewalld
error install_specs
MarkingErrors: Error occurred when marking packages for installation: Problems in request:
missing packages: firewalld
{"kind": "MarkingErrors", "reason": "Error occurred when marking packages for installation: Problems in request:\nmissing packages: firewalld"}
```

### Prune excludes based on Blueprint

The first change we made to address the problem above was to remove any package mentioned in the Blueprint from the excluded packages ([osbuild/osbuild-composer PR#1349](https://github.com/osbuild/osbuild-composer/pull/1349))[^FN1]. This, of course, solves the immediate problem, but doesn't solve an adjacent, similar problem, which occurs when a user wants to install a package that _depends_ on an excluded package.

Continuing from our example above, the following request, which would occur if a user lists `fail2ban` in their Blueprint packages, would fail:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core",
          "fail2ban"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      }
    ]
  }
}
```
because `fail2ban` depends on `firewalld`:
```console
/usr/libexec/osbuild-depsolve-dnf < request.json
No match for group package "firewalld"
error depsolve
DepsolveError: There was a problem depsolving @core, fail2ban:
 Problem: conflicting requests
  - package fail2ban-1.1.0-12.fc43.noarch from fedora requires fail2ban-firewalld = 1.1.0-12.fc43, but none of the providers can be installed
  - package fail2ban-1.1.0-15.fc43.noarch from updates requires fail2ban-firewalld = 1.1.0-15.fc43, but none of the providers can be installed
  - package fail2ban-firewalld-1.1.0-12.fc43.noarch from fedora requires firewalld, but none of the providers can be installed
  - package fail2ban-firewalld-1.1.0-15.fc43.noarch from updates requires firewalld, but none of the providers can be installed
  - package firewalld-2.3.1-5.fc43.noarch from fedora is filtered out by exclude filtering
  - package firewalld-2.3.2-1.fc43.noarch from updates is filtered out by exclude filtering
{"kind": "DepsolveError", "reason": "There was a problem depsolving @core, fail2ban: \n Problem: conflicting requests\n  - package fail2ban-1.1.0-12.fc43.noarch from fedora requires fail2ban-firewalld = 1.1.0-12.fc43, but none of the providers can be installed\n  - package fail2ban-1.1.0-15.fc43.noarch from updates requires fail2ban-firewalld = 1.1.0-15.fc43, but none of the providers can be installed\n  - package fail2ban-firewalld-1.1.0-12.fc43.noarch from fedora requires firewalld, but none of the providers can be installed\n  - package fail2ban-firewalld-1.1.0-15.fc43.noarch from updates requires firewalld, but none of the providers can be installed\n  - package firewalld-2.3.1-5.fc43.noarch from fedora is filtered out by exclude filtering\n  - package firewalld-2.3.2-1.fc43.noarch from updates is filtered out by exclude filtering"}
```

### Depsolve Blueprint packages separately

A straightforward way to avoid excluded packages from creating problems with Blueprint packages is to completely separate the two ([osbuild/osbuild-composer `cba720e`](https://github.com/osbuild/osbuild-composer/commit/cba720e63fff2fcc4952794d017c89ba3a0d18da)). Our last example above, where `fail2ban` is selected in the Blueprint, therefore turns into two separate depsolve requests:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      }
    ]
  }
}
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "fail2ban"
        ]
      }
    ]
  }
}
```
The results of these two requests are merged into one package set and installed in a single action. Duplicate packages are not an issue.

However, separating the requests this way can cause other problems. One major issue arises when packages have conditional dependencies. For example, `osbuild` depends on `osbuild-selinux` but only when an `selinux-policy` package is installed or selected in the same transaction. `selinux-policy-targeted` is included in all our base Fedora, CentOS, and RHEL images. The scenario can therefore be demonstrated using these two requests:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core",
          "selinux-policy-targeted"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      }
    ]
  }
}
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "osbuild"
        ]
      }
    ]
  }
}
```

Since the second request depsolves osbuild _in a vacuum_, i.e. it assumes no other packages are on the system, `osbuild-selinux` will not be selected and the package installation will fail during the build process. In other words, the second transaction doesn't _know_ the first one happened, it doesn't consider that the system will already have a state which demands different dependencies.

## Current state

The final major change to how we depsolve package sets for image builds was the switch to multi-transaction depsolving, or Chain dependency solving ([osbuild/osbuild-composer PR#2568](https://github.com/osbuild/osbuild-composer/pull/2568)). More recently, we also changed the way we install packages during the build ([osbuild/images PR#2170](https://github.com/osbuild/images/pull/2170)). We'll describe both of these changes here.

### Multi-transaction (chain) depsolving

Chain dependency solving ([osbuild/osbuild-composer PR#2568](https://github.com/osbuild/osbuild-composer/pull/2568)) is how we refer to a series of depsolve requests where each one builds on the previous. It is used to simulate the process of running a series of `dnf install` calls on a system or in a root tree. A chain depsolve request includes multiple transactions, as follows:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core",
          "selinux-policy-targeted"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      },
      {
        "package-specs": [
          "osbuild"
        ]
      }
    ]
  }
}
```
When given a request like this, the depsolver will:
1. Resolve the dependencies of the first transaction (`@core`, `selinux-policy-targeted`).
2. Mark the packages in the result of the first transaction as _installed_.
3. Resolve the dependencies of the second transaction (`osbuild`), considering the installed packages.

The sequence above can be repeated for an arbitrary number of transactions.
This process is equivalent to the **package selection** part of running the following in an empty root tree (e.g. with `--installroot`):
```console
dnf install @core selinux-policy-targeted --exclude=firewalld
dnf install osbuild
```
It solves the problem described in [Depsolve Blueprint packages separately](#depsolve-blueprint-packages-separately). When the second transaction is resolved, it is asking dnf to return the dependencies of `osbuild` under the assumption that `@core`, `selinux-policy-targeted`, and their dependencies are installed. The result of the second transaction will therefore also include `osbuild-selinux` because `selinux-policy-targeted` is part of the existing installed set.

For a thorough and much more technical investigation into different approaches to multi-transaction depsolving and the behaviour of each in different scenarios, Tomáš Hozza's experiments, which lead to the implementation described here, are available to see on GitHub ([thozza/dnf-api-depsolving](https://github.com/thozza/dnf-api-depsolving)).

### Multi-stage installation

While not directly related to depsolving, it is useful to note that the result of each transaction is installed separately during the build process ([osbuild/images PR#2170](https://github.com/osbuild/images/pull/2170)). This is useful in scenarios where certain packages cannot be installed in an empty root tree because of pre-transaction dependencies. For example, if a package requires `bash` to run its pre-transaction scripts, it will fail to run those scripts unless `bash` is already installed in the root tree before any package in the transaction is installed. By installing each set of packages in sequence, we can prepare a minimal root tree with the first transaction (i.e. install `@core` and its dependencies) and then install user-selected packages on top.

## Current problems

The current system isn't perfect. It is still possible to add packages to the Blueprint that will cause the depsolve to fail.

### Version changes

When resolving dependencies with a set of packages marked as _installed_, described in [Multi-transaction (chain) depsolving](#multi-transaction-chain-depsolving), it is not possible to remove packages from the installed list. It is therefore impossible to upgrade or downgrade a package between transactions. For example, the following request[^FN2] will fail with an error:
```json
{
  "command": "depsolve",
  "arch": "x86_64",
  "module_platform_id": "platform:f43",
  "releasever": "43",
  "cachedir": "rpmmd",
  "arguments": {
    "repos": [
      {
        "id": "fedora",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=fedora-43&arch=x86_64"
      },
      {
        "id": "updates",
        "metalink": "https://mirrors.fedoraproject.org/metalink?repo=updates-released-f43&arch=x86_64"
      },
      {
        "id": "osbuild-copr",
        "baseurl": ["https://download.copr.fedorainfracloud.org/results/@osbuild/osbuild/fedora-43-x86_64/"]
      }
    ],
    "transactions": [
      {
        "package-specs": [
          "@core",
          "selinux-policy-targeted"
        ],
        "exclude-specs": [
          "firewalld"
        ]
      },
      {
        "package-specs": [
          "osbuild"
        ]
      },
      {
        "package-specs": [
          "osbuild-175"
        ]
      }
    ]
  }
}
```

```console
/usr/libexec/osbuild-depsolve-dnf < request.json
No match for group package "firewalld"
error depsolve
DepsolveError: There was a problem depsolving @core, selinux-policy-targeted, osbuild, osbuild-175:
 Problem: conflicting requests
  - cannot install both osbuild-176-1.20260312111708179341.main.9.g8d2a28c5.fc43.x86_64 from osbuild-copr and osbuild-175-1.20260304191526525216.main.1.g290a8234.fc43.x86_64 from osbuild-copr
  - cannot install both osbuild-176-1.20260312111708179341.main.9.g8d2a28c5.fc43.x86_64 from osbuild-copr and osbuild-175-1.20260305191156264394.main.3.gb753651d.fc43.x86_64 from osbuild-copr
  ...
```

Exact versions in the error message may vary but the fundamental issue is that, during the second transaction, the latest version of osbuild is selected (in this case, v176). In the third transaction however, we request osbuild v175 which conflicts with the already selected and marked-as-installed newer version.

In practice this can occur when a user, writing a Blueprint, wants to select a specific version of a package that is already part of the base package set of the image configuration. The first transaction will select the latest version of the package available in the listed repositories and a following transaction will request that an older, specific version of the package be selected.

### Conflicting packages

The problem of conflicting packages is essentially the more general version of the problem of [Version changes](#version-changes). If a package is selected in one transaction, marked as installed, and a package that conflicts with it is selected in a following transaction, the depsolve will fail with a similar error to above.

## Workarounds to current problems

The problem described in [Version changes](#version-changes) can be worked around by configuring osbuild-composer or image-builder to use snapshots of repositories with the desired specific package versions. By using a snapshot, you can ensure that the latest version available in the first transaction is exactly the version you want, preventing the conflict in the second transaction.

The [Managing repositories](../on-premises/01-installation/managing-repositories.md) page on this site contains instructions for using custom repositories with both [Image Builder CLI](../on-premises/01-installation/managing-repositories.md#using-the-image-builder-cli) and [osbuild-composer](../on-premises/01-installation/managing-repositories.md#official-repository-overrides).

---

Links and further reading:

1. distro: remove excluded package if explicitly specified in the bp https://github.com/osbuild/osbuild-composer/pull/1349
    - Pull request implementing the process described in [Prune excludes based on Blueprint](#prune-excludes-based-on-blueprint).
2. rhel85: depsolve blueprint packages separately https://github.com/osbuild/osbuild-composer/commit/cba720e63fff2fcc4952794d017c89ba3a0d18da
    - Commit implementing the process described in [Depsolve blueprint packages separately](#depsolve-blueprint-packages-separately).
3. 📦🔗📦 Introduce chain dependency solving https://github.com/osbuild/osbuild-composer/pull/2568
    - Pull request implementing the process described in [Multi-transaction (chain) depsolving](#multi-transaction-chain-depsolving).
4. distros: merge blueprint & os package set before depsolving instead of after? https://github.com/osbuild/osbuild-composer/issues/2125
    - Discussion of some of the problems described in this document along with proposed solutions. The discussion lead to the implementation of multi-transaction depsolving.
5. thozza/dnf-api-depsolving: Experiment with DNF API depsolving https://github.com/thozza/dnf-api-depsolving
    - Repository with scripts, results, and explanation of various approaches to multi-transaction depsolving.

[^FN1]: Note that prior to Oct 2023, the depsolver was called `dnf-json` and was located in the [osbuild/osbuild-composer](https://github.com/osbuild/osbuild-composer) repository.
[^FN2]: The osbuild-copr repository contains testing and development versions of osbuild RPMs. It is used here because it contains multiple versions of the same package and is convenient for demonstrating the problem of conflicts.
