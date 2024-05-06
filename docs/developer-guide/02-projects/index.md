# Projects

The Image Builder team works on a variety of projects across the [entire stack](../stack), from web APIs and frontends, to the nitty gritty assembling of artifacts. The projects here are grouped by their deployment layer, of which there are three.

---

## OSBuild

[OSBuild](./osbuild) is the lowest level in our stack of tools. It takes JSON manifests that describe artifacts and builds those artifacts. `OSBuild` aims to make the building of operating system artifacts precise, declarative, and reproducible. `OSBuild` is written in Python.

### Omnifest Toolkit

[otk](./otk) is a tool to transform files called omnifests to inputs for image build tooling; for example [osbuild](./osbuild) manifests. `otk` aims to make it easier to write definitions for distribution maintainers. `otk` is written in Python.

---

## OSBuild Composer

[osbuild-composer](./osbuild-composer) is a project that provides APIs and a job queue over [osbuild](./osbuild) allowing it to be used as a service. `osbuild-composer` is written in Go.

Aside from providing different ways of interacting with `osbuild` manifests `osbuild-composer` also offers higher level abstractions over operating systems and their artifacts. It contains its own definitions of operating systems in the [images](./images) project and its own ideas for customizing those images in its [blueprints](../../user-guide/blueprint-reference).

### Images

The `Images` project contains the operating system definitions and image definitions for the [osbuild-composer](./osbuild-composer) project. `Images` is written in Go.

### composer-cli

A command line tool to interface with the [osbuild-composer](./osbuild-composer) APIs. `composer-cli` is written in Go.

### Cockpit Composer

A plugin for the [Cockpit Project](https://cockpit-project.org) that provides a web interface to [osbuild-composer](./osbuild-composer) APIs. `Cockpit Composer` is written in JavaScript.

---

## Image Builder

The [Image Builder](./image-builder) project serves as an API over the [osbuild-composer](./osbuild-composer) APIs. The project is integrated with the [console.redhat.com](https://console.redhat.com) platform. `Image Builder` is written in Go.

### Image Builder Frontend

The [Image Builder Frontend](./image-builder-frontend) project provides the frontend to the [Image Builder](./image-builder) API within the [console.redhat.com](https://console.redhat.com) platform. `Image Builder Frontend` is written in JavaScript.

---

## RPMRepo Snapshots

Our continuous integration pulls down a lot of content from RPM repositories. Since RPM repositories are always in flux and we don't want to hammer repositories we have our own snapshots of repositories we use. We've written a tool to freeze these repositories called [rpmrepo](./rpmrepo).

Our snapshots are generated on a schedule and allow us to access the repositories at a certain point in time. `RPMRepo` is written in Python.
