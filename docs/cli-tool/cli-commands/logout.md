---
sidebar_position: 13
description: Discover how to use the “genezio logout” command to securely log out of your Genezio account via the CLI. Read our guide for safe and easy account management
---

# genezio logout

<head>
  <title>genezio logout CLI Command | Genezio Documentation</title>
</head>
### Usage

`genezio logout [--logLevel <logLevel>] [-h | --help]`

### Description

<!-- :::info -->

:::info
You must be authenticated to use this command.
:::

<!-- ::: -->

This command logs out from the genezio infrastructure and removes the access tokens from `~/.geneziorc`.

### Options

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
