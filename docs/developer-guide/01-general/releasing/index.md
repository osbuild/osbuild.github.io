# Releasing

This guide describes the release pipeline for our RPM components, from upstream GitHub repositories through to downstream distributions. The pipeline is largely automated and flows through three main stages: **Upstream**, **Fedora**, and **CentOS Stream / RHEL**.

## Components

The following components are managed by this pipeline. All are released to Fedora, while some are also released to CentOS Stream, RHEL, or both:

- [cockpit-image-builder](https://github.com/osbuild/image-builder-frontend) (Fedora, CentOS Stream / RHEL)
- [image-builder](https://github.com/osbuild/image-builder-cli) (Fedora, CentOS Stream / RHEL)
- [koji-image-builder](https://github.com/osbuild/koji-image-builder) (Fedora)
- [koji-osbuild](https://github.com/osbuild/koji-osbuild) (Fedora)
- [osbuild-composer](https://github.com/osbuild/osbuild-composer) (Fedora, CentOS Stream / RHEL)
- [osbuild](https://github.com/osbuild/osbuild) (Fedora, CentOS Stream / RHEL)

## Upstream release

Upstream releases are driven by the [release-action][release-action] GitHub Action. Most components (`osbuild`, `osbuild-composer`, `image-builder`) are released on a **regular schedule every Wednesday**, with different components on different weeks. Other components (`cockpit-image-builder`, `koji-osbuild`, `koji-image-builder`) are released **ad-hoc** — manually triggered when needed.

1. **Push a new release tag** — The release-action creates and pushes a new `vXX` release tag to the upstream repository. If no new commits have been merged since the previous release, the action skips and no release is created.
2. **Create the release and bump the version** — Once the tag is pushed, the release-action creates the GitHub release and bumps the version in the repository. This includes bumping the version in all relevant files — such as the SPEC file for components shipped as RPMs. The version bump prepares the repository for the next release and ensures that testing and development builds have a higher version than the most recent stable release.

:::tip
A release can also be triggered manually at any time by running the release-action workflow from the GitHub Actions UI in the respective component repository.
:::

## Fedora release

Once a new upstream release is published, [Packit][packit-dev] takes over to push it into Fedora.

1. **Open a PR for `fedora-all`** — Packit automatically opens a pull request with the new release against all active Fedora dist-git branches for each component.
2. **Trigger a Koji build** — Once the PR is merged to dist-git, Packit triggers a [Koji][koji] build for all Fedora branches.
3. **Submit a Bodhi update** — After the Koji build finishes, Packit submits a [Bodhi][bodhi] update targeting `fedora-stable`.

## CentOS Stream / RHEL releases

If you are a Red Hat employee, please continue reading about this in our internal release guide.

## Key automation actors

| Actor | Role |
| :---- | :--- |
| [GitHub Actions (release-action)][release-action] | Creates upstream release tags and releases (scheduled or manually triggered) |
| [Packit][packit-dev] | Manages Fedora dist-git PRs, Koji builds, and Bodhi updates |

[release-action]: https://github.com/osbuild/release-action
[packit-dev]: https://packit.dev/docs/
[koji]: https://koji.fedoraproject.org
[bodhi]: https://bodhi.fedoraproject.org/
