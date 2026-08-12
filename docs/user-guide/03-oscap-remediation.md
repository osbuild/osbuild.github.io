# OpenSCAP Remediation

`osbuild-composer` provides the ability to build security hardened images using the [OpenSCAP] tool.
This feature is available for `RHEL 8.7` (& above), `RHEL 9.1` (& above), and `RHEL 10` / CentOS Stream 10.

[OpenSCAP]: https://github.com/OpenSCAP/openscap/blob/maint-1.3/docs/manual/manual.adoc

## OpenSCAP

The `OpenSCAP` tool enables users to scan images for vulnerabilities and then remediate the non-compliances according to
predefined security standards. A limitation of this is that it is not always trivial to fix all issues after the first
boot of the image.

## Build-time Remediation

To solve that limitation, `osbuild-composer` uses the build-time remediation: an [osbuild stage] runs the `OpenSCAP` tool to search for vulnerabilities on the filesystem tree while the image is being built. The `OpenSCAP` tool runs
the standard evaluation for the given profile and applies the remediations to the image. This process enables the user to build a more completely
hardened image compared to running the remediation on a live system.

[osbuild stage]: https://github.com/osbuild/osbuild/blob/main/stages/org.osbuild.oscap.remediation

## OpenSCAP example
```
[customizations.openscap]
profile_id = "xccdf_org.ssgproject.content_profile_standard"
datastream = "/usr/share/xml/scap/ssg/content/ssg-fedora-ds.xml"
```

Blueprint OpenSCAP customizations accept these fields:

- `datastream` — path to the datastream instructions (optional; usually under `/usr/share/xml/scap/ssg/content/`). If omitted, Image Builder picks a distro default.
- `profile_id` — the desired security profile. Accepts both long and short forms, for example `cis` or `xccdf_org.ssgproject.content_profile_cis`.
- `policy_id` — (optional, hosted / Insights) UUID of a compliance policy; see the [Blueprint Reference OpenSCAP section](./01-blueprint-reference.md#openscap).

On the build host (or a system with `scap-security-guide` installed), you can discover profile IDs with:

```
dnf install scap-security-guide
oscap info /usr/share/xml/scap/ssg/content/<security_profile>.xml
```

See the [Supported profiles](./03-oscap-remediation.md#supported-profiles) table for profiles Image Builder allows per distro family.

`osbuild-composer` will then generate the necessary configurations for the `osbuild` stage based on the user
customizations. Additionally, two packages will be added to the image, `openscap-scanner` (the `OpenSCAP` tool)
& `scap-security-guide` (this package contains the remediation instructions).

> :warning: **Note**
The remediation stage assumes that the
`scap-security-guide` will be used for the datastream. This package is installed on the image by default. If another datastream is desired, add the necessary package to the blueprint and specify the path to the datastream in the oscap config.

> :warning: **Note**
Building OpenSCAP hardened images for `ostree` based images not supported.

## Supported profiles

The supported profiles are distro specific. The table below reflects Image Builder **allowlists** (from `image-builder` distro definitions). Column headers use the minors currently documented on this site for image descriptions; the `^` means that major line from the noted GA onward (where OpenSCAP remediations apply).

|                             | Fedora | RHEL 8.10^ | CS9/RHEL 9.8^ | CS10/RHEL 10.2^ |
|-----------------------------|:------:|:----------:|:-------------:|:---------------:|
| ANSSI-BP-028 (enhanced)     |        |     x      |       x       |        x        |
| ANSSI-BP-028 (high)         |        |     x      |       x       |        x        |
| ANSSI-BP-028 (intermediary) |        |     x      |       x       |        x        |
| ANSSI-BP-028 (minimal)      |        |     x      |       x       |        x        |
| BSI                         |        |            |       x       |        x        |
| CCN (advanced)              |        |            |       x       |                 |
| CCN (basic)                 |        |            |       x       |                 |
| CCN (intermediate)          |        |            |       x       |                 |
| CIS Level 2 - Server        |        |     x      |       x       |        x        |
| CIS Level 1 - Server        |        |     x      |       x       |        x        |
| CIS Level 1 - Workstation   |        |     x      |       x       |        x        |
| CIS Level 2 - Workstation   |        |     x      |       x       |        x        |
| CUI                         |        |     x      |       x       |                 |
| Essential Eight             |        |     x      |       x       |        x        |
| HIPAA                       |        |     x      |       x       |        x        |
| ISM Official                |        |     x      |       x       |        x        |
| ISM Official (Secret)       |        |            |               |        x        |
| ISM Official (Top Secret)   |        |            |               |        x        |
| OSPP                        |   x    |     x      |       x       |        x        |
| PCI-DSS                     |   x    |     x      |       x       |        x        |
| Standard                    |   x    |            |               |                 |
| DISA STIG                   |        |     x      |       x       |        x        |
| DISA STIG with GUI          |        |     x      |       x       |        x        |
