# genezio addClass

### Usage

`genezio addClass <classPath> <classType> [--logLevel <logLevel>] [-h | --help]`

### Description

This command creates a new file at the `classPath` if it doesn't already exist and adds it to the `genezio.yaml` config file.

You can also specify the class type using the `classType` option. To read more about class types, check out [the Project Structure section](../../project-structure/).

### Arguments

Set `<classPath>` to a valid path to indicate the path to the file that contains the class to be deployed.

Set `<classType>` to indicate the type of the class. The supported values are: `jsonrpc`, `http` or `cron`. If this argument is not specified, `jsonrpc` is the default value used. To use webhooks, set the type to `http`. To use scheduled methods, use `cron`.

### Options

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
