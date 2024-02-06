# Generated SDK

Genezio generates an SDK to enable your clients to easily call the methods implemented in the deployed classes.

## Use the generated SDK in your client

Genezio generates an SDK by statically analysing the backend code and creating an Abstract Syntax Tree with the deployed classes, methods, return types and parameters types.

The SDK can be installed in your client as an npm package by running:

```
npm add @genezio-sdk/<project-name>_<region>@1.0.0-<environment>
```

After installing the SDK, you can import it as any other dependency:

For example, for a project named `my-project` deployed in region `us-east-1`, to import add the following import to your client code:

```
import { HelloWorldService } from "@genezio-sdk/my-project_us-east-1"
```

## Link your generated SDK for local testing

<!-- {% hint style="info" %} -->

:::info
This is not necessary for fullstack single repositories.
:::

<!-- {% endhint %} -->

To connect to your backend while testing locally, you need to install the genezio generated SDK in the client repository. `genezio local` is able to install it automatically if you link your client repository path to a deployed project.

To link your client repository to a deployed backend server, run:

```
genezio link --projectName <name> --region <region>
```

This command will save a map between the name and region of your project and the path of your client directory. This map is saved in your home directory, at `~/.genezio/geneziolinks`.

To start a local backend server on your machine, run:

```
genezio local
```

When executing genezio local, genezio will generate an SDK by statically analyse your deployed backend code. The SDK will be installed as an npm package in the `node_modules/@genezio-sdk` directory.

After installing the SDK, you can import it as any other dependency:

For example, for a project named `my-project` deployed in region `us-east-1`, to import add the following import to your client code:

```
import { HelloWorldService } from "@genezio-sdk/my-project_us-east-1"
```

## Generate an SDK for Flutter, Kotlin, Python or Swift

<!-- {% hint style="warning" %} -->

:::warning
Flutter, Kotlin, Python and Swift support is still experimental
:::

<!-- {% endhint %} -->

Support for seamlessly installing for their respective packaging managers is not yet implemented.

To generate the SDK for clients implemented in the following languages you have to set the following fields in the configuration file:

<!-- {% code title="genezio.yaml" %} -->

```yaml
sdk:
  language: dart
  path: ../client/lib/sdk
```

<!-- {% endcode %} -->

## Genezio private npm registry

To store generated sdks for your projects, genezio pushes them to a private npm registry dedicated for your projects. You can interact with this npm registry by using common npm commands such as `npm install`.

The token to authenticate with the private npm registry is saved in your package manager global config file (e.g. `~/.npmrc`).
