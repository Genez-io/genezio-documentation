---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# How to Deploy an Existing Express.js App

In this tutorial, you will learn how to deploy an existing Express.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs. We'll cover the benefits, answer common questions, and provide detailed migration steps.

## Why Migrate to Genezio?

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

### Install genezio

Use your prefered package manager to install genezio:

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

## Migration Guide

## 1. Install `serverless-http`

First, you need to install the `serverless-http` package.

Run the following command in the root directory of your Express.js app:

```bash
npm install serverless-http
```

This package allows you to wrap your Express.js application and deploy it on serverless environments.

## 2. Export the Handler

Next, you need to export the handler function for your Express.js app. In your main application file (e.g., app.js), add the following code:

<Tabs>
  <TabItem className="tab-item" value="esm" label="esm">
<div>
  ```javascript title="app.mjs"
    import serverless from "serverless-http";
    import express from "express";

    const app = express();

    // your application code here

    // you don't need this part of the code anymore
    // app.listen(3000, () => {
    //   console.log("Server is running on port 3000");
    // });

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
    const serverless = require("serverless-http");
    const express = require("express");

    const app = express();

    // your application code here

    // you don't need this part of the code anymore
    // app.listen(3000, () => {
    //   console.log("Server is running on port 3000");
    // });

    module.exports.handler = serverless(app);
    ```

</div>
</TabItem>
</Tabs>

This code wraps your Express app with the `serverless-http` package and exports it as a handler for Genezio.

## 3. Create `genezio.yaml`

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info

1. You need to replace the `entry` field with the name of your main application file.
2. You need to replace the `path` field with the path relative at **genezio.yaml** file.
3. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
   :::

```yaml
# The name of the project.
name: express-app
# The region where the project is deployed.
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
backend:
   # The root directory of the backend.
   path: server
   # Information about the backend's programming language.
   language:
      # The name of the programming language.
      name: js
      # The package manager used by the backend.
      packageManager: npm
   # Scripts are running in the specified `path` directory.
   scripts:
      # List of scripts to run before deploying the backend.
      deploy:
         - npm install
      # List of scripts to run before deploying the backend.
      local:
         - npm install
   functions:
      - name: test-fn
        path: ./
        handler: handler
        entry: app.mjs
        provider: aws
```

This configuration file specifies the project name, deployment region, and details about the backend, including the scripts to run and the functions to deploy.

## 4. Deploy your project

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
For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-envinronment-variables.md).

## Test your app

After deploying your application, you can test it to ensure it's running correctly. To verify that your Express.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
