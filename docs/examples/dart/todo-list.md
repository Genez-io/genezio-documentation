---
sidebar_position: 1
---

# Todo List with Flutter

:::warning
Running `dart` on the backend side is still experimental work. If you encounter any issues, please let us know by creating a new [GitHub issue](https://github.com/Genez-io/genezio/issues).
:::

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/dart/todo-list).
:::

This is an example of a todo application that uses:

- `Dart` for the backend
- `Flutter` for the frontend
- `MongoDB`
- `genezio` for developing and deploying the project

## Prerequisites:

1. Host a Mongo Database. Follow this [tutorial](https://genezio.com/docs/tutorials/connect-to-mongodb-atlas) to get a free tier database.
2. Create a `server/.env` file and add the following environment variables:
```env
MONGODB_URI=todo
```

## Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/dart/todo-list`

## Initialization

1. Run `dart pub get` in the `server/` folder to install the dependencies.
2. Run `flutter pub get` in the `client/` folder to install the dependencies.
3. Create a `.env` file in the `server/` folder and add MongoDB URI and the database table name.

## Deploy the example in the genezio infrastructure

Run `genezio deploy` in the `server/` folder that contains also the `genezio.yaml` file. This will deploy your code in the genezio infrastructure. The application will be available at the URL provided in the terminal.

## Run the example locally

1. Run `genezio local` in the `server/` folder to start the local server.
2. Start the Flutter app by going to the `client/` folder and run `flutter run -d chrome`.
