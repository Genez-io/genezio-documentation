---
sidebar_position: 4
---

# genezio create

### Usage

#### Interactive

`genezio create [--path <project-path>] [--logLevel <log-level>] [-h | --help]`&#x20;

#### Fullstack

`genezio create fullstack [--name <project-name>] [--region <project-region>] [--backend <backend-template>] [--frontend <frontend-template>] [--multirepo] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Backend

`genezio create backend [--name <project-name>] [--region <project-region>] [--backend <backend-template>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

### Description

Bootstrap a new project with starter code for different supported languages/frameworks.

If no subcommand (`fullstack` or `backend`) is supplied to `genezio create`, an interactive, user-friendly interface will start and ask project related preferences.

If a subcommand is provided, the preferences become available to be specified as command line arguments. In case some required preferences are not provided, the interactive, user-friendly interface will start to ask only for the remaining not provided ones.

### Global Options

<!-- :::info -->

:::info
These options work with any `genezio create` subcommand
:::

<!-- ::: -->

`--path <project-path>`: The path where the new project will be created

- Default: `current-directory + project-name`

`--logLevel <log-level>`: Set the verbosity of the output.

- Default: `info`
- Choices: `trace`, `debug`, `info`, `warn`, `error`

`-h | --help`: Display a help message for more information on each argument and how to use it.

### Fullstack Subcommand Options

<!-- :::info -->

:::info
These options work only when combined with `genezio create frontend` subcommand.
:::

<!-- ::: -->

`--name <project-name>`: Name of the project

- Required, asked interactively if not provided

`--region <project-region>`: Region of the project

- Required, asked interactively if not provided
- Choices: `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `eu-north-1`, `sa-east-1`

`--backend <backend-template>`: Starter template for backend

- Required, asked interactively if not provided
- Choices: `ts`, `js`

`--frontend <frontend-template>`: Starter template for frontend

- Required, asked interactively if not provided
- Choices: `react-ts`, `react-js`, `vue-ts`, `vue-js`, `svelte-ts`, `svelte-js`, `vanilla-js`, `none`
- If `none` is selected, no client folder will be created, but the project will still have a fullstack-like strucure.

`--multirepo`: If present, the project will create separate repositories for backend and frontend

- Default: `false`

### Backend Subcommand Options

<!-- :::info -->

:::info
These options work only when combined with `genezio create backend` subcommand.
:::

<!-- ::: -->

`--name <project-name>`: Name of the project

- Required, asked interactively if not provided

`--region <project-region>`: Region of the project

- Required, asked interactively if not provided
- Choices: `us-east-1`, `us-east-2`, `us-west-1`, `us-west-2`, `ap-south-1`, `ap-northeast-3`, `ap-northeast-2`, `ap-southeast-1`, `ap-southeast-2`, `ap-northeast-1`, `ca-central-1`, `eu-central-1`, `eu-west-1`, `eu-west-2`, `eu-west-3`, `eu-north-1`, `sa-east-1`

`--backend <backend-template>`: Starter template for backend

- Choices: `ts`, `js`
