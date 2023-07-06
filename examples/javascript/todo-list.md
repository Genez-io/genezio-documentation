# todo-list

This is an example of a todo-list application with users, auth, and tasks that use React for the frontend application and genezio for deploying and developing the backend.

Below is the README file and GitHub link.

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/javascript/todo-list`

### Initialization

1. Run `npm install` in the `server/` folder to install the dependencies.
2. Run `npm install` in the `client/` folder to install the dependencies.

### Run the example locally

1. Run `genezio local` in the `server/` folder to start the local server.
2. Start the React app by going to the `client/` folder and run `npm start`.

### Deploy the example to the genezio infrastructure

1. Run `genezio deploy` in the `server/` folder that also contains the `genezio.yaml` file. This will deploy your code to the genezio infrastructure and it will also create an SDK that can be used to call the methods remotely.
2. Start the React app by going to the `client/` folder and run `npm start`.



Github files are available [**here**](https://github.com/Genez-io/genezio-examples/tree/master/javascript/todo-list).
