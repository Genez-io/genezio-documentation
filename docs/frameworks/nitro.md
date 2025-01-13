---
description: Learn how to deploy a Nitro application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Nitro

<head>
    <title>Nitro | Genezio Documentation</title>
</head>

Nitro is a modern framework for building server-side applications, designed to optimize performance and streamline development.
It offers a comprehensive set of features for creating web servers and APIs, supporting multiple deployment targets.

:::tip
Get started in no time with the [Nitro template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/nitrojs-starter).
:::

# Deployment

Learn how to deploy an existing Nitro app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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
If you don't already have a Nitro app, you can create one by running in your terminal:
```
genezio create nitrojs --name nitro-project --region us-east-1 --default
```
:::

```bash
genezio deploy
```

This command will build your Nitro application and deploy it to the cloud. Genezio uses a `genezio.yaml` file to store configuration about your project such as project name and region. When running the `genezio deploy` command, Genezio will create this file for you if it doesn't exist after asking you some interactive questions.

The `genezio.yaml` configuration file will look something like this:

```yaml
# The name of your project, which also influences the subdomain of the project.
name: genezio-project
# Select a region closest to your user base for optimal performance.
region: us-east-1
# Specifies the version of the YAML configuration syntax being used.
yamlVersion: 2
# Configuration specific to the Nitro project setup.
nitro:
    # The path where the Nitro.js project is located.
    path: .
    # The package manager to be used for this project (npm, yarn, etc.)
    packageManager: npm
    # Custom scripts to be run during deployment, e.g., installing dependencies.
    scripts:
        deploy:
            - npm install
```

### 3. Monitor your project

You can monitor and manage your application through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
