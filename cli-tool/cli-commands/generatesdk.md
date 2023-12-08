# genezio sdk

### Usage

`genezio sdk --stage <stage> --path <sdkPath> --language <js/ts/dart> --region <region> [--logLevel <logLevel>] [-h | --help]`

### Description

{% hint style="info" %}
You must be authenticated to use this command.
{% endhint %}

This command generates an SDK to a given path and a specified language. It must be executed in the same folder as the `genezio.yaml` file.\
It is useful in situations where you do not have access to the server code, but want to generate the SDK for implementing a client. You should know the name and region of the project and have them filled in the `genezio.yaml` file.

This command is especially useful to generate the SDK for experimental programming languages such as Dart and Kotlin.

### Options

`--stage <stage>` - indicate the stage of the project for which you want to generate the SDK (defaults to `prod`)

`--path <sdkPath>` - the path where you want your SDK to be generated (defaults to `./sdk`)

`--language <language>` - the language in which to generate your SDK (doesn't need to be the same as your server language; defaults to `ts`)

`--region <region>` - the region where your project is deployed (defaults to `us-east-1`)

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
