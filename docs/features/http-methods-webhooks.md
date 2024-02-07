---
sidebar_position: 6
---

# HTTP Calls / Webhooks

Genezio provides an easy way to interact with third-party services or APIs using webhooks/HTTP methods.

With genezio decorators, you can set one or more of your methods to handle HTTP requests.

## Use webhooks in your project

In the example below, the genezio decorator `@GenezioMethod({type:"http"})` sets the type of the method `handleSimplePlainRequest` to `http`. Now this method can be deployed and used as a webhook that handles simple HTTP requests.

<!-- {% code title="HttpServer.ts" %} -->

```typescript title="HttpServer.ts" showLineNumbers
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

<!-- {% endcode %} -->

## Deploy your service

To deploy your newly created class to the genezio infrastructure, use the following command:

```
genezio deploy
```

Usually after the deployment, you need to provide the webhook URLs to the third-party APIs or services you want to connect to.&#x20;

There are 2 places where you can find the webhook URLs for your deployed methods - in your terminal after deploying your project and in the [dashboard](https://app.genez.io) on the class page.

1. In the [genezio dashboard](https://app.genez.io) on the corresponding class page:

<figure><img src="/img/image (8).png" alt=""/><figcaption></figcaption></figure>

2. The HTTP endpoints will be shown in your terminal after executing `genezio deploy`:

```
$ genezio deploy
Bundling your code...✅

Deploying your backend project to the genezio infrastructure...
Checking your credentials...✅
Doing the final touch-ups...✅

Your code was deployed and the SDK was successfully generated!

HTTP Methods Deployed:
  - HttpServer.handleSimpleTextRequest: https://z5ze5fxeqccbiqmmkgyf6muxiy0vvjlo.lambda-url.us-east-1.on.aws/HelloWorldHttpExample/handleSimpleTextRequest
```

## Examples using webhooks

<!-- :::info -->

:::info
For more details, check out the webhooks examples for [JavaScript](https://github.com/Genez-io/genezio-examples/tree/master/javascript/webhook) and [TypeScript](https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook).
:::

<!-- ::: -->

### GenezioHttpRequest

#### Properties

- **headers - required:** A dictionary that contains the headers.
- **http - required:** An Object that has the following properties:
  - **method:** The HTTP method.
  - **path:** The path of the request.
  - **protocol:** The HTTP version used.
  - **userAgent:** The request's user agent.
  - **sourceIp:** The IP of the source.
- **queryStringParameters - optional:** A dictionary that contains the query parameters.
- **timeEpoch - required:** Timestamp when the request was made.
- **rawBody - required:** A string with the unparsed body
- **body - required:** An object that represents the request's body. If the value is JSON, the value of this variable is a JSON object. If the value is binary, the value of this variable is a Buffer. If the value is text, the value of this variable is also text.&#x20;

### GenezioHttpResponse

#### Properties

- **body - required:** An object that represents the response's body. The type of this variable can be Object, String, or Buffer.
- **headers - optional:** A dictionary that contains the headers.
- **statusCode - required:** The status code of the response.
- **isBase64Encoded - optional:** This flag can be set to `true` or `false` to indicate if the `body` is base64 encoded. This flag is optional and can be omitted.&#x20;

## More details

For more information on genezio decorators, check out [genezio-decorators](../project-structure/genezio-decorators "mention").

## Next Steps

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](backend-deployment)
- [Frontend Deployment](frontend-deployment)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
