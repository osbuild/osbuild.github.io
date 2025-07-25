---
custom_edit_url: https://github.com/osbuild/osbuild.github.io/blob/main/scripts/pull_image_descriptions.py
---

# image-installer

<!--
[//]: # ( DO NOT MODIFY THIS FILE! )
[//]: # ( This content is generated by `scripts/pull_image_descriptions.py` )
[//]: # ( Generated on: 2025-07-26 07:25:01 UTC )
-->

Image description for **image-installer** on **AlmaLinux OS 10.0**.

The descriptions below describe the base image version, that can be further customized by the user using the [Blueprint customizations](../../01-blueprint-reference.md).

:::note[Package sets]

Each image description contains a list of base packages that make up the image. This list is dependency-resolved using the distribution's package manager and subsequently installed into the image. This means that the list of actually installed packages depends on the available RPM repositories and the dependencies of the packages listed in the image's base package set.

:::

:::warning[Do not rely on the image description format]

The format of the image description is not guaranteed to be stable. It is published for informational purposes only.

:::

## Architectures

- [aarch64](#aarch64)
- [x86_64](#x86-64)

## aarch64 {#aarch64}

```yaml
distro: almalinux-10.0
type: image-installer
arch: aarch64
os_version: "10.0"
bootmode: uefi
partition_type: ""
default_filename: installer.iso
build_pipelines:
  - build
payload_pipelines:
  - anaconda-tree
  - efiboot-tree
  - os
  - bootiso-tree
  - bootiso
packages:
  anaconda-tree:
    include:
      - '@hardware-support'
      - alsa-firmware
      - alsa-tools-firmware
      - anaconda
      - anaconda-dracut
      - anaconda-install-img-deps
      - anaconda-widgets
      - audit
      - bind-utils
      - bzip2
      - cryptsetup
      - curl
      - dbus-x11
      - default-fonts-core-sans
      - default-fonts-other-sans
      - dejavu-sans-fonts
      - dejavu-sans-mono-fonts
      - device-mapper-persistent-data
      - dmidecode
      - dnf
      - dracut-config-generic
      - dracut-network
      - efibootmgr
      - ethtool
      - fcoe-utils
      - ftp
      - gdb-gdbserver
      - glibc-all-langpacks
      - gnome-kiosk
      - google-noto-sans-cjk-ttc-fonts
      - grub2-efi-aa64
      - grub2-efi-aa64-cdboot
      - grub2-tools
      - grub2-tools-extra
      - grub2-tools-minimal
      - grubby
      - gsettings-desktop-schemas
      - hdparm
      - hexedit
      - hostname
      - initscripts
      - ipmitool
      - iwl100-firmware
      - iwl1000-firmware
      - iwl105-firmware
      - iwl135-firmware
      - iwl2000-firmware
      - iwl2030-firmware
      - iwl3160-firmware
      - iwl5000-firmware
      - iwl5150-firmware
      - iwl6000g2a-firmware
      - iwl6000g2b-firmware
      - iwl6050-firmware
      - iwl7260-firmware
      - jomolhari-fonts
      - kbd
      - kbd-misc
      - kdump-anaconda-addon
      - kernel
      - less
      - libblockdev-lvm-dbus
      - libibverbs
      - librsvg2
      - linux-firmware
      - lldpad
      - lsof
      - madan-fonts
      - mdadm
      - mt-st
      - mtr
      - net-tools
      - nfs-utils
      - nm-connection-editor
      - nmap-ncat
      - nss-softokn
      - nss-tools
      - openssh-clients
      - openssh-server
      - ostree
      - pciutils
      - perl-interpreter
      - pigz
      - plymouth
      - prefixdevname
      - python3-pyatspi
      - rdma-core
      - redhat-release-eula
      - rng-tools
      - rpcbind
      - rpm-ostree
      - rsync
      - rsyslog
      - selinux-policy-targeted
      - sg3_utils
      - shim-aa64
      - sil-padauk-fonts
      - smartmontools
      - spice-vdagent
      - strace
      - systemd
      - tar
      - udisks2
      - udisks2-iscsi
      - usbutils
      - vim-minimal
      - volume_key
      - wget
      - xfsdump
      - xfsprogs
      - xz
    exclude: []
  build:
    include:
      - coreutils
      - efibootmgr
      - glibc
      - grub2-efi-aa64
      - grub2-efi-aa64-cdboot
      - grub2-tools
      - grub2-tools-extra
      - grub2-tools-minimal
      - isomd5sum
      - lorax-templates-generic
      - platform-python
      - policycoreutils
      - python3
      - rpm
      - selinux-policy-targeted
      - shadow-utils
      - shim-aa64
      - squashfs-tools
      - systemd
      - tar
      - xorriso
      - xz
    exclude: []
  os:
    include:
      - '@core'
      - chrony
      - cockpit-system
      - cockpit-ws
      - dnf
      - dnf-utils
      - dosfstools
      - dracut-config-generic
      - e2fsprogs
      - efibootmgr
      - firewalld
      - glibc
      - grub2-efi-aa64
      - grub2-tools
      - iwl100-firmware
      - iwl1000-firmware
      - iwl105-firmware
      - iwl135-firmware
      - iwl2000-firmware
      - iwl2030-firmware
      - iwl3160-firmware
      - iwl5000-firmware
      - iwl5150-firmware
      - iwl6000g2a-firmware
      - iwl6000g2b-firmware
      - iwl6050-firmware
      - iwl7260-firmware
      - kernel
      - lorax-templates-generic
      - lorax-templates-rhel
      - lvm2
      - net-tools
      - nfs-utils
      - oddjob
      - oddjob-mkhomedir
      - policycoreutils
      - psmisc
      - python3-iniparse
      - python3-jsonschema
      - qemu-guest-agent
      - qemu-img
      - redhat-release
      - redhat-release-eula
      - rsync
      - selinux-policy-targeted
      - shim-aa64
      - systemd
      - tar
      - tcpdump
      - tuned
      - xfsprogs
      - xz
    exclude:
      - dracut-config-rescue
```

## x86_64 {#x86-64}

```yaml
distro: almalinux-10.0
type: image-installer
arch: x86_64
os_version: "10.0"
bootmode: hybrid
partition_type: ""
default_filename: installer.iso
build_pipelines:
  - build
payload_pipelines:
  - anaconda-tree
  - efiboot-tree
  - os
  - bootiso-tree
  - bootiso
packages:
  anaconda-tree:
    include:
      - '@hardware-support'
      - alsa-firmware
      - alsa-tools-firmware
      - anaconda
      - anaconda-dracut
      - anaconda-install-img-deps
      - anaconda-widgets
      - audit
      - bind-utils
      - biosdevname
      - bzip2
      - cryptsetup
      - curl
      - dbus-x11
      - default-fonts-core-sans
      - default-fonts-other-sans
      - dejavu-sans-fonts
      - dejavu-sans-mono-fonts
      - device-mapper-persistent-data
      - dmidecode
      - dnf
      - dracut-config-generic
      - dracut-network
      - efibootmgr
      - ethtool
      - fcoe-utils
      - ftp
      - gdb-gdbserver
      - glibc-all-langpacks
      - gnome-kiosk
      - google-noto-sans-cjk-ttc-fonts
      - grub2-efi-x64
      - grub2-efi-x64-cdboot
      - grub2-pc
      - grub2-pc-modules
      - grub2-tools
      - grub2-tools-efi
      - grub2-tools-extra
      - grub2-tools-minimal
      - grubby
      - gsettings-desktop-schemas
      - hdparm
      - hexedit
      - hostname
      - initscripts
      - ipmitool
      - iwl100-firmware
      - iwl1000-firmware
      - iwl105-firmware
      - iwl135-firmware
      - iwl2000-firmware
      - iwl2030-firmware
      - iwl3160-firmware
      - iwl5000-firmware
      - iwl5150-firmware
      - iwl6000g2a-firmware
      - iwl6000g2b-firmware
      - iwl6050-firmware
      - iwl7260-firmware
      - jomolhari-fonts
      - kbd
      - kbd-misc
      - kdump-anaconda-addon
      - kernel
      - less
      - libblockdev-lvm-dbus
      - libibverbs
      - librsvg2
      - linux-firmware
      - lldpad
      - lsof
      - madan-fonts
      - mdadm
      - memtest86+
      - mt-st
      - mtr
      - net-tools
      - nfs-utils
      - nm-connection-editor
      - nmap-ncat
      - nss-softokn
      - nss-tools
      - openssh-clients
      - openssh-server
      - ostree
      - pciutils
      - perl-interpreter
      - pigz
      - plymouth
      - prefixdevname
      - python3-pyatspi
      - rdma-core
      - redhat-release-eula
      - rng-tools
      - rpcbind
      - rpm-ostree
      - rsync
      - rsyslog
      - selinux-policy-targeted
      - sg3_utils
      - shim-x64
      - sil-padauk-fonts
      - smartmontools
      - spice-vdagent
      - strace
      - syslinux
      - syslinux-nonlinux
      - systemd
      - tar
      - udisks2
      - udisks2-iscsi
      - usbutils
      - vim-minimal
      - volume_key
      - wget
      - xfsdump
      - xfsprogs
      - xz
    exclude: []
  build:
    include:
      - coreutils
      - efibootmgr
      - glibc
      - grub2-efi-x64
      - grub2-efi-x64-cdboot
      - grub2-pc
      - grub2-pc-modules
      - grub2-tools
      - grub2-tools-extra
      - grub2-tools-minimal
      - isomd5sum
      - lorax-templates-generic
      - platform-python
      - policycoreutils
      - python3
      - rpm
      - selinux-policy-targeted
      - shadow-utils
      - shim-x64
      - squashfs-tools
      - syslinux
      - syslinux-nonlinux
      - systemd
      - tar
      - xorriso
      - xz
    exclude: []
  os:
    include:
      - '@core'
      - chrony
      - cockpit-system
      - cockpit-ws
      - dnf
      - dnf-utils
      - dosfstools
      - dracut-config-generic
      - e2fsprogs
      - efibootmgr
      - firewalld
      - glibc
      - grub2-efi-x64
      - grub2-pc
      - iwl100-firmware
      - iwl1000-firmware
      - iwl105-firmware
      - iwl135-firmware
      - iwl2000-firmware
      - iwl2030-firmware
      - iwl3160-firmware
      - iwl5000-firmware
      - iwl5150-firmware
      - iwl6000g2a-firmware
      - iwl6000g2b-firmware
      - iwl6050-firmware
      - iwl7260-firmware
      - kernel
      - lorax-templates-generic
      - lorax-templates-rhel
      - lvm2
      - microcode_ctl
      - net-tools
      - nfs-utils
      - oddjob
      - oddjob-mkhomedir
      - policycoreutils
      - psmisc
      - python3-iniparse
      - python3-jsonschema
      - qemu-guest-agent
      - qemu-img
      - redhat-release
      - redhat-release-eula
      - rsync
      - selinux-policy-targeted
      - shim-x64
      - systemd
      - tar
      - tcpdump
      - tuned
      - xfsprogs
      - xz
    exclude:
      - dracut-config-rescue
```


---
*Generated using: `ghcr.io/osbuild/image-builder-cli:latest@sha256:22b169ea2d86ee59e9fcbb4b95d038430782106988ef56cf1bc441f52dbee75c`*

*Last updated on: 2025-07-26 07:25:01 UTC*
