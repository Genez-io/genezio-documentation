---
sidebar_position: 6
---

# genezio link

### Usage

`genezio link [projectName] [--logLevel <logLevel>] [-h | --help]`

### Description

Link the genezio generated SDK in the current working directory.

Linking a client with a deployed project will enable `genezio local` to figure out where to generate the SDK to call the backend methods. This command is useful when the project has dedicated repositories for the backend and the frontend.

The links are saved in global file create in your home directory `~/.genezio/geneziolinks`.

To remove the links, use `genezio unlink` command. More details [here](/docs/cli-tool/cli-commands/genezio-unlink).

### Arguments

`projectName` - Set the name of the project that you want to link with. If `--all` is used, this argument is ignored.

### Options

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
