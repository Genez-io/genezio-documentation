---
sidebar_position: 1
---

# genezio

### Usage

`genezio [-v | --version] [-h | --help]`

### Description

A smart, context aware command that can interactively guide you through managing your Genezio projects in an interactive way.

The command looks for the `genezio.yaml` configuration file in the current directory. Based on the context where you run the command it can recommend you to either deploy or a test an existing Genezio project or create a new Genezio project.

If the current directory contains a Genezio project, `genezio` can:

- [Deploy your project](/docs/cli-tool/cli-commands/deploy)
- [Test your project locally](/docs/cli-tool/cli-commands/local)

If the current directory does not contain a Genezio project, `genezio` can:

- [Create a new project based on a template, interactively](/docs/cli-tool/cli-commands/genezio-create)

We recommend using this command when you want to find out what are your available options based on the current context (current directory).
