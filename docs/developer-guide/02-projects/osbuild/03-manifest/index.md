# Manifest

`osbuild` operates on manifests. These are JSON documents containing all the [sources](../modules/sources), pipelines, and [stages](../modules/stages) that together describe how to build operating system artifacts. `osbuild` manifests are not meant to be written by hand, instead tooling such as [otk](../../otk) or [images](../../images) should be used.

```json
{
    "version": "2",
    "pipelines": [],
    "sources": {},
}
```

## Pipelines

These are collections of [stages](#stages) that produce a re-usable logical unit, for example: the filesystem tree for a distribution. Pipelines can take other pipelines as their starting point or input allowing one pipeline that produces a filesystem tree to be passed along to a pipeline that takes a filesystem tree and converts it to a bootable ISO.

### Stages

[Stages](../modules/stages) are the building blocks of [pipelines](#pipelines), each stage is a small program that operates on a filesystem tree. Stages have well defined behavior and are tested to not cause any changes outside of their described effects.

They try to ensure that if they are passed valid options to always produce a valid output allowing `osbuild` to fail early instead of half-way through a long build.

## Sources

[Sources](../modules/sources) describe the inputs necessary to build a manifest. These can be external resources (HTTP) or inline resources encoded in `base64`. [Stages](../modules/stages) refer to these sources by content hashes for integrity and deduplication.

```
{
    "version": "2",
    "pipelines": [],
    "sources": {
        "org.osbuild.curl": {
            "items": {
                "sha256:000f0e5faa87d81015c8e11215281f3a814b2441dc482d7710efc69c58d854dd": {
                    "url": "https://rpmrepo.osbuild.org/v2/mirror/public/f40/f40-aarch64-rawhide-20240101/Packages/l/libsigsegv-2.14-5.fc39.aarch64.rpm"
                }
            }
        },
        "org.osbuild.inline": {
            "items": {
                "sha256:a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447": {
                    "encoding": "base64",
                    "data": "aGVsbG8gd29ybGQK"
                }
            }
        }
    }
}
```
