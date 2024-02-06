# Cron Jobs

A scheduled method or a cron job is a method that will run periodically. By using a specific cron syntax, you can define the frequency and timing for each method.

With genezio decorators, you can set the method type to `cron` and the `cronString` accordingly to the desired frequency.

## Use scheduled methods in your project

In the example below, the method `sayHiEveryMinute()` will be called every minute:

<!-- {% code title="index.ts" %} -->

```javascript
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  sayHiEveryMinute() {
    console.log("Hi!");
  }
}
```

<!-- {% endcode %} -->

### Cron strings examples

Below, you have the most commonly used `cronString` examples:

<table><thead><tr><th>Cron string</th><th>Description</th><th data-hidden></th><th data-hidden></th></tr></thead><tbody><tr><td><code>* * * * *</code></td><td>Triggers at every minute</td><td></td><td></td></tr><tr><td><code>0/5 * * * *</code></td><td>Triggers every 5 minutes</td><td></td><td></td></tr><tr><td><code>0 * * * *</code></td><td>Triggers every hour</td><td></td><td></td></tr><tr><td><code>0 8 * * *</code></td><td>Triggers every day at 8 a.m.</td><td></td><td></td></tr></tbody></table>

You can, also, [use crontab.guru](https://crontab.guru/) to build specific cron strings.

## Examples using scheduled methods

<!-- {% hint style="info" %} -->

:::info
For more details, check out an example using [scheduled methods](https://github.com/Genez-io/genezio-examples/tree/master/javascript/cron).
:::

<!-- {% endhint %} -->

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
