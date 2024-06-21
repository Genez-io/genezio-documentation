---
sidebar_position: 6
description: The genezio CLI can be used to run commands to manage and deploy your projects. You can run genezio on your machine or in your CI/CD pipeline.
---

# Genezio CLI

<head>
  <title>Genezio CLI</title>
</head>

The `genezio` cli companion can be used to deploy your projects.
You can run `genezio` on your machine or in your [CI/CD pipeline.](../integrations/github-action)

## Commands Summary

The genezio CLI tool supports the commands shown in the following table:

| Command | Description |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| genezio create                            | Create a new fullstack project from templates [Learn more](https://genezio.com/docs/cli-tool/cli-commands/genezio-create) |
| genezio local --port `<port>`             | Runs a local environment with your project for testing purposes. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/local) |
| genezio deploy                            | Deploys your project to the genezio infrastructure. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/deploy) |
| genezio list `[<identifier>]`             | Displays details of your projects. You can view them all at once or display a particular one by providing its name or ID. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/ls) |
| genezio delete `[<project-id>]`           | Deletes the project described by the provided ID. If no ID is provided, lists all the projects and IDs. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/delete)               |
| genezio sdk                               | Generates an SDK corresponding to a deployed project. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/generatesdk) |
| genezio account                           | Display information about the current account logged in. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/account)                 |
| genezio login `<access-token>`            | Authenticates with genezio platform to deploy your code. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/login)                   |
| genezio logout                            | Logout from genezio platform. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/logout) |
| genezio help / genezio `<command>` --help | Displays help for the CLI tool. |
