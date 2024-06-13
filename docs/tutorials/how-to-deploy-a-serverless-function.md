---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# How to Deploy a Serverless Function

In this tutorial, you will learn how to deploy a function using Genezio, a serverless deployment platform that simplifies app management and reduces costs. We'll cover the benefits, answer common questions, and provide detailed deployment steps.

**Do I need to modify my source code?** Make sure you export your function as a `handler` that will process events. Check out [this section](#2-ensure-you-have-a-nodejs-function-handler) to see a code snippet.

## Why Use Genezio?

### Benefits of Using Genezio

1. **Faster Deployment**: Genezio optimizes the deployment process, significantly reducing the time it takes to get your app live.
2. **Reduced costs**: Thanks to Genezio’s efficient infrastructure the costs are significantly lower. Additionally, Genezio offers a more predictable pricing plan, avoiding the pitfalls of the typical “pay-as-you-go” model that can lead to unexpectedly high bills due to unwanted mistakes.
3. **Reliable and Scalable**: No longer worry about PM2 and Docker. You write the code, and Genezio seamlessly scales it across multiple cores.
4. **Enhanced Security**: Built-in security features and automatic updates protect your app against the latest threats without additional effort.
5. **Reduced Management Overhead**: Focus on developing your app instead of managing servers and routine maintenance tasks.
6. **Easy Migration**: Obtain all these advantages with minimal code changes.

### How Does Genezio Handle High Traffic?

Genezio, being a Function as a Service (FaaS) platform, automatically scales your application based on traffic demands. It works by executing functions in response to events and can handle a large number of requests concurrently. This ensures your app remains responsive and performs well during traffic spikes.

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

### 2. Ensure you have a Node.js Function handler

If you don't have a Node.js function handler, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Serverless Function handler**</summary>

### 1. Initialize a New Node.js Project

Run the following command to initialize a new Node.js project in an empty directory:

```bash
npm init -y
```

### 2. Create a Function handler

<Tabs>
<TabItem className="tab-item" value="esm" label="esm">
Create a new file named `app.mjs` and add the following code:
<div>
```javascript title="app.mjs"
export const handler = async (event) => {
  console.log('Function was called');
  let name = event.queryStringParameters?.name || 'World';
  return {
    statusCode: 200,
    body: `Hello ${name} from serverless function!`,
  };
};
```

  </div>
  </TabItem>
  <TabItem className="tab-item" value="cjs" label="cjs">
  Create a new file named `app.js` and add the following code:
  <div>
  ```javascript title="app.js"
  exports.handler = async (event) => {
    console.log("Function was called");
    let name = event.queryStringParameters?.name || "World";
    return {
      statusCode: 200,
      body: `Hello ${name} from serverless function!`,
    };
  };
    ```

  </div>
  </TabItem>
</Tabs>

</details>

## Deployment Guide

## 1. Create the Genezio Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info

1. You might need to replace the `entry` field with the name of your main application file.
2. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
3. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
   :::

```yaml title="genezio.yaml"
# The name of the project.
name: functions-app
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
    - name: hello-world-function
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
genezio local
```

In your terminal, you should be able to see all the local URLs of your functions. You can then test them in your browser or using a tool like Postman.

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
For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-envinronment-variables.md).

## Test your app

After deploying your application, you can test it to ensure it's running correctly. To verify that your functions are working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
