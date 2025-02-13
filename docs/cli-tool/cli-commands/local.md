---
sidebar_position: 2
description: Master the `genezio local` command to efficiently run and test your Genezio projects on your local machine. Optimize your development workflow with this guide
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

`-p, --port <port>`: Select a custom port for the test interface genezio classes. By default, the server is opened on port `8083`.

`--env <envFile>`: Let's you select a custom environment variables file to be used in your locally run project. If the argument is not specified, the file named `.env` will be used by default.

`--install-deps`: Automatically install missing dependencies. By default this behavior is turned off.

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.

`-s | --stage <stage>`: Set the stage on which you can test your services on the local server. This option will work as intended only if you are logged in. If you have services active on your deployed project, this option will allow you to test those services locally on the test interface. The default value is `prod`.

### Environment Variables for SSR Ports

The environment variable name is constructed as `GENEZIO_PORT_` followed by your framework name in uppercase (with special characters replaced by underscores.For example:

- For Nest.js: `GENEZIO_PORT_NESTJS`
- For Next.js: `GENEZIO_PORT_NEXTJS`
- For Nitro: `GENEZIO_PORT_NITRO`
- For Nuxt: `GENEZIO_PORT_NUXT`
- For Remix: `GENEZIO_PORT_REMIX`
- For Streamlit: `GENEZIO_PORT_STREAMLIT`

You can set this environment variable using one of these methods:
1. Add it to your `.env` file: `GENEZIO_PORT_<FRAMEWORK>=<port>`
2. Windows: Run `set GENEZIO_PORT_<FRAMEWORK>=<port> && genezio local`
3. macOS/Linux: Run `GENEZIO_PORT_<FRAMEWORK>=<port> genezio local`

### Environment Variables for Functions

For functions, the environment variable name is constructed by taking the function name, replacing any hyphens (-) with underscores (_), converting it to uppercase, and prefixing it with `GENEZIO_PORT_`. For example:

- If your function is named `user-service`, the environment variable would be `GENEZIO_PORT_USER_SERVICE`
- If your function is named `authHandler`, the environment variable would be `GENEZIO_PORT_AUTHHANDLER`

You can set this environment variable using one of these methods:
1. Add it to your `.env` file: `GENEZIO_PORT_<FUNCTION>=<port>`
2. Windows: Run `set GENEZIO_PORT_<FUNCTION>=<port> && genezio local`
3. macOS/Linux: Run `GENEZIO_PORT_<FUNCTION>=<port> genezio local`
