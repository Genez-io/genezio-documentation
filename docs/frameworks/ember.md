---
description: Learn how to deploy an Ember application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ember

<head>
    <title>Ember | Genezio Documentation</title>
</head>

[Ember.js](https://emberjs.com/) is a productive, battle-tested JavaScript framework for building modern web applications. It includes everything you need to build rich user interfaces that work on any device.

:::tip
Get started in no time with the [Ember template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/ember-getting-started).
:::

# Deployment

Learn how to deploy an existing Ember app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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

### 2. Start from an existing Ember template

Create an Ember app using the following steps:

<details>
  <summary>**Create an Ember App**</summary>

<h3> 1. Fork our Ember template repository on GitHub </h3>

Go to https://github.com/Genez-io/ember-getting-started/fork and fork the repo.


<h3> 2. Clone the newly created repository locally </h3>


```bash
git clone YOUR_REPO_URL
cd ember-getting-started
```

<h3> 3. Run the Ember App locally </h3>

Run the following command to start the Ember.js app locally:

<div>
  ```bash
  ember serve
  ```
</div>

<h3> 4. Test the Ember App locally </h3>

Open a web browser and navigate to http://localhost:4200/ to see the app running.

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
name: genezio-project
region: us-east-1
yamlVersion: 2
frontend:
    path: .
    publish: dist
    scripts:
        deploy:
            - npm install
        build:
            - npm run build
        start:
            - npm install
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
