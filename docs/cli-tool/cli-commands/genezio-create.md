---
sidebar_position: 4
description: Discover how to create fullstack or backend projects with the genezio create command, using various supported templates
---

# genezio create

<head>
  <title>genezio create CLI Command | Genezio Documentation</title>
</head>
### Usage

#### Interactive

`genezio create [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Fullstack

`genezio create fullstack [--name <project-name>] [--region <project-region>] [--backend <backend-template>] [--frontend <frontend-template>] [--multirepo] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Backend

`genezio create backend [--name <project-name>] [--region <project-region>] [--backend <backend-template>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Next.js starter project

`genezio create nextjs [--name <project-name>] [--region <project-region>] [--default] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Express.js starter project

`genezio create expressjs [--name <project-name>] [--region <project-region>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Nitro.js starter project

`genezio create nitrojs [--name <project-name>] [--region <project-region>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Nuxt.js starter project

`genezio create nuxt [--name <project-name>] [--region <project-region>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

#### Serverless function

`genezio create serverless [--name <project-name>] [--region <project-region>] [--path <project-path>] [--logLevel <log-level>] [-h | --help]`

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
`--name <project-name>`: Name of the project
- Required, asked interactively if not provided

`--region <project-region>`: Region of the project
- Required, asked interactively if not provided

- Choices: `us-east-1`, `eu-central-1`, `eu-west-1`

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

`--backend <backend-template>`: Starter template for backend

- Required, asked interactively if not provided
- Choices: `ts`, `js`

`--frontend <frontend-template>`: Starter template for frontend

- Required, asked interactively if not provided
- Choices: `react-ts`, `react-js`, `vue-ts`, `vue-js`, `svelte-ts`, `svelte-js`, `vanilla-js`, `none`
- If `none` is selected, no client folder will be created, but the project will still have a fullstack-like structure.

`--multirepo`: If present, the project will create separate repositories for backend and frontend

- Default: `false`

### Backend Subcommand Options

<!-- :::info -->

:::info
These options work only when combined with `genezio create backend` subcommand.
:::

<!-- ::: -->

`--backend <backend-template>`: Starter template for backend

- Choices: `ts`, `js`

### Next.js Subcommand Options

<!-- :::info -->

:::info
These options work only when combined with `genezio create nextjs` subcommand.
:::

<!-- ::: -->

`--default`: Auto-selects all the default options for creating the Next.js starter project.

