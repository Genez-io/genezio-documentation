---
description: Learn how to deploy a Angular application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Angular

<head>
    <title>Angular | Genezio Documentation</title>
</head>

[Angular](https://angular.io/) is a popular JavaScript framework for building single-page applications. It is known for its robust features and scalability, making it a great choice for developers who want to build modern web applications.

:::tip
Get started in no time with the [Angular template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/angular-getting-started).
:::

# Deployment

Learn how to deploy an existing Angular app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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

### 2. Start from an existing vue template

Create an Angular app using the following steps:

<details>
  <summary>**Create an Angular App**</summary>

<h3> 1. Fork our Angular template repository on GitHub </h3>

Go to https://github.com/Genez-io/angular-getting-started/fork and fork the repo.


<h3> 2. Clone the newly created repository locally </h3>


```bash
git clone YOUR_REPO_URL
cd angular-getting-started
```

<h3> 3. Run the Angular App locally </h3>

Run the following command to start the Angular.js app locally:

<div>
  ```bash
  ng serve
  ```
</div>

<h3> 4. Test the Angular App locally </h3>

Open a web browser and navigate to http://localhost:5173/ to see the app running.

</details>

## Create the Genezio Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info
1. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
2. You might need to replace the `publish` directory value if it is different in your project.
:::

```yaml title="genezio.yaml"
# Learn more about Genezio YAML at https://genezio.com/docs/project-structure/genezio-configuration-file/
# The name of the project.
name: angular-getting-started
# The region where the project is deployed.
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
# Information about the frontend, including the path, language, and publish directory.
# It is optional. It can also be an array if there are multiple frontends you want to deploy.
frontend:
  # The folder where the frontend scripts will run.
  path: .
  # The directory that will be published to the CDN. It is relative to the `path` directory.
  publish: dist/browser
  # Scripts are running in the specified `path` directory.
  scripts:
    # List of scripts to run before deploying the frontend.
    deploy: npm install
    # List of scripts that build your frontend before deployment. It should populate the specified `publish` directory.
    build: npm run build
    # List of scripts to run when starting the local development server.
    start:
      - npm install --silent
      - npm run start
```

This configuration file specifies the project name, deployment region, and details about the frontend.

## Deploy the app

In your terminal run the following command to deploy your app to the Genezio cloud:

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

## Next Steps

After setting up the template, here are some recommended next steps:

 <ul>
    <li><a href="/docs/features/custom-domain-configuration/">Add Custom Domain</a></li>
    <li><a href="./docs/features/deployments/">Learn more about Backend Deployment</a></li>
</ul>

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
