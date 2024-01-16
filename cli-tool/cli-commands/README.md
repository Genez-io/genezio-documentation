# CLI Commands

### Usage

```
genezio [-v | --version] [-h | --help] <command> [<args>]
```

### Available Commands

If you want to learn more about each `genezio` command , use `genezio help`or `genezio [command] help`.

{% hint style="info" %}
**Note:** All the commands available to use `genezio` are listed on this page. For detailed information about each of them, please go to their designated page.
{% endhint %}

Below you can see a list of the most useful commands:

| Command                                                           |                                                                                                                                              |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| genezio                                                           | Context aware, interactive command that simplifies project management. [Learn more](genezio.md)                                              |
| genezio local \[--port `<port>]`                                  | Test a project in a local environment. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/local)                 |
| genezio deploy                                                    | Deploy a project to the cloud. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/deploy)                        |
| genezio deploy --frontend                                         | Deploy the frontend to the genezio cloud. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/deploy)             |
| genezio deploy --backend                                          | Deploy the backend to the genezio cloud. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/deploy)              |
| genezio create fullstack \<backend-template> \<frontend-template> | Create a new fullstack project based on two templates: one backend and one frontend. [Learn more](genezio-create.md)                         |
| genezio create backend \<template>                                | Create a new backend project based on a template. [Learn more](genezio-create.md)                                                            |
| genezio create frontend \<template>                               | Create a new frontend project based on a template. [Learn more](genezio-create.md)                                                           |
| genezio create templates \[filter]                                | Lists all the available starting templates. [Learn more](genezio-create.md)                                                                  |
| genezio sdk                                                       | Generate an SDK for a deployed or local project. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/generatesdk) |
| genezio ls                                                        | List details on deployed projects [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/ls)                         |
| genezio delete `[<project-id>]`                                   | Delete a deployed project. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/delete)                            |
| genezio login                                                     | Login to the genezio platform  [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/login)                         |
| genezio logout                                                    | Logout from genezio platform. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/logout)                         |
| npm update genezio -g                                             | Install the latest version of genezio. [Learn more](../update.md)                                                                            |
| genezio help / genezio `<command>` --help                         | Displays help for the CLI tool.                                                                                                              |
