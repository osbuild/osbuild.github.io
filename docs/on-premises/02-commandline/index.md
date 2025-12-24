# Using the commandline

An image is specified by a blueprint and an image type. Unless you specify otherwise, it will use the same distribution and version (e.g. Fedora 43) as the host system. The architecture will always be the same as the one on the host.

## Create a blueprint


Create a `.toml` file: 

```
$ vim fedora-43-base.toml
```

Define the details of the image in the `fedora-43-base.toml` file: 

```
name = "fedora-43-custom"
description = "A Fedora 43 base system with tmux"
version = "0.0.1"

[[packages]]
name = "tmux"
version = "*"
```

## Building an image 

To build an image, use the build command. Specify the image type (e.g., `qcow2`, `ami`, `vmdk`), the distribution as `fedora-43`, and point to your local blueprint.

```
$ sudo image-builder build qcow2 \
  --distro fedora-43 \
  --blueprint fedora-43-base.toml \
  --output-dir ./build-output
```

The process runs in your terminal and provides updates about the progress of the build. The finished image is placed directly in the `./build-output` directory.

```
[/] Image building step
[6 / 6] Pipeline qcow2 [------------------------------------->] 100.00%
[2 / 2] Stage org.osbuild.qemu [----------------------------->] 100.00%
Message: Finished pipeline qcow2
Image build successful, results:
build-output/fedora-43-server-qcow2-aarch64.qcow2
```

## Reviewing Supported Targets

You can verify the supported architectures and formats for Fedora 43 by using the list command:

```
$ image-builder list --filter distro:fedora-43
```

#### Tip: Booting the image with qemu

If you want to quickly run the resulting image, you can use `qemu`:

```
$ qemu-system-x86_64 \
                -enable-kvm \
                -m 3000 \
                -snapshot \
                -cpu host \
                -net nic,model=virtio \
                -net user,hostfwd=tcp::2223-:22 \
                ab71b61a-b3c4-434f-b214-1e16527766ff-disk.qcow2 
```

Be aware that you must specify a way to access the machine in the blueprint. For example, you can create a user with known password, set an SSH key, or enable `cloud-init` to use a `cloud-init` ISO file.
