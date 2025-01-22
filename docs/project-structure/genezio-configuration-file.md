---
description: Learn how to configure your Genezio project using the genezio.yaml file. Follow our guide for setup and deployment options
---

# Genezio Configuration File

<head>
  <title>Genezio Configuration File | Genezio Documentation</title>
</head>

The `genezio.yaml` file is a configuration file that contains all the settings for deploying your project.
It uses YAML syntax to define the project's name, services, backend, frontend, and other configurations.

Usually it is localized in the root directory of your project.

## Genezio Configuration File Reference

## `name`: `string` **Required**

The name of the project. It is used to identify the project after deployment.

Restrictions:

- Unique per account
- Must start with a letter and can only contain letters, numbers, and hyphens.

```yaml
# The name of the project.
name: project-name
```

## `region`: `string` **Optional**

The region where the project will be deployed. If not specified, the default region is `us-east-1`.

The supported regions are:

| Region         | Description        |
| -------------- | ------------------ |
| `us-east-1`    | US, North Virginia |
| `eu-central-1` | Europe, Frankfurt  |

```yaml
# The region where the project is deployed. Available regions: us-east-1, eu-central-1
region: us-east-1
```

## `yamlVersion`: `number` **Required**

The version of the genezio YAML file format. The latest version is `2`.

Old format versions may not be supported by latest releases of the Genezio CLI.

```yaml
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
```

## `services`: `Array` **Optional**

The services that can be added to the project. This field can be omitted if the project does not have any services.

The services available in Genezio are:

- `databases`
- `authentication`
- `email`

### `databases`: `Array` **Optional**

The databases that can be added to the project. This field can be omitted if the project does not have any databases.

Multiple databases can be added to the project by adding multiple objects to the `databases` array.

```yaml
services:
  databases:
    - name: my-postgres
      region: us-east-1
      type: postgres-neon
    - name: my-mongodb
      region: eu-central-1
      type: mongodb-atlas
```

Enabling a database service will automatically set an environment variable `<DATABASE_NAME>_DATABASE_URL` that can be used to connect to the database. For example, if the database name is `my-postgres`, the environment variable will be `MY_POSTGRES_DATABASE_URL`.

This resource exposes `uri` as an output expression: `${{services.databases.<database-name>.uri}}`.

#### `name`: `string` **Required**

The name of the database. It is used to identify the database.

#### `type`: `string` **Required**

The type of the database.

There currently are two types of databases supported:

- `postgres-neon` for PostgreSQL databases provided through [**Neon**](https://neon.tech/).
- `mongodb-atlas` for MongoDB databases provided through [**MongoDB Atlas**](https://www.mongodb.com/cloud/atlas).

#### `region`: `string` **Optional**

The region where the database will be deployed. If not specified, the default region the same as the project's region.

You should choose the region that is closest to your server to reduce latency.

The supported regions are:

| Region           | Description             | PostgreSQL | MongoDB |
| ---------------- | ----------------------- | ---------- | ------- |
| `us-east-1`      | US, North Virginia      | ✅         | ✅      |
| `eu-central-1`   | Europe, Frankfurt       | ✅         | ✅      |
| `eu-east-2`      | US, Ohio                | ✅         | ❌      |
| `us-west-2`      | US, Oregon              | ✅         | ❌      |
| `ap-southeast-1` | Asia Pacific, Singapore | ✅         | ❌      |
| `ap-southeast-2` | Asia Pacific, Sidney    | ✅         | ❌      |

### `authentication`: `Object` **Optional**

The authentication service can be enabled for the project.
This field can be omitted if the project does not require authentication.

```yaml
services:
  authentication:
    database:
      name: my-database
    providers:
      email: true
      web3: true
      google:
        clientId: ${{env.GOOGLE_CLIENT_ID}}
        clientSecret: ${{env.GOOGLE_SECRET}}
    settings:
      resetPassword:
        redirectUrl: https://${{frontend.<frontend-name>.subdomain}}.app.genez.io/reset-password
```

This resource exposes `token` and `region` as an output expression:

- `${{services.authentication.token}}`.
- `${{services.authentication.region}}`.

#### `database`: `Object` **Required**

You can reference a database by name. The database should be defined in the `services.databases` field.

```yaml
services:
  databases:
    - name: my-database
      region: us-east-1
  authentication:
    database:
      name: my-database
```

Or you can specify an external (bring-your-own) database by `type` and `uri` directly:

Example for PostgreSQL:

```yaml
services:
  databases:
    type: "postgresql"
    uri: ${{env.POSTGRES_DB_URI}}
```

Example for MongoDB:

```yaml
services:
  databases:
    type: "mongodb"
    uri: ${{env.MONGO_DB_URI}}
```

Note: You should have a `.env` file where you define the `POSTGRES_DB_URI` or `MONGO_DB_URI` environment variables.

You can use expression to define the environment variables. Check the [Usage](#expressions) section for more information.

#### `providers`: `Object` **Optional**

Authentication providers such as `Email`, `Web3/Metamask` or `Google` can be added to the project.

This field can be omitted if you don't want to enable any authentication providers.

```yaml
providers:
  email: true
  web3: true
  google:
    clientId: ${{env.GOOGLE_CLIENT_ID}}
    clientSecret: ${{env.GOOGLE_SECRET}}
```

#### `settings`: `Object` **Optional**

Using this field, the `redirectUrl` for password reset and email verification can be set.

```yaml
settings:
  resetPassword:
    redirectUrl: https://${{frontend.<frontend-name>.subdomain}}.app.genez.io/reset-password
  emailVerification:
    redirectUrl: https://${{frontend.<frontend-name>.subdomain}}.app.genez.io/verify
```

More details on how to use these settings can be found in the [Authentication section](/docs/features/authentication.md).

### `email`: `boolean` **Optional**

The email service can be enabled for the project.
This field can be omitted if the project does not require an email service.

```yaml
services:
  email: true
```

## `backend`: `Object` **Optional**

The backend configuration. This field can be omitted if the project does not have a backend.

#### `path`: `string` **Required**

The path where the backend code is located. It is relative to the `genezio.yaml` file.

If the `classes` field is not specified, the backend path is also used to recursively locate the classes.

If scripts are declared in the `scripts` field, they will be executed from this path.

#### `language`: `Object` **Required**

- `name`: `ts` | `js` | `python` **Required**

  The name of the programming language used in the backend.

- `packageManager`: `npm` | `pnpm` | `yarn` | `pip` | `poetry` **Optional**

  The package manager used to install the project's dependencies. This is used to automatically install dependencies before deploying the backend.
  The default value for TypeScript and JavaScript projects is `npm`. The default value for Python projects is `pip`.

#### `classes`: `Array` **Optional**

- `path`: `string` **Required**

  The source file path at which the class can be located. Relative to the `path` field.

- `name`: `string` **Optional**

  Indicate the name of the class to be deployed.

  Used only for backend classes written in Dart because there is no mechanism to export only a specific class from a Dart file.

- `type`: `jsonrpc` | `http` | `cron` **Optional**

  If not specified, `jsonrpc` is assumed as the default value.

- `methods`: `Array` **Optional**

  - `name`: `string` **Required**

    The name of the method. It should be the same name as in the code.

  - `type`: `jsonrpc` | `http` | `cron` **Optional**

    If not specified, the value of this field will be set as the class's `type` property.

  - `cronString`: `string` **Required** only when `type` is `cron`.

    The cron string that specifies how frequently the method should be called. Check the cron string format on https://crontab.guru/.

- `timeout`: `number` **Optional**

  Specifies how long a request should wait for a response, in seconds. Timeout is the maximum amount of time in seconds that a request can take to complete.
  The default value for this setting is 60 seconds. You can adjust this in increments of 1 second up to a maximum value of 900 seconds (15 minutes).

  To increase the maximum threshold up to 3600 seconds (1 hour), you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

- `storageSize`: `number` **Optional**

  By default a partition of 128MB is mounted to the execution environment. This can be used to store temporary files or cache data. Check the [Temporary Storage](/docs/features/temporary-storage.md) page for more information and usage examples.

  To increase the maximum value up to 512MB, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1MB up to a maximum value of 512MB.

  For larger values, [contact us](mailto:contact@genez.io).

  Note 1: This storage is not persistent across requests. It is not recommend to use it for stateful operations.
  Note 2: Changing the storage size will affect cold start times.

- `instanceSize`: `tiny` | `medium` | `large` **Optional**

  Determines the amount of RAM allocated to the execution environment. The default value for this setting is `tiny`.
  To increase the amount of RAM allocated, you can set the value to `medium` or `large`. A [Pro Subscription](https://app.genez.io/billing) is required to change this configuration.

  tiny = 256MB RAM, 1 VCPU

  medium = 384MB RAM, 1 VCPU

  large = 512MB RAM, 1 VCPU

  For larger instance sizes, [contact us](mailto:contact@genez.io).

- `maxConcurrentRequestsPerInstance`: `number` **Optional**

  Specifies the number of concurrent requests that can be served simultaneously by an execution environment.
  The default value for this setting is 5 concurrent requests per execution environment.

  To increase the maximum value up to 10 concurrent requests, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent requests.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent requests served within the same execution environment. In this case, 2 or more incoming concurrent requests will be automatically distributed across separate execution environments, which are scaled up dynamically by Genezio.

- `maxConcurrentInstances`: `number` **Optional**

  Specifies the number of concurrent instances that can be served simultaneously for a class.
  The default value for this setting is 3 concurrent instances per class.

  To increase the maximum value up to 10 concurrent instances, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent instances per class.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent instances served. In this case, your class will open only one instance. Any traffic trying to access the instance when it has reached the maximum number of concurrent requests will be dropped. THIS IS NOT RECOMMENDED.

- `cooldownTime`: `number` **Optional**

  Specifies the time in milliseconds that the execution environment will be kept alive after the response is sent.
  The default value for this setting is 0 milliseconds. You can adjust this up to a maximum value of 3000 milliseconds (3 seconds).

  To increase the maximum threshold up to 5 minutes, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

#### `environment`: `Object` **Optional**

The environment variables that will be set for the backend.
The variables can be accessed in the code using `process.env`.

You can use expression to define the environment variables. Check the [Usage](#expressions) section for more information.

```yaml
name: my-project
yamlVersion: 2

backend:
  environment:
    MY_ENV_VAR: my-value
    MY_DATABASE_NAME: ${{services.databases.<database-name>.name}}
    MY_SECRET: ${{env.SECRET}}
```

#### `scripts`: `Object` **Optional**

The scripts that run before special backend events occur. If a list is provided to any of the fields, the scripts will be executed sequentially and in case one fails, the execution will be stopped.

Variables can be used in the scripts. Check the [Usage](#variables) section for more information.

- `deploy`: `string` | `string[]` **Optional**

  A general purpose script that runs before the backend is deployed.

- `local`: `string` | `string[]` **Optional**

  A general purpose script that runs before starting the local testing environment.

### Basic `backend` deployment

```yaml title="genezio.yaml
# The name of the project.
name: project-name
# The region where the project is deployed.
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
backend:
  # The root directory of the backend.
  path: .
  # Information about the backend's programming language.
  language:
    # The name of the programming language.
    name: ts
    # The package manager used by the backend.
    packageManager: npm
  # Scripts are running in the specified `path` directory.
  scripts:
    # List of scripts to run before deploying the backend.
    deploy: npm install
    # List of scripts to run before starting `genezio local`.
    local: npm install
```

#### `functions`: `Array` **Optional**

The functions that will be deployed to the cloud. This field can be omitted if the project does not have any functions.

This resource exposes `url` as an output expression: `${{backend.functions.<function-name>.url}}`.

- `name`: `string` **Required**

  This is a label to identify your function in the dashboard for monitoring and logging purposes.

- `path`: `string` **Required**

  The path to the function's code. It is relative to the `path` field.

- `entry`: `string` **Required**

  The file that contains the function. The extension for this file can be `.js`, `.cjs`, `.mjs` or `.py`.

- `type`: `string` **Optional**

  The type of the function. This can be `aws` or `httpServer`. If this field is not specified, the default value is `aws`.

  - `aws` indicates that the function will be deployed as an AWS Lambda handler. This means that the function is either a Lambda event handler or it uses [`serverless-http`](https://www.npmjs.com/package/serverless-http) to convert an Express app to a Lambda event handler.
  - `httpServer` indicates that the function will be deployed as a standalone HTTP server, such as those built with frameworks like `express`, `fastify`, `flask`, `django`, etc.

  Note 1: The recommended way to deploy your app is to use the `httpServer` type unless you are explicitly migrating from an existing AWS Lambda function or using `serverless-http`.
  Note 2: Websocket are supported only for `httpServer` functions.

- `handler`: `string` **Optional**

  If type is `aws`, this field is required. It specifies the name of the handler function in the code.
  For example, if the handler function is `myHandler`, the code should look like this:

  ```typescript
  export const myHandler = async (event, context) => {
    // Your code here
  };
  ```

  ```yaml
  backend:
    functions:
      - name: my-function
        path: ./
        handler: myHandler
        entry: app.mjs
        type: aws
  ```

  Note: For `httpServer` functions this field is not required.

- `timeout`: `number` **Optional**

  Specifies how long a request should wait for a response, in seconds. Timeout is the maximum amount of time in seconds that a request can take to complete.
  The default value for this setting is 60 seconds. You can adjust this in increments of 1 second up to a maximum value of 900 seconds (15 minutes).

  To increase the maximum threshold up to 3600 seconds (1 hour), you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

- `storageSize`: `number` **Optional**

  By default a partition of 128MB is mounted to the execution environment. This can be used to store temporary files or cache data. Check the [Temporary Storage](/docs/features/temporary-storage.md) page for more information and usage examples.

  To increase the maximum value up to 512MB, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1MB up to a maximum value of 512MB.

  For larger values, [contact us](mailto:contact@genez.io).

  Note 1: This storage is not persistent across requests. It is not recommend to use it for stateful operations.
  Note 2: Changing the storage size will affect cold start times.

- `instanceSize`: `tiny` | `medium` | `large` **Optional**

  Determines the amount of RAM allocated to the execution environment. The default value for this setting is `tiny`.
  To increase the amount of RAM allocated, you can set the value to `medium` or `large`. A [Pro Subscription](https://app.genez.io/billing) is required to change this configuration.

  tiny = 256MB RAM, 1 VCPU

  medium = 384MB RAM, 1 VCPU

  large = 512MB RAM, 1 VCPU

  For larger instance sizes, [contact us](mailto:contact@genez.io).

- `maxConcurrentRequestsPerInstance`: `number` **Optional**

  Specifies the number of concurrent requests that can be served simultaneously by an execution environment.
  The default value for this setting is 5 concurrent requests per execution environment.

  To increase the maximum value up to 10 concurrent requests, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent requests.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent requests served within the same execution environment. In this case, 2 or more incoming concurrent requests will be automatically distributed across separate execution environments, which are scaled up dynamically by Genezio.

- `maxConcurrentInstances`: `number` **Optional**

  Specifies the number of concurrent instances that can be served simultaneously for a function.
  The default value for this setting is 3 concurrent instances per function.

  To increase the maximum value up to 10 concurrent instances, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent instances per function.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent instances served. In this case, your function will open only one instance. Any traffic trying to access the instance when it has reached the maximum number of concurrent requests will be dropped. THIS IS NOT RECOMMENDED.

- `cooldownTime`: `number` **Optional**

  Specifies the time in milliseconds that the execution environment will be kept alive after the response is sent.
  The default value for this setting is 0 milliseconds. You can adjust this up to a maximum value of 3000 milliseconds (3 seconds).

  To increase the maximum threshold up to 5 minutes, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

### Backend with `functions` deployment

```yaml title="genezio.yaml
# The name of the project.
name: express-app
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
    name: js
    # The package manager used by the backend.
    packageManager: npm
  # Information about the backend's functions.
  functions:
    # The name (label) of the function.
    - name: hello-world-express-app-function
      # The path to the function's code.
      path: ./
      # The name of the function handler
      handler: handler
      # The entry point for the function.
      entry: app.mjs
      # The compatibility of the function handler.
      type: httpServer
```

## `frontend`: `Object` | `Array` **Optional**

The frontend configuration. This field can be omitted if the project does not have a frontend.

Can be an object or an array of objects if the project has multiple frontends.

#### `name`: `string` **Optional**

The name of the frontend. It is used to identify the frontend inside the configuration file.

#### `path`: `string` **Required**

The path where the frontend code is located. It is relative to the `genezio.yaml` file.

If scripts are declared in the `scripts` field, they will be executed from this path.

#### `sdk`: `Object` **Optional**

The Genezio SDK configuration. If not specified, no SDK will be generated for your frontend.

- `language`: `ts` | `js` | `go` | `dart` | `kotlin` | `swift` | `python` **Required**

  Decides the language in which the Genezio SDK is generated.

- `path`: `string` **Optional**

  The path where the Genezio SDK is generated. It is relative to the `path` field.

  If not specified, the SDK will be generated in `${path}/sdk`.

Decides the language in which the Genezio SDK is generated.

If not specified, no SDK will be generated for your frontend.

#### `publish`: `string` **Optional**

The path to the frontend build. It is relative to the `path` field.

If not specified, the frontend will not be deployed to the CDN.

#### `subdomain`: `string` **Optional**

The subdomain where the frontend will be deployed.

If not specified, a random subdomain will be generated.

#### `redirects`: `Array` **Optional**

A list of redirects that will enable you to redirect traffic from one path to another.

- `from`: `string` **Required**

  The path from which the traffic will be redirected.

- `to`: `string` **Required**

  The path to which the traffic will be redirected.

- `status`: `301` | `302` | `303` | `307` | `308` **Optional**

  The status code for the redirect. The default value is `301`.

```yaml
name: my-project
yamlVersion: 2

frontend:
  redirects:
    - from: /old-path
      to: /new-path
      status: 302
```

Learn more about redirects in the [Redirects and Rewrites](/docs/deploy/frontend/#redirects-and-rewrites) section.

#### `rewrites`: `Array` **Optional**

A list of rewrites that will enable you to rewrite traffic from one path to another.

- `from`: `string` **Required**

  The path from which the traffic will be rewritten.

- `to`: `string` **Required**

  The path to which the traffic will be rewritten.

```yaml
name: my-project
yamlVersion: 2

frontend:
  rewrites:
    - from: /old-path
      to: /new-path
```

Learn more about rewrites in the [Redirects and Rewrites](/docs/deploy/frontend/#redirects-and-rewrites) section.

#### `environment`: `Object` **Optional**

The environment variables that will be injected at build time. The variables can be accessed in the code using `process.env`.

:::tip
Each frontend framework will require a specific prefix for environment variables.
For example, in Vite, you can access environment variables using `import.meta.env.VITE_MY_ENV_VAR`.
:::

```yaml
name: my-project
yamlVersion: 2

frontend:
  environment:
    VITE_MY_ENV_VAR: my-value
    VITE_MY_AUTH_TOKEN: ${{services.authentication.token}}
    VITE_MY_AUTH_REGION: ${{services.authentication.region}}
    VITE_MY_FUNCTION_URL: ${{backend.functions.<function-name>.url}}
```

These environment variables are injected at build time when `scripts.build` are run.

#### `scripts`: `Object` **Optional**

The scripts that run before special frontend events occur. If a list is provided to any of the fields, the scripts will be executed sequentially and in case one fails, the execution will be stopped.

Variables can be used in the scripts. Check the [Usage](#variables) section for more information.

- `deploy`: `string` | `string[]` **Optional**

  A general purpose script that runs before the frontend is deployed.

- `build`: `string` | `string[]` **Optional**

  A script that builds the frontend and populates the `publish` directory. It runs before the frontend is deployed.

- `start`: `string` | `string[]` **Optional**

  A script that starts the frontend dev server. It runs only during local development.

### Example of `frontend` deployment

```yaml title="genezio.yaml
# The name of the project.
name: project-name
# The region where the project is deployed.
region: us-east-1
# The version of the Genezio YAML configuration to parse.
yamlVersion: 2
# Information about the frontend, including the path, language, and publish directory.
# It is optional. It can also be an array if there are multiple frontends you want to deploy.
frontend:
  # The folder where the frontend scripts will run.
  path: .
  # Specifies information about the SDK generation. If not specified, the SDK will not be generated for this frontend.
  sdk:
    # The language the SDK will be written in. Usually the same as the frontend language.
    language: ts
  # The directory that will be published to the CDN. It is relative to the `path` directory.
  publish: dist
  # Scripts are running in the specified `path` directory.
  scripts:
    # List of scripts to run before deploying the frontend.
    deploy:
      - npm install @genezio-sdk/${{projectName}}@1.0.0-${{stage}}
      - npm install
    # List of scripts that build your frontend before deployment. It should populate the specified `publish` directory.
    build: npm run build
    # List of scripts to run when starting the local development server.
    start:
      - npm install
      - npm run dev
```

## container

The Docker container configuration. This field can be omitted if the project is not containerized.

- `path`: `string` **Required**

  The path to the Dockerfile. It is relative to the `genezio.yaml` file.

- `environment`: `Object` **Optional**

  The environment variables that will be set for the server inside the Docker container.

  You can use expression to define the environment variables. Check the [Usage](#expressions) section for more information.

- `timeout`: `number` **Optional**

  Specifies how long a request should wait for a response, in seconds. Timeout is the maximum amount of time in seconds that a request can take to complete.
  The default value for this setting is 60 seconds. You can adjust this in increments of 1 second up to a maximum value of 900 seconds (15 minutes).

  To increase the maximum threshold up to 3600 seconds (1 hour), you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

- `storageSize`: `number` **Optional**

  By default a partition of 128MB is mounted to the execution environment. This can be used to store temporary files or cache data. Check the [Temporary Storage](/docs/features/temporary-storage.md) page for more information and usage examples.

  To increase the maximum value up to 512MB, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1MB up to a maximum value of 512MB.

  For larger values, [contact us](mailto:contact@genez.io).

  Note 1: This storage is not persistent across requests. It is not recommend to use it for stateful operations.
  Note 2: Changing the storage size will affect cold start times.

- `instanceSize`: `tiny` | `medium` | `large` **Optional**

  Determines the amount of RAM allocated to the execution environment. The default value for this setting is `tiny`.
  To increase the amount of RAM allocated, you can set the value to `medium` or `large`. A [Pro Subscription](https://app.genez.io/billing) is required to change this configuration.

  tiny = 256MB RAM, 1 VCPU

  medium = 384MB RAM, 1 VCPU

  large = 512MB RAM, 1 VCPU

  For larger instance sizes, [contact us](mailto:contact@genez.io).

- `maxConcurrentRequestsPerInstance`: `number` **Optional**

  Specifies the number of concurrent requests that can be served simultaneously by an execution environment.
  The default value for this setting is 5 concurrent requests per execution environment.

  To increase the maximum value up to 10 concurrent requests, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent requests.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent requests served within the same execution environment. In this case, 2 or more incoming concurrent requests will be automatically distributed across separate execution environments, which are scaled up dynamically by Genezio.

- `maxConcurrentInstances`: `number` **Optional**

  Specifies the number of concurrent instances that can be served simultaneously for a container.
  The default value for this setting is 3 concurrent instances per container.

  To increase the maximum value up to 10 concurrent instances, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).
  Afterwards, you can adjust this in increments of 1 up to a maximum value of 10 concurrent instances per container.

  For larger values, [contact us](mailto:contact@genez.io).

  Note: Setting this value to 1 disables concurrent instances served. In this case, your container will open only one instance. Any traffic trying to access the instance when it has reached the maximum number of concurrent requests will be dropped. THIS IS NOT RECOMMENDED.

- `cooldownTime`: `number` **Optional**

  Specifies the time in milliseconds that the execution environment will be kept alive after the response is sent.
  The default value for this setting is 0 milliseconds. You can adjust this up to a maximum value of 3000 milliseconds (3 seconds).

  To increase the maximum threshold up to 5 minutes, you [can upgrade to a Pro Subscription](https://app.genez.io/billing).

  For larger values, [contact us](mailto:contact@genez.io).

### Example of `container` deployment configuration

```yaml
name: my-container-project
region: eu-central-1
yamlVersion: 2
container:
  path: ./Dockerfile
  environment:
    MY_ENV_VAR: my-value
```

## nextjs | nuxt | nitro | nestjs | remix

You can use the `nextjs`, `nuxt`, `nitro`, `nestjs`, `remix` field to deploy a Next.js, Nuxt.js, Nitro, Nestjs, or Remix project.

- path: `string` **Required**

  The path to the Dockerfile. It is relative to the `genezio.yaml` file.

- environment: `Object` **Optional**

  The environment variables that will be set for the server inside the Docker container.

  You can use expression to define the environment variables. Check the [Usage](#expressions) section for more information.

- `packageManager`: `npm` | `pnpm` | `yarn` **Optional**

  The package manager used to install the project's dependencies. The default value is `npm`.

- `scripts`: `Object` **Optional**

The scripts that run before the deployment of the project. You can provide a list of commands that will be executed sequentially.

Variables can be used in the scripts. Check the [Usage](#variables) section for more information.

- `deploy`: `string` | `string[]` **Optional**

  A general purpose script that runs before the project is deployed. Used to define how to install dependencies.

- `subdomain`: `string` **Optional**

  The subdomain where the project will be deployed. If not specified, a random subdomain will be generated.
  The full format of the domain will be `https://<subdomain>.app.genezio.com`.

### Example of `nextjs` deployment configuration

This example can be easily used for Nuxt.js, Nitro, Nestjs, or Remix projects by changing the `nextjs` field to `nuxt`, `nitro`, `nestjs`, or `remix`.

```yaml
name: genezio-project
region: us-east-1
yamlVersion: 2
# Configuration specific to the Next.js project setup.
nextjs:
  # The path where the Next.js project is located.
  path: .
  # The package manager to be used for this project (npm, yarn, etc.)
  packageManager: npm
  # Custom scripts to be run during deployment, e.g., installing dependencies.
  scripts:
    deploy:
      - npm install
  # The subdomain that will be associated with this Next.js application.
  subdomain: my-nextjs-app
```

## Expressions

The `genezio.yaml` supports a set of expandable expressions that can be used in the configuration file.
These variables are replaced with their values when resources are created or when scripts are executed.

Genezio supports the following formats:

- `${{env.ENV_KEY}}` - this will be loaded from a `.env` file or from the global process environment variables.
- `{{resource.path.field}}` - this format can be used to reference fields from the `genezio.yaml` itself - e.g. `{{backend.functions.<function-name>.name}}`.

Expressions can be used in the following YAML fields:

- `backend.environment`
- `frontend.environment`
- `services.authentication.database.uri`
- `services.authentication.providers.google.id`
- `services.authentication.providers.google.secret`
- `services.authentication.settings.resetPassword.redirectUrl`
- `services.authentication.settings.emailVerification.redirectUrl`

You can concatenate expressions with strings - e.g. `prefix-${{env.ENV_KEY}}-suffix`.

```yaml
name: my-project
region: us-east-1
yamlVersion: 2
# ...
frontend:
  # ...
  environment:
    VITE_MY_ENV_VAR: my-value
    VITE_MY_AUTH_TOKEN: ${{services.authentication.token}}
    VITE_MY_AUTH_REGION: ${{services.authentication.region}}
    VITE_MY_FUNCTION_URL: ${{backend.functions.<function-name>.url}}
  #...
```

## Variables

Genezio supports the following variables:

- `${{projectName}}`: The name of the project.
- `${{stage}}`: The stage of the deployment. It can be set using the `--stage` flag in the CLI:

Variables can be used in the following fields:

- `backend.scripts`
- `frontend.scripts`

```yaml
name: my-project
region: us-east-1
yamlVersion: 2
backend:
  # ...
  scripts:
    deploy: echo "Deploying ${{projectName}} to stage ${{stage}}"
```

## Output Variables

Genezio supports the output variables for specific resources:

- `${{services.databases.<database-name>.uri}}`: The URI of the database.
- `${{services.authentication.token}}`: The token of the authentication service.
- `${{services.authentication.region}}`: The region of the authentication service.
- `${{backend.functions.<function-name>.url}}`: The URL of the function.

These can be used to inject the values into the environment variables of the backend or as environment variables at build time for the frontend.

## Usage

### How to set the node runtime version for TypeScript and JavaScript projects

To set the node runtime version for TypeScript and JavaScript projects, you need to add the `backend.language.runtime` field to the `genezio.yaml` file.

For example, to set the node runtime version to `Node 20`, you can use the following configuration:

```yaml
name: my-project
yamlVersion: 2
backend:
  path: .
  language:
    name: ts
    # Set the node runtime version to Node 20
    runtime: nodejs20.x
```

### How to set the package manager for TypeScript and JavaScript projects

To set the package manager for TypeScript and JavaScript projects, you need to add the `backend.language.packageManager` field to the `genezio.yaml` file.

For example, to set the package manager to `pnpm`, you can use the following configuration:

```yaml
name: my-project
yamlVersion: 2
backend:
  path: .
  language:
    name: ts
    # Set the package manager to pnpm
    packageManager: pnpm
```

### How to set the architecture type

To set the architecture type for your deployed project, you need to add the `backend.language.architecture` field to the `genezio.yaml` file.

For example, to set the architecture to `x86_64`, you can use the following configuration:

```yaml
name: my-project
yamlVersion: 2
backend:
  path: .
  language:
    name: ts
    # Set the node runtime version to Node 20
    architecture: x86_64
```

### Add a Postgres

To add a PostgreSQL database to your project, you need to add the `databases` field to the `services` field in the `genezio.yaml` file.

```yaml
name: my-project
yamlVersion: 2

services:
  databases:
    - name: my-database
      region: us-east-1
```

### Enable authentication

To add an authentication provider to your project, you need to add the `authentication` field to the `services` field in the `genezio.yaml` file.

You can either reference an existing database created in the Genezio architecture or specify the database type and URI directly.

```yaml
name: my-project
yamlVersion: 2

services:
  databases:
    - name: my-database
      region: us-east-1
  authentication:
    database:
      name: my-database
    providers:
      email: true
      web3: true
      google:
        clientId: ${{env.GOOGLE_CLIENT_ID}}
        clientSecret: ${{env.GOOGLE_SECRET}}
```

### Configure the reset password and email verification redirect URLs

To configure the reset password and email verification redirect URLs, you need to add the `settings` field to the `authentication` field in the `genezio.yaml` file.

```yaml
name: my-project
yamlVersion: 2

services:
  databases:
    - name: my-database
      region: us-east-1
  authentication:
    database:
      name: my-database
    providers:
      email: true
      web3: true
      google:
        clientId: ${{env.GOOGLE_CLIENT_ID}}
        clientSecret: ${{env.GOOGLE_SECRET}}
    settings:
      resetPassword:
        redirectUrl: https://${{frontend.<frontend-name>.subdomain}}.app.genez.io/reset-password
      emailVerification:
        redirectUrl: https://${{frontend.<frontend-name>.subdomain}}.app.genez.io/verify
```

### Enable email service

To add an email service to your project, you need to add the `email` field to the `services` field in the `genezio.yaml` file.

```yaml
name: my-project
yamlVersion: 2

services:
  email: true
```
