---
description: Learn how to deploy a Django application with Genezio.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Django

<head>
    <title>Django | Genezio Documentation</title>
</head>

Django is a popular Python web application framework that simplifies the development of server-side applications. It
provides a robust set of features for building web servers and APIs.

:::tip
Get started in no time with the [Django template](https://github.com/Genez-io/django-getting-started).
:::

# Deployment

Learn how to deploy an existing Django app using Genezio, a serverless deployment platform that simplifies app
management
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

### 2. Ensure you have a Django App

If you don't have a Django app, you can create one using the following steps:

<details>
  <summary>**Create a Hello World Django App**</summary>

<h3>1. Initialize a new Python Project</h3>

Run the following command to initialize a new Python project in an empty directory:

```bash
mkdir django-app
cd django-app
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

<h3>4. Install Django</h3>

Next, install the Django package:

```bash
pip3 install Django
pip3 freeze > requirements.txt
```

<h3>5. Create a Django Project</h3>

Run the following command to create a new Django project:

```bash
django-admin startproject project_name
cd project_name
```

<h3>6. Create a New Django App</h3>

<Tabs>
<TabItem className="tab-item" value="windows" label="Windows">
<div id="windows">
```
python manage.py startapp app_name
```
</div>
</TabItem>
<TabItem className="tab-item" value="linux" label="Linux">
<div id="linux">
```
python3 manage.py startapp app_name
```
</div>
</TabItem>
<TabItem className="tab-item" value="macos" label="Mac">
<div id="macos">
```
python3 manage.py startapp app_name
```
</div>
</TabItem>
</Tabs>

<h3>7. Update your settings.py</h3>

In your settings.py file (located in the project_name directory), add your app to the INSTALLED_APPS list:

```python title="settings.py"
INSTALLED_APPS = [
    # ... other apps ...
    'app_name',
]
```

<h3>8. Update your urls.py</h3>

In your urls.py file (located in the project_name directory), add a path to your app:

```python title="urls.py"
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('app_name.urls')),
]
```

<h3>9. Create a View</h3>

Create a new file named `views.py` in the app_name directory and add the following code:

```python title="views.py"
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, World!")
```

<h3>10. Create a URL Configuration</h3>

In the urls.py file of your app (located in the app_name directory), create a simple view for demonstration purposes:

```python title="urls.py"
from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
]
```

<h3>11. Run the Server</h3>

Run the following command to start the Django server:

<Tabs>
    <TabItem className="tab-item" value="windows" label="Windows">
    <div id="windows">
    ```
    python manage.py runserver
    ```
    </div>
    </TabItem>
    <TabItem className="tab-item" value="linux" label="Linux">
    <div id="linux">
    ```
    python3 manage.py runserver
    ```
    </div>
    </TabItem>
  <TabItem className="tab-item" value="macos" label="Mac">
    <div id="macos">
    ```
    python3 manage.py runserver
    ```
    </div>
    </TabItem>
</Tabs>

Open a web browser and navigate to [http://localhost:8000](http://localhost:8000) to see the app running.

</details>

## Deployment Guide

## 1. Create the Genezio Configuration File

Now, create a `genezio.yaml` file in the root directory of your project.

This file will contain the configuration needed to deploy your backend using Genezio. Here is an example configuration.

:::info

1. You need to have a `requirements.txt` file in the root directory of your project for dependencies.
2. You might need to replace the `handler` field with the name of your variable that holds the Django app.
3. You might need to replace the `entry` field with the name of your wsgi application file.
4. You might need to replace the `path` field with the path relative at **genezio.yaml** file.
5. This example configuration works if **genezio.yaml** is in the same directory as your `manage.py` file and the Django app is named `app_name`.
   :::

```yaml title="genezio.yaml"
# The name of the project.
name: django-app
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
    - name: hello-world-django-app-function
      # The path to the function's code.
      path: app_name
      # The name of the wsgi application.
      handler: application
      # The entry point for the function.
      entry: wsgi.py
      # The type of the function.
      type: httpServer
```

This configuration file specifies the project name, deployment region, and details about the backend.

## 2. Allow Genezio to manage your Django app

In your Django app, you need to add `.genez.io` to your `ALLOWED_HOSTS` list in the `settings.py` file:

```python title="settings.py"

ALLOWED_HOSTS = ['
    '.genez.io',
    'localhost',
]
```

## 3. Test Your App Locally

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

## 4. Deploy your project

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

After deploying your application, you can test it to ensure it's running correctly. To verify that your Django app is
working, open a web browser and navigate to the URL provided for your deployed function.

This URL can be found in the deployment output under the `Functions Deployed` section.

Additionally, you can monitor and manage your app through the [Genezio App Dashboard](https://app.genez.io/dashboard).
The dashboard URL, also provided after deployment, allows you to access comprehensive views of your project's status and
logs.

You can find this URL in the deployment output under the `App Dashboard URL` section.

## Known limitations

Genezio do not support SQLite database, because SQLite is not suitable for serverless applications. You need to use a different database like PostgreSQL or MySQL.

## Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
