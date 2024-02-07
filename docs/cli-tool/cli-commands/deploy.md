---
sidebar_position: 3
---

# genezio deploy

### Usage

`genezio deploy [--backend] [--frontend] [--stage <stage_name>] [--env <envFile>] [--subdomain <subdomain>] [--installDeps] [--logLevel <logLevel>] [-h | --help]`

### Description

<!-- :::info -->

:::info
You must be authenticated to use this command.
:::

<!-- ::: -->

This command deploys your project to the genezio infrastructure and generates the SDK. You can then use it to access the functions from the cloud.

In case some of your methods are of `type: http`, calling this command will return some links as output in the CLI. You can use these links to call your `type: http` methods.

### Options

If you execute this command without `--backend` or `--frontend` both the backend and the frontend will be deployed.

If you executed this command with the `--backend` option, the backend code specified in the `genezio.yaml` configuration file will be deployed.&#x20;

If you executed this command with the `--frontend` option, the frontend code specified in the `genezio.yaml` configuration file will be deployed.&#x20;

`--install-deps`: Automatically install missing dependencies. By default this behaviour is turned off.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
