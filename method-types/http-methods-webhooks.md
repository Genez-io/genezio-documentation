# HTTP Methods / Webhooks

There are situations where JSON-RPC can't be used. For example, when the project needs to interact with a third-party service via a webhook, the HTTP method can be used.

Javascript:

```javascript
class HttpServer {
  handleSimplePlainRequest(request) {
    console.log(`Request received with simple text ${request.body}!`)

    return {
      body: request.body,
      headers: { "content-type": "text/html" },
    }
  }
}
```

The method receives as a parameter an HTTP request object and returns an HTTP response object.

## HTTP Request Object

### Properties

* **headers:** A dictionary that contains the headers.
* **http:** An Object that has the following properties:
  * **method:** The HTTP method.
  * **path:** The path of the request.
  * **protocol:** The HTTP version used.
  * **userAgent:** The request's user agent.
  * **sourceIp:** The IP of the source.
* **queryStringParameters:** A dictionary that contains the query parameters.
* **timeEpoch:** Timestamp when the request was made.
* **rawBody:** A string with the unparsed body
* **body:** An object that represents the request's body. If the value is JSON, the value of this variable is a JSON object. If the value is binary, the value of this variable is a Buffer. If the value is text, the value of this variable is also text.&#x20;

## HTTP Response Object

### Properties

* **body:** An object that represents the response's body. The type of this variable can be: Object, String, or Buffer.
* **headers:** A dictionary that represents the headers.
* **statusCode:** The status code of the response.

The URL for the method will call will be automatically generated after you use `genezio deploy` and will be shown in the CLI output.
