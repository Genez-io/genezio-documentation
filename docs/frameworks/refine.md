---
description: Learn how to deploy a refine application with DeployApps.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refine

<head>
    <title>Refine | DeployApps Documentation</title>
</head>

[Refine](https://refine.dev) is an open-source Retool for Enterprise, helping developers build React-based internal tools, admin panels, dashboards & B2B apps with unmatched flexibility.
.

:::tip
Get started in no time with the [Refine template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/refine-genezio&base_path=example-postgres).
:::

# Deployment

Learn how to deploy an existing refine app using DeployApps, a serverless deployment platform that simplifies app management and reduces costs.


## Prerequisites

### 1. Install DeployApps

Use your preferred package manager to install DeployApps:

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

<h3> 1. Fork our refine template repository on GitHub </h3>

Go to https://github.com/Genez-io/refine-genezio/fork and fork the repo


<h3> 2. Clone the newly created repository locally </h3>


```bash
git clone YOUR_REPO_URL
cd refine-genezio/example-postgres
```

<h3> 3. Run the refine App locally </h3>

Run the following command to start the refine app:

<div>
  ```bash
  genezio local
  ```
</div>

<h3> 4. Test the refine App locally </h3>

Open a web browser and navigate to http://localhost:5173/ to see the app running.

</details>

## Deploy the app

In your terminal window first stop `genezio local` if it was already running, then run the following command to deploy your app to the DeployApps cloud:

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


## Test your deployed app

Go to the **Frontend URL** in your browser to test the newly created app.

## Understand how your Refine app calls the DeployApps backend.

Open the `client/src/App.tsx` file and see how the Admin component uses the authProvider and the dataProvider.

You will also see three resources - BlogPosts, Authors and Categories. These frontend resources have backend equivalents in the `server/` folder. For example, open the `server/Categories.ts` file to see how it's implemented.

## Support

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
