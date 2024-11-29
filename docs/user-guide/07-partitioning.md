# Partitioning

## General principles

1. All sizes, whether for specific filesystems or the image itself, are treated as minimum requirements. This means the full disk image size is always larger than the size of the sum of the partitions, due to requirements for headers and metadata.
2. The partition that contains the root filesystem, whether this is a plain formatted partition, an LVM Volume Group, or a Btrfs partition, is always last in the partition table layout.
3. In the case of raw partitioning (no LVM and no Btrfs), the partition containing the root filesystem is grown to fill any left over space on the partition table. Logical Volumes are not grown to fill the space in the Volume Group since they are trivial to grow on a live system.

In addition to the above, certain directories have hard-coded minimum sizes which cannot be overridden. These are 1 GiB for `/` and 2 GiB for `/usr`. This means that, if `/usr` is not on a separate partition, the root filesystem will always be at least 3 GiB.

## Using Filesystem customizations

When using the [Filesystem customizations](blueprint-reference#filesystems), the final partition table of an image built with image builder is determined by a combination of the following:
1. The base partition table for a given image type.
2. The relevant blueprint customizations:
    1. [Partitioning mode](blueprint-reference#partitioning-mode).
    2. [Filesystem customizations](blueprint-reference#filesystems).
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
- `auto-lvm` is the default mode and will convert a raw partition table to an LVM-based one if and only if new mountpoints are defined in the [filesystems customization](blueprint-reference#filesystems). See also the [Mountpoints](#mountpoints) section below.

#### Mountpoints

New filesystems and minimum partition sizes are defined using the [filesystems customization](blueprint-reference#filesystems) in the blueprint. By default, if new mountpoints are created, a partition table is automatically converted to LVM (see [Partitioning modes](#partitioning-modes) above).

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
