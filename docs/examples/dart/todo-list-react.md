---
sidebar_position: 2
description: Explore the DART & React To-Do List Example with Genezio. Learn to build a dynamic to-do list app using DART and React.
---

# Todo List with React

<head>
  <title>Dart & React Todo List Example | Genezio Documentation</title>
</head>
:::warning
Running `dart` on the backend side is still experimental work. If you encounter any issues, please let us know by creating a new [GitHub issue](https://github.com/Genez-io/genezio/issues).
:::

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/dart/todo-list-react-typescript).
:::

This is an example of a todo application that uses:

- `Dart` for the backend
- `React` for the frontend
- `MongoDB`
- `genezio` for developing and deploying the project

Note: `genezio deploy` deploys both backend and frontend.
If you want to test this example out-of-the-box by running 1 command, head to the `server` directory and run `genezio deploy`.

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

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/dart/todo-list-react-typescript`

### Initialization

1. Run `dart pub get` in the `server/` folder to install the dependencies.
2. Run `npm install && npm run build` in the `client/` folder to install the dependencies.

### Run the example locally

1. Run `genezio local` in the `server/` folder to start the local server.
2. Start the Flutter app by going to the `client/` folder and run `flutter run -d chrome`.

### Deploy the example in the genezio infrastructure

1. Run `genezio deploy --backend` in the `server/` folder that contains also the `genezio.yaml` file. This will deploy your code in the genezio infrastructure and it will also create an SDK that can be used to call the methods remotely.
2. Start the Flutter app by going to the `client/` folder and run `flutter run -d chrome`.

### Deploy the frontend in genezio Infrastructure

1. Run `npm install && npm run build` in the `client/` folder to build the Flutter app.
2. Run `genezio deploy --frontend` in the `server` folder to deploy the frontend in the genezio infrastructure.

Github files are available [**here**](https://github.com/Genez-io/genezio-examples/tree/master/dart/todo-list-react-typescript).
