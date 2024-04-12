import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Backend Persistent Deployment [ALPHA]

Genezio offers a seamless and efficient solution for deploying backend logic. Until now the platform exclusively leveraged a function-as-a-service infrastructure, allowing users to deploy their backend classes easily with a simple command: `genezio deploy`.&#x20; However the FaaS model may not be sufficient for certain use-cases such as **[WebSockets / Socket.io](../websockets)** or invoking/installing 3rd party tools as part of your code. 

This is why we are working on enabling deployments to our multi-tenant **Kubernetes** cluster (deployments to on-prem/private clusters coming soon!)

To learn more about the environment your classes will run in you can visit: **[Pod Environment](/docs/features/pod-environment)** (this also includes installing 3rd party packages through the Alpine Package Manager - `apk`)
:::info
This feature requires that you have **Docker** installed and executable without elevated privileges!
:::
:::warning
We do not recommend you to manually create your projects. You should instead use the `genezio create` command to create a new project. This command will generate a project with the correct structure. For persistent backend deployments you will need to modify the `cloudProvider` field from `genezio` to `cluster`

Check out this tutorial to learn how to [create-your-first-project](/docs/getting-started "mention") with genezio.
:::
:::danger
**Alpha Release Notice**: This feature for deploying to Kubernetes clusters is currently in ALPHA stage. It's available for early use and testing, but it’s important to note that it might not be fully stable yet. We're actively working on improving its reliability and functionality.

While you can deploy your application using this feature, please be prepared for possible unpredictabilities. Your feedback during this phase is invaluable to us, as it will help identify issues and improve the overall experience.

Feel free to share your observations and any encountered issues. Your input is crucial as we refine this feature.

**Currently** there are a number of incompatible Genezio features or known issues as listed below:
- Auth support not implemented
- Local testing interface does not forward websocket connections 
- There are no multiple cluster regions
- If you have been logged in for a long time, you need to do a logout followed by a login in order to be assigned a Container Image Repository
- JS/TS are the only languages supported
- There is no uptime guaranetee
:::



## Code Structure

:::tip
You can deploy classes written in both TypeScript and JavaScript
:::

To deploy with genezio, your code has to be structured in classes. Each class will be deployed to our cluster as a separate `Pod`.

The following snippet of code shows a simple `HelloWorldService` class:

<Tabs groupId="languages">
  <TabItem value="ts" label="TypeScript">
    ```ts title="service.ts" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server: http.Server) {}

      hello(name: string, sender: string): string {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
  <TabItem value="js" label="JavaScript">
    ```js title="service.js" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server) {}

      hello(name, sender) {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
</Tabs>

  :::tip
  Note the constructor header: you get access to the `http.Server` instance your Class will run on; This will be useful when using websockets
  :::
## Configuration file

The `genezio.yaml` configuration file is the file that genezio uses to understand how to deploy your project. It contains information about the project, such as the name, region, and the backend details.

:::danger
**Alpha Release Notice**: Currently only the `us-east-1` region is supported
:::
<Tabs groupId="languages">
  <TabItem value="ts" label="TypeScript">
    ```yaml title="genezio.yaml" showLineNumbers
    # Learn more about Genezio YAML at https://genezio.com/docs/project-structure/genezio-configuration-file/
    # The name of the project.
    name: my-backend
    # The region where the project is deployed.
    region: us-east-1
    # The version of the Genezio YAML configuration to parse.
    yamlVersion: 2
    backend:
        # This makes your deployment persistent
        cloudProvider: cluster
        # The root directory of the backend.
        path: .
        # Information about the backend's programming language.
        language:
            # The name of the programming language.
            name: ts
            # The node runtime version. (specific to js/ts)
            runtime: nodejs20.x
        # The classes to be deployed.
        classes:
          - path: service.ts
    ```

    <Admonition type="tip">
    The `classes` field can be omitted if the classes are decorated with `@GenezioDeploy()`. Learn more about decorators in the [Decorators](/docs/project-structure/genezio-decorators "mention") section.

    If a class is neither decorated or specified in the `genezio.yaml` file, it will not be deployed.
    </Admonition>

  </TabItem>
  <TabItem value="js" label="JavaScript">
    ```yaml title="genezio.yaml" showLineNumbers
    # Learn more about Genezio YAML at https://genezio.com/docs/project-structure/genezio-configuration-file/
    # The name of the project.
    name: my-backend
    # The region where the project is deployed.
    region: us-east-1
    # The version of the Genezio YAML configuration to parse.
    yamlVersion: 2
    backend:
        # This makes your deployment persistent
        cloudProvider: cluster
        # The root directory of the backend.
        path: .
        # Information about the backend's programming language.
        language:
            # The name of the programming language.
            name: js
            # The node runtime version. (specific to js/ts)
            runtime: nodejs20.x
        # The classes to be deployed.
        classes:
          - path: service.js
    ```

    <Admonition type="tip">
    The `classes` field can be omitted if the classes are decorated with `@GenezioDeploy()`.

    If a class is neither decorated or specified in the `genezio.yaml` file, it will not be deployed.
    </Admonition>

  </TabItem>
</Tabs>

For more details on the `genezio.yaml` configuration file features, check the [Genezio Configuration File](/docs/project-structure/genezio-configuration-file "mention") section.

## Deploy your project

:::danger
**Alpha Release Notice**: Upon login we create container registry credentials for each user. If the deployment fails at the `container image push` step try logging out and back in!
:::

After you have written your classes and configured the `genezio.yaml` file, you can deploy your project by running the following command:


```sh title="Terminal"
genezio deploy
```

## Testing

After deploying, you can make requests to the remote server by:

-   using the [testing functionality](/docs/features/testing) from the genezio dashboard
-   building a client application that uses the generated type safe SDK - such as a React app or a CLI
    -   Check the [Generated Sdk](/docs/features/generated-sdk "mention") section to find out how to use the Genezio SDK in your project.

## Next Steps

Now let's see how to deploy a class which uses WebSockets:

-   [WebSockets](/docs/features/websockets)

