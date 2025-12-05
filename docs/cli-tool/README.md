---
sidebar_position: 6
description: The deployapps CLI can be used to run commands to manage and deploy your projects. You can run genezio on your machine or in your CI/CD pipeline.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deployapps CLI

<head>
  <title>Deployapps CLI | Deployapps Documentation</title>
</head>
The `genezio` cli companion can be used to deploy your projects.
You can run `genezio` on your machine or in your [CI/CD pipeline.](../integrations/github-action)

## What is the Deployapps CLI?

The Deployapps CLI is a powerful command-line tool designed to simplify the development lifecycle of serverless applications on the Deployapps platform.
It provides seamless integration with local development environments, offering features like:

- **Project Creation**: Create a new fullstack project from templates.
- **Local Development**: Run a local environment with your project for testing purposes.
- **Deployment**: Deploy your project to the Deployapps infrastructure.
- **Project Management**: List, delete, and view details of your projects.
- **Infrastructure as Code (IaC)**: Manage configuration, databases, and environment variables through the `genezio.yaml` file.

## Installation

You can install the Deployapps CLI using your preferred package manager: npm, pnpm, or yarn.

<Tabs>
  <TabItem className="tab-item" value="npm" label="npm">
```
npm install genezio -g
```
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
```
pnpm install genezio -g
```
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
```
yarn global add genezio
```
  </TabItem>
</Tabs>


## Commands Summary

The Deployapps CLI tool supports the commands shown in the following table:

| Command                         | Description                                                                                                                         |
|---------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| genezio create                  | Create a new fullstack project from templates [Learn more](https://genezio.com/docs/cli-tool/cli-commands/genezio-create)           |
| genezio local --port `<port>`   | Runs a local environment with your project for testing purposes. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/local) |
| genezio deploy                  | Deploys your project to the Deployapps infrastructure. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/deploy)             |
| genezio analyze                 | Analyzes the current directory's infrastructure setup. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/analyze)         |
| genezio list `[<identifier>]`   | Displays details of your projects.[Learn more](https://genezio.com/docs/cli-tool/cli-commands/ls)                                   |
| genezio delete `[<project-id>]` | Deletes a specific project. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/delete)                                     |
| genezio sdk                     | Generates an SDK corresponding to a deployed project. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/generatesdk)      |
| genezio account                 | Display information about the current account logged in. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/account)       |
| genezio login `<access-token>`  | Authenticates with Deployapps platform to deploy your code. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/login)         |
| genezio logout                  | Logout from Deployapps platform. [Learn more](https://genezio.com/docs/cli-tool/cli-commands/logout)                                   |
| genezio help                    | Displays help for the CLI tool.                                                                                                     |
| genezio `<command>` --help        | Displays help for a specific command.                                                                                               |

## CLI Environment Variables

| Variable Name | Description  |
| ------------- | ------------ |
| GENEZIO_NO_TELEMETRY | Disables telemetry and analytics data collection.  |

## Telemetry in the Deployapps CLI

At Deployapps, we implement and launch features by leveraging insights gained from customer interactions.
We rely on customer feedback to continually improve our product. Telemetry is additional information that helps us to better diagnose issues, and deliver features that improve our customer experience.

<h3> Data Collected </h3>

The data collected it the following, but not limited to:

- **Command Usage**: Information about the commands used, and options selected
- **Execution Time**: Time taken to execute specific commands or operations.
- **Error Tracking**: Reports on encountered errors, crash logs, and stack traces (excluding any sensitive user data).
- **Environment Information**: General details about the user's system (e.g., operating system, CPU, memory) that aid in troubleshooting and compatibility improvements.

We do **NOT** collect any personally identifiable information (PII) or sensitive data.

<h3>> Data Privacy and Security </h3>

At Deployapps, we take data privacy and security seriously.
All data collected is anonymized and aggregated to protect user identities and sensitive information.
We adhere to strict privacy policies and do not share or sell any user data to third parties.

<h3> Turn off telemetry  </h3>

If you prefer not to participate in data collection, you can disable telemetry.
Simply set the environment variable `GENEZIO_NO_TELEMETRY` to `1` before running any Deployapps commands.

<Tabs>
  <TabItem className="tab-item" value="linux" label="Linux/MacOS">
    <div id="install-on-linux-macos">
    ```
    export GENEZIO_NO_TELEMETRY=1
    ```
    </div>
  </TabItem>
  <TabItem className="tab-item" value="windows" label="Windows">
    <div id="install-on-windows">
    ```
    set GENEZIO_NO_TELEMETRY=1
    ```
    </div>
  </TabItem>
</Tabs>
