---
sidebar_position: 11
description: Learn how to combine JavaScript with HTML using our Vanilla HTML example. Genezio provides clear and concise instructions for all developers
---

# Vanila HTML Example

<head>
  <title>JavaScript Vanila HTML Example</title>
</head>

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/javascript/html-example).
:::

## Vanilla HTML genezio project

This is an example of a TODO application that introduces the user to the Genezio infrastructure with simple HTML and JavaScript, without any framework.

### Prerequisites

- ✅ [NodeJs](https://nodejs.org) >= 18.0.0
- ✅ [npm](https://www.npmjs.com/)
- ✅ [genezio](https://genezio.com/)

### Project Structure

Inside the project folder, you will find the following files and folders:

```
├── server/
│   ├── helper.js
│   └── models/
│   └── package.json
│   └── task.js
├── client/
│   └── app.js
│   └── package.json
│   └── style.css
│   └── index.html
│   └── webpack.config.js
│   └── dist/
│   └── public/
├── genezio.yaml
├── README.md
├── .genezioignore
```

Genezio looks for `genezio.yaml` to read the settings for deploying the project or for spinning a local dev server for testing.

The `backend` directory contains the implementation of the server side of the project.

The `frontend` directory contains a simple NodeJS application that talks with the genezio server.

To glue this two component together, an auto-generated SDK is installed in the `client/node_modules` folder. This can be used by simply importing it into the frontend source code like any other dependency of your project.

### Run the project

#### Clone this example

Clone the repository:

```
git clone https://github.com/Genez-io/genezio-examples
```

Navigate to the following directory:

```
cd ./genezio-examples/javascript/html-example
```

#### Test your project locally

Test the project locally:

```
genezio local
```

Open a new terminal, navigate to the following directory, and run npm start to launch the web application:

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

Deploy your project using the genezio deploy command from the `./genezio-examples/javascript/html-example` directory.

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
