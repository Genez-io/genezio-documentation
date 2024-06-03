---
sidebar_position: 7
description: Learn to create a JavaScript cron application with Genezio. Schedule code execution every minute with our step-by-step guide
---

# Cron Example

<head>
  <title>Cron Example with JavaScript</title>
</head>

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/javascript/cron).
:::

## Genezio cron application

This is a simple project with a server that schedules some code to execute every minute

### Prerequisites

- ✅ [NodeJs](https://nodejs.org) >= 18.0.0
- ✅ [npm](https://www.npmjs.com/)
- ✅ [genezio](https://genezio.com/)

### Project Structure

Inside the project folder, you will find the following files and folders:

```
├── genezio.yaml
├── README.md
├── index.js
└── package.json
```

Genezio looks for `genezio.yaml` to read the settings for deploying the project or for spinning a local dev server for testing.

### Run the project

#### Clone this example

Clone the repository:

```
git clone https://github.com/Genez-io/genezio-examples
```

Navigate to the following directory:

```
cd ./genezio-examples/javascript/cron
```

#### Test your project locally

Test the project locally:

```
genezio local
```

#### Deploy your project with genezio

If you wish to deploy your project to the Genezio infrastructure, follow these steps:

Log in to Genezio using the command genezio login:

```
genezio login
```

Deploy your project using the genezio deploy command from the `./genezio-examples/javascript/cron` directory.

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
