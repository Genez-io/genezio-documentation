# HTTP Methods / Webhooks

There are situations where JSON-RPC can't be used. For example, when the project needs to interact with a third-party service using webhooks, the HTTP method can be used.

To instantiate and deploy an HTTP method follow the steps below:

Implement your method using HTTP request and response types:

{% code title="index.ts" %}
```typescript
import {GenezioHttpResponse, GenezioHttpRequest} from "@genezio/types";

export class HttpServer {
  handleSimplePlainRequest(request:GenezioHttpRequest): GenezioHttpResponse{
    console.log(`Request received with a simple text ${request.body}!`)

    return response: GenezioHttpResponse = {
      body: request.body,
      headers: { "content-type": "text/html" },
      statusCode: "200",
    };
  }
}
```
{% endcode %}

The method `handleSimplePlainRequest` receives an HTTP request object as a parameter and returns an HTTP response object.&#x20;

To import and use `GenezioHttpResponse` and `GenezioHttpRequest`, run `npm install @genezio/types`.

Add the method to the `genezio.yaml` file:

{% code title="genezio.yaml" %}
```yaml
name: http-example
classes:
  - path: index.ts
    type: jsonrpc
    methods:
      - name: handleSimplePlainRequest
        type: http
```
{% endcode %}

Run `genezio deploy` in your terminal to deploy your classes.

The HTTP endpoints will be shown on your terminal and in the dashboard:

```
$ genezio deploy
Bundling your code...✅

Deploying your backend project to genezio infrastructure...
Checking your credentials...✅
Doing the final touch-ups...✅

Your code was deployed and the SDK was successfully generated!

HTTP Methods Deployed:
  - HttpServer.handleSimpleTextRequest: https://fvleljt6bjehkdmuej5a2qb2uy0ahzud.lambda-url.us-east-1.on.aws/HelloWorldHttpExample/handleSimpleTextRequest
```

## HTTP Request Object

### Properties

* **headers  - required:** A dictionary that contains the headers.
* **http  - required:** An Object that has the following properties:
  * **method:** The HTTP method.
  * **path:** The path of the request.
  * **protocol:** The HTTP version used.
  * **userAgent:** The request's user agent.
  * **sourceIp:** The IP of the source.
* **queryStringParameters - optional:** A dictionary that contains the query parameters.
* **timeEpoch  - required:** Timestamp when the request was made.
* **rawBody  - required:** A string with the unparsed body
* **body  - required:** An object that represents the request's body. If the value is JSON, the value of this variable is a JSON object. If the value is binary, the value of this variable is a Buffer. If the value is text, the value of this variable is also text.&#x20;

## HTTP Response Object

### Properties

* **body  - required:** An object that represents the response's body. The type of this variable can be Object, String, or Buffer.
* **headers  - optional:** A dictionary that contains the headers.
* **statusCode  - required:** The status code of the response.
* **isBase64Encoded - optional:**  This flag can be set to `true` or `false` to indicate if the `body` is base64 encoded. This flag is optional and can be omitted.&#x20;

The URL for the method will be automatically generated after you use `genezio deploy` and will be shown in the CLI output and, also, will be available in the dashboard on the class page.

## Webhooks/HTTP examples

For more details, check out the examples below:

JavaScript Example [https://github.com/Genez-io/genezio-examples/tree/master/javascript/webhook](https://github.com/Genez-io/genezio-examples/tree/master/javascript/webhook)

TypeScript Example [https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook](https://github.com/Genez-io/genezio-examples/tree/master/typescript/webhook)
