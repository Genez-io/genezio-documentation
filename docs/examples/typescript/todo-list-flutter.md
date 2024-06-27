---
sidebar_position: 4
description: Explore the TypeScript & Flutter To-Do List Example with Genezio. Learn to build a dynamic to-do list app using TypeScript and Flutter.
---

# Todo List with Flutter

<head>
  <title>TypeScript & Flutter To-Do List Example | Genezio Documentation</title>
</head>
:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/typescript/todo-list-flutter).
:::

If you want to deploy your application step-by-step, follow the guidelines below.

## Prerequisites

- ✅ [NodeJs](https://nodejs.org) >= 16.0.0
- ✅ [npm](https://www.npmjs.com/)
- ✅ [genezio](https://genezio.com/)
- ✅ [Flutter](https://docs.flutter.dev/get-started/install)

1. Host a Mongo Database. Follow this [tutorial](https://genezio.com/docs/tutorials/connect-to-mongodb-atlas) to get a free tier database.
2. Create a `server/.env` file and add the following environment variables:

```env
MONGO_DB_URI=<your-mongo-uri>
```

## Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/typescript/todo-list-flutter`

## Run the example locally

1. From a first terminal, run `genezio local` in the `server/` folder to start the local server.
2. From a second terminal, start the Flutter app by going to the `client/` folder and run `flutter run -d chrome`.

Note: You must have `MONGO_DB_URI` exported as an environment variable or set in the `.env` file in the `server/` folder.

Flutter will start a new tab in your default browser with the todo list app that you can test locally.

## Deploy the project

1. Run `genezio deploy` in the `server` directory to deploy the project to the cloud.

`genezio` will provide in the terminal a publicly available URL where you can access your application.

Note: To remotely set the environment variables, you can deploy using `genezio deploy --env .env` command.

## Genezio Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                       |
| :----------------------- | :--------------------------- |
| `npm install -g genezio` | Installs genezio globally    |
| `genezio login`          | Logs in to genezio           |
| `genezio local`          | Starts a local server        |
| `genezio deploy`         | Deploys a production project |
| `genezio --help`         | Get help using genezio       |

## Want to learn more?

Check out:

- [Official genezio documentation](https://genezio.com/docs)
- [Genezio tutorials](https://genezio.com/blog)
- [Discord channel](https://discord.gg/uc9H5YKjXv)

## Contact

If you need support or you have any questions, please join us in our [Discord channel](https://discord.com/invite/uc9H5YKjXv). We'd love to chat!
