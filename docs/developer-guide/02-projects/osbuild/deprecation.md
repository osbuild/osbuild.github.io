# Deprecation

`osbuild` gives the guarantee that a given [manifest](./manifest.md) will produce the same image as long as any external sources remain available in any future versions of `osbuild`.

## Modules

As `osbuild` guarantees that the same manifest will produce the same image [modules](./modules/index.md) cannot change their schema or behavior after introduction. They can only be expanded upon.
