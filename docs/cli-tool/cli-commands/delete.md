---
sidebar_position: 10
---

# genezio delete

### Usage

`genezio delete <project> [-f | --force] [--logLevel <logLevel>] [-h | --help]`

### Description

<!-- :::info -->

:::info
You must be authenticated to use this command.
:::

<!-- ::: -->

This command deletes the genezio project with the specified `projectId` from the cloud infrastructure. If the `projectId` is not specified, the command will let you interactively choose a project from all of your deployed projects.&#x20;

### Arguments

Set `projectId` to delete a specific project from the genezio cloud.

### Options

`-f | --force` skip confirmation prompt for deletion.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
