# Introduction

With the Image Builder tool, you can create customized system images. Image builder automatically handles the setup details for each output type and is therefore easier to use and faster to work with than manual methods of image creation. You can access the Image Builder functionalities by using the [command-line interface](https://osbuild.org/docs/on-premises/commandline/), or the [Web UI](https://osbuild.org/docs/on-premises/installation/#web-ui) interface. With Image Builder, you can create system images that are prepared for deployment, including system images prepared for [clouds](https://osbuild.org/docs/user-guide/uploading-cloud-images/), and also images optimized for deployment on [edge](https://osbuild.org/docs/on-premises/commandline/building-ostree-images) servers.

This user guide refers primarily to the on [premises version of Image Builder](../on-premises/overview). While many of the concepts are transferable to the service, at this point please refer to Red Hat's official documentation.

### Image Builder terminology

Image Builder uses the following concepts:

**Blueprint**

A blueprint is a description of a customized system image. It lists the packages and customizations that will be part of the system. You can edit blueprints with customizations and save them as a particular version. When you create a system image from a blueprint, the image is associated with the blueprint in the image builder interface.
Create blueprints in the TOML format.

**Compose**

Composes are individual builds of a system image, based on a specific version of a particular blueprint. Compose as a term refers to the system image, the logs from its creation, inputs, metadata, and the process itself.

**Customizations**

Customizations are specifications for the image that are not packages. This includes users, groups, and SSH keys.

