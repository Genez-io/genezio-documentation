---
description: Learn how to deploy a Express.js application with Genezio.
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Express.js

<head>
    <title>Express.js | Genezio Documentation</title>
</head>

Express.js is a popular Node.js web application framework that simplifies the development of server-side applications. It provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [Express.js template](https://app.genez.io/express-getting-started).
:::

# Deployment

In this tutorial, you will learn how to deploy an existing Express.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs. We'll cover the benefits, answer common questions, and provide detailed deployment steps.

**Do I Need to Modify My Express App Code?** Just make sure that your code is written in a stateless manner. [Read more](https://stackoverflow.com/questions/5329618/stateless-vs-stateful)

## Why Use Genezio?

### Benefits of Using Genezio

1. **Faster Deployment**: Genezio optimizes the deployment process, significantly reducing the time it takes to get your app live.
2. **Lower Costs**: Pay only for the resources you use, thanks to Genezio’s efficient infrastructure and scalable solutions.
3. **Reliable and Scalable**: No longer worry about PM2 and Docker. You write the code, and Genezio seamlessly scales it across multiple cores.
4. **Enhanced Security**: Built-in security features and automatic updates protect your app against the latest threats without additional effort.
5. **Reduced Management Overhead**: Focus on developing your app instead of managing servers and routine maintenance tasks.
6. **Easy Migration**: Obtain all these advantages with minimal code changes.

### How Does Genezio Handle High Traffic?

Genezio, being a Function as a Service (FaaS) platform, automatically scales your application based on traffic demands. It works by executing functions in response to events and can handle a large number of requests concurrently. This ensures your app remains responsive and performs well during traffic spikes.

<!--
### What Kind of Support Does Genezio Offer?

Genezio provides 24/7 support for paid plans to assist with any questions or issues. Our dedicated support team ensures your app runs smoothly on our platform. -->

### Do I Need to Modify My Express App Code?

Migrating your Express app to Genezio typically requires minimal changes. Our migration guide provides detailed instructions for necessary compatibility adjustments.

## Prerequisites

### 1. Install genezio

Use your preferred package manager to install genezio:

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

### 2. Ensure you have an Express.js App

If you don't have an Express.js app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Express.js App**</summary>

### 1. Initialize a New Node.js Project

Run the following command to initialize a new Node.js project in an empty directory:

```bash
npm init -y
```

### 2. Install Express.js

Next, install the Express.js package:

```bash
npm install express
```

### 3. Create an Express.js App

<Tabs>
<TabItem className="tab-item" value="esm" label="esm">
Create a new file named `app.mjs` and add the following code:
<div>
  ```javascript title="app.mjs"
    import express from "express";

    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello World from Express!");
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
    const express = require("express");

    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello World from Express!");
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

### 4. Test the Express.js App

Run the following command to start the Express.js app:
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

Run the following command in the root directory of your Express.js app:

```bash
npm install serverless-http
```

This package allows you to wrap your Express.js application and deploy it on serverless environments.

## 2. Export the App as a Handler Function

You need to export your Express app as a handler function that can be used by Genezio.

Add the following code to your main application file (`app.mjs` or `app.js`):

<Tabs>
<TabItem className="tab-item" value="esm" label="esm">
<div>
  ```javascript title="app.mjs"
    import express from "express";
    // highlight-next-line
    import serverless from "serverless-http";

    const app = express();

    app.get("/", (req, res) => {
      res.send("Hello World from Express!");
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
    const express = require("express");
    // highlight-next-line
    const serverless = require("serverless-http");

    app.get("/", (req, res) => {
      res.send("Hello World from Express!");
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

This code wraps your Express app with the `serverless-http` package and exports it as a handler for Genezio.

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
name: express-app
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
    - name: hello-world-express-app-function
      # The path to the function's code.
      path: ./
      # The name of the function handler
      handler: handler
      # The entry point for the function.
      entry: app.mjs
      # The compatibility of the function handler.
      type: aws
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
You need to deploy your environment variables single time.
After that, you can deploy your project without the `--env` flag.
:::
For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-environment-variables.md).

## Test your app

After deploying your application, you can test it to ensure it's running correctly. To verify that your Express.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
