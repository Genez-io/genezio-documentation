---
sidebar_position: 3
description: Learn how to deploy apps effortlessly with Genezio’s CLI tool. Access our easy-to-follow instructions for optimized deployment
---

# genezio deploy

<head>
  <title>genezio deploy CLI Command | Genezio Documentation</title>
</head>
### Usage

`genezio deploy [--backend] [--frontend] [--stage <stage_name>] [--env <envFile>] [--subdomain <subdomain>] [--installDeps] [--logLevel <logLevel>] [-h | --help]`

### Description

:::info
You must be authenticated to use this command.
:::

This command deploys your project to the genezio infrastructure and generates the SDK. You can then use it to access the functions from the cloud.

In case some of your methods are of `type: http`, calling this command will return some links as output in the CLI. You can use these links to call your `type: http` methods.

### Options

If you execute this command without `--backend` or `--frontend` both the backend and the frontend will be deployed.

If you executed this command with the `--backend` option, the backend code specified in the `genezio.yaml` configuration file will be deployed.

If you executed this command with the `--frontend` option, the frontend code specified in the `genezio.yaml` configuration file will be deployed.

`--backend`: Deploy only the backend application.

`--frontend`: Deploy only the frontend application.

`--name <name>`: Deploy a specific frontend application. This is useful when you have multiple frontends in your project. [Learn more](../../deploy/frontend.md).

`--install-deps`: Automatically install missing dependencies. By default, this behavior is turned off.

`--disable-optimization`: Disable dependency optimization. By default, optimization is enabled.

`--image <image>`: Path to a Dockerfile. Used for projects deployed containerized. [Learn more](../../deploy/serverless-containers.md).

`--env <envFile>`: Load environment variables from a given file. [Learn more](../../project-structure/backend-environment-variables.md).

`--zip <zipPath>`: Deploy a zip file directly. The zip file must contain a valid `genezio.yaml` and an `index.mjs` as an entrypoint file. The source code files should be directly in the root of the zip archive.

`--stage <stage>`: Set the environment name to deploy to. By default, the stage is set to "prod". [Learn more](../../features/deployment-environments.md).

`--subdomain <subdomain>`: Set a subdomain for your frontend. If not set, the subdomain will be randomly generated.

`--config <config>`: Use a specific `genezio.yaml` file as the deployment configuration. By default, it uses `./genezio.yaml`. [Learn more](../../project-structure/genezio-configuration-file.md).

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
