# YAML Configuration File

All of the configuration details about a project are set inside `genezio.yaml`.&#x20;

<pre><code>.
├── server/
│   ├── <a data-footnote-ref href="#user-content-fn-1">genezio.yaml</a>
│   ├── .genezioignore
│   └── index.js
└── client/
    ├── src/
    ├── build/
    └── sdk/
</code></pre>

A minimalist `genezio.yaml` file can be created using `genezio init` and completing the wizard.

Check out an example of a `genezio.yaml` configuration file:

```yaml
name: getting-started
region: us-east-1
sdk:
  language: js
  path: ../client/src/sdk/
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
classes:
  - path: "./index.js"
    type: jsonrpc
    methods:
      - name: "sayHiEveryMinute"
        type: cron
        cronString: "* * * * *"
      - name: "helloWorldOverHttp"
        type: http
      - name: "helloWorldOverJsonrpc"
        type: jsonrpc
      - name: "helloWorldOverJsonrpcByDefault"
```

### Name

This will be the name of the project when the project is deployed. A user can't have two projects with the same name.

### Region

The region field can be used to configure where you want your project to be deployed. It would be best to choose the closest location to your users. The supported regions are:

```
"us-east-1", "us-east-2", "us-west-1", "us-west-2", "ap-south-1", "ap-northeast-3", "ap-northeast-2", "ap-southeast-1", "ap-southeast-2", "ap-northeast-1", "ca-central-1", "eu-central-1", "eu-west-1", "eu-west-2", "eu-west-3", "eu-north-1", "sa-east-1"
```

### Scripts

* **preBackendDeploy:** this script runs only before deploying the backend
* **postBackendDeploy**: this script runs only after deploying the backend
* **preFrontendDeploy**: this script runs only before deploying the frontend
* **preBackendDeploy**: this script runs only after deploying the frontend

### SDK

* **language:** The programming language that will be used for the SDK.
* **path:** The path where the SDK will be saved. If a file already exists on that path, it will be overwritten.

### Frontend

* **path:** The path to your frontend build.
* **subdomain:** The subdomain of genezio you would like your application to run on. It's not a mandatory field. If you leave it out, genezio will provide a random subdomain for you.

### Classes

A list of classes that will be handled by the genezio CLI.

* **path:** The path at which the class can be located.
* **type** (optional): If a method of this class does not specify any `type` property, the trigger for that method will be this value. If not specified, `jsonrpc` is assumed as the default value.
* **methods** (optional): A list of methods that this class contains. This property is mandatory only if you need to configure one or multiple methods (e.g.: adding a cron string). Each method has the following parameters:
  * **name** (optional): The name of the method. It should be the same name as in the code.
  * **type** (optional): The method type. This can be either: `http`, `jsonrpc` or `cron`. If not specified, the value of this field will be set as the class' `type` property.
  * **cronString:** Only required if the method is of `type: cron`. This specifies how frequently the method should be called. For complete documentation of the cronstring's format check [https://crontab.guru/](https://crontab.guru/)

### Options

Specify other specific properties for the programming language that you use:

* **nodeRuntime:** The node runtime version that will be used by your NodeJS application. The supported values are`nodejs16.x`, `nodejs18.x`. Currently, the default value is `nodejs16.x`.

```
options:
  nodeRuntime: nodejs18.x
```

[^1]: 
