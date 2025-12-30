# Basic concepts

A blueprint is a description of the final **image** and its **customizations**. A **customization** can be:
* an additional RPM package
* enabled service
* custom kernel command line parameter, and many others. See [Blueprint](../../user-guide/01-blueprint-reference.md) reference for more details.

An **image** is defined by its blueprint and **image type**, which is for example `qcow2` (QEMU Copy On Write disk image) or `AMI` (Amazon Machine Image).

Image builder also supports **upload targets**, which are cloud providers where an image can be stored after it is built. See the [Uploading cloud images](../../user-guide/04-uploading-cloud-images/index.md) section for more details.

## Example blueprint

```toml
name = "base-image-with-tmux"
description = "A base system with tmux"
version = "0.0.1"

[[packages]]
name = "tmux"
version = "*"
```

The blueprint is in [TOML format](https://toml.io/en/).

## Image types

Image builder supports various types of output images. To see all supported types, run this command:

Using the `image-builder` CLI: 

```
$ image-builder list
```

Using the `composer-cli` CLI: 

```
$ composer-cli compose types
```
