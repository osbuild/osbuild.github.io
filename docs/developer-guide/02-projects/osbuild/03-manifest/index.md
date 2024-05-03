# Manifest

`osbuild` operates on manifests. These are JSON documents containing all the [sources](./modules/sources), pipelines, and [stages](./modules/stages) that together describe how to build operating system artifacts. `osbuild` manifests are not meant to be written by hand, instead tooling such as [otk](../otk) or [images](../images) should be used.


## Pipelines

These are collections of [stages](#stages).

## Stages

The building blocks of [pipelines](#pipelines).
