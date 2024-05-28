---
sidebar_position: 1
---

# How to Import an Existing Express.js App

In this tutorial, you will learn how to import an Express.js app using Serverless and Genezio.

### Prerequisites

You need to have a genezio CLI installed. If you haven't installed it yet, you can do so by running the following command in your terminal:

```bash
npm install genezio -g
```

## 1. Install `serverless-http`

First, you need to install the `serverless-http` package. Open your terminal and run the following command:

```bash
npm install serverless-http
```

This package allows you to wrap your Express.js application and deploy it using a serverless provider like AWS.

## 2. Export the Handler

Next, you need to export the handler function for your Express.js app. In your main application file (e.g., index.js), add the following lines:

```javascript title="index.js"
import serverless from 'serverless-http';
import express from 'express';

const app = express();

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
      entry: index.js
      # The cloud
      provider: aws

  # The cloud provider where the backend is deployed.
  cloudProvider: genezio-cloud
```

This configuration file specifies the project name, deployment region, and details about the backend, including the scripts to run and the functions to deploy.

## 4. Deploy with the app.

Finally, deploy your project using the following command in your terminal:

```bash
genezio deploy
```

This command will use the `genezio.yaml` configuration file to deploy your Express.js app to the specified cloud provider.

### Next Step

[Custom domain](/docs/features/custom-domain-configuration.md)

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
