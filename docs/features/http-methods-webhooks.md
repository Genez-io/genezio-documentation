import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import useBaseUrl from '@docusaurus/useBaseUrl';

# HTTP Calls / Webhooks

Genezio provides an easy way to interact with third-party services or APIs using webhooks/HTTP methods.

With genezio decorators, you can set one or more of your methods to handle HTTP requests.

## Use webhooks in your project

A webhook/HTTP method is declared in the same way as any other genezio method, but it needs to fulfill the following requirements to be considered a webhook/HTTP method:

- The method must be marked as `http` either using [decorators](/docs/project-structure/genezio-decorators) or the [`genezio.yaml` configuration](/docs/project-structure/genezio-configuration-file.md) file.
- The method must have only one parameter of type [`Request`](#request).
- The method must return a [`Response`](#response) object.

:::info
Decorators are only supported in TypeScript, JavaScript and Go. If you are using any other supported language, you need to specify the method as a HTTP method in the `genezio.yaml` file.
:::

<Tabs>
  <TabItem value="decorators" label="Decorators (TS/JS)">
    ```ts title="http.ts" showLineNumbers
    import { GenezioDeploy, GenezioMethod } from "@genezio/types";
    import { GenezioHttpResponse, GenezioHttpRequest } from "@genezio/types";

    @GenezioDeploy()
    export class HttpServer {

        @GenezioMethod({ type: "http" })
        handleSimplePlainRequest(request: Request): Response {
        console.log(`Request received with a simple text ${request.body}!`);

              // insert your code here

              const options = {
                heeaders: {
                  "content-type": "text/html",
                },
                status: 200,
              };

              const response: Response = new Response(request.body, options);

              return response;

        }
    }

````

    <Admonition type="info">
      For TypeScript projects the expected type for the request and response objects are the standard `Request` and `Response` objects provided by the @types/node library. To use these types in your project, you need to install the `@types/node` package by running the following command:

      ```sh
      npm install --save-dev @types/node
      ```

      To find out more about these types, you can check out the Fetch API documentation for the [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects.

    </Admonition>
    <Admonition type="note">
      For TypeScript and JavaScript projects, using decorators is the recommended way to declare HTTP methods, but you can also use the `genezio.yaml` file to declare the HTTP methods.

      The `genezio.yaml` is considered the source of truth for the project. If you declare two different types for the same method in the `genezio.yaml` and in the code, the type declared in the configuration file will be used.
    </Admonition>

  </TabItem>
  <TabItem value="go" label="Go">
    ```go title="http.go" showLineNumbers
    package httpHandler

    import (
        "fmt"
        genezio_types "github.com/Genez-io/genezio_types"
    )

    // genezio: deploy
    type HttpServer struct {}

    func New() HttpServer {
        return HttpServer{}
    }

    // genezio: http
    func (s HttpServer) HandleSimplePlainRequest(request genezio_types.GenezioHttpRequest) *genezio_types.GenezioHttpResponse {
        fmt.Println("Request received with a simple text", request.Body, "!")

        // insert your code here

        response := GenezioHttpResponse{
            Body:       request.Body,
            Headers:    map[string]string{"content-type": "text/html"},
            StatusCode: "200",
        }

        return response
    }
    ```
    <Admonition type="note">
      For Go projects, using decorators is the recommended way to declare HTTP methods, but you can also use the `genezio.yaml` file to declare the HTTP methods.

      The `genezio.yaml` is considered the source of truth for the project. If you declare two different types for the same method in the `genezio.yaml` and in the code, the type declared in the configuration file will be used.
    </Admonition>

  </TabItem>
  <TabItem value="yaml" label="Configuration File (All supported languages)">
    ```yaml title="genezio.yaml" showLineNumbers
    name: http-example
    yamlVersion: 2
    backend:
      path: .
      language:
        name: go
      classes:
        # You need to identify the class by the source file
        - path: http.go
          methods:
            # You need to identify the method by the name
            - name: HandleSimplePlainRequest
              # Specify the `http` method type
              type: http
    ```
  </TabItem>
</Tabs>

## Deploy your service

To deploy your newly created class to the genezio infrastructure, use the following command:

````

genezio deploy

````

Usually after the deployment, you need to provide the webhook URLs to the third-party APIs or services you want to connect to.&#x20;

There are 2 places where you can find the webhook URLs for your deployed methods:

1. In the [genezio dashboard](https://app.genez.io), on the corresponding class page:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (8).webp")} alt=""/><figcaption></figcaption></figure>

2. The HTTP endpoints will be shown in your terminal after executing `genezio deploy`:

```sh title="Terminal"
$ genezio deploy

Deploying your backend project to the genezio infrastructure...

Your backend code was deployed and the SDK was successfully generated

HTTP Methods Deployed:
  - HttpServer.handleSimplePlainRequest: https://<lambdaUrl>/HttpServer/handleSimplePlainRequest

App Dashboard URL: https://app.genez.io/project/<projectId>/<projectEnvId>
````

## HTTP types

<Tabs>
  <TabItem value="decorators" label="TS/JS">
    If you are using TypeScript or JavaScript, you need to use the standard `Request` and `Response` objects provided by the `@types/node` library.

    To learn more about these types, you can check out the Fetch API documentation for the [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects.

  </TabItem>
</Tabs>

## Examples using webhooks

For more details, check out the webhooks examples for [JavaScript](https://github.com/Genez-io/genezio-examples/tree/master/javascript/webhook) and [TypeScript](https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook).

## Next Steps

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/features/backend-deployment)
- [Frontend Deployment](/docs/features/frontend-deployment)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
- [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)
