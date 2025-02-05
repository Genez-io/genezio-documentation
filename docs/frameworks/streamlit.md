---
description: Learn how to deploy a Streamlit application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Streamlit

<head>
    <title>Streamlit | Genezio Documentation</title>
</head>

Streamlit is a Python framework for building data science and machine learning web applications, making it easy to create interactive dashboards and visualizations.

:::tip
Get started in no time with the [Streamlit template](https://app.genez.io/auth/signup?redirect=streamlit-getting-started).
:::

# Deployment

Learn how to deploy an existing Streamlit app using Genezio, a serverless deployment platform that simplifies app management and reduces costs.

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

### 2. Ensure you have a Streamlit App

If you don't have a Streamlit app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Streamlit App**</summary>

<h3> 1. Set up your project </h3>

Create a new directory and install Streamlit:

```bash
mkdir my-streamlit-app
cd my-streamlit-app
pip install streamlit
```

Create a new file called `app.py` with this basic example:

```python
import streamlit as st

st.title('Hello World!')
st.write('Welcome to my Streamlit app!')
```

<h3> 2. Create requirements.txt </h3>

To ensure all dependencies are properly tracked and installed during deployment, create a `requirements.txt` file by running:

```bash
pip freeze > requirements.txt
```

Alternatively, you can manually create a `requirements.txt` file with just the necessary dependencies:

```text
streamlit
```

<h3> 3. Test the Streamlit App </h3>

Run the following command to start the Streamlit app:

```bash
streamlit run app.py
```

Open a web browser and navigate to [http://localhost:8501](http://localhost:8501) to see the app running.

</details>

## Deployment Guide

## 1. Create configuration file

First, you need to create the configuration file in the root directory of your Streamlit app, run the following command:

```bash
genezio analyze
```

This command will analyze your project and create the `genezio.yaml` file in the root directory of your Streamlit app, with the following content:

```yaml
# The name of your project, which also influences the subdomain of the project.
name: genezio-project
# Select a region closest to your user base for optimal performance.
region: us-east-1
# Specifies the version of the YAML configuration syntax being used.
yamlVersion: 2
# Configuration specific to the Streamlit project setup.
streamlit:
    # The path to the directory containing your Streamlit app.
    path: .
    # The package manager used to install dependencies.
    packageManager: pip
    # The entry file of your Streamlit app.
    entryFile: app.py
    # The runtime to use for your Streamlit app.
    runtime: python3.13.x
```

:::info Supported Python Runtimes
Genezio supports the following Python runtime values:
- `python3.9.x`
- `python3.10.x`
- `python3.11.x`
- `python3.12.x`
- `python3.13.x`

Use these exact values in your `genezio.yaml` configuration file, at the `runtime` field.
:::


## 2. Deploy your project

Finally, deploy your project. A browser window will open, and you will be prompted to log in to your Genezio account and authorize the CLI to make the deployment.
Run the following command in your terminal:

```bash
genezio deploy
```

:::warning
The `requirements.txt` file is required for the deployment to work.
:::

## Local Development

To develop and test your app locally, run:

```bash
genezio local
```

This command starts a local development server on port 8501 by default. You can specify a custom port by setting the `GENEZIO_PORT_STREAMLIT` environment variable using one of these methods:

- Add `GENEZIO_PORT_STREAMLIT=<port>` to your `.env` file
- Windows: Run `set GENEZIO_PORT_STREAMLIT=<port> && genezio local`
- macOS/Linux: Run `GENEZIO_PORT_STREAMLIT=<port> genezio local`

## See your app in Genezio Dashboard

After deploying your application, you can test it to ensure it's running correctly. To verify that your Streamlit app is working, open a web browser and navigate to the URL provided for your deployed app.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard). The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
