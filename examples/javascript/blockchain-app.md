# blockchain-app

In this example, we have implemented a class that queries periodically using BlastAPI smart contract events and saves them in a MongoDB.

The class is implemented in the `./server/blockchainServer.js` file.

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/javascript/blockchain`

### Initialization

1. Run `npm install` in the `server/` folder to install the dependencies.
2. Run `npm install` in the `client/` folder to install the dependencies.

### Run the example locally

1. Run `genezio local` in the `server/` folder. This will start a local web server that listens for requests.
2. Open a new terminal and run the React app in the `client/` folder.

### Deploy the example to the genezio infrastructure

1. Run `genezio deploy` in the `server/` folder. This will deploy the code to the genezio infrastructure and it will create the SDK.
2. Open a new terminal and run the React app in the `client/` folder.



Github files are available [**here**](https://github.com/Genez-io/genezio-examples/tree/master/javascript/blockchain).
