import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Backend Deployment

Genezio offers a seamless and efficient solution for deploying backend logic. The platform leverages a function-as-a-service infrastructure, allowing users to deploy their backend classes easily with a simple command: `genezio deploy`.&#x20;

:::tip
You can deploy classes written in TypeScript, JavaScript, Go (experimental) and Dart (experimental).
:::

:::warning
We do not recommend you to manually create your projects. You should instead use the `genezio create` command to create a new project. This command will generate a project with the correct structure and configuration files.

Check out this tutorial to learn how to [create-your-first-project](/docs/getting-started "mention") with genezio.
:::

## Code Structure

To deploy with genezio, your code has to be structured in classes. Each public method of the class will be deployed as a separate function.

The following snippet of code shows a simple `HelloWorldService` class:

<Tabs groupId="languages">
  <TabItem value="ts" label="TypeScript">
    ```ts title="service.ts" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";

    @GenezioDeploy()
    export class HelloWorldService {
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

    @GenezioDeploy()
    export class HelloWorldService {
      hello(name, sender) {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```

  </TabItem>
  <TabItem value="go" label="Go">
    ```go title="service.go" showLineNumbers
    type HelloWorldService struct {}

    // Required. Will run when the HelloWorldService "class" is constructed.
    func New() HelloWorldService {
      return HelloWorldService{}
    }

    func (s HelloWorldService) Hello(name string, sender string) string {
      fmt.Println("Hello world request received with name", name, "from", sender, "!")

      return "Hello, " + name + ", from " + sender + "!"
    }
    ```

    <Admonition type="tip">
    The `New` function is required in Go because, unlike TypeScript and JavaScript, Go does not embrace OOP, therefore there is no way to specify a `struct` constructor.
    </Admonition>

  </TabItem>
</Tabs>

## Configuration file

The `genezio.yaml` configuration file is the file that genezio uses to understand how to deploy your project. It contains information about the project, such as the name, region, and the backend details.

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
  <TabItem value="go" label="Go">
    ```yaml title="genezio.yaml" showLineNumbers
    # Learn more about Genezio YAML at https://genezio.com/docs/project-structure/genezio-configuration-file/
    # The name of the project.
    name: my-backend
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
            name: go
        # The classes to be deployed.
        classes:
          - path: service.go
    ```

  </TabItem>
</Tabs>

For more details on the `genezio.yaml` configuration file features, check the [Genezio Configuration File](/docs/project-structure/genezio-configuration-file "mention") section.

## Deploy your project

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

Now let's see how to schedule the execution of a function as a cron job, or implement HTTP Webhooks:

-   [Cron Jobs](/docs/features/cron-methods)
-   [HTTP Webhooks](/docs/features/http-methods-webhooks)

Now you are ready for some more advanced use cases:

-   [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
-   [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
-   [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
