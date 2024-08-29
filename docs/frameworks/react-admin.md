---
description: Learn how to deploy a react-admin application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React-Admin

<head>
    <title>React-Admin | Genezio Documentation</title>
</head>

[React-Admin](https://marmelab.com/react-admin/) is a frontend Framework for building B2B applications running in the browser on top Genezio's APIs, using ES6, React and Material Design.
.

:::tip
Get started in no time with the [React-Admin template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/react-admin-getting-started).
:::

# Deployment

Learn how to deploy an existing react-admin app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.


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

### 2. Start from an existing react-admin template

Create a react-admin app using the following steps:

<details>
  <summary>**Create a Hello World react-admin App**</summary>

<h3> 1. Fork our react-admin template repository on github </h3>

Go to https://github.com/Genez-io/react-admin-getting-started/fork and fork the repo.


<h3> 2. Clone the newly created repository locally </h3>


```bash
git clone YOUR_REPO_URL
cd react-admin-getting-started
```

<h3> 3. Run the react-admin App locally </h3>

Run the following command to start the react-admin app:

<div>
  ```bash
  genezio local
  ```
</div>

<h3> 4. Test the react-admin App locally </h3>

Open a web browser and navigate to http://localhost:5173/ to see the app running.

</details>

## Deploy the app

In your terminal window first stop `genezio local` if it was already running, then run the following command to deploy your app to the Genezio cloud:

<div>
  ```bash
  genezio deploy
  ```
</div>

You should now see 2 URLs in the terminal window with the following format:

```bash
$ App Dashboard URL: https://app.genez.io/project/<project-id>/<stage-id>
$ Frontend URL: https://<subdomain>.app.genez.io
```

## Set-up the app

## 1. Setup Genezio's Authentication on this project

You don't want anyone to be able to access your APIs and make updates to the contents, so we will set-up Genezio's authentication feature on this project.

First you need to go to the **App Dashboard URL** that was listed in the output of the `genezio deploy` command.

On the app dashboard page, click "Authentication" on the left-side menu to enable the auth feature on this project. You might need to create a database in the process, but this should be quite straight-forward.

Next, enable the Email provider from the list of providers.

On the same page you will find a **Token** and a **Region**. Open the `/client/src/authProvider.ts` file and update the **authToken** variable with the **Token** on this page.

## 2. Update the reset password URL to match your domain

In the **App Dashboard URL** web page, go to Authentication / Settings and select Email Templates.

Now open the "Reset Password" section and enter `https://<subdomain>.app.genez.io/reset-password`.

:::info
Change `https://<subdomain>.app.genez.io/reset-password` to use the **Frontend URL** as returned by the genezio deploy command.
:::

## 3. Redeploy your project

Finally, let's redeploy your project:

```bash
genezio deploy
```

## 4. Test your deployed project

Go to the **Frontend URL** in your browser to test the newly created app

## 5. Understand how your React Admin app calls the Genezio backend.

Open the `client/src/App.tsx` file and see how the Admin component uses the authProvider and the dataProvider.

You will also see two resources, BlogPosts and Categories. These frontend resources have backend equivalents in the `server/` folder. For example, open the `server/Categories.ts` file to see how it's implemented.

The server-side implementation uses a simple JSON to store the data. Next, I encourage you to go and replace this with an actual SQL table in your PostgreSQL database already created. See [this tutorial](/docs/tutorials//connect-to-postgres.md) to understand how to do this.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
