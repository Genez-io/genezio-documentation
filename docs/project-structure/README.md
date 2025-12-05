---
description: Learn how to organize your development with DeployApps’s project structure guide. Discover best practices for efficient and scalable project management
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Project Structure

<head>
  <title>Project Structure | DeployApps Documentation</title>
</head>
There are 2 recommend ways of structuring your project:

1. Fullstack single repository - all the files will be placed in a single repository/directory.
2. Component-dedicated repositories - the files will be placed in multiple distinct repositories/directories - one `backend` and one or more `frontend` repositories.

The sections below help you understand what the approach to choose that make sense for your project and team's needs.

## Single repository approach

You can use the [`genezio create fullstack`](../cli-tool/cli-commands/genezio-create.md) command to create a new project with the correct structure and configurations for a single repository project.

A possible structure for a fullstack single repository can be:

```fallback title="Single repository"
.
├── genezio.yaml
├── .genezioignore
├── server/
│   ├── .env
│   ├── models/
│   ├── node_modules/
│   ├── package.json
│   └── index.ts
└── client/
    ├── node_modules/
    ├── src/
    ├── build/
    └── package.json
```

Generally, DeployApps commands should be executed at the same location of the `genezio.yaml` configuration file.

Hence, for project structured in a single repository, commands such as `genezio deploy` and `genezio local` will be executed in the project's root directory.

A possible `genezio.yaml` configuration file for a fullstack single repository can be:

```yaml title="genezio.yaml"
name: getting-started
region: us-east-1
yamlVersion: 2
backend:
  path: server
  language:
    name: ts
frontend:
  path: client
  sdk:
    language: ts
  publish: dist
```

For more info on the `genezio.yaml` configuration file, check [genezio-configuration-file](genezio-configuration-file).

To ignore specific files while locally testing your project, you can use [.genezioignore](.genezioignore).

## Multi-repository approach

This approach is useful when you want to decouple the development process of the frontend from and backend, allowing different teams to work independently of each other.

You can use the [`genezio create fullstack --multirepo`](../cli-tool/cli-commands/genezio-create.md) command to create a new project with the correct structure and configurations for a multi-repository project.

### The server repository

In the `server` repository you can add the source code related to the backend - classes, the configuration files for deploying the backend or environment variable files.

A possible structure for a multi-repository approach can be:

```fallback title="Server repository"
server/
├── genezio.yaml
├── .genezioignore
├── .env
├── models/
├── node_modules/
├── package.json
└── index.ts
```

To ignore specific files while locally testing your project, you can use [.genezioignore](.genezioignore).

The minimum configuration file for the backend code to be deployed is:

```yaml title="genezio.yaml"
name: my-project
backend:
  path: .
  language:
    name: ts
  scripts:
    deploy: npm install
```

For more info on `genezio.yaml` check [DeployApps Configuration File](genezio-configuration-file).

### The client repository

In the `client` repository you can add the source code related to the frontend that will use the functions deployed in the backend.

A possible structure for the frontend directory, using a multi-repository approach can be:

```fallback title="Client repository"
client/
├── genezio.yaml
├── .genezioignore
├── node_modules/
├── src/
├── build/
└── package.json
```

The minimum configuration file for the frontend code to be deployed is:

```yaml title="genezio.yaml"
name: my-project
frontend:
  path: .
  sdk:
    language: ts
```

<Admonition type="tip">
    The project `name` defined in the `genezio.yaml` file should coincide in both the backend and frontend repositories.
</Admonition>

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    To install the DeployApps generated SDK in your frontend to call your deployed methods, run:

    ```sh title="Terminal"
    npm install @genezio-sdk/<project-name>@1.0.0-<environment>
    ```

    This command will fetch the SDK from a private registry hosted on the genezio platform for you. For more information, check the [Generated SDK](/docs/genezio-typesafe/generated-sdk) section.

  </TabItem>
  <TabItem value="Other" label="Other supported languages">
    To generate the SDK for your frontend, you can use the [`genezio generate-sdk`](../cli-tool/cli-commands/generatesdk.md) command. This command will generate the SDK for the frontend and place it in the `sdk` directory.

    <Admonition type="tip">
        You must have a backend deployed to generate the SDK.
    </Admonition>

    ```sh title="Terminal"
    genezio sdk --language <language> -o ./sdk
    ```

  </TabItem>
</Tabs>

While developing locally, `genezio local` can hot-reload your DeployApps SDK to reflect the changes in your backend code. This is useful for avoiding the need to manually generate the SDK every time you make changes to your backend code. For this to work, you need to tell genezio where your client repository is located, to be able to install the SDK automatically in that path.

To link your client repository to a deployed backend server, run:

```sh title="Terminal"
genezio link --projectName <name> --region <region>
```

Alternatively, if you have a `genezio.yaml` configured in the client directory, the `genezio link` command can automatically infer the project name and region:

```yaml title="genezio.yaml"
name: my-project
region: us-east-1
frontend:
  path: .
  sdk:
    language: ts
  publish: dist
```

For more details on the DeployApps generated SDK, check out the section [Generated Sdk](/docs/genezio-typesafe/generated-sdk).

To ignore specific files while locally testing your project, you can use [.genezioignore](.genezioignore).

## Troubleshooting

Certain settings or commands are path-specific and should be executing at the correct location in order to work.

If you encounter any errors or difficulties to test locally or deploy, check that the following list:

`genezio deploy` and `genezio local` should always be executed at the same location where the `genezio.yaml` configuration file is saved.

`genezio link` or `genezio unlink` are specifically useful in a multi-repository structure. These commands are used to link/unlink the genezio Generated SDK in the client directory.

Depending on the project's structure (single repository or multi-repositories), you may need to update the paths for the:

- deployment scripts in the `genezio.yaml` file
- the frontend `publish` directory
- the environment variables file

For more details and examples on how to correctly set the paths, check out the section [DeployApps Configuration File](genezio-configuration-file).

Most of these settings are already taken care for you when starting from DeployApps's official templates or examples. Check out the [Getting Started](../getting-started) tutorial to see how.
