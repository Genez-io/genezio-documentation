---
sidebar_position: 2
description: Master the “genezio local” command to efficiently run and test your Genezio projects on your local machine. Optimize your development workflow with this guide
---

# genezio local

<head>
  <title>genezio local CLI Command | Genezio Documentation</title>
</head>
### Usage

`genezio local [-p, --port <port>] [--env <envFile>] [--install-deps] [--logLevel <logLevel>] [-h | --help]`

### Description

This command opens a local server for testing and debugging. The local server simulates the behavior of a deployed project on a local machine. Requests to test the functionality locally can be sent using the Postman-like testing interface from the dashboard.

### Options

`-p, --port <port>`: Select a custom port for the local server. By default, the server is opened on port `8083`.

`--env <envFile>`: Let's you select a custom environment variables file to be used in your locally run project. If the argument is not specified, the file named `.env` will be used by default.

`--install-deps`: Automatically install missing dependencies. By default this behavior is turned off.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.

`-s | --stage <stage>`: Set the stage on which you can test your services on the local server. This option will work as intended only if you are logged in. If you have services active on your deployed project, this option will allow you to test those services locally on the test interface. The default value is `prod`.
