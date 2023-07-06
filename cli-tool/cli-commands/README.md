# CLI Commands

### Usage

`genezio [COMMAND] [OPTIONS]`

### Available Commands

If you want to learn more about each genezio CLI command in your local environment, use `genezio help`or `genezio [command] help`.

{% hint style="info" %}
**Note:** All the commands available in the genezio CLI are listed on this page. For detailed information about each of them, please go to their designated page.
{% endhint %}



| Command                                        |                                                                                                                                                                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| genezio help / genezio `<command>` --help      | Displays help for the CLI tool.                                                                                                                                                                              |
| <p>genezio init<br></p>                        | Initializes a new project and prepares your project for deploying with genezio. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/init)                                         |
| genezio login `<access-token>`                 | Authenticates with genezio platform to deploy your code. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/login)                                                               |
| genezio addClass `<class-path> [<class-type>]` | Adds a new class to the 'genezio.yaml' file. [Learn m](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/addclass)                                                                           |
| genezio local --port `<port>`                  | Runs a local environment with your project for testing purposes. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/local)                                                       |
| genezio deploy                                 | Deploys your project to the genezio infrastructure. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/deploy)                                                                   |
| genezio deploy --frontend                      | Only deploys the frontend of your project to the genezio infrastructure.                                                                                                                                     |
| genezio deploy --backend                       | Only deploys the backend of your project to the genezio infrastructure.                                                                                                                                      |
| genezio generateSdk                            | Generates an SDK corresponding to a deployed project. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/generatesdk)                                                            |
| genezio ls `[<identifier>]`                    | Displays details of your projects. You can view them all at once or display a particular one by providing its name or ID. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/ls) |
| genezio delete `[<project-id>]`                | Deletes the project described by the provided ID. If no ID is provided, lists all the projects and IDs. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/delete)               |
| genezio account                                | Display information about the current account logged in. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/account)                                                             |
| genezio logout                                 | Logout from genezio platform. [Learn more](https://docs.genez.io/genezio-documentation/cli-tool/cli-commands/logout)                                                                                         |
| npm update genezio -g                          | Install the latest version of genezio. [Learn more](update.md)                                                                                                                                               |
