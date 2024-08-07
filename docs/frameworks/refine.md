---
description: Learn how to deploy a refine application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refine

<head>
    <title>Refine | Genezio Documentation</title>
</head>

[Refine](https://refine.dev) is an open-source Retool for Enterprise, helping developers build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.
.

:::tip
Get started in no time with the [refine template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/refine-genezio&base_path=example-json).
:::

# Deployment

Learn how to deploy an existing refine app using Genezio, a serverless deployment platform that simplifies app management and reduces costs


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

### 2. Start from an existing refine template

Create a refine app using the following steps:

<details>
  <summary>**Create a Hello World Refine App**</summary>

### 1. Fork our refine tremplate repository on github

Go to https://github.com/Genez-io/refine-genezio/fork and fork the repo


### 2. Clone the newly created repository locally


```bash
git clone YOUR_REPO_URL
cd refine-genezio/example-json
```

### 3. Run the refine App locally

Run the following command to start the refine app:

<div>
  ```bash
  genezio local
  ```
</div>

### 4. Test the refine App locally

Open a web browser and navigate to http://localhost:5173/ to see the app running.

</details>

## Deploy the app

In your terminal window first stop `genezio local` if it was alreday running, then run the following command to deploy your app to the Grenezio cloud:

<div>
  ```bash
  genezio deploy
  ```
</div>

You should now see 2 URLs in the terminal window:

1. **App Dashboard URL**

  Format: https://app.genez.io/project/123-456-789-123-456/123-456-789-123-456

2. **Frontend URL**

 Format:  https://ABC-DEF-GHI.app.genez.io

## Set-up the app

## 1. Setup Genezio's Authentication on this project

You don't want anyone to be able to access your APIs and make updates to the contents, so we will set-up Genezio's authentication feature on this project.

First you need to go to the **App Dashboard URL** that was listed in the output of the `genezio deploy` command.

On the app dashboard page, click "Authentication" on the left-side menu to enable the auth feature on this project. You might need to create a database in the process, but this shuld be quite straight-forward.

Next, enable the Email provider from the list of providers.

On the same page you will find a **Token** and a **Region**. Open the `/client/src/authProvider.ts` file and update the **authToken** variable with the **Token** on this page.

## 2. Update the reset password URL to match your domain

In the **App Dashboard URL** web page, go to Authentication / Settings and select Email Templates.
Now open the "Reset Password" section and enter "https://ABC-DEF-GHI.app.genez.io/reset-password" (Please remember to use the **Frontend URL** as returned by the genezio deploy command)

## 3. Redeploy your project

Finally, let's redeploy your project:

```bash
genezio deploy
```

## 4. Test your deployed project

Go to the **Frontend URL** in your browser to test the newly created app

## 5. Understand how your Refine app calls the Genezio backend.

Open the `client/src/App.tsx` file and see how the Admin component uses the authProvider and the dataProvider.

You will also see two resources, BlogPosts and Categories. These frontend resources have backend equivalents in the `server/` folder. For example, open the `server/Categories.ts` file to see how it's implemented.

The server-side implementation uses a simple JSON to store the data. Next, I encourage you to go and replace this with an actual SQL table in your PostgreSQL database already created. See [this tutorial](/docs/tutorials/connect-to-postgres-powered-by-neon/) to understand how to do this.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
