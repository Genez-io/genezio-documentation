---
description: Learn how to deploy a Remix application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remix

<head>
    <title>Remix | Genezio Documentation</title>
</head>

Remix is a React framework for building server-rendered applications, and it's a great choice for building modern web applications.

:::tip
Get started in no time with the [Remix template](https://app.genez.io/auth/signup?redirect=remix-getting-started).
:::

# Deployment

Learn how to deploy an existing Remix app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.


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

### 2. Ensure you have a Remix App

If you don't have an Remix app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Remix App**</summary>

<h3> 1. Set up your project </h3>

Run the following command to initialize a new Remix project in an empty directory:

```bash
npx create-remix@latest
```

<h3> 2. Test the Remix App </h3>

Run the following command to start the Remix app:

```bash
cd my-remix-app
npm run dev
```

Open a web browser and navigate to [http://localhost:5173](http://localhost:5173) to see the app running.

</details>

## Deployment Guide

## 1. Create configuration file

First, you need to create the configuration file in the root directory of your Remix app, run the following command:

```bash
genezio analyze
```

This command will analyze your project and create the `genezio.yaml` file in the root directory of your Remix app, with the following content:

```yaml
# The name of your project, which also influences the subdomain of the project.
name: genezio-project
# Select a region closest to your user base for optimal performance.
region: us-east-1
# Specifies the version of the YAML configuration syntax being used.
yamlVersion: 2
# Configuration specific to the Remix project setup.
remix:
    # The path where the Remix project is located.
    path: .
    # The package manager to be used for this project (npm, yarn, etc.)
    packageManager: npm
    # Custom scripts to be run during deployment, e.g., installing dependencies.
    scripts:
        deploy:
            - npm install
```

## 2. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your Genezio account and authorize the CLI to make the deployment.
Run the following command in your terminal:

```bash
genezio deploy
```

## Local Development

To develop and test your app locally, run:

```bash
genezio local
```

This command starts a local development server on a random port. You can specify a custom port by setting the `GENEZIO_PORT_REMIX` environment variable using one of these methods:

- Add `GENEZIO_PORT_REMIX=<port>` to your `.env` file
- Windows: Run `set GENEZIO_PORT_REMIX=<port> && genezio local`
- macOS/Linux: Run `GENEZIO_PORT_REMIX=<port> genezio local`

## See your app in Genezio Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your Remix app is working, open a web browser and navigate to the URL provided for your deployed app.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
