---
description: Genezio Decorators is a feature that lets you configure settings that were previously set in the genezio.yaml configuration file, directly from your code.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Genezio Decorators

<head>
  <title>Genezio Decorators | Genezio Documentation</title>
</head>
Genezio Decorators is a feature that lets you configure settings that were previously set in the `genezio.yaml` configuration file, directly from your code.

:::info
Decorators are only supported in TypeScript, JavaScript and Go. If you are using any other supported language, you need to use the `genezio.yaml` file to declare the settings.

More details about the `genezio.yaml` file can be found in the [Genezio Configuration File](/docs/project-structure/genezio-configuration-file) section.
:::

To use genezio decorators in **TypeScript** or **JavaScript**, you have to install and import `@genezio/types` in your project. This library provides the decorators using the native TypeScript decorators feature.

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

:::tip
Unfortunately, not all programming languages support decorators. To compensate for this, genezio allows users to "annotate" their classes and methods using comments.
Those special comments are picked up automatically by genezio and have the same effect as a native decorator. This feature is available for the **Go** programming language.
:::

### GenezioDeploy

This decorator is used to indicate which classes to be deployed when executing `genezio deploy`.

It replaces the need of declaring the classes source file paths in the `genezio.yaml` file.

<Tabs groupId="languages">
  <TabItem value="ts" label="TypeScript">
It accepts a JSON parameter with the following type:

```ts
{
  type: "jsonrpc" | "http" | "cron";
}
```

If specified, the `type` parameter will be used to determine the type of every method in the class. Default is `jsonrpc`.

```ts title="index.ts" showLineNumbers
import { GenezioHttpResponse, GenezioHttpRequest, GenezioDeploy } from "@genezio/types";

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

  </TabItem>
  <TabItem value="go" label="Go">
    Usage:
    ```
    // genezio: deploy <type>
    ```
    `<type>` can be `jsonrpc`, `http` or `cron`. If not specified, the default type is `jsonrpc`.
    ```go title="httpHandle.go" showLineNumbers
    package httpHandle

    import "github.com/Genez-io/genezio_types"

    // Every method in this class will be deployed as a http method, if not specified otherwise
    // genezio: deploy http
    type HttpHandle struct {}

    func New() HttpHandle {
      return HttpHandle{}
    }

    func (h HttpHandle) HandleHttpRequest(request genezio_types.GenezioHttpRequest) *genezio_types.GenezioHttpResponse {
      response := &genezio_types.GenezioHttpResponse{
        Body: request.Body,
        Headers: map[string]string{"content-type": "text/html"},
        StatusCode: "200",
      }

      return response
    }
    ```

  </TabItem>
</Tabs>

### GenezioMethod

This decorator is used to configure settings on each method from a class.

It replaces the need of declaring the methods in the `genezio.yaml` file.

<Tabs groupId="languages">
    <TabItem value="ts" label="TypeScript">

    It accepts a JSON parameter with the following type:

    ```ts
    {
        type: "jsonrpc" | "http";
    } | {
        type: "cron";
        cronString: string;
    }
    ```

If specified, the `type` parameter will be used to determine the type of the method and will override the `type` parameter from the `GenezioDeploy` decorator.

```ts title="index.ts" showLineNumbers
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

    </TabItem>
    <TabItem value="go" label="Go">
    Usage:
    ```
    // genezio: cron <cronString>
    // genezio: http
    // genezio: jsonrpc
    ```
    ```go title="helloWorld.go" showLineNumbers
    package helloWorld

    import "fmt"

    // If not specified, the type of every method in this class will be `jsonrpc`
    // genezio: deploy
    type HelloWorld struct {}

    func New() HelloWorld {
        return HelloWorld{}
    }

    // This method will be deployed as a `cron` method
    // genezio: cron * * * * *
    func (h HelloWorld) SayHiEveryMinute() {
        fmt.Println("Hi!")
    }

    // This method will be deployed as a `jsonrpc` method, because it inherits
    // the type from the GenezioDeploy decorator
    func (h HelloWorld) SayHello() {
        fmt.Println("Hello!")
    }
    ```
    </TabItem>

</Tabs>

### More details

With Genezio Decorators you can also deploy [HTTP Methods / Webhooks](/docs/genezio-typesafe/http-methods-webhooks) or [Cron Methods](/docs/genezio-typesafe/cron-methods).
