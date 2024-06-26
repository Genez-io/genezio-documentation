---
sidebar_position: 8
description: Learn to build a TypeScript CRUD application with Genezio. Follow our guide for server and client setup, local testing, and deployment
---

# CRUD Application

<head>
  <title>CRUD Application | Genezio Documentation</title>
</head>
<!-- :::info -->

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/typescript/crud-app).
:::info

<!-- ::: -->

## User management application

This is a simple project with a server and a client for a user management app. The server is built with [Node.js](https://nodejs.org/en/) and MongoDB. The client is built with [React](https://reactjs.org/).

### Prerequisites

- ✅ [NodeJs](https://nodejs.org) >= 18.0.0
- ✅ [npm](https://www.npmjs.com/)
- ✅ [genezio](https://genezio.com/)

### Project Structure

Inside the project folder, you will find the following files and folders:

```
├── server/
│   ├── models/
│   ├── user.ts
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── src/
│   ├── package.json
|   └── tsconfig.json
├── genezio.yaml
├── README.md
├── .genezioignore
```

Genezio looks for `genezio.yaml` to read the settings for deploying the project or for spinning a local dev server for testing.

The `backend` directory contains the implementation of the server side of the project.

The `frontend` directory contains a simple React application that talks with the genezio server.

### Run the project

#### Clone this example

Clone the repository:

```
git clone https://github.com/Genez-io/genezio-examples
```

Navigate to the following directory:

```
cd ./genezio-examples/typescript/crud-app
```

#### Test your project locally

Test the project locally:

```
genezio local
```

Open a new terminal, navigate to the following directory, and run npm start to launch the application:

```
cd ./client
npm run install-local-sdk
npm start
```

#### Deploy your project with genezio

If you wish to deploy your project to the Genezio infrastructure, follow these steps:

Log in to Genezio using the command genezio login:

```
genezio login
```

Deploy your project using the genezio deploy command from the `./genezio-examples/typescript/crud-app` directory.

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

If you need support or you have any questions, please join us in our [Discord channel](https://discord.gg/uc9H5YKjXv). We'd love to chat!

### Built With

- [Genezio](https://genezio.com/)
- [Node.JS](https://nodejs.org/en/)
- [React](https://reactjs.org/)
