---
description: Learn how to deploy a Nitro.js application with Genezio.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
# Nitro.js
<head>
    <title>Nitro.js | Genezio Documentation</title>
</head>

Nitro.js is a modern framework for building server-side applications, designed to optimize performance and streamline development.
It offers a comprehensive set of features for creating web servers and APIs, supporting multiple deployment targets.

## Prerequisites

### 1. Install genezio

Use your preferred package manager to install genezio:

<Tabs groupId="packages">
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

### 2. Ensure you have an Nitro.js App

If you don't have an Express.js app, you can create one using the following steps:

<details>
  <summary>**Create a basic Nitro.js App**</summary>
    
### 1. Initialize a New Nitro.js Project

Run the following command to create a starter template:

<Tabs groupId="packages">
  <TabItem className="tab-item" value="npm" label="npm">
      <div id="init-project-npm">
      ```
      npx giget@latest nitro nitro-app --install
      ```
      </div>
  </TabItem>
  
  <TabItem className="tab-item" value="pnpm" label="pnpm">
      <div id="init-project-pnpm">
      ```
      pnpm dlx giget@latest nitro nitro-app --install
      ```
      </div>
  </TabItem>
  
  <TabItem  className="tab-item" value="yarn" label="yarn">
      <div id="init-project-yarn">
      ```
      yarn dlx giget@latest nitro nitro-app --install
      ```
      </div>
  </TabItem>
</Tabs>

```bash
cd nitro-app
```
### 2. Create a new route

Next, navigate to the `server` directory, and create a new `users.ts` file.

```typescript title="users.ts"
export default defineEventHandler((event) => {
  return [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
});
```
### 3. Test the Nitro.js App

Run the following command to start the Nitro.js app:
<Tabs groupId="packages">
  <TabItem className="tab-item" value="npm" label="npm">
      <div id="start-app-npm">
      ```
      npm run dev
      ```
      </div>
  </TabItem>
  
  <TabItem className="tab-item" value="pnpm" label="pnpm">
      <div id="start-app-pnpm">
      ```
      pnpm dev
      ```
      </div>
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
      <div id="start-app-yarn">
      ```
      yarn dev
      ```
      </div>
  </TabItem>
</Tabs>
Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to see the app running.
Navigate to [http://localhost:8080/users](http://localhost:8080/users) to see the newly created route.
</details>

## Deployment Guide

## 1. Build your app for deployment
```
nitro build --preset genezio
```
## 2. Personalize your generated `genezio.yaml` file
By building your nitro app using the Genezio preset, a default `genezio.yaml` file will be Generated, which can be further adjusted for specific cases.

This configuration file specifies the project name, deployment region, and details about the backend.
- [***Read more about Genezio Configuration File***](/docs/project-structure/genezio-configuration-file/)
  
  :::info
1. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
2. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
   :::
## 3. Test Your App Locally

Before deploying your app, you can test it locally to ensure it's working correctly.

Run the following command in the terminal to start the Nitro.js app:
<Tabs groupId="packages">
  <TabItem className="tab-item" value="npm" label="npm">
      <div id="start-app-npm">
      ```
      npm run dev
      ```
      </div>
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
      <div id="start-app-pnpm">
      ```
      pnpm dev
      ```
      </div>
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
      <div id="start-app-yarn">
      ```
      yarn dev
      ```
      </div>
  </TabItem>
</Tabs>
Open a web browser and navigate to [http://localhost:8080](http://localhost:8080) to see the app running.

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
