---
description: Learn how to deploy a Nuxt.js application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Nuxt.js

<head>
    <title>Nuxt.js | Genezio Documentation</title>
</head>

Nuxt.js is a popular framework built on top of Vue.js that simplifies the development of server-side rendered (SSR) applications and static websites. It provides a powerful set of features for building dynamic, performant web applications and APIs with ease.

:::tip
Get started in no time with the [Nuxt.js template](https://github.com/Genez-io/nuxtjs-getting-started/).
:::

# Deployment

Learn how to deploy an existing Nuxt.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs


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

### 2. Ensure you have an Nuxt.js App

If you don't have an Nuxt.js app, you can create one using the following steps:

<details>
  <summary>**Create a Nuxt.js App**</summary>

### 1. Fork our react-admin template repository on GitHub

Go to https://github.com/Genez-io/nuxtjs-getting-started/fork and fork the repo.

### 2. Clone the newly created repository locally

```bash
git clone YOUR_REPO_URL
cd nuxtjs-getting-started
```

### 3. Run the Nuxt.Js App locally
Run the following command to start the react-admin app:

```bash
genezio local
```

### 4. Test the react-admin App locally

Open a web browser and navigate to http://localhost:8083/.functions/function-nitroServer to see the app running.

</details>

## Deployment Guide


## 1. Test Your App Locally

Before deploying your app, you can test it locally to ensure it's working correctly.

Run the following command in your terminal:

```bash
npm run dev
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
You need to deploy your environment variables single time.
After that, you can deploy your project without the `--env` flag.
:::
For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-environment-variables.md).

## See your app in Genezio Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your Nuxt.js app is working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.


## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
