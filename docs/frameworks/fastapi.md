---
description: Learn how to deploy a FastAPI application with DeployApps.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# FastAPI

<head>
    <title>FastAPI | DeployApps Documentation</title>
</head>

FastAPI is a modern Python web application framework that simplifies the development of server-side applications. It provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [FastAPI template](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/fastapi-getting-started).
:::

# Deployment

Learn how to deploy an existing FastAPI app using DeployApps, a serverless deployment platform that simplifies app management and reduces costs.

## Prerequisites

### 1. Install DeployApps

Use your preferred package manager to install DeployApps:

<Tabs>
  <TabItem className="tab-item" value="npm" label="npm">
<div id="step1-install-npm">
  ```
  npm install genezio -g
  ```
  </div>
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
  <div id="step1-install-pnpm">
  ```
  pnpm add -g genezio
  ```
  </div>
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
  <div id="step1-install-yarn">
  ```
  yarn add global genezio
  ```
  </div>
  </TabItem>
</Tabs>

### 2. Ensure you have a FastAPI App

If you don't have a FastAPI app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World FastAPI App**</summary>

<h3>1. Initialize a new Python Project</h3>

Run the following command to initialize a new Python project in an empty directory:

```bash
mkdir fastapi-app
cd fastapi-app
```

<h3>2. Create Environment Setup</h3>

Create a new virtual environment in the root directory of your project:

<Tabs>
    <TabItem className="tab-item" value="windows" label="Windows">
    <div id="windows">
    ```
    python -m venv venv
    ```
    </div>
    </TabItem>
    <TabItem className="tab-item" value="linux" label="Linux">
    <div id="linux">
    ```
    python3 -m venv venv
    ```
    </div>
    </TabItem>
  <TabItem className="tab-item" value="macos" label="Mac">
    <div id="macos">
    ```
    python3 -m venv venv
    ```
    </div>
    </TabItem>
</Tabs>

<h3>3. Activate the Virtual Environment</h3>

Next, you need to activate the virtual environment:

<Tabs>
    <TabItem className="tab-item" value="windows" label="Windows">
    <div id="windows">
    ```
    .\venv\Scripts\activate
    ```
    </div>
    </TabItem>
    <TabItem className="tab-item" value="linux" label="Linux">
    <div id="linux">
    ```
    source venv/bin/activate
    ```
    </div>
    </TabItem>
  <TabItem className="tab-item" value="macos" label="Mac">
    <div id="macos">
    ```
    source venv/bin/activate
    ```
    </div>
    </TabItem>
</Tabs>

<h3>4. Install FastAPI</h3>

Next, install the FastAPI package:

```bash
pip3 install fastapi uvicorn
pip3 freeze > requirements.txt
```

<h3>5. Create a FastAPI App</h3>

Create a new file named `index.py` and add the following code:

```python title="index.py"
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"Hello": "World"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app)
```

<h3>6. Test the FastAPI App</h3>

Run the following command to start the FastAPI app:

<Tabs>
    <TabItem className="tab-item" value="windows" label="Windows">
    <div id="windows">
    ```
    python index.py
    ```
    </div>
    </TabItem>
    <TabItem className="tab-item" value="linux" label="Linux">
    <div id="linux">
    ```
    python3 index.py
    ```
    </div>
    </TabItem>
  <TabItem className="tab-item" value="macos" label="Mac">
    <div id="macos">
    ```
    python3 index.py
    ```
    </div>
    </TabItem>
</Tabs>

Open a web browser and navigate to [http://localhost:8000](http://localhost:8000) to see the app running.

</details>

## Deployment Guide

## 1. Create the DeployApps Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using DeployApps. Here is an example configuration.

:::info

1. You need to have a `requirements.txt` file in the root directory of your project for dependencies.
2. You might need to replace the `handler` field with the name of your variable that holds the FastAPI app.
3. You might need to replace the `entry` field with the name of your main application file.
4. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
5. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
6. The `runtime` field is the Python runtime to use for your FastAPI app, currently, the supported runtimes are: [python3.9.x, python3.10.x, python3.11.x, python3.12.x, python3.13.x]
   :::

```yaml title="genezio.yaml"
# The name of the project.
name: fastapi-app
# The region where the project is deployed. Available regions: us-east-1, eu-central-1, eu-west-1
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
backend:
  # The root directory of the backend.
  path: ./
  # Information about the backend's programming language.
  language:
    # The name of the programming language.
    name: python
    # The package manager used by the backend.
    packageManager: pip
    # The runtime to use for your FastAPI app.
    runtime: python3.13.x
  # Information about the backend's functions.
  functions:
    # The name (label) of the function.
    - name: hello-world-fastapi-app
      # The path to the function's code.
      path: ./
      # The name of the wsgi application.
      handler: app
      # The entry point for the function.
      entry: index.py
      # The type of the function.
      type: httpServer
```

This configuration file specifies the project name, deployment region, and details about the backend.

## 2. Test Your App Locally

Before deploying your app, you can test it locally to ensure it's working correctly.

Run the following command in your terminal:

<Tabs>
    <TabItem className="tab-item" value="windows" label="Windows">
    <div id="windows">
    ```
    python index.py
    ```
    </div>
    </TabItem>
    <TabItem className="tab-item" value="linux" label="Linux">
    <div id="linux">
    ```
    python3 index.py
    ```
    </div>
    </TabItem>
  <TabItem className="tab-item" value="macos" label="Mac">
    <div id="macos">
    ```
    python3 index.py
    ```
    </div>
    </TabItem>
</Tabs>

Open a web browser and navigate to [http://localhost:8000](http://localhost:8000) to see the app running.

## 3. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your DeployApps account and
authorize the CLI to make the deployment.
Run the following command in your terminal:

```bash
genezio deploy
```

If your application use environment variables, you can deploy them using the following command:

```bash
genezio deploy --env <path-to-your-env-file>
```

:::info
You need to deploy your environment variables only once.
After that, you can deploy your project without the `--env` flag.
:::
For more information about environment variables, you can check
the [official documentation](/docs/project-structure/backend-environment-variables.md).

:::note
During the deployment process, DeployApps automatically installs all dependencies specified in your `requirements.txt` file using:
- The correct architecture (Linux x86)
- The Python runtime specified in `genezio.yaml`

This process ensures compatibility with our serverless infrastructure, defaulting to the latest Python 3.13.x version.
:::

## See your app in DeployApps Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your FastAPI app is
working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [DeployApps App Dashboard](https://app.genez.io/dashboard).
The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and
logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

**Happy Learning!**
