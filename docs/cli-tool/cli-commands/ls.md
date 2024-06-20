---
sidebar_position: 9
description: Master the “genezio ls” command to list all linked projects in your current directory. Get a clear overview of your project’s links using the Genezio CLI
---

# genezio list

<head>
  <title>genezio list CLI Command</title>
</head>

### Usage

`genezio list <identifier> [-l | --long-listed] [--logLevel <logLevel>] [-h | --help]`

### Description

<!-- :::info -->

:::info
You must be authenticated to use this command.
:::

<!-- ::: -->

This command displays pieces of information about your project. You can view them all at once or display a particular one by providing its name or ID.

### Arguments

Set an `identifier` to list information only for a specific project.

### Options

`-l | --long-listed` list more details for each project.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
