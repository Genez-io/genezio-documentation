---
sidebar_position: 7
---

# genezio unlink

### Usage

`genezio unlink [--all] [projectName] [--logLevel <logLevel>] [-h | --help]`

### Description

Unlink the generated SDK from a client.

Clear the previously set path for your frontend app, which is useful when managing a project with multiple repositories. This reset allows 'genezio local' to stop automatically generating the SDK in that location.

### Arguments

`projectName` - Set the name of the project that you want to unlink from. If `--all` is used, this argument is ignored.

### Options

`--all` - Remove all links (default: false).

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
