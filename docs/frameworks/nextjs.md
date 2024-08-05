---
description: Learn how to deploy a Next.js application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

# Next.js

<head>
    <title>Next.js | Genezio Documentation</title>
</head>

Next.js is a React framework that allows you to build static and server-rendered web applications. It is a popular choice for developers who want to build modern web applications with React.

:::tip
Get started in no time with the [Next.js template](https://app.genez.io/nextjs-getting-started).
:::

# Deployment

Learn how to deploy an existing Next.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs

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
If you don't already have a Next.js app, you can create one by running in your terminal:
```
genezio create nextjs --name nextjs-project --region us-east-1 --default
```
:::

```bash
genezio deploy
```

This command will build your Next.js application and deploy it to the cloud. Genezio uses a `genezio.yaml` file to store configuration about your project such as project name and region. When running the `genezio deploy` command, Genezio will create this file for you if it doesn't exist after asking you some interactive questions.

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

# Frequently Asked Questions

-   ### How do I set a custom subdomain for my Next.js application?

    The subdomain assigned for your deployed Next.js application is generated automatically by concatenating the name of your project with a random short string. For example, if your project is named `my-nextjs-app`, the subdomain will look like `my-nextjs-app-iyjFxz.app.genez.io`.

    The subdomain can't be customized at the moment. However, you can set a custom domain for your Next.js application by following the instructions in the [Custom Domains](/features/custom-domain-configuration.md) section.

-   ### How do I check the logs of a Next.js application?

    Your Next.js application is deployed on our Function as a Service platform as multiple serverless functions. When opening the project dashboard, you can see the logs of each function separately.

    <figure style={{textAlign:"center"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/frameworks/nextjs/deployed_functions.png")} alt=""/><figcaption>Each Next.js project can use one or more serverless functions</figcaption></figure>

    Usually, the main logic of your application is deployed in the serverless function named `function-server`. Check the logs of this function to see the output of your application.

-   ### How do I set environment variables for my Next.js application?

    Environment variables for a Next.js project hosted on Genezio are set in the same way as any other Genezio project. Visit the `Environment Variables` tab in the project dashboard to set your environment variables.

-   ### How do I test locally?

    We recommend using the provided Next.js scripts to run your application locally. You can use the following command to start your application:

    ```bash
    npm run dev
    ```

-   ### Do I need a Docker/Dockerfile?

    No, you don't need a Dockerfile to deploy a Next.js application with Genezio. Genezio builds your application using a serverless architecture, which means that you don't need to worry about Docker, Dockerfiles or scaling.

# Known Limitations

### Incremental Static Regeneration (ISR)

[Incremental Static Regeneration (ISR)](https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration) in Next.js allows per-page static generation and dynamic content updates. It revalidates pages on-demand, striking a balance between static and dynamic content.

At the moment, Genezio does not support incremental static regeneration (ISR) for Next.js applications. However, we are working on adding this feature in the future.

### Building on Windows

At the moment Genezio does not support building Next.js applications on Windows. In case you are using Windows, we recommend using [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) to build your Next.js application with Genezio.

This limitation comes from the [Open-Next](https://open-next.js.org/) library, which we use to build your application using a serverless architecture. We are working on adding support for Windows in the future.

There is an opened issue in the Open-Next repository that you can follow to get updates on this limitation: https://github.com/sst/open-next/issues/385
