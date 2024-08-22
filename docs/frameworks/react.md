---
description: Learn how to deploy a React application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# React

<head>
    <title>React | Genezio Documentation</title>
</head>

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces and single-page applications. It is known for its simplicity and flexibility, making it a great choice for developers who want to build modern web applications.

:::tip
Get started in no time with the [React template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/react-getting-started).
:::

# Deployment

Learn how to deploy an existing React app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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

Create a React app using the following steps:

<details>
  <summary>**Create a React.js App**</summary>

<h3> 1. Fork our React template repository on GitHub </h3>

Go to https://github.com/Genez-io/react-getting-started/fork and fork the repo.


<h3> 2. Clone the newly created repository locally </h3>


```bash
git clone YOUR_REPO_URL
cd react-getting-started
```

<h3> 3. Run the React.js App locally </h3>

Run the following command to start the React.js app locally:

<div>
  ```bash
  npm run dev
  ```
</div>

<h3> 4. Test the React.js App locally </h3>

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
name: react-getting-started
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
  publish: dist
  # Scripts are running in the specified `path` directory.
  scripts:
    # List of scripts to run before deploying the frontend.
    deploy: npm install
    # List of scripts that build your frontend before deployment. It should populate the specified `publish` directory.
    build: npm run build
    # List of scripts to run when starting the local development server.
    start:
      - npm install --silent
      - npm run dev --silent
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
    <li><a href="../../features/custom-domain-configuration/">Add Custom Domain</a></li>
    <li><a href="../../features/backend-deployment/">Learn more about Backend Deployment</a></li>
</ul>

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
