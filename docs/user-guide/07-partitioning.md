# Partitioning

## General principles

1. All sizes, whether for specific filesystems, partitions, logical volumes, or the image itself, are treated as minimum requirements. This means the full disk image size is always larger than the size of the sum of the partitions, due to requirements for headers and metadata.
2. The partition that contains the root filesystem, whether this is a plain formatted partition, an LVM Volume Group, or a Btrfs partition, is always last in the partition table layout when it is automatically added. For [Disk customizations](#using-disk-customizations) the user-defined order is respected.
3. In the case of raw partitioning (no LVM and no Btrfs), the partition containing the root filesystem is grown to fill any left over space on the partition table. Logical Volumes are not grown to fill the space in the Volume Group since they are trivial to grow on a live system.

In addition to the above, certain directories have hard-coded minimum sizes which cannot be overridden. These are 1 GiB for `/` and 2 GiB for `/usr`. This means that, if `/usr` is not on a separate partition, the root filesystem will always be at least 3 GiB.

## Using Filesystem customizations

When using the [Filesystem customizations](01-blueprint-reference.md#filesystems), the final partition table of an image built with image builder is determined by a combination of the following:
1. The base partition table for a given image type.
2. The relevant blueprint customizations:
    1. [Partitioning mode](01-blueprint-reference.md#partitioning-mode).
    2. [Filesystem customizations](01-blueprint-reference.md#filesystems).
3. The image size parameter of the build request.
    1. On the command line, this is the `--size` argument of the `composer-cli compose start` command.
    2. In the service, this is the `size` parameter of an `image_request`.

This page describes how these elements affect the final layout of the partition table.

### Modifying partition tables

#### Partitioning modes

The partitioning mode controls how the partition table is modified from the image type's default layout.

- `raw` will not convert any partition to LVM or Btrfs.
- `lvm` will always convert the partition that contains the root mountpoint `/` to an LVM Volume Group and create a root Logical Volume. Any extra mountpoints, except `/boot`, will be added to the Volume Group as new Logical Volumes.
- `btrfs` will convert the partition that contains the root mountpoint `/` to a Btrfs volume and create a root subvolume. Any extra mountpoints, except `/boot`, will be added to the Btrfs volume as new Btrfs subvolumes.
- `auto-lvm` is the default mode and will convert a raw partition table to an LVM-based one if and only if new mountpoints are defined in the [filesystems customization](01-blueprint-reference.md#filesystems). See also the [Mountpoints](#mountpoints) section below.

#### Mountpoints

New filesystems and minimum partition sizes are defined using the [filesystems customization](01-blueprint-reference.md#filesystems) in the blueprint. By default, if new mountpoints are created, a partition table is automatically converted to LVM (see [Partitioning modes](#partitioning-modes) above).

#### Image size

The minimum size of the partition table, which in turn will be the size of the disk image. The final size of the image will either be the value of the `size` parameter or the sum of all partitions and their associated metadata, whichever is larger.

### Creating images with exact sizes

If a disk image of a very specific size is required, the exact [Image size](#image-size) should be specified in the build request and any [Mountpoints](#mountpoints) defined as customizations should specify sizes that are smaller than the total size in sum. The partition table, partitions, and other entities often require extra space for metadata and headers, so the space required to fit all the mountpoints is always larger than the sum of the size of the partitions. The exact size of the extra space that is required varies based on too many factors to cover here exhaustively.

The best strategy for creating a disk image of a very specific size is the following:
1. Set the [Image size](#image-size) parameter to the desired size.
2. Add any extra desired mountpoints with their required minimum sizes, making sure that the sum of the sizes is smaller than the image size by at least 3.01 GiB if there is no `/usr` mountpoint, or at least 1.01 GiB if there is.
    - The extra 0.01 MiB is more than enough for the headers and metadata for which extra space might be reserved.
3. Do not specify a size for the `/` mountpoint.

The combination above will create a disk with a partition table of the desired size with each partition sized to fit the desired mountpoints. The root partition (or root LVM Logical Volume) will be at least 3 GiB (or 1 GiB if `/usr` is specified) (see note on directory sizes in [General principles](#general-principles) above).
- If the partition table does not have any LVM Volume Groups or Btrfs volumes, the root partition will be grown to fill the remaining space.
- If the partition table contains an LVM Volume Group, the VG will have unallocated extents that can be used to grow any of the Logical Volumes.
- If the partition table contains a Btrfs volume, the partition for that volume will be grown to fill the remaining space.

## Using Disk customizations

When using the [Disk customizations](01-blueprint-reference.md#disk), the partition table can be described almost entirely using the blueprint. The customizations have the following structure:
- `partitions`: At the top level is a list of partitions.
  - `type`: Each partition has a `type`, which should be one of `plain`, `lvm`, or `btrfs`. If the `type` is not set, it defaults to `plain`. The rest of the required and optional properties of the partition depend on the `type`.
    - `plain`: A plain partition is a partition with a filesystem. It supports the following properties:
      - `fs_type`: The filesystem type, which should be one of `xfs`, `ext4`, `vfat`, or `swap`. Setting it to `swap` will create a swap partition. The `mountpoint` for a swap partition must be empty.
      - `minsize`: The minimum size of the partition, as an integer (in bytes) or a string with a data unit (e.g. `3 GiB`). The final size of the partition in the image might be larger for specific mountpoints (see the [General principles](#general-principles) above).
      - `mountpoint`: The mountpoint for the filesystem. For `swap` partitions, this must be empty.
      - `label`: The label for the filesystem (optional).
    - `lvm`: An lvm partition is a partition with an LVM volume group. Only single-PV volume groups are supported. It supports the following properties:
      - `name`: The name of the volume group (optional; if unset, a name will be generated automatically).
      - `minsize`: The minimum size of the volume group, as an integer (in bytes) or a string with a data unit (e.g. `3 GiB`). The final size of the partition and volume group in the image might be larger if the value is smaller than the sum of logical volumes it contains.
      - `logical_volumes`: One or more logical volumes for the volume group. Each volume group supports the following properties:
        - `name`: The name of the logical volume (optional; if unset, a name will be generated automatically based on the mountpoint).
        - `minsize`: The minimum size of the logical volume, as an integer (in bytes) or a string with a data unit (e.g. `3 GiB`). The final size of the logical volume in the image might be larger for specific mountpoints (see the [General principles](#general-principles) above).
        - `label`: The label for the filesystem (optional).
        - `fs_type`: The filesystem type, which should be one of `xfs`, `ext4`, `vfat`, or `swap`. Setting it to `swap` will create a swap logical volume. The `mountpoint` for a swap logical volume must be empty.
        - `mountpoint`: The mountpoint for the logical volume's filesystem. For `swap` logical volumes, this must be empty.
    - `btrfs`: A partition with a btrfs volume. It supports the following properties:
      - `minsize`: The minimum size of the partition, as an integer (in bytes) or a string with a data unit (e.g. `3 GiB`). The final size of the partition in the image might be larger to accommodate specific mountpoints (see the [General principles](#general-principles) above).
      - `subvolumes`: One or more subvolumes for the btrfs volume. Each subvolume supports the following properties:
        - `name`: The name of the subvolume, which also defines its location on the parent volume.
        - `mountpoint`: The mountpoint for the subvolume.

### Order

The order of each element in a list is respected when creating the partition table. Partitions are created in the order they are defined, regardless of their type.

### Incomplete partition tables

Incomplete partitioning descriptions are valid. Partitions, LVM logical volumes, and btrfs subvolumes are added automatically to create a valid partition table. The following rules are applied:
- A root filesystem is added if one is not defined. This is identified by the mountpoint `/`. If an LVM volume group or btrfs volume is defined, the root filesystem is created as a logical volume or btrfs volume respectively, otherwise it will be created as a plain partition with a filesystem. The type of the filesystem, for plain and LVM, depends on the distribution (`xfs` for RHEL and CentOS, `ext4` for Fedora). See the [General principles](#general-principles) section for information about the sizing and order of the root partition.
- A boot partition is created if needed and if one is not defined. This is identified by the mountpoint `/boot`. A boot partition is needed when the root partition (mountpoint `/`) is on an LVM logical volume or a btrfs volume. The type of the filesystem, for plain and LVM, depends on the distribution (`xfs` for RHEL and CentOS, `ext4` for Fedora). It is created as the first partition after the ESP (see next item).
- An EFI system partition (ESP) is created if needed. This is identified by the mountpoint `/boot/efi`. An ESP is needed when the image is configured to boot with UEFI. This is defined by the image definition and depends on the image type, the distribution, and the architecture. The type of the filesystem is always `vfat`. By default, the ESP is 200 MiB and is the first partition after the BIOS boot (see next item).
- A 1 MiB unformatted BIOS boot partition is created at the start of the partition table if the image is configured to boot with BIOS. This is defined by the image definition and depends on the image type, the distribution, and the architecture.
- Both a BIOS boot partition and an ESP are created for images that are configured for hybrid boot.

### Combining partition types

Multiple partitions can be defined. The following combination of partition types are valid:
- `plain` and `lvm`: Plain partitions can be created alongside an LVM volume group. However, only one LVM volume group can be defined.
- `plain` and `btrfs`: Plain partitions can be created alongside btrfs volumes. However, only one btrfs volume can be defined.
- `btrfs` and `lvm` cannot be combined on the same partition table.

### Examples

1. The following blueprint defines two partitions. The first is a 50 GiB partition with an ext4 filesystem that will be mounted at `/data`. The second is an LVM volume group with three logical volumes, one for root `/`, one for home directories `/home`, and a swap space in that order. The LVM volume group will have 15 GiB of unallocated space.

```toml
[[customization.disk.partitions]]
type = "plain"
label = "data"
mountpoint = "/data"
fs_type = "ext4"
minsize = "50 GiB"

[[customization.disk.partitions]]
type = "lvm"
name = "mainvg"
minsize = "20 GiB"

[[customization.disk.partitions.logical_volumes]]
name = "rootlv"
mountpoint = "/"
label = "root"
fs_type = "ext4"
minsize = "2 GiB"

[[customization.disk.partitions.logical_volumes]]
name = "homelv"
mountpoint = "/home"
label = "home"
fs_type = "ext4"
minsize = "2 GiB"

[[customization.disk.partitions.logical_volumes]]
name = "swaplv"
fs_type = "swap"
minsize = "1 GiB"
```

2. The following blueprint defines two partitions. The first is a 20 GiB btrfs volume with two subvolumes, one for root `/` and one for data `/data`. The second is a 4 GiB swap partition.

```toml
[[customizations.disk.partitions]]
type = "btrfs"
minsize = "20 GiB"

[[customizations.disk.partitions.subvolumes]]
name = "root"
mountpoint = "/"

[[customizations.disk.partitions.subvolumes]]
name = "data"
mountpoint = "/data"

[[customizations.disk.partitions]]
type = "plain"
fs_type = "swap"
minsize = "4 GiB"
```
