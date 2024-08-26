---
description: Learn how to deploy a Nuxt application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Nuxt

<head>
    <title>Nuxt | Genezio Documentation</title>
</head>

Nuxt.js is a popular framework built on top of Vue.js that simplifies the development of server-side rendered (SSR) applications and static websites. It provides a powerful set of features for building dynamic, performant web applications and APIs with ease.

:::tip
Get started in no time with the [Nuxt template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/nuxt-starter).
:::

# Deployment

Learn how to deploy an existing Nuxt app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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

### 2. Deploy your project

:::info
If you don't already have a Nuxt app, you can create one by running in your terminal:
```
genezio create nuxt --name nuxt-project --region us-east-1
```
:::

```bash
genezio deploy
```

This command will build your Nuxt application and deploy it to the cloud. Genezio uses a `genezio.yaml` file to store configuration about your project such as project name and region. When running the `genezio deploy` command, Genezio will create this file for you if it doesn't exist after asking you some interactive questions.

The `genezio.yaml` configuration file will look something like this:

```yaml
# The name of your project, which also influences the subdomain of the project.
name: genezio-project
# Select a region closest to your user base for optimal performance.
region: us-east-1
# Specifies the version of the YAML configuration syntax being used.
yamlVersion: 2
```

### 3. Monitor your project

You can monitor and manage your application through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
