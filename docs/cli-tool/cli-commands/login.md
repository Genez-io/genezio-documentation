---
sidebar_position: 11
description: Learn how to use the “genezio login” command to log into your Genezio account through the CLI. Ensure secure and efficient access to projects with our guide
---

# genezio login

<head>
  <title>genezio login CLI Command</title>
</head>

### Usage

`genezio login <accessToken> [--logLevel <logLevel>] [-h | --help]`

### Description

This command authorises the `genezio` CLI to access the genezio cloud and dashboard.

By running this command without any access token, the genezio dashboard will be opened in your browser and you will be prompted to authenticate. No further actions are needed from you if you are already logged in.

If the authentication is successful, `genezio` automatically adds a genezio token to the keychain.

If this command is executed using an access token, the token will be saved in the file `~/.generiorc` and it will be used for all the future commands. New access tokens can be [generated from the dashboard](https://app.genez.io/settings/tokens), as well.&#x20;

Access tokens can also be used in CI/CD pipelines or in remote environments where you don't have a browser to use for the login process.

### Arguments

Set `accessToken` to login with a specific generated token.

### Options

`--logLevel <logLevel>`: Set the verbosity of the output. The supported values are: `trace/debug/info/warn/error`. If you don't specify this argument, the default value used is `info`.

`-h | --help`: Display a help message for more information on each argument and how to use it.
