---
description: Genezio offers seamless backend  and frontend deployment using a function-as-a-service infrastructure. Deploy your project with a single-command `genezio deploy`.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Deployments

<head>
  <title> Deployments | Genezio Documentation</title>
</head>

Genezio is a Function-as-a-Service platform that allows you to deploy fullstack application in a single-click manner.

:::info
You can deploy projects written in JavaScript or TypeScript.
:::

We recommend you to:
1. [Choose one of our templates](/docs/getting-started/use-a-template.md) to get started.
2. [Migrate your existing project](/docs/getting-started/import-existing-project.md) to Genezio.
3. Create a new project using the `genezio create` command and follow the interactive wizard.

## Supported Frameworks

Genezio supports a wide range of popular frameworks, making it easy to integrate and deploy your existing projects or start new ones with familiar tools.
Here’s a look at some of the frameworks you can use with Genezio:

- **Genezio Functions**: AWS Lambda-compatible functions that run code and handle requests without managing servers.
- [**Genezio Typesafe Classes**](/docs/genezio-typesafe/typesafety.md): Classes that can be deployed as functions with guaranteed client typesafe communication.
- [**Serverless Express.js:**](/docs/frameworks/expressjs.md) Build web applications and APIs with the popular Node.js framework.
- [**Next.js:**](/docs/frameworks/nextjs.md) Develop server-rendered React applications with Next.js.
- **and more...** - to learn more about the supported frameworks, [check the Frameworks section](/docs/frameworks/).

## Deploy your project

With Genezio, backend, frontend or even fullstack projects can be deployed a single command.

### Using the dashboard

In the Genezio dashboard, you can create a new project or import an existing project from a repository and automatically deploy it in CI manner.
Go to the [Genezio Dashboard](https://app.genez.io/new-project) and follow the on-screen instructions.

### Using the CLI

You can deploy your project using the genezio CLI.
Install it by running the following command:

```
npm install -g genezio
```

You can deploy your project by running the following command:

```
genezio deploy
```

Note: You can deploy a frontend-only or backend-only project by adding the `--frontend` or `--backend` flags respectively.

