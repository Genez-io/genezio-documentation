# Genezio Decorators

Genezio Decorators is a feature that lets you configure settings directly from your code.

To use genezio decorators, you have to install and import `@genezio/types` in your projectp:

{% tabs %}
{% tab title="npm" %}
```
npm install @genezio/types
```
{% endtab %}

{% tab title="yarn" %}
```
yarn add @genezio/types
```
{% endtab %}

{% tab title="pnpm" %}
```
pnpm install @genezio/types
```
{% endtab %}
{% endtabs %}

Below, you can see an example on how to use genezio decorators.

<pre class="language-typescript" data-title="index.ts"><code class="lang-typescript">import { GenezioDeploy } from "@genezio/types";

<strong>@GenezioDeploy()
</strong>export class HelloWorld {
  /**
   * Method that returns a personalized "Hello world" message.
   */
  hello(name: string, from: string, value: Season): string {
    const message = `Hello, ${name}, from ${from} during this ${value}`;
    return message
  }
}
</code></pre>

The class `HelloWorld` will be deployed by executing `genezio deploy`.

### GenezioDeploy

This decorator is used to indicate which classes to be deployed when executing `genezio deploy`.

The decorator accepts a JSON parameter to configure even more settings on the deployed class. See an example below:

{% code title="index.ts" %}
```typescript
import {GenezioHttpResponse,GenezioHttpRequest} from "@genezio/types";
import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy({ type: "http" })
export class HttpHandle {
  handleHttRequest(request: GenezioHttpRequest): GenezioHttpResponse {
    const response: GenezioHttpResponse = {
      body: request.body,
      headers: { "content-type": "text/html" },
      statusCode: "200",
    };
    return response
  }
```
{% endcode %}

The supported values for type are `http, jsonrpc, cron`.

```typescript
{type: "jsonrpc" | "http" | "cron" }
```

### GenezioMethod

This decorator is used to configure settings on each method from a class.

This is especially useful for setting scheduled methods using cron format.

The decorator accepts a JSON parameter to configure even more settings on the deployed class. See an example below. Check out the example below:

{% code title="index.ts" %}
```typescript
import { GenezioDeploy, GenezioMethod } from "@genezio/types"

@GenezioDeploy()
export class HelloWorld {
    @GenezioMethod({type: "cron", cronString: "* * * * *"})
    sayHiEveryMinute() {
        console.log("Hi!")
    }
}
```
{% endcode %}

### More details

With genezio decorators you can also deploy [http-methods-webhooks.md](../features/http-methods-webhooks.md "mention")or [cron-methods.md](../features/cron-methods.md "mention").
