# Deprecation

`osbuild` gives the guarantee that a given [manifest](./manifest.md) will produce the same image as long as any external sources remain available in any future versions of `osbuild`.

## Modules

As `osbuild` guarantees that the same manifest will produce the same image [modules](./modules/index.md) cannot change their schema or behavior after introduction. They can only be expanded upon.

## Stage compatibility version

Sometimes the behaviour of a stage needs to be changed to fix a bug.  In these cases, it might not make sense to add a stage option to toggle the behaviour, since the default is undesirable.  However, changing the behaviour without changing anything in the stage options violates the rules and guarantees described above.  For this, we introduced the convention of a `compat_version` (Compatibility version) that we can add to a stage's options.

The first instance of this was in [osbuild PR#2104](https://github.com/osbuild/osbuild/pull/2104).
