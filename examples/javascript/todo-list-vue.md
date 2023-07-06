# todo-list-vue

This is an example of a todo application with users, auth and tasks that uses VueJS for the frontend application and Genezio for deploying and developing the backend.

Note: `genezio deploy` deploys both backend and frontend. If you want to test this example out-of-the-box by running 1 command, head to the `server` directory and run `genezio deploy`.

If you want to deploy your application step-by-step, follow the guidelines below.

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/javascript/todo-list-vue`

### Initialization

1. Run `npm install` in the `server/` folder to install the dependencies.
2. Run `npm install` in the `client/` folder to install the dependencies.

### Run the example locally

1. Run `genezio local` in the `server/` folder to start the local server.
2. Start the VueJS app by going to the `client/` folder and run `npm run dev`.

### Deploy the example in the Genezio infrastructure

1. Run `genezio deploy --backend` in the `server/` folder that contains also the `genezio.yaml` file. This will deploy your code in the Genezio infrastructure and it will also create an SDK that can be used to call the methods remotely.
2. Start the VueJS app by going to the `client/` folder and run `npm run dev`.

### Deploy the frontend in Genezio Infrastructure

1. Run `npm i && npm run build` in the `client` folder to build the VueJS app.
2. Run `genezio deploy --frontend` in the `server` folder to deploy the frontend in the Genezio infrastructure.

Github files are available [**here**](https://github.com/Genez-io/genezio-examples/tree/master/javascript/todo-list-vue).
