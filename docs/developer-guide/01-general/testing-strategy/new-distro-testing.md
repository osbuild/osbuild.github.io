# Enabling testing for new distribution

This document describes how to enable testing for a new distribution, or a new version of an existing distribution, in the suite of our projects. The process is quite complex and involves multiple repositories. The following steps should be followed in this specific order:

1. Add new distribution rpmrepo snapshots in [osbuild/rpmrepo](https://github.com/osbuild/rpmrepo).
2. [Trigger new repo snapshots](https://github.com/osbuild/rpmrepo/actions/workflows/scheduled-snapshots.yml).
3. Add distribution runners with image placeholders in [osbuild/gitlab-ci-terraform](https://github.com/osbuild/gitlab-ci-terraform).
4. Add support for the distribution in [osbuild/image-builder](https://github.com/osbuild/image-builder).
5. Add support for the distribution in [osbuild/ci-image-refresh-bot (internal only)](https://gitlab.cee.redhat.com/osbuild/ci-image-refresh-bot).
6. Run the `ci-image-refresh-bot`, so that it updates image placeholders in [osbuild/gitlab-ci-terraform](https://github.com/osbuild/gitlab-ci-terraform).
7. Add new repository definitions and distribution support (if needed) in [osbuild/images](https://github.com/osbuild/images/).
8. Update unit test runners in GitHub actions (if needed) in [osbuild/images](https://github.com/osbuild/images/).
9. Update `.gitlab-ci.yml` runners and `Schutzfile` snapshots for the new distribution and `gitlab-ci-terraform` ref in [osbuild/osbuild](https://github.com/osbuild/osbuild) to build `osbuild` RPMs for the new distribution.
10. Update the `images` ref in `Schutzfile` in [osbuild/osbuild](https://github.com/osbuild/osbuild) and add new distribution runners to test manifests in GitLab CI.
11. Update `.gitlab-ci.yml` runners and `Schutzfile` snapshots for the new distribution and the `osbuild` ref in [osbuild/osbuild-composer](https://github.com/osbuild/osbuild-composer).
