---
description: Learn how to deploy a Fastify application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fastify

<head>
    <title>Fastify | Genezio Documentation</title>
</head>

Fastify is a popular Node.js web application framework that simplifies the development of server-side applications. It provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [Fastify template](https://github.com/Genez-io/fastify-getting-started).
:::

# Deployment

Learn how to deploy an existing Fastify app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

## Prerequisites

### 1. Install genezio

Use your preferred package manager to install Genezio:

<Tabs>
  <TabItem className="tab-item" value="npm" label="npm">
<div id="step1-install-npm">
  ```
  npm install genezio -g
  ```
  </div>
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
  <div id="step1-install-pnpm">
  ```
  pnpm add -g genezio
  ```
  </div>
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
  <div id="step1-install-yarn">
  ```
  yarn add global genezio
  ```
  </div>
  </TabItem>
</Tabs>

### 2. Ensure you have an Fastify App

If you don't have an Fastify app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Fastify App**</summary>

<h3>1. Initialize a New Node.js Project</h3>

Run the following command to initialize a new Node.js project in an empty directory:

```bash
npm init -y
```

<h3>2. Install Fastify</h3>

Next, install the Fastify package:

```bash
npm i fastify
```

<h3>3. Create an Fastify App</h3>

<Tabs>
<TabItem className="tab-item" value="esm" label="esm">
Create a new file named `app.mjs` and add the following code:
<div>
  ```javascript title="app.mjs"
    import Fastify from 'fastify';

    const app = Fastify();

    app.get("/", (req, res) => {
      res.send("Hello World from Fastify!");
    });

    app.get("/users", (req, res) => {
      res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    });

    app.listen(8080, () => {
      console.log(
        "Server is running on port 8080. Check the app on http://localhost:8080"
      );
    });
    ```

  </div>
  </TabItem>
  <TabItem className="tab-item" value="cjs" label="cjs">
  Create a new file named `app.js` and add the following code:
  <div>
  ```javascript title="app.js"
    const Fastify = require("fastify")

    const app = Fastify();

    app.get("/", (req, res) => {
      res.send("Hello World from Fastify!");
    });

    app.listen(8080, () => {
      console.log(
        "Server is running on port 8080. Check the app on http://localhost:8080"
      );
    });
    ```

  </div>
  </TabItem>
</Tabs>

<h3>4. Test the Fastify App</h3>

Run the following command to start the Fastify app:
<Tabs>
<TabItem className="tab-item" value="esm" label="esm">

<div>
  ```bash
  node app.mjs
  ```
  </div>
  </TabItem>
  <TabItem className="tab-item" value="cjs" label="cjs">
  <div>
  ```bash
  node app.js
  ```
  </div>
  </TabItem>
</Tabs>
Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to see the app running.

</details>

## Deployment Guide

## 1. Install `serverless-http`

First, you need to install the `serverless-http` package.

Run the following command in the root directory of your Fastify app:

```bash
npm install serverless-http
```

This package allows you to wrap your Fastify application and deploy it on serverless environments.

## 2. Export the App as a Handler Function

You need to export your Fastify app as a handler function that can be used by Genezio.

Add the following code to your main application file (`app.mjs` or `app.js`):

<Tabs>
<TabItem className="tab-item" value="esm" label="esm">
<div>
  ```javascript title="app.mjs"
    import Fastify from 'fastify';
    // highlight-next-line
    import serverless from "serverless-http";

    const app = Fastify();

    app.get("/", (req, res) => {
      res.send("Hello World from Fastify!");
    });

    app.get("/users", (req, res) => {
      res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    });

    // You don't need to listen to the port when using serverless functions in production
    // highlight-next-line
    if (process.env.NODE_ENV === "dev") {
      app.listen(8080, () => {
        console.log(
          "Server is running on port 8080. Check the app on http://localhost:8080"
        );
      });
    // highlight-next-line
    }

    // highlight-next-line
    export const handler = serverless(app);
    ```

:::info
You need to add `"type": "module"` in your `package.json` file.
:::

  </div>
  </TabItem>
 <TabItem className="tab-item" value="cjs" label="cjs">
  <div>
  ```javascript title="app.js"
    const Fastify = require("fastify");
    // highlight-next-line
    const serverless = require("serverless-http");

    const app = Fastify();

    app.get("/", (req, res) => {
      res.send("Hello World from Fastify!");
    });

    app.get("/users", (req, res) => {
      res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ]);
    });

    // You don't need to listen to the port when using serverless functions in production
    // highlight-next-line
    if (process.env.NODE_ENV === "dev") {
      app.listen(8080, () => {
        console.log(
          "Server is running on port 8080. Check the app on http://localhost:8080"
        );
      });
    // highlight-next-line
    }

    // highlight-next-line
    module.exports.handler = serverless(app);
    ```

</div>
</TabItem>
</Tabs>

This code wraps your Fastify app with the `serverless-http` package and exports it as a handler for Genezio.

## 3. Create the Genezio Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info

1. You might need to replace the `entry` field with the name of your main application file.
2. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
3. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
   :::

```yaml title="genezio.yaml"
# The name of the project.
name: fastify-app
# The region where the project is deployed. Available regions: us-east-1, eu-central-1
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
backend:
  # The root directory of the backend.
  path: ./
  # Information about the backend's programming language.
  language:
    # The name of the programming language.
    name: js
    # The package manager used by the backend.
    packageManager: npm
  # Information about the backend's functions.
  functions:
    # The name (label) of the function.
    - name: hello-world-fastify-app-function
      # The path to the function's code.
      path: ./
      # The name of the function handler
      handler: handler
      # The entry point for the function.
      entry: app.mjs
```

This configuration file specifies the project name, deployment region, and details about the backend.

## 4. Test Your App Locally

Before deploying your app, you can test it locally to ensure it's working correctly.

Run the following command in your terminal:

```bash
NODE_ENV=dev node app.mjs
```

## 5. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your Genezio account and authorize the CLI to make the deployment.
Run the following command in your terminal:

```bash
genezio deploy
```

If your application use environment variables, you can deploy them using the following command:

```bash
genezio deploy --env <path-to-your-env-file>
```

:::info
You need to deploy your environment variables only once.
After that, you can deploy your project without the `--env` flag.
:::
For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-environment-variables.md).

## See your app in Genezio Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your Fastify app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Frequently Asked Questions

### Do I Need to Modify My Fastify App Code?

Your Fastify project will only require the above [adjustments](#deployment-guide), as long as it is written in a **stateless** manner. To find out more about [stateless vs. stateful follow this link](https://stackoverflow.com/questions/5329618/stateless-vs-stateful)

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
