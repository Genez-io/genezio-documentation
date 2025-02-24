---
sidebar_position: 4
description: Learn how to set, manage, and use backend environment variables in Genezio. Explore the Genezio CLI, genezio.yaml file, and dashboard methods for configuring secure API keys, database URLs, and app settings
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Backend Environment Variables

<head>
  <title>How to Set Backend Environment Variables in Genezio | Genezio Documentation</title>
</head>

This page describes how to set environment variables for your functions/servers on the Genezio platform.
Environment variables are used to store information or configuration data that you do not want to hardcode in your code such as API keys, database URLs,etc.

## How to set environment variables

You can pass environment variables to your functions in the following ways:
* Individually set environment variables using the [Genezio dashboard](https://app.genez.io/dashboard)
* In bulk using the [Genezio CLI](https://genezio.com/docs/cli/) by providing a `.env` file
* Making use of the `genezio.yaml` file to set environment variables

### Set environment variables using the Genezio dashboard

To set environment variables, head to the [Dashboard](https://app.genez.io/dashboard) and select the project you want to add environment variables to.

Navigate to the `Environment Variables` tab and add the environment variables like a `<key, value>` pair. After adding all the environment variables hit the `Save` button.

Note: The environment variables are immediately injecting into the execution environment of your functions without any need to redeploy.

### Set environment variables using the `genezio` CLI

You can set environment variables using the genezio CLI by providing a `.env` file and running the following command:

```bash
# E.G. genezio deploy --env backend/.env
genezio deploy --env <your-env-file-path>
```

:::info
The `--env` flag refers only to backend functions/classes or persistent servers. For deploying frontend applications, you can rely on each specific framework's approach to handle `.env` files.
:::

### Set environment variables using the `genezio.yaml` file

The `genezio.yaml` file can be used to set environment variables for your functions/servers in the following ways:
* Set literal values for environment variables such as `NODE_ENV: production`
* Reference environment variables from other services or functions using the `${{}}` syntax such as FUNCTION_URL: `${{backend.functions.<function-name>.url}}`

You can add the environment variables in the `genezio.yaml` file as shown below:

```yaml
name: my-project
region: us-east-1
yamlVersion: 2
backend:
  # ...
  environment:
    NODE_ENV: production
    MY_DATABASE_URI: ${{services.databases.<database-name>.uri}}
    FUNCTION_URL: ${{backend.functions.<function-name>.url}}
```

## How to use environment variables when testing locally

By default, the environment variables are automatically loaded from the `.env` file when testing locally with `genezio local`.

The default path and name of the environment variables file is the backend path mentioned in the `genezio.yaml` file. i.e. `backend.path/.env`:

```yaml
name: my-project
region: us-east-1
yamlVersion: 2
backend:
  path: ./server # genezio will search for the .env file in the ./server directory
```

If you want to use a different path or name for the `.env` file, you can specify it using the `--env` flag when running the `genezio local` command:

```bash
# E.G. genezio local --env backend/.env
genezio local --env <your-env-file-path>
```

:::info
Note: You do not need to explicitly use a .env file loader (such as `dotenv` or `python-dotenv`) in your code.
`genezio` has a built-in approach to load the environment variables from the `.env` file during the local testing with `genezio local`.
:::

## How to use environment variables in your code

The environment variables used on the deployed environment are exported.
<Tabs>
  <TabItem className="tab-item" value="ts" label="TypeScript">
  To access an environment variable use `process.env.MY_VARIABLE`

  ```typescript title="main.ts"
  const myVariable = process.env.MY_VARIABLE;
  console.log("Print environment variable", myVariable);
  ```
  </TabItem>
  <TabItem className="tab-item" value="js" label="JavaScript">
    To access an environment variable use `process.env.MY_VARIABLE`

    ```javascript title="main.js"
    const myVariable = process.env.MY_VARIABLE;
    console.log("Print environment variable", myVariable);
    ```
  </TabItem>
  <TabItem  className="tab-item" value="python" label="Python">
    To access an environment variable use `os.environ['MY_VARIABLE']`

    ```python title="main.py"
    import os
    my_variable = os.environ['MY_VARIABLE']
    print("Print environment variable", my_variable)
    ```
  </TabItem>
</Tabs>

## Integration environment variables

Integrations will automatically add environment variables to your project.

You can always check the environment variables added to your project in the `Environment Variables` tab  or in the `Integrations` tab in the [Genezio dashboard](https://app.genez.io/dashboard).

## Linking databases

Linking databases will automatically add the database URL to your environment variables.

For example, linking a MongoDB database named `my-mongo` will automatically add the `MY_MONGO_DATABASE_URL` environment variable to your project.

You can always check the environment variables added to your project in the `Environment Variables` tab  or in the `Databases/Connect` tab in the [Genezio dashboard](https://app.genez.io/dashboard).

## Support

If you have any questions or need help, please reach out to us on [Discord](https://discord.com/invite/uc9H5YKjXv).
