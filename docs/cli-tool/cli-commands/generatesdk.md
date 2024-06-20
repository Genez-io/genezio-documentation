---
sidebar_position: 8
description: Learn how to use the “genezio sdk” command to generate SDKs for your projects. Follow our guide to streamline development and enhance project integration.
---

# genezio sdk

<head>
  <title>genezio sdk CLI Command</title>
</head>

### Usage

`genezio sdk <projectName> --stage <stage> --source <source> --language <js/ts/dart> --region <region> --output <output> --type <type> [--logLevel <logLevel>] [-h | --help]`

### Description

<!-- :::info -->

:::info
You must be authenticated to use this command.
:::

<!-- ::: -->

This command generates an SDK to a given path and a specified language. It must be executed in the same folder as the `genezio.yaml` file.\
This command is executed in two scenarios:

1. In situations where you do not have access to the server code, but want to generate the SDK for implementing a client. In this scenario you have to use `--source remote`. You should know the name and region of the project and have them filled in the `genezio.yaml` file, or use the `projectName` argument and the `stage` option. If the command is unable to detect the project details, it will list all projects and asks you to select which one you want to generate the SDK for. After that, it will generate a `genezio.yaml` file with the project details.
2. If you want to generate the SDK based on the implementation of an existing server. In this scenario , you have to use `--source local`.

This command is especially useful to generate the SDK for experimental programming languages such as Dart and Kotlin.

### Arguments

`projectName` - name of the project you want to generate an SDK for.

### Options

`--stage <stage>` - indicate the stage of the project for which you want to generate the SDK (defaults to `prod`)

`--source <source>` - Where the SDK should be generated from. Possible values: "local" and "remote". (defaults to "local")

- "local": the SDK is generated based on the backend code from the current working directory or based on the "--config" option
- "remote": the SDK is generated based on the AST retrieved from the genezio server indexed by "projectName" and "stage"

`--output <output>` The path where the SDK will be generated

`--language <language>` - the language in which to generate your SDK (doesn't need to be the same as your server language; defaults to `ts`)

`--region <region>` - the region where your project is deployed (defaults to `us-east-1`)

`--type <classic/package>` - Type of the SDK. The `package` option will generate an npm package and the `classic` option will generate an SDK with typescript files.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
