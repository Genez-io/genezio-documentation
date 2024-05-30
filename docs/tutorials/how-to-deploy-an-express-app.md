---
sidebar_position: 1
---

# How to Deploy an Express.js App

In this tutorial, you will learn how to deploy an Express.js app using Serverless and Genezio.

### Prerequisites

You need to have a genezio CLI installed. If you haven't installed it yet, you can do so by running the following command in your terminal:

```bash
npm install genezio -g
```
### Create an Express.js App

## 1. First, create an Express.js app using the following commands:

```bash
mkdir sample-app && cd sample-app
npm init -y
npm install express
touch app.js
```

## 2. Add the following code to your app.js file:

```javascript title="app.js"
import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from my Express app!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
```
Here, we create a simple Express.js app that listens on port 3000 and responds with "Hello from my Express app!" when you navigate to the root URL.

You can run your app using the following command:

```bash
node app.js
```
## 3. Convert the express app to make it ready to deploy

## Install `serverless-http`

First, you need to install the `serverless-http` package. Open your terminal and run the following command:

```bash
npm install serverless-http
```

This package allows you to wrap your Express.js application and deploy it using a serverless provider like AWS.

## 4. Export the Handler

Next, you need to export the handler function for your Express.js app. In your main application file (app.js), add the following lines:

```javascript title="app.js"
import serverless from 'serverless-http';
import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from my Express app!');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

export const handler = serverless(app, { provider: "aws" });
```

This code wraps your Express app with the serverless-http package and exports it as a handler for AWS Lambda.

## 5. Create `genezio.yaml`
Now, create a genezio.yaml file in the root directory of your project. This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration:
```yaml
# The name of the project.
name: express-app

# The region where the project is deployed.
region: us-east-1

# The version of the Genezio YAML configuration to parse.
yamlVersion: 2

backend:
  # The root directory of the backend.
  path: ./
  
  # Information about the backend's programming language.
  language:
    # The name of the programming language.
    name: js
    # The package manager used by the backend.
    packageManager: npm

  # Scripts are running in the specified `path` directory.
  scripts:
    # List of scripts to run before deploying the backend.
    deploy:
      - npm install
    # List of scripts to run before deploying the backend.
    local:
      - npm install

  # The functions that are part of the backend.
  functions:
    # The name of the function.
    - name: test-fn
      # The path to the function.
      path: ./
      # The name of the handler function.
      handler: handler
      # The name of the entry file.
      entry: app.js
      # The cloud
      provider: aws

  # The cloud provider where the backend is deployed.
  cloudProvider: genezio-cloud
```

This configuration file specifies the project name, deployment region, and details about the backend, including the scripts to run and the functions to deploy.

## 6. Login to Genezio

Before deploying your project, you need to log in to Genezio using the following command:

```bash
genezio login
```

This command will open a browser window where you can log in to your Genezio account.

## 7. Deploy your project

Finally, deploy your project using the following command in your terminal:

```bash
genezio deploy
```

If your application use environment variables, you can deploy them using the following command:

```bash
genezio deploy --env <your-env-file-path>
```

Note: You need to deploy your environment variables single time. After that, you can deploy your project without the `--env` flag.

For more information about environment variables, you can check the [official documentation](/docs/project-structure/backend-envinronment-variables.md).

## Test your app
After deploying your application, you can test it to ensure it's running correctly. To verify that your Express.js app is working, open a web browser and navigate to the URL provided for your deployed function. 

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the Genezio App Dashboard. The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs. 

You can find this URL in the deployment output under the `App Dashboard URL` section.

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
