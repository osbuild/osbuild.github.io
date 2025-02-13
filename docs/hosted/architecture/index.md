import ArchitectureSvg from './architecture.svg';

# Architecture

## Hosted service architecture

Users with a Red Hat account or a [no-cost Red Hat Developer Subscription](https://developers.redhat.com/articles/faqs-no-cost-red-hat-enterprise-linux) can use our [hosted service](https://console.redhat.com/insights/image-builder) without installing anything on their local machines.
See our [on premises](/docs/on-premises/overview) documentation to run image builder yourself.

This service is open source, so all of its code is inspectable and can be contributed to.
<ArchitectureSvg />


> Click each component in this diagram to get to the **hash** of the source code **currently running in production**.

The metadata defining the service for App-Interface is kept upstream and open as templates for both the [osbuild-composer](https://github.com/osbuild/osbuild-composer/blob/main/templates/composer.yml) and [image-builder components](https://github.com/osbuild/image-builder/blob/main/templates/image-builder.yml).
The tooling to operate the service is to large parts open source and publicly accessible, e.g. qontract in the form of [qontract-server](https://github.com/app-sre/qontract-server), [qontract-reconcile](https://github.com/app-sre/qontract-reconcile).
The architecture documents in this section comply with the AppSRE contract.

* [Service API documentation](https://developers.redhat.com/api-catalog/api/image-builder)

## How to contribute

Our [developer guide](../../developer-guide/00-index.md) is a great starting point to learn about our workflow, code style and more!

If you want to contribute to our frontend or middleware (aka `image-builder-crc`), here are guides on how to get the respective stack set up for development:
 * [image-builder-frontend](https://github.com/RedHatInsights/image-builder-frontend#frontend-development)
 * [image-builder-crc](https://github.com/RedHatInsights/image-builder-frontend/blob/main/devel/README.md)

### How to reach out to us

* **Matrix**: `#image-builder` on [fedoraproject.org](https://matrix.to/#/#image-builder:fedoraproject.org)
* **Discussions**: https://github.com/orgs/osbuild/discussions
* **Issues**: [Service](https://issues.redhat.com/issues/?jql=project%20%3D%20HMS%20and%20component%20in%20(%22Image%20Builder%22)), [On premises](https://issues.redhat.com/issues/?jql=project%20%3D%20COMPOSER)
* **GitHub organization**: [github.com/osbuild](https://github.com/osbuild)

## How open is this service?

#### 🟢 Open assets
* 🟢 [The source code is open.](https://github.com/osbuild)
* 🟢 Unit tests are open.
* 🟢 Performance tests are open.
* 🟢 Functional tests are open.
* 🟢 The dependencies are open source.
* 🟢 Deployment metadata is open. [[1]](https://github.com/osbuild/osbuild-composer/blob/main/templates/composer.yml) [[2]](https://github.com/osbuild/image-builder-crc/blob/main/templates/image-builder.yml)
#### 🟢 Contribution workflow
* 🟢 External contributors can follow the same workflow as team members.
* 🟢 [The workflow is publicly documented.](../../developer-guide/01-general/workflow.md)
* 🟢 Regular contributors can trigger CI.
* 🟢 External contributions are eagerly reviewed.
#### 🟠 Issue tracking and planning
* 🟢 The issue tracker is public. [[1]](https://github.com/osbuild) [[2]](https://issues.redhat.com/issues/?jql=project%20%3D%20COMPOSER%20or%20(project%20%3D%20HMS%20AND%20component%20in%20(%22Image%20Builder%22)))
* 🟠 The roadmap is public. [[1]](https://github.com/orgs/osbuild/projects)
#### 🟢 Documentation
* 🟢 [User documentation is public.](../../user-guide/00-introduction.md)
* 🟢 [Developer documentation is public.](../../developer-guide/00-index.md)
#### 🟠 Communication
* 🟢 [There is a public 'matrix' chat.](https://matrix.to/#/#image-builder:fedoraproject.org)
* 🟢 [There are public discussions.](https://github.com/orgs/osbuild/discussions)
* 🔴 There are public meetings.
#### 🟠 Open Site Reliability Engineering
* 🟢 [There is an open status page.](https://status.redhat.com)
* 🔴 Logging, monitoring, and alerting is open.
* 🔴 Incident management is open.
