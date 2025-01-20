# Introduction

With the Image Builder tool, you can create customized system images. Image builder automatically handles the setup details for each output type and is therefore easier to use and faster to work with than manual methods of image creation. You can access the Image Builder functionalities by using the [command-line interface](https://osbuild.org/docs/on-premises/commandline/), or the [Web UI](https://osbuild.org/docs/on-premises/installation/#web-ui) interface. With Image Builder, you can create system images that are prepared for deployment, including system images prepared for [clouds](https://osbuild.org/docs/user-guide/uploading-cloud-images/), and also images optimized for deployment on [edge](https://osbuild.org/docs/on-premises/commandline/building-ostree-images) servers.

This user guide refers primarily to the on [premises version of Image Builder](../on-premises/00-overview/index.md). While many of the concepts are transferable to the service, at this point please refer to Red Hat's official documentation.

### Image Builder terminology

Image Builder uses the following concepts:

**Blueprint**

A blueprint is a description of a customized system image. It lists the packages and customizations that will be part of the system. You can edit blueprints with customizations and save them as a particular version. When you create a system image from a blueprint, the image is associated with the blueprint in the image builder interface.
Create blueprints in the TOML format.

**Compose**

Composes are individual builds of a system image, based on a specific version of a particular blueprint. Compose as a term refers to the system image, the logs from its creation, inputs, metadata, and the process itself.

**Customizations**

Customizations are specifications for the image that are not packages. This includes users, groups, and SSH keys.

### Image Builder output formats

Image Builder can create images in multiple output formats shown in the following table.

**Table 1. Image Builder output formats**

| Name                              |                        CLI name                        | File extension | Description                                                                                          |  
|-----------------------------------|:------------------------------------------------------:|----------------|------------------------------------------------------------------------------------------------------|  
| QEMU Image                        |                         qcow2                          | `.qcow2`       | QCOW2 formatted disk image for use with QEMU/Libvirt.                                                | 
| Disk Archive                      |                          tar                           | `.tar`         | Archive of the root filesystem without any bootloader or partition table.                            | 
| Amazon Machine Image              |                          ami                           | `.ami`         | Disk image for use with AWS EC2.                                                                     | 
| Microsoft Azure                   |                          vhd                           | `.vhd`         | Disk image for use with Microsoft Azure.                                                             | 
| Google Cloud Platform             |                          gce                           | `.tar.gz`      | Disk image for use with Google Cloud Platform.                                                       | 
| VMware vSphere                    |                          vmdk                          | `.vmdk`        | VMDK formatted disk image for use with VMware vSphere.                                               | 
| VMware vSphere                    |                          ova                           | `.ova`         | OVA formatted disk image for use with VMware vSphere.                                                | 
| Openstack                         |                       openstack                        | `.qcow2`       | QCOW2 formatted disk image for use with OpenStack.                                                   | 
| Edge/IoT[^1] Commit               |               edge-commit<br/>iot-commit               | `.tar`         | OSTree commit archive.                                                                               | 
| Edge/IoT[^1] Container            |            edge-container<br/>iot-container            |  `.tar`        | Web server container that embeds and serves an ostree repository with the given single commit.       | 
| Edge/IoT[^1] Installer            |            edge-installer<br/>iot-installer            | `.iso`         | OSTree-based Anaconda installer ISO for deploying IoT images.                                        | 
| Edge/IoT[^1] Raw Image            |            edge-raw-image<br/>iot-raw-image            | `.raw.xz`      | Compressed raw disk image for OSTree-based IoT devices.                                              | 
| Edge/IoT[^1] Simplified Installer | edge-simplified-installer<br/>iot-simplified-installer | `.iso`         | OSTree-based installer ISO using coreos-installer for direct disk deployment using FIDO or ignition. | 
| Edge/IoT[^1] AMI                  |                  edge-ami<br/>iot-ami                  | `.ami`         | OSTree-based Amazon Machine Image tailored for IoT deployments on AWS EC2.                           | 
| Edge vSphere                      |                      edge-vsphere                      | `.vmdk`        | OSTree-based VMDK formatted disk image for IoT deployments on VMware vSphere.                        |
| Image installer                   |                    image-installer                     | `.iso`         | Anaconda ISO with an embedded pre-built OS archive.                                                  | 
| Live installer                    |                     live-installer                     | `.iso`         | Anaconda ISO with a live operating system.                                                           | 
| Oracle Cloud Infrastructure Image |                          oci                           | `.qcow2`       | QCOW2 formatted disk image for use with Oracle Cloud. This is identical to the qcow2 image.          | 

To check the supported types, run the command:

```
$ composer-cli compose types
```

[^1]: Edge is the variant for CentOS and RHEL, while it's called IoT on Fedora. Technically the output format is the same for both.