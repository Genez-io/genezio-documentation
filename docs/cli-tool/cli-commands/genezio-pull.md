---
sidebar_position: 14
---

# genezio pull

### Usage

#### Interactive

`genezio pull [--stage <project-stage>] [--logLevel <log-level>] [-h | --help] path`

### Description

Pull an existing project from the genezio platform. This command will download the project's files and create add them in the specified path.

:::info
This command will only work if you have a `genezio.yaml` file in the path where you are executing the command.
:::

:::danger
This command will overwrite the existing files in the path where you are executing the command.
:::

### Options

`--stage <project-stage>`: The stage of the project.

`--logLevel <log-level>`: Set the verbosity of the console output.

`-h | --help`: Display a help message for more information on each argument and how to use it.
