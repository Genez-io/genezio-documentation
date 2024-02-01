# Genezio Configuration File

The `genezio.yaml` file contains all the settings for deploying your project.

Check out an example of a complete `genezio.yaml` configuration file:

```yaml
name: getting-started
region: us-east-1
cloudProvider: genezio
language: ts
packageManager: npm
options:
  nodeRuntime: nodejs18.x
frontend:
  path: ../client/build
  subdomain: test-domain # not mandatory, we will provide a random one for you
scripts:
  preBackendDeploy: "echo 'preBackendDeploy'"
  postBackendDeploy: "echo 'postBackendDeploy'"
  preFrontendDeploy: "echo 'preFrontendDeploy'"
  postFrontendDeploy: "echo 'postFrontendDeploy'"
  preStartLocal: "echo 'preStartLocal'"
  postStartLocal: "echo 'postStartLocal'"
  preReloadLocal: "echo 'preReloadLocal'"
workspace:
  backend: ./server
  frontend: ./client
```

### Name

This will be the name of the project when the project is deployed. A user can't have two projects with the same name.

### Region

The region field can be used to configure where you want your project to be deployed. It would be best to choose the closest location to your users. The supported regions are:

```
"us-east-1", "us-east-2", "us-west-1", "us-west-2", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-west-3", "eu-north-1", "sa-east-1"
```

### Cloud Provider

This is used to choose the deployment environment. Check the [advanced](../advanced/ "mention") section for more details.

The supported values are:

```
"genezio", "selfHostedAws" 
```

### Language

The language is used to indicate the programming language used to implement the project:

The supported values are:

```
js, ts
```

Note: You can also use `dart`, or `kotlin` but the features for dart are currently experimental and prone to changes.

### Package Manager

The package manager is used to indicate which Node package manager is installed in the project:

The supported values are:

```
npm, pnpm, yarn
```

### Scripts

* **preBackendDeploy:** this script runs only before deploying the backend
* **postBackendDeploy**: this script runs only after deploying the backend
* **preFrontendDeploy**: this script runs only before deploying the frontend
* **preBackendDeploy**: this script runs only after deploying the frontend
* **preStartLocal**: this script runs before starting the local server
* **postStartLocal**: this script runs immediately after starting the local server
* **preReloadLocal**: this script runs before every reload of the local server. A reload is triggered when a change occurs in the project (usually on creating new files or on saving changes on a file)

### Options

Specify other specific properties for the programming language that you use:

* **nodeRuntime:** The node runtime version that will be used by your NodeJS application. The supported values are`nodejs16.x`, `nodejs18.x`. Currently, the default value is `nodejs16.x`.

```
options:
  nodeRuntime: nodejs18.x
```

### Frontend

* **path:** The path to your frontend build.
* **subdomain:** The subdomain of genezio you would like your application to run on. It's not a mandatory field. If you leave it out, genezio will provide a random subdomain for you.

### Workspace

* **backend:** The path to the backend directory.
* **frontend:** The path to the server directory.

### SDK

Use this field to set the path and language for the genezio generated SDK.

{% hint style="info" %}
For TypeScript and JavaScript projects, `sdk` is being deprecated. Read more in [generated-sdk.md](../features/generated-sdk.md "mention").
{% endhint %}

Below is a code snippet to generate an SDK for a Flutter client. The SDK will be generated in Dart and saved at the path `../client/src/sdk`:

```yaml
sdk:
  language: dart
  path: ../client/src/sdk
```

* **language**: The programming language of the client/frontend. Supported values for now are: ts, js, dart (experimental), python(experimental), swift(experimental).
* **path**: The path to generate the SDK to.

### Classes

This field can be used to indicate which classes and methods to deploy with genezio.

{% hint style="info" %}
For TypeScript and JavaScript projects, `classes` is being deprecated in favor of [genezio-decorators.md](genezio-decorators.md "mention").
{% endhint %}

This field is now especially useful for deploying projects implemented in Dart.

Below is a code snippet to deploy a class named `TaskService` with the following methods:

* `handletHttp` as an http method.
* `sayHelloEveryMinute` as a scheduled method.
* other methods implemented in `TaskService` are called using JSON rpc.

```yaml
classes:
  - path: ./task.js
    type: jsonrpc
    name: TaskService
    methods:
      - name: handletHttp
        type: http
      - name: sayHelloEveryMinute
        type: cron
        cronString: * * * * *
```

* **path:** The path at which the class can be located.
* **type** (optional): If a method of this class does not specify any `type` property, the trigger for that method will be this value. If not specified, `jsonrpc` is assumed as the default value.
* **name(optional):** Indicate the name of the class to be deployed. Used only for backend classes written in Dart.
* **methods** (optional): A list of methods that this class contains. This property is mandatory only if you need to configure one or multiple methods (e.g.: adding a cron string). Each method has the following parameters:
  * **name** (optional): The name of the method. It should be the same name as in the code.
  * **type** (optional): The method type. This can be either: `http`, `jsonrpc` or `cron`. If not specified, the value of this field will be set as the class' `type` property.
  * **cronString:** Only required if the method is of `type: cron`. This specifies how frequently the method should be called. For complete documentation of the cronstring's format check [https://crontab.guru/](https://crontab.guru/)
