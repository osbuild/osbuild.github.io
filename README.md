# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ make install-dependencies
```

### Local Development

```
$ make run
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ make build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Guidelines

When using relative links, please make sure they are path-based, and not URL-based.

❌ Bad:
```markdown
[Blueprint](../overview/blueprint)
```

✅ Good:
```markdown
[Blueprint](../01-overview/blueprint.md)
```

This follows Docusaurus' guidance, see [their docs](https://docusaurus.io/docs/markdown-features/links) for more information.
