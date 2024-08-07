---
description: Learn how to configure your Genezio project using the genezio.yaml file. Follow our guide for setup and deployment options
---

# Genezio Configuration File

<head>
  <title>Genezio Configuration File | Genezio Documentation</title>
</head>
The `genezio.yaml` file is a configuration file that contains all the settings for deploying your project. It is a YAML file that should be located at the root of your project.

# Reference

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

## `backend`: `Object` **Optional**

The backend configuration. This field can be omitted if the project does not have a backend.

#### `path`: `string` **Required**

The path where the backend code is located. It is relative to the `genezio.yaml` file.

If the `classes` field is not specified, the backend path is also used to recursively locate the classes.

If scripts are declared in the `scripts` field, they will be executed from this path.

#### `language`: `Object` **Required**

- `name`: `ts` | `js` | `go` | `dart` | `kotlin` **Required**

  The programming language used to implement the backend.

- `runtime`: `nodejs20.x` **Optional**

  The node runtime version that will be used by your NodeJS application. The default value is `nodejs20.x`.

  Applicable only when `language.name` is `ts` or `js`.

- `packageManager`: `npm` | `pnpm` | `yarn` **Optional**

  The package manager used to install the project's dependencies. The default value is `npm`.

  Applicable only when `language.name` is `ts` or `js`.

- `architecture`: `x86_64` **Optional**

  The architecture that will be use by your application on the cloud. The default value is `x86_64`.

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

#### `scripts`: `Object` **Optional**

The scripts that run before special backend events occur. If a list is provided to any of the fields, the scripts will be executed sequentially and in case one fails, the execution will be stopped.

Variables can be used in the scripts. Check the [Usage](#how-to-use-variables-in-the-scripts-fields) section for more information.

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

- `name`: `string` **Required**

  This is a label to identify your function in the dashboard for monitoring and logging purposes.

- `path`: `string` **Required**

  The path to the function's code. It is relative to the `path` field.

- `handler`: `string` **Required**

  The name of the handler function. For example, if the handler function is `myHandler`, the code should look like this:

  ```typescript
  export const myHandler = async (event, context) => {
    // Your code here
  };
  ```

- `entry`: `string` **Required**

  The file that contains the function. The extension for this file can be `.js`, `.cjs` or `.mjs`.

- `type`: `string` **Optional**

  The type of the function. The default value is `aws`.
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
      type: aws
```

## `frontend`: `Object` | `Array` **Optional**

The frontend configuration. This field can be omitted if the project does not have a frontend.

Can be an object or an array of objects if the project has multiple frontends.

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

#### `scripts`: `Object` **Optional**

The scripts that run before special frontend events occur. If a list is provided to any of the fields, the scripts will be executed sequentially and in case one fails, the execution will be stopped.

Variables can be used in the scripts. Check the [Usage](#how-to-use-variables-in-the-scripts-fields) section for more information.

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

### How to use variables in the scripts fields

You can use variables in the scripts by using the `${{variable}}` syntax. The variables are replaced with their values before the script is executed.

Available variables are:

- `projectName`: The name of the project.
- `stage`: The stage of the deployment. It can be set using the `--stage` flag in the CLI.

```yaml
name: my-project
yamlVersion: 2
backend:
  path: .
  language:
    name: ts
  scripts:
    # Will output "Deploying my-project to stage dev" when run with the --stage dev flag
    deploy: echo "Deploying ${{projectName}} to stage ${{stage}}"
```
