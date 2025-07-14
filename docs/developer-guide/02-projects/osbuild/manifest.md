# Introduction

Osbuild is, at its core, a pipeline processor.  It reads instructions from a json file (manifest) and executes them in order, transforming a filesystem tree (directory) along the way.  Each pipeline consists of a series of instructions (stages).  It starts with an empty filesystem tree and each stage modifies it in a specific way.  Typically, but not always, these modifications work towards creating an operating system image.  However, there is nothing inherent to the design or structure of a manifest that explicitly enables building operating system artifacts.  It is through the choice of stages, stage options, and certain parts of osbuild's internals that this particular use case is achieved.  A lot of the examples we will use in this guide will not be producing operating system artifacts (images, root trees, etc), but will be very simple pipelines meant to demonstrate how osbuild operates.  After the basics have been covered and understood, it will be easier to understand how a more realistic manifest can be made to create an operating system image.

# The Manifest

[Principle 4](https://osbuild.org/docs/developer-guide/projects/osbuild/#principles) of osbuild states that "Manifests are expected to be machine-generated, so OSBuild has no convenience functions to support manually created manifests".  That said, it's still entirely possible to write simple manifests by hand, they just wont be very interesting.  Before we look at a complete manifest, let's first describe the general structure:
```json
{
  "version": "2",
  "pipelines": [
    {
      "name": "tree",
      "stages": []
    }
  ],
  "sources": []
}
```
The `version` isn't very interesting.  As of this writing, all manifests are version 2.  Version 1 manifests, while still valid, are considered deprecated and there is no (current) plan for a new version on the horizon.
Pipelines are defined under `pipelines`, which is an array of objects, each with a name and a series of stages.  This pipeline isn't complete, but for the purposes of this section, these are the important properties.
The last top-level property is something we haven't mentioned so far: `sources`.  Sources define resources that will need to be retrieved and provided to stages.  Sources are processed before pipeline processing begins and are the only way to provide external artifacts (files, containers, etc) to stages.

## Pipelines

As mentioned above, a pipeline is defined as a series of stages that operate on a filesystem tree.  At the start of a pipeline, the tree is completely new and empty.  Each stage modifies the tree in a specific way, transforming it step by step towards a desired end state.  Consider a pipeline with the following series of stages:
1. org.osbuild.rpm
2. org.osbuild.locale
3. org.osbuild.timezone

The first stage, `org.osbuild.rpm`, will install a set of rpms into the new, empty tree (we'll see where those rpms come from and how they're defined later).  `org.osbuild.locale` will set the system locale and `org.osbuild.timezone` sets the system timezone.
If we assume the rpms installed in the first stage are everything included in the `@core` Fedora package group, it's not hard to imagine what the resulting filesystem tree will look like.  It will be the full tree of an operating system, composed of all the files that come from the `@core` packages, and two extra or modified files, `etc/localtime` and `etc/locale.conf` set to the desired values.
This is actually a simplified version of the pipeline that's used in practice to create the operating system tree for most conventional images.

## Stages

Stages are little single-purpose executables, each identified by a unique name (`type`).  Stages are defined in the `stages/` directory of the osbuild source tree and are installed in the `stages/` directory of the osbuild libdir (typically, `/usr/lib/osbuild/`).  Most stage types are named after the tool they invoke (prefixed by `org.osbuild.`), so if the name of a stage looks like a command or program you're familiar with, that's probably what it's calling.  For example, `org.osbuild.tar`, `org.osbuild.truncate`, and `org.osbuild.rpm` run `tar`, `truncate`, and `rpm` respectively.  Stage options usually map to command line options and flags, though they usually only implement the ones necessary for image building.  More stage options are added as the need arises.
The options that a stage supports are defined in an accompanying jsonschema, stored alongside a stage with the `.meta.json` suffix.  Looking at the `org.osbuild.truncate` stage as a simple example, the schema is currently defined as follows:
```json
{
  "additionalProperties": false,
  "required": [
    "filename",
    "size"
  ],
  "properties": {
    "filename": {
      "description": "Image filename",
      "type": "string"
    },
    "size": {
      "description": "New desired size",
      "type": "string"
    }
  }
}
```
so the stage in a manifest would look like:
```json
{
  "type": "org.osbuild.truncate",
  "options": {
    "filename": "/newfile",
    "size": "1G"
  }
}
```
When this stage runs, it will create a 1 GiB file named `newfile` in the root of the pipeline's tree.
Another simple stage is `org.osbuild.chmod`, which calls `chmod` to change the mode bits of a file or directory.  This is the current schema for the stage:
```json
{
  "options": {
    "additionalProperties": false,
    "properties": {
      "items": {
        "type": "object",
        "additionalProperties": false,
        "patternProperties": {
          "^\\/(?!\\.\\.)((?!\\/\\.\\.\\/).)+$": {
            "type": "object",
            "required": [
              "mode"
            ],
            "properties": {
              "mode": {
                "type": "string",
                "description": "Symbolic or numeric octal mode"
              },
              "recursive": {
                "type": "boolean",
                "description": "Change modes recursively",
                "default": false
              }
            }
          }
        }
      }
    }
  }
}
```
If we write the stage in a manifest as follows:
```json
{
  "type": "org.osbuild.chmod",
    "options": {
      "items": {
        "/newfile": {
          "mode": "0444"
        }
      }
    }
}
```
then running the stage will change the mode of `newfile` to `0444` (`-r--r--r--`).

## Aside: Other modules

Stages are considered "modules" in osbuild.  They are drop-in executables that provide simple functionality when run.  Other types of modules also exist:
- Sources: Mentioned already above, sources are modules that are defined at the top level of the manifest and are meant to provide the build environment with resources.
- Inputs: In order for a source object (a file, directory, archive, etc) to be accessible to a stage, it needs to be defined in the stage's inputs.  While a source defines how to retrieve a file an input makes that file accessible to a stage when it's running.  Inputs are also used to retrieve files from another pipeline.
- Devices: A device is used to create or manage device nodes (`/dev/...`) for stages.  The most common use case for a device is to set up loop devices for disk images to be partitioned and mounted.
- Mounts: Creates and manages mounts from devices so the tree of a mounted filesystem can be manipulated by a stage.

We'll learn more about these other types of modules later.

## Let's write a manifest

Let's put some stages together and write a simple but complete and valid manifest.
```json
{
  "version": "2",
  "pipelines": [
    {
      "name": "example",
      "stages": [
        {
          "type": "org.osbuild.truncate",
          "options": {
            "filename": "/newfile",
            "size": "1G"
          }
        },
        {
          "type": "org.osbuild.chmod",
          "options": {
            "items": {
              "/newfile": {
                "mode": "0444"
              }
            }
          }
        }
      ]
    }
  ]
}
```

Save this to a file called `example-1.json` and validate it using osbuild with the following command:
```
osbuild example-1.json
```

The output should be:
```
example:  	fa0e466784d49682a1b7b3cb129b7a75b16bff9c2aed6aee3f0f1988056ce85a
```

Alternatively, you can call it with the `--inspect` option to get:
```json
{
  "version": "2",
  "pipelines": [
    {
      "name": "example",
      "stages": [
        {
          "type": "org.osbuild.truncate",
          "id": "cdf6bd2e0d305beac977095697a8ac0cec4d6f744847363081dfb6ad62c389f3",
          "options": {
            "filename": "/newfile",
            "size": "1G"
          }
        },
        {
          "type": "org.osbuild.chmod",
          "id": "fa0e466784d49682a1b7b3cb129b7a75b16bff9c2aed6aee3f0f1988056ce85a",
          "options": {
            "items": {
              "/newfile": {
                "mode": "0444"
              }
            }
          }
        }
      ]
    }
  ]
}
```
(though the real output will be on a single line).
This is pretty much the same as the manifest we fed into osbuild, but with new `id` added to each stage.  We'll come back to these later.  For now, what we accomplished with this call is to verify that the manifest we created is valid according to the osbuild manifest schema and the schema of each individual stage.

### Invalid manifest

A manifest is invalid if at any point it violates the constraints of the schema, either the whole manifest schema, which you can find at `schemas/osbuild2.json` in the project repository, or module schemas, which are defined either alongside a module (in files suffixed with `.meta.json`) or inside the module itself.  Currently, for all stages, their schema defined in separate `.meta.json` files, while all other module types have their schema defined in the same file as the module itself.

Make a small modification to `example-1.json` so that the `org.osbuild.truncate` stage's options look like this:
```json
{
  "type": "org.osbuild.truncate",
  "options": {
    "filename": "/newfile"
  }
}
```

and run it through osbuild:
```
osbuild example-1.json
```

The output should be:
```
example-1.json has errors:

.pipelines[0].stages[0].options:
  'size' is a required property
```

This tells us that the options of the first stage (`stages[0]`) of the first pipeline (`pipelines[0]`) failed to validate against the schema, because `'size' is a required property`.  In other words, the truncate stage requires the size option to be specified.  If we look at the stage scheme again, we'll see that in fact both `filename` and `size` are required.

## Producing a tree

Undo the change made in the [Invalid manifest](#invalid-manifest) section so that the `example-1.json` file looks exactly like it did when we first wrote it in the [Let's write a manifest](#lets-write-a-manifest) section.

Run the manifest through osbuild with the following options:
```
sudo osbuild --export example --output-directory output/1 example-1.json
```
Notice that we used `sudo` to run osbuild now.  When generating a tree, osbuild must be run as root.  Superuser privileges are required for some of osbuild's inner workings and for certain stages.

The `--export` option tells osbuild which pipeline to export.  Most useful manifests define multiple pipelines, many of which are used as intermediate steps in the build process.  Usually, we only need to export one pipeline, the last one, but it's often useful to export multiple pipelines.  In those cases, the `--export` option can be specified multiple times.

The `--output-directory` option should be self-explanatory.  The result of each pipeline listed in the `--export` options will be placed in this directory under a subdirectory with the pipeline's name.

The output from the command should be:
```
starting example-1.jsonPipeline example: fa0e466784d49682a1b7b3cb129b7a75b16bff9c2aed6aee3f0f1988056ce85a
Build
  root: <host>
  runner: org.osbuild.fedora38 (org.osbuild.fedora38)
org.osbuild.truncate: cdf6bd2e0d305beac977095697a8ac0cec4d6f744847363081dfb6ad62c389f3 {
  "filename": "/newfile",
  "size": "1G"
}
/usr/lib/tmpfiles.d/abrt.conf:2: Failed to resolve user 'abrt': No such process
/usr/lib/tmpfiles.d/abrt.conf:9: Failed to resolve user 'abrt': No such process
/usr/lib/tmpfiles.d/gluster.conf:2: Failed to resolve user 'gluster': No such process
/usr/lib/tmpfiles.d/screen.conf:2: Failed to resolve group 'screen': No such process
Failed to open file "/sys/fs/selinux/checkreqprot": Read-only file system

⏱  Duration: 0s
org.osbuild.chmod: fa0e466784d49682a1b7b3cb129b7a75b16bff9c2aed6aee3f0f1988056ce85a {
  "items": {
    "/newfile": {
      "mode": "0444"
    }
  }
}
/usr/lib/tmpfiles.d/abrt.conf:2: Failed to resolve user 'abrt': No such process
/usr/lib/tmpfiles.d/abrt.conf:9: Failed to resolve user 'abrt': No such process
/usr/lib/tmpfiles.d/gluster.conf:2: Failed to resolve user 'gluster': No such process
/usr/lib/tmpfiles.d/screen.conf:2: Failed to resolve group 'screen': No such process
Failed to open file "/sys/fs/selinux/checkreqprot": Read-only file system

⏱  Duration: 0s
manifest example-1.json finished successfully
example:  	fa0e466784d49682a1b7b3cb129b7a75b16bff9c2aed6aee3f0f1988056ce85a
```

The `failed to resolve user` and `group` messages might be different but they can be ignored.  The output tells us that the run was successful (`manifest example-1.json finished successfully`).  It also shows us the runtime duration for each stage and the output it produces while running it.  Stages that call out to other commands usually don't capture the output of those commands unless they have to, and instead display it directly in the build log.  Some stages also print their own log output.  In many cases the output is useful for tracing and troubleshooting a stage's execution.

The tree under `output/` should look like this:
```
$ tree output
output
└── 1
    └── example
        └── newfile

2 directories, 1 file
```

and looking at the file's properties, we should see:
```
$ ls -lh output/example/newfile
-r--r--r--. 1 root root 1.0G 2025-06-08 13:48 output/example/newfile
```

This should all be expected.  We have a file called `newfile` at the root of the exported tree, its size is 1 GiB, and its permissions are set to read-only for everyone.
Our manifest caused osbuild to essentially run the following:
```sh
truncate --size=1G <tree>/newfile  # org.osbuild.truncate stage
chmod 0444 <tree>/newfile          # org.osbuild.chmod stage
```
were `<tree>` is the root of the tree for the pipeline.

If we also consider the preparation and output parts of osbuild's inner workings, we can write a script in bash that does more or less the same work as osbuild did with the specific manifest:
```bash
#!/usr/bin/bash

tree=$(mktemp -d)

mkdir -p "$tree"                    # create working directory for pipeline
echo "starting example-1.json"
truncate --size=1G "$tree/newfile"  # org.osbuild.truncate stage
chmod 0444 "$tree/newfile"          # org.osbuild.chmod stage
eco "manifest example-1.json finished successfully"
mkdir -p output/example
cp -a "$tree" output/example        # final export to output directory
rm -r "$tree"                       # clean up leftover data
```

The setup and cleanup parts aren't entirely accurate, and they don't cover everything that osbuild does to run a manifest, far from it, but for this case, they adequately capture the general idea of what osbuild is doing.

## Sources and Inputs

Sources can be used to retrieve resources from outside the build before starting to process a manifest.  Inputs are used to bind those resources to a stage and make them available during the stage's run.

The two most general purpose sources are `org.osbuild.inline` and `org.osbuild.curl`.  The former is used to define files and data "in-line", meaning the data is defined in the manifest itself.  This is useful for small text or binary files that are not available through a URL or path and are small enough to be defined as a string in the manifest.  The latter, `org.osbuild.curl`, uses `curl` to download files from a URL or path.

The schema for `org.osbuild.inline` is:
```json
{
  "definitions": {
    "item": {
      "description": "Inline data indexed by their checksum",
      "type": "object",
      "additionalProperties": false,
      "patternProperties": {
        "(md5|sha1|sha256|sha384|sha512):[0-9a-f]{32,128}": {
          "type": "object",
          "additionalProperties": false,
          "required": ["encoding", "data"],
          "properties": {
            "encoding": {
              "description": "The specific encoding of `data`",
              "enum": ["base64", "lzma+base64"]
            },
            "data": {
              "description": "The ascii encoded raw data",
              "type": "string"
            }
          }
        }
      }
    }
  },
  "additionalProperties": false,
  "required": ["items"],
  "properties": {
    "items": {"$ref": "#/definitions/item"}
  }
}
```

This tells us that the data should be base64 encoded when inserted into the manifest.  More importantly, it tells us that every inline item is written as a json object in a map keyed by the hash (checksum) of the data.  This gives each inline item a unique ID, which we will use when we want to refer to the item.  It is also used to verify the data (but this will be more interesting for other sources).

The schema for `org.osbuild.curl` is:
```json
{
  "additionalProperties": false,
  "definitions": {
    "item": {
      "description": "The files to fetch indexed their content checksum",
      "type": "object",
      "additionalProperties": false,
      "patternProperties": {
        "(md5|sha1|sha256|sha384|sha512):[0-9a-f]{32,128}": {
          "oneOf": [
            {
              "type": "string",
              "description": "URL to download the file from."
            },
            {
              "type": "object",
              "additionalProperties": false,
              "required": [
                "url"
              ],
              "properties": {
                "url": {
                  "type": "string",
                  "description": "URL to download the file from."
                },
                "insecure": {
                  "type": "boolean",
                  "description": "Skip the verification step for secure connections and proceed without checking",
                  "default": false
                },
                "secrets": {
                  "type": "object",
                  "additionalProperties": false,
                  "required": [
                    "name"
                  ],
                  "properties": {
                    "name": {
                      "type": "string",
                      "description": "Name of the secrets provider."
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  },
  "properties": {
    "items": {"$ref": "#/definitions/item"},
    "urls": {"$ref": "#/definitions/item"}
  },
  "oneOf": [{
    "required": ["items"]
  }, {
    "required": ["urls"]
  }]
}
```

Notice again that each item is indexed by its content hash (checksum).  Just like with inline files, this gives each item a unique ID for reference and is used to validate the content of each source file.

## Manifest with sources

To demonstrate how sources are used, let's expand our first manifest to also include a source file.  In the process, we'll also introduce the `org.osbuild.file` input to make a file from the sources available to a stage.

Add a top-level `sources` key to the manifest with the following:
```json
{
 "org.osbuild.inline": {
   "items": {
     "sha256:659c11543b435c1503e4636cd9ad810f5cb99a3cafaf7be12a34e2d026ec33b7": {
       "encoding": "base64",
       "data": "SSBhbSBhbiBpbmxpbmUgZmlsZQo="
     }
   }
 }
}
```

If you decode the data field, it will show:
```
$ base64 -d <<< SSBhbSBhbiBpbmxpbmUgZmlsZQo=
I am an inline file
```
and similarly, the checksum of the content should be:
```
$ sha256sum <<< "I am an inline file"
659c11543b435c1503e4636cd9ad810f5cb99a3cafaf7be12a34e2d026ec33b7  -
```

To demonstrate the `org.osbuild.curl` stage, let's pretend we have a file that we want to pull into the build process, but instead of getting it from a web server, we'll use `curl` to copy it from a local directory using a `file://` URL.

Create a file called `curl-source-file.txt` with the following content:
```
I am a file on the web
```
and calculate its sha256 sum:
```
› sha256sum ./curl-source-file.txt
29ddbe330656a28c0cd1f77332464b74146b32765bc9194112fdc0ffdade8727  ./curl-source-file.txt
a
```

Note: To reference the file in the manifest, we'll use its absolute path.  In the examples we'll be referring to this path as `/path/to/curl-source-file.txt`.  Replace any occurrence with the real path when following this guide.

The curl source for this file will now look like this:
```json
{
  "org.osbuild.curl": {
    "items": {
      "sha256:29ddbe330656a28c0cd1f77332464b74146b32765bc9194112fdc0ffdade8727": {
        "url": "file:///path/to/curl-source-file.txt"
      }
    }
  }
}
```

Now, let's use these files with an `org.osbuild.copy` stage to copy them into our pipeline's tree.  We want to put them in a subdirectory called `resources` instead of the root of the tree, so we'll also use an `org.osbuild.mkdir` stage to create that directory.

Putting it all together, we now have our second example manifest, `example-2.json`, which should look like this:
```json
{
  "version": "2",
  "pipelines": [
    {
      "name": "res",
      "stages": [
        {
          "type": "org.osbuild.mkdir",
          "options": {
            "paths": [
              {
                "path": "/resources"
              }
            ]
          }
        },
        {
          "type": "org.osbuild.copy",
          "options": {
            "paths": [
              {
                "from": "input://inlinefile/sha256:659c11543b435c1503e4636cd9ad810f5cb99a3cafaf7be12a34e2d026ec33b7",
                "to": "tree:///resources/inline-file"
              },
              {
                "from": "input://curlfile/sha256:29ddbe330656a28c0cd1f77332464b74146b32765bc9194112fdc0ffdade8727",
                "to": "tree:///resources/curl-file"
              }
            ]
          },
          "inputs": {
            "inlinefile": {
              "type": "org.osbuild.files",
              "origin": "org.osbuild.source",
              "references": [
                "sha256:659c11543b435c1503e4636cd9ad810f5cb99a3cafaf7be12a34e2d026ec33b7"
              ]
            },
            "curlfile": {
              "type": "org.osbuild.files",
              "origin": "org.osbuild.source",
              "references": [
                "sha256:29ddbe330656a28c0cd1f77332464b74146b32765bc9194112fdc0ffdade8727"
              ]
            }
          }
        }
      ]
    }
  ],
  "sources": {
    "org.osbuild.inline": {
      "items": {
        "sha256:659c11543b435c1503e4636cd9ad810f5cb99a3cafaf7be12a34e2d026ec33b7": {
          "encoding": "base64",
          "data": "SSBhbSBhbiBpbmxpbmUgZmlsZQo="
        }
      }
    },
    "org.osbuild.curl": {
      "items": {
        "sha256:29ddbe330656a28c0cd1f77332464b74146b32765bc9194112fdc0ffdade8727": {
          "url": "file:///home/achilleas/projects/osbuild/guide/curl-source-file.txt"
        }
      }
    }
  }
}
```

Note: Change any character in the checksum to a different valid hex digit and run the manifest through osbuild to see the data validation failing.

This manifest uses two stages we haven't looked at closely yet.
1. `org.osbuild.mkdir`, which creates directories in the tree, and
2. `org.osbuild.copy`, which copies files across pipeline boundaries (from one pipeline to another, or from a source to a pipeline).

The first should be self-explanatory and simple to write, so we wont spend more time on it here.
The second uses `inputs`, which we've talked about but haven't explained much yet.

### Source Inputs

Each source type in osbuild creates an artifact of a specific type.  The `org.osbuild.inline` and `org.osbuild.curl` sources both create `org.osbuild.files` resources.  In osbuild, inputs are a type of module that provide access to a source object for a stage.  The exact internal mechanisms are beyond the scope of this guide, but in short, since each stage runs in a sandboxed, hermetic environment, it can only access resources directly from the pipeline it's working on and the inputs provided to that specific stage.

Inputs for a stage are defined as a map, with keys used to name the input for the stage, and values providing the metadata related to a given input: the `type`, `origin`, and list of `references`.
- `type` is the resource type.  It must be one of the input type modules found in `inputs/` in the osbuild libdir (`/usr/lib/osbuild/inputs/`) and match the type of resource that we're going to reference.
- `origin` can only have one of two values: `org.osbuild.source` or `org.osbuild.pipeline`.  `org.osbuild.source` is used when an input is defined in the `sources` section of the manifest, which also means they are stored in the `sources` directory of the store.  `org.osbuild.pipeline` is used to reference resources created by another pipeline in the same manifest.  This is how data is transferred from one pipeline to another and we will be looking at examples of this type of input later in the guide.
- `references` are a list of IDs (checksums) identifying the files to be used as inputs.

For the `org.osbuild.copy` stage, the name (key) of each input is arbitrary.  However, some stages define a required name for their input in their schema, such as the `org.osbuild.xz` stage which requires its single input file to be named `file`.

When a stage accepts inputs, they must be referenced in the relevant stage option.  In the `org.osbuild.copy` stage, our two inputs are referenced in the `from` part of the two `paths` objects.  The format of those values is also important to mention.  The general form of the values are `input://<name>/<id>`, which simply means that the file to reference is an `input` defined under the name `<name>` and has ID (checksum) `<id>`.