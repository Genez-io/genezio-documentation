---
sidebar_position: 3
description: Running dart on the backend side is still experimental work. If you encounter any issues, please let us know by creating a new GitHub issue.
---

# Chat Application with OpenAi

<head>
  <title>Chat Application with OpenAi & Dart | Genezio Documentation</title>
</head>
:::warning
Running `dart` on the backend side is still experimental work. If you encounter any issues, please let us know by creating a new [GitHub issue](https://github.com/Genez-io/genezio/issues).
:::

:::info
The source code for this example is public on the following [GitHub repository](https://github.com/Genez-io/genezio-examples/tree/master/dart/chatbot-openai).
:::

Welcome to our demo chat app integrated with Chat GPT, written in Flutter (frontend), Dart(backend), MongoDB as a database, and deployed with [genezio](https://genezio.com/).

This app allows users to engage in conversations with a chatbot powered by Chat GPT.
This app is meant to be a demo for a technical talk on the topic of building full-stack apps with Dart and genezio.

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/dart/chatbot-open-ai`

### Replicate this demo

Prerequisites:

1. Get an OpenAI secret key. Create an account on the [OpenAI platform](https://platform.openai.com/) and head to this [link](https://platform.openai.com/account/api-keys) to add a secret key.
2. Host a Mongo Database. Follow this [tutorial](https://genezio.com/docs/tutorials/connect-to-mongodb-atlas) to get a free tier database.
3. Create a `server/.env` file and add the following environment variables:

```env
OPENAPI_KEY=todo
MONGODB_URI=todo
```

If you want to deploy this demo and play around with it, follow these steps:

1. Install genezio with `npm install -g genezio`
2. Login on the genezio platform: `genezio login`
3. Clone this repo: `git clone https://github.com/Genez-io/genezio-examples`
4. Head to the server directory and test it locally with: `genezio local`
5. When you are happy with the local version, deploy it on our infrastructure with: `genezio deploy`
6. Brag about it to your friends! You can share the frontend link to your friends and colleagues and let them play around with your new features.

### Learn more

For more details on how to use genezio, check the links below:

- [https://genezio.com/docs](https://genezio.com/docs)
- [https://github.com/genez-io/genezio-examples](https://github.com/genez-io/genezio-examples)

For more details on each dart package, you can check out [pub.dev](https://pub.dev/)
