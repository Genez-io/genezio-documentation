import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Generated SDK

Genezio generates a SDK to enable your clients to easily call the methods implemented in the deployed classes.

## Use the generated SDK in your client

Genezio generates a SDK by statically analysing the backend code and creating an Abstract Syntax Tree describing the deployed classes, methods, return types and parameters types.

The SDK can be installed in your client as a NPM package by running:

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    ```sh title="Terminal"
    npm add @genezio-sdk/<project-name>@1.0.0-<environment>
    ```
  </TabItem>
  <TabItem value="go" label="Go">
    Go currently does not support installing the SDK as a package. Instead, a `sdk` directory is generated in your frontend `path` directory.
    From there, you can import the generated SDK as a local package. 
  </TabItem>
</Tabs>

After installing the SDK, you can import it as any other dependency:

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    ```ts
    import { HelloWorldService } from "@genezio-sdk/<project-name>"

    HelloWorldService.Hello("John")
    ```

  </TabItem>
  <TabItem value="go" label="Go">
    ```go
    import genezioSdk "<go-module-name>/sdk"

    func main() {
      service := genezioSdk.NewHelloWorldService()
      service.Hello("John")
    }
    ```

  </TabItem>
</Tabs>

## Link your client repository to a project

:::info
This step is only necessary when your frontend is not specified in the `genezio.yaml` file.
:::

While testing locally, if genezio does not know about your client repository, it will not be able to install the generated SDK automatically.
That's why for external clients, you need to link your client repository to a genezio project.

You can link your client repository to a genezio project navigating to the root of your client repository and running:

```sh title="Terminal"
genezio link --projectName <name> --region <region>
```

This command will save a map between your genezio project and the path to your client directory. This map is saved in your home directory, at `~/.genezio/geneziolinks`.

To start a local backend server on your machine, run:

```sh title="Terminal"
genezio local
```

After executing `genezio local`, genezio will generate a SDK by statically analysing your deployed backend code.

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    The SDK will be installed as a NPM package in the `node_modules/@genezio-sdk` directory.

    Because it lives in the `node_modules` folder, you can import it as any other dependency:

    ```ts
    import { HelloWorldService } from "@genezio-sdk/<project-name>"
    ```

  </TabItem>
  <TabItem value="go" label="Go">
     ```go
     import genezioSdk "<go-module-name>/sdk"
     ```
  </TabItem>
</Tabs>

## Genezio private registry

:::info
The Genezio private registry is only available for the JavaScript/TypeScript SDK.
:::

To store generated SDKs for your projects, genezio pushes them to a private registry dedicated for your projects.

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    You can interact with the npm registry by using common npm commands such as `npm install`.

    The token to authenticate with the private npm registry is saved in your package manager global config file (e.g. `~/.npmrc`).

  </TabItem>
</Tabs>
