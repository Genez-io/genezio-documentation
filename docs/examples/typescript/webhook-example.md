---
sidebar_position: 10
description: Explore the TypeScript Webhook Example in Genezio Documentation. Learn how to implement webhooks with TypeScript effortlessly.
---

# Webhook Example

<head>
  <title>TypeScript Webhook Example | Genezio Documentation</title>
</head>
<!-- :::info -->

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook).
:::

<!-- ::: -->

## Simple genezio webhook example

This is a simple project with a server and a client to call the webhooks.

### Prerequisites

- ✅ [NodeJs](https://nodejs.org) >= 18.0.0
- ✅ [npm](https://www.npmjs.com/)
- ✅ [genezio](https://genezio.com/)

### Project Structure

Inside the project folder, you will find the following files and folders:

```
├── server/
│   ├── index.ts
│   ├── genezio.yaml
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── test-webhook.ts
│   ├── package.json
|   └── tsconfig.json
├── README.md
├── .genezioignore
```

Genezio looks for `genezio.yaml` to read the settings for deploying the project or for spinning a local dev server for testing.

The `backend` directory contains the implementation of the server side of the project.

The `frontend` directory contains a simple typescript client to call the webhooks.

### Run the project

#### Clone this example

Clone the repository:

```
git clone https://github.com/Genez-io/genezio-examples
```

Navigate to the following directory:

```
cd ./genezio-examples/typescript/webhook
```

#### Test your project locally

Test the project locally:

```
genezio local
```

Open a new terminal, navigate to the following directory, and run npm start to launch the application:

```
cd ./client
npm run build && npm start
```

#### Deploy your project with genezio

If you wish to deploy your project to the Genezio infrastructure, follow these steps:

Log in to Genezio using the command genezio login:

```
genezio login
```

Deploy your project using the genezio deploy command from the `./genezio-examples/typescript/webhook` directory.

```
genezio deploy
```

### Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                       |
| ------------------------ | ---------------------------- |
| `npm install -g genezio` | Installs genezio globally    |
| `genezio login`          | Logs in to genezio           |
| `genezio local`          | Starts a local server        |
| `genezio deploy`         | Deploys a production project |
| `genezio --help`         | Get help using genezio       |

### Want to learn more?

Check out:

- [Official genezio documentation](https://genezio.com/docs)
- [Web development tutorials](https://genezio.com/blog)
- [Discord channel](https://discord.gg/uc9H5YKjXv)

### Contact

If you need support or you have any questions, please join us in our Discord channel. We'd love to chat!

### Built With

- [Genezio](https://genezio.com/)
- [Node.JS](https://nodejs.org/en/)
