---
description: Learn how to deploy a Flask application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Flask

<head>
    <title>Flask | Genezio Documentation</title>
</head>

Flask is a popular Python web application framework that simplifies the development of server-side applications. It
provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [Flask template](https://github.com/Genez-io/flask-getting-started).
:::

# Deployment

Learn how to deploy an existing Flask app using Genezio, a serverless deployment platform that simplifies app management
and reduces costs.

## Prerequisites

### 1. Install genezio

Use your preferred package manager to install Genezio:

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

### 2. Ensure you have a Flask App

If you don't have a Flask app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Flask App**</summary>

<h3>1. Initialize a new Python Project</h3>

Run the following command to initialize a new Python project in an empty directory:

```bash
mkdir flask-app
cd flask-app
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

<h3>4. Install Flask</h3>

Next, install the Flask package:

```bash
pip3 install Flask
pip3 freeze > requirements.txt
```

<h3>5. Create a Flask App</h3>

Create a new file named `index.py` and add the following code:

```python title="index.py"
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
```

<h3>6. Test the Flask App</h3>

Run the following command to start the Flask app:

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

Open a web browser and navigate to [http://localhost:5000](http://localhost:5000) to see the app running.

</details>

## Deployment Guide

## 1. Create the Genezio Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info

1. You need to have a `requirements.txt` file in the root directory of your project for dependencies.
2. You might need to replace the `handler` field with the name of your variable that holds the Flask app.
3. You might need to replace the `entry` field with the name of your main application file.
4. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
5. This example configuration works if **genezio.yaml** is in the same directory as your main application file.
   :::

```yaml title="genezio.yaml"
# The name of the project.
name: flask-app
# The region where the project is deployed. Available regions: us-east-1, eu-central-1
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
  # Information about the backend's functions.
  functions:
    # The name (label) of the function.
    - name: hello-world-flask-app-function
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

Open a web browser and navigate to [http://localhost:5000](http://localhost:5000) to see the app running.

## 3. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your Genezio account and
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

## See your app in Genezio Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your Flask app is
working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard).
The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and
logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
