import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';
import useBaseUrl from '@docusaurus/useBaseUrl';

# HTTP Calls / Webhooks

Genezio provides an easy way to interact with third-party services or APIs using webhooks/HTTP methods.

With genezio decorators, you can set one or more of your methods to handle HTTP requests.

## Use webhooks in your project

A webhook/HTTP method is declared in the same way as any other genezio method, but it needs to fulfill the following requirements to be considered a webhook/HTTP method:

-   The method must be marked as `http` either using [decorators](../project-structure/genezio-decorators) or the [`genezio.yaml` configuration](../project-structure/genezio-configuration-file.md) file.
-   The method must have only one parameter of type [`GenezioHttpRequest`](#geneziohttprequest).
-   The method must return a [`GenezioHttpResponse`](#geneziohttpresponse) object.

:::info
Decorators are only supported in TypeScript and JavaScript. If you are using any other supported language, you need to specify the method as an HTTP method in the `genezio.yaml` file.
:::

<Tabs groupId="languages">
  <TabItem value="ts/js" label="TypeScript / JavaScript">
    ```ts title="http.ts" showLineNumbers
    import { GenezioDeploy, GenezioMethod } from "@genezio/types";
    import { GenezioHttpResponse, GenezioHttpRequest } from "@genezio/types";

    @GenezioDeploy()
    export class HttpServer {
        @GenezioMethod({ type: "http" })
        handleSimplePlainRequest(request: GenezioHttpRequest): GenezioHttpResponse {
            console.log(`Request received with a simple text ${request.body}!`);

            // insert your code here

            const response: GenezioHttpResponse = {
                body: request.body,
                headers: { "content-type": "text/html" },
                statusCode: "200",
            };

            return response;
        }
    }
    ```
    <Admonition type="note">
      For TypeScript and JavaScript projects, using decorators is the recommended way to declare HTTP methods, but you can also use the `genezio.yaml` file to declare the HTTP methods.

      The `genezio.yaml` is considered the source of truth for the project. If you declare two different types for the same method in the `genezio.yaml` and in the code, the type declared in the configuration file will be used.
    </Admonition>

  </TabItem>
  <TabItem value="other" label="Other supported language">
    ```yaml title="genezio.yaml" showLineNumbers
    name: http-example
    yamlVersion: 2
    backend:
      path: .
      language:
        name: go
      # You need to identify the class by the source file
      classes:
        - path: http.go
          # You need to identify the method by the name
          methods:
            - name: HandleSimplePlainRequest
              # Specify the `http` method type
              type: http
    ``` 
  </TabItem>
</Tabs>

## Deploy your service

To deploy your newly created class to the genezio infrastructure, use the following command:

```
genezio deploy
```

Usually after the deployment, you need to provide the webhook URLs to the third-party APIs or services you want to connect to.&#x20;

There are 2 places where you can find the webhook URLs for your deployed methods:

1. In the [genezio dashboard](https://app.genez.io), on the corresponding class page:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (8).webp")} alt=""/><figcaption></figcaption></figure>

2. The HTTP endpoints will be shown in your terminal after executing `genezio deploy`:

```sh title="Terminal"
$ genezio deploy
Bundling your code...✅

Deploying your backend project to the genezio infrastructure...
Checking your credentials...✅
Doing the final touch-ups...✅

Your code was deployed and the SDK was successfully generated!

HTTP Methods Deployed:
  - HttpServer.handleSimpleTextRequest: https://z5ze5fxeqccbiqmmkgyf6muxiy0vvjlo.lambda-url.us-east-1.on.aws/HelloWorldHttpExample/handleSimpleTextRequest
```

## HTTP types

### GenezioHttpRequest

#### Properties

-   **headers - required:** A dictionary that contains the headers.
-   **http - required:** An Object that has the following properties:
    -   **method:** The HTTP method.
    -   **path:** The path of the request.
    -   **protocol:** The HTTP version used.
    -   **userAgent:** The request's user agent.
    -   **sourceIp:** The IP of the source.
-   **queryStringParameters - optional:** A dictionary that contains the query parameters.
-   **timeEpoch - required:** Timestamp when the request was made.
-   **rawBody - required:** A string with the unparsed body
-   **body - required:** An object that represents the request's body. If the value is JSON, the value of this variable is a JSON object. If the value is binary, the value of this variable is a Buffer. If the value is text, the value of this variable is also text.&#x20;

### GenezioHttpResponse

#### Properties

-   **body - required:** An object that represents the response's body. The type of this variable can be Object, String, or Buffer.
-   **headers - optional:** A dictionary that contains the headers.
-   **statusCode - required:** The status code of the response.
-   **isBase64Encoded - optional:** This flag can be set to `true` or `false` to indicate if the `body` is base64 encoded. This flag is optional and can be omitted.&#x20;

## Examples using webhooks

For more details, check out the webhooks examples for [JavaScript](https://github.com/Genez-io/genezio-examples/tree/master/javascript/webhook) and [TypeScript](https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook).

## Next Steps

Also, you can find more details on deploying the backend and frontend here:

-   [Backend Deployment](backend-deployment)
-   [Frontend Deployment](frontend-deployment)

Now you are ready for some more advanced use cases:

-   [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
-   [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
-   [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
-   [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)
