import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Genezio Decorators

Genezio Decorators is a feature that lets you configure settings that were previously set in the `genezio.yaml` configuration file, directly from your code.

:::info
Decorators are only supported in TypeScript and JavaScript. If you are using any other supported language, you need to use the `genezio.yaml` file to declare the settings.

More details about the `genezio.yaml` file can be found in the [Genezio Configuration File](../project-structure/genezio-configuration-file) section.
:::

To use genezio decorators, you have to install and import `@genezio/types` in your projectp:

<Tabs>
  <TabItem className="tab-item" value="npm" label="npm">
    ```
    npm add @genezio/types
    ```
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
    ```
    pnpm add @genezio/types
    ```
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
    ```
    yarn add @genezio/types
    ```
  </TabItem>
</Tabs>

### GenezioDeploy

This decorator is used to indicate which classes to be deployed when executing `genezio deploy`.

It replaces the need of declaring the classes source file paths in the `genezio.yaml` file.

It accepts a JSON parameter with the folowing type:

```ts
{
    type: "jsonrpc" | "http" | "cron";
}
```

If specified, the `type` parameter will be used to determine the type of every method in the class.

```ts title="index.ts"
import { GenezioHttpResponse, GenezioHttpRequest } from "@genezio/types";
import { GenezioDeploy } from "@genezio/types";

// Every method in this class will be deployed as a http method, if not specified otherwise
@GenezioDeploy({ type: "http" })
export class HttpHandle {
  handleHttpRequest(request: GenezioHttpRequest): GenezioHttpResponse {
    const response: GenezioHttpResponse = {
      body: request.body,
      headers: { "content-type": "text/html" },
      statusCode: "200",
    };

    return response
  }
```

### GenezioMethod

This decorator is used to configure settings on each method from a class.

It replaces the need of declaring the methods in the `genezio.yaml` file.

It accepts a JSON parameter with the folowing type:

```ts
{
    type: "jsonrpc" | "http";
} | {
    type: "cron";
    cronString: string;
}
```

If specified, the `type` parameter will be used to determine the type of the method and will override the `type` parameter from the `GenezioDeploy` decorator.

```ts title="index.ts"
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

// If not specified, the type of every method in this class will be `jsonrpc`
@GenezioDeploy()
export class HelloWorld {
    // This method will be deployed as a `cron` method
    @GenezioMethod({ type: "cron", cronString: "* * * * *" })
    sayHiEveryMinute() {
        console.log("Hi!");
    }

    // This method will be deployed as a `jsonrpc` method, because it inherits
    // the type from the GenezioDeploy decorator
    sayHello() {
        console.log("Hello!");
    }
}
```

### More details

With Genezio Decorators you can also deploy [HTTP Methods / Webhooks](../features/http-methods-webhooks) or [Cron Methods](../features/cron-methods).
