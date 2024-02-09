# CLI Commands

### Usage

```
genezio [-v | --version] [-h | --help] <command> [<args>]
```

### Available Commands

If you want to learn more about each `genezio` command , use `genezio help`or `genezio [command] help`.

<!-- :::info -->

:::info
**Note:** All the commands available to use `genezio` are listed on this page. For detailed information about each of them, please go to their designated page.
:::

<!-- ::: -->

Below you can see a list of the most useful commands:

| Command                                   | Text                                                                                         |
| ----------------------------------------- | -------------------------------------------------------------------------------------------- |
| genezio                                   | Context aware, interactive command that simplifies project management. [Learn more](genezio) |
| genezio local \[--port `<port>]`          | Test a project in a local environment. [Learn more](./local)                                 |
| genezio deploy                            | Deploy a project to the cloud. [Learn more](./deploy)                                        |
| genezio deploy --frontend                 | Deploy the frontend to the genezio cloud. [Learn more](./deploy)                             |
| genezio deploy --backend                  | Deploy the backend to the genezio cloud. [Learn more](./deploy)                              |
| genezio create                            | Create a new starter project, in an interactive way. [Learn more](./genezio-create)          |
| genezio sdk                               | Generate an SDK for a deployed or local project. [Learn more](./generatesdk)                 |
| genezio ls                                | List details on deployed projects [Learn more](./ls)                                         |
| genezio delete `[<project-id>]`           | Delete a deployed project. [Learn more](./delete)                                            |
| genezio login                             | Login to the genezio platform [Learn more](./login)                                          |
| genezio logout                            | Logout from genezio platform. [Learn more](./logout)                                         |
| npm update genezio -g                     | Install the latest version of genezio. [Learn more](../update)                               |
| genezio help / genezio `<command>` --help | Displays help for the CLI tool.                                                              |
