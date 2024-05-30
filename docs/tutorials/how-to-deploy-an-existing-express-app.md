---
sidebar_position: 1
---

# How to Deploy an Existing Express.js App

In this tutorial, you will learn how to deploy an existing Express.js app using Genezio, a serverless deployment platform that simplifies app management and reduces costs. We'll cover the benefits, answer common questions, and provide detailed migration steps.


## Why Migrate to Genezio?

### Benefits of Using Genezio

1. **Faster Deployment**: Genezio optimizes the deployment process, significantly reducing the time it takes to get your app live.
2. **Lower Costs**: Pay only for the resources you use, thanks to Genezio’s efficient infrastructure and scalable solutions.
3. **Easy Migration**: Comprehensive documentation and support make migrating your existing Express app straightforward.
4. **Reliable and Scalable**: Genezio offers a robust, auto-scalable environment, ensuring your app can handle varying loads effortlessly.
5. **Enhanced Security**: Built-in security features and automatic updates protect your app against the latest threats without additional effort.
6. **Reduced Management Overhead**: Focus on developing your app instead of managing servers and routine maintenance tasks.

### How Does Genezio Handle High Traffic?

Genezio automatically scales your application based on traffic demands, ensuring your app remains responsive and performs well during traffic spikes.

### What Kind of Support Does Genezio Offer?

Genezio provides 24/7 support for paid plans to assist with any questions or issues. Our dedicated support team ensures your app runs smoothly on our platform.

### Do I Need to Modify My Express App Code?

Migrating your Express app to Genezio typically requires minimal changes. Our migration guide provides detailed instructions for necessary compatibility adjustments.

### Prerequisites

1. You need to have a **Genezio CLI** installed.

```bash
npm install genezio -g
```

2. You need to have an **Express.js app** ready to deploy.

If you don't have an Express.js app, you can create a simple one by following the steps below.

In your terminal, run the following commands:
```bash
mkdir sample-app && cd sample-app
npm init -y
npm install express
touch app.js
```

In the app.js file, add the following code:

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

Here, you create a simple Express.js app that listens on port 3000 and responds with "Hello from my Express app!" when you navigate to the root URL.

You can run your app using the following command:

```bash
node app.js
```

## Migration Guide

## 1. Install `serverless-http`

First, you need to install the `serverless-http` package. Open your terminal and run the following command:

```bash
npm install serverless-http
```

This package allows you to wrap your Express.js application and deploy it using a serverless provider like AWS.

## 2. Export the Handler

Next, you need to export the handler function for your Express.js app. In your main application file (e.g., app.js), add the following code:

```javascript title="app.js"
import serverless from 'serverless-http';
import express from 'express';

const app = express();

// here you define your routes and middleware

export const handler = serverless(app, { provider: "aws" });
```

This code wraps your Express app with the serverless-http package and exports it as a handler for AWS Lambda.

## 3. Create `genezio.yaml`
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

**Note**: 
1. You need to replace the `entry` field with the name of your main application file.
2. You need to replace the `path` field with the path relative at **genezio.yaml** file.
3. This example configuration works if **genezio.yaml** is in the same directory as your main application file.

## 4. Login to Genezio

Before deploying your project, you need to log in to Genezio using the following command:

```bash
genezio login
```

This command will open a browser window where you can log in to your Genezio account.

## 5. Deploy your project

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
