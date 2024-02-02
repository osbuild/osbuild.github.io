# Fedora service

Image Builder is currently running a staging instance on [https://console.stg.fedorainfracloud.org/](https://console.stg.fedorainfracloud.org/). The [intent is to - in the future - integrate more services in a Fedora Console](https://discussion.fedoraproject.org/t/image-builder-for-fedora/92925/1).

## Authentication

1. Create an account on [Fedora staging](https://accounts.stg.fedoraproject.org/).
2. [Authorize the client and get an API token from Fedora](https://id.stg.fedoraproject.org/openidc/Authorization?scope=openid&client_id=consolerhc-cli&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=token&nonce=foo)

## Service API

You can call out to the service's API directly to start building images.

```bash Example request: Build an image
curl -d @request.json -H "content-type: application/json" -H "Authorization: Bearer $API_TOKEN" https://console.stg.fedorainfracloud.org/api/image-builder/v1/compose
```

```bash Example request: Show your image builds
curl -H "content-type: application/json" -H "Authorization: Bearer $API_TOKEN" https://console.stg.fedorainfracloud.org/api/image-builder/v1/composes
```

[Continue reading here for the full API specification.](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/osbuild/image-builder/main/internal/v1/api.yaml)