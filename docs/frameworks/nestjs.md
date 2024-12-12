---
description: Learn how to deploy a Nest.js application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nest.js

<head>
    <title>Nest.js | Genezio Documentation</title>
</head>

Nest.js is a popular Node.js web application framework that simplifies the development of server-side applications. It provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [Nest.js template](https://app.genez.io/auth/signup?redirect=nest-getting-started).
:::

# Deployment

Learn how to deploy an existing Nest.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.


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

### 2. Ensure you have a Nest.js App

If you don't have an Nest.js app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Nest.js App**</summary>

<h3> 1. Set up your project </h3>

Run the following command to initialize a new Node.js project in an empty directory:

```bash
npm i -g @nestjs/cli
nest new project-name
```

<h3> 2. Test the Nest.js App </h3>

Run the following command to start the Nest.js app:

```bash
cd project-name
nest start
```

Open a web browser and navigate to [http://localhost:3000](http://localhost:3000) to see the app running.

</details>

## Deployment Guide

## 1. Create configuration file

First, you need to create the configuration file in the root directory of your Nest.js app, run the following command:

```bash
genezio analyze
```

## 2. Deploy your project

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

After deploying your application, you can test it to ensure it's running correctly. To verify that your Nest.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**