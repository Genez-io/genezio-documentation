# Project Structure

There are 2 recommend ways of structuring your project:

1. In a fullstack single repository - all the files will be structured in a single repository/directory.
2. In component-dedicated repositories - the files will be structured in two distinct repositories/directories - a `server` and a `client` one.

The sections below help you understand what the approach to choose to make sense for your project and team's needs.

## Single repository approach

A possible structure for a fullstack single repository can be:

{% code title="Single repository" %}
```
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
{% endcode %}

Generally, genezio commands should be executed at the same location of the `genezio.yaml` configuration file.

Hence, for project structured in a single repository, commands such as `genezio deploy` and `genezio local` will be executed in the project's root directory.

Genezio is providing support for the concept of workspaces, so you can add in the `genezio.yaml` the paths to the corresponding server and client directories:

{% code title="genezio.yaml" %}
```yaml
name: getting-started
region: us-east-1
language: ts
packageManager: npm
workspace:
  backend: ./server
  frontend: ./client
```
{% endcode %}

To correctly bundle and deploy your fullstack application, the directories paths must be set in the configuration file by setting the `workspace` field. If you start your project from genezio's official templates, this step will always be taken care for you.

For more info on the `genezio.yaml` configuration file, check [genezio-configuration-file.md](genezio-configuration-file.md "mention").

To ignore specific files while locally testing your project, you can use [.genezioignore.md](.genezioignore.md "mention").

## Multi-repository approach

This approach is useful when you want to decouple the development process of the frontend from and backend, allowing different teams to work independently of each other.

### The server repository

In the `server` repository you can add the source code related to the backend - classes, the configuration files for deploying the backend, environment variable files.

A possible structure for a multi-repository approach can be:

{% code title="Server repository" %}
```
.
└── server/
    ├── genezio.yaml
    ├── .genezioignore
    ├── .env
    ├── models/
    ├── node_modules/
    ├── package.json
    └── index.ts
```
{% endcode %}

To ignore specific files while locally testing your project, you can use [.genezioignore.md](.genezioignore.md "mention").

The minimum configuration file for the backend code to be deployed is:

{% code title="genezio.yaml" %}
```yaml
name: my-project-backend
region: us-east-1
language: ts
cloudProvider: genezio
scripts:
  preBackendDeploy: npm install
packageManager: npm
```
{% endcode %}

For more info on `genezio.yaml` check [genezio-configuration-file.md](genezio-configuration-file.md "mention").

### The client repository

In the client repository

{% code title="Client repository" %}
```
.
└── client/
    ├── genezio.yaml
    ├── .genezioignore
    ├── node_modules/
    ├── src/
    ├── build/
    └── package.json
```
{% endcode %}

To connect to your backend while testing locally, you need to install the genezio generated SDK in the client repository. `genezio local` is able to install it automatically if you link your client repository path to a deployed project.

To link your client repository to a deployed backend server, run:

```
genezio link --projectName <name> --region <region>
```

Alternatively, if you have a `genezio.yaml` configured in the client directory, the `genezio link` command can automatically infer the project name and region:

{% code title="genezio.yaml" %}
```yaml
name: my-project-server
region: us-east-1
frontend:
  path: ./dist
```
{% endcode %}

For more details on the genezio generated SDK, check out the section [generated-sdk.md](../features/generated-sdk.md "mention").

To ignore specific files while locally testing your project, you can use [.genezioignore.md](.genezioignore.md "mention").

## Troubleshooting

Certain settings or commands are path-specific and should be executing at the correct location in order to work.

If you encounter any errors or difficulties to test locally or deploy, check that the following list:

`genezio deploy` and `genezio local` should always be executed at the same location where the `genezio.yaml` configuration file is saved.

`genezio link` or `genezio unlink` are specifically useful in a multi-repository structure. These commands are used to link/unlink the genezio generated SDK in the client directory.

Depending on the project's structure (single repository or multi-repositories), you may need to update the paths for the:

* deployment scripts in the `genezio.yaml` file
* the frontend build directory
* the environment variables file

For more details and examples on how to correctly set the paths, check out the section [genezio-configuration-file.md](genezio-configuration-file.md "mention").

Most of these settings are already taken care for you when starting from genezio's official templates or examples. Check out the [create-your-first-project.md](../tutorials/create-your-first-project.md "mention") tutorial to see how.
