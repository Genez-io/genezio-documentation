# hello-world

In this example, we have a class with two functions that return a welcome message.\
Below is the README file and GitHub link.

## Hello World example

The class is implemented in javascript in the `./server/hello.js` file.

To deploy and test it run `genezio deploy`. Once the command was successfully executed you can run `node ./client/test-hello-sdk.js`.

### Clone the example

1. Run `git clone https://github.com/Genez-io/genezio-examples`
2. Navigate to the folder `cd ./genezio-examples/javascript/hello-world`

### Run the example locally

1. Run `genezio local` in the `server/` folder. This will generate the SDK and start a local web server that listens for requests.
2. Open a new terminal and run `node ./client/test-hello-sdk.js`. This script will use the SDK to call the methods that you have deployed locally in the previous step.
3. You should see the greeting messages.

### Deploy the example to the genezio infrastructure

1. Run `genezio deploy` in the `server/` folder. This will deploy the code to the genezio infrastructure and it will create the SDK.
2. Run `node ./client/test-hello-sdk.js`. Now the script will use the SDK to call the methods that you have previously deployed to the genezio infrastructure.
3. You should see the greeting messages.

Github files are available [**here**](https://github.com/Genez-io/genezio-examples/tree/master/javascript/hello-world).

