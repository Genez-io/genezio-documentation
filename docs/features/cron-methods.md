import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cron Jobs

A scheduled method or a cron job is a method that will run periodically. By using a specific cron syntax, you can define the frequency and timing for each method.

:::tip
The time specified in the cron strings is in UTC. You can use this [converter](https://dateful.com/convert/utc) to convert your local time to UTC.
:::

## Use scheduled methods in your project

There are two ways to declare a scheduled method:

- Using decorators (only available for TypeScript, JavaScript and Go projects)
- Using the `genezio.yaml` configuration file (available for all supported languages, including TypeScript, JavaScript, Go)

<Tabs>
  <TabItem value="decorators" label="Decorators (TS/JS)">
    ```ts title="cron.ts" showLineNumbers
    import { GenezioDeploy, GenezioMethod } from "@genezio/types";

    @GenezioDeploy()
    export class BackendService {
        @GenezioMethod({ type: "cron", cronString: "* * * * *" })
        sayHiEveryMinute() {
            console.log("I will run every minute!");
        }
    }
    ```

  </TabItem>
  <TabItem value="comment decorators" label="Decorators (Go)">
    ```go title="cron.go" showLineNumbers
    package cron

    import "fmt"

    // geenzio: deploy
    type CronService struct {}

    func New() CronService {
        return CronService{}
    }

    // genezio: cron * * * * *
    func (s CronService) SayHiEveryMinute() {
        fmt.Println("I will run every minute!")
    }
    ```

  </TabItem>
  <TabItem value="yaml" label="genezio.yaml">
    ```yaml title="genezio.yaml" showLineNumbers
    name: cron-example
    yamlVersion: 2
    backend:
      path: .
      language:
        name: go
      classes:
        - path: cron.go
          methods:
            - name: sayHiEveryMinute
              type: cron
              cronString: * * * * *
    ```
  </TabItem>
</Tabs>

### Cron strings examples

Below, you have the most commonly used `cronString` examples:

| Cron string   | Description                  |
| ------------- | ---------------------------- |
| `* * * * *`   | Triggers at every minute     |
| `0/5 * * * *` | Triggers every 5 minutes     |
| `0 * * * *`   | Triggers every hour          |
| `0 8 * * *`   | Triggers every day at 8 a.m. |

You can, also, [use crontab.guru](https://crontab.guru/) to build specific cron strings.

## Examples using scheduled methods

:::info
For more details, check out an example using [scheduled methods](https://github.com/Genez-io/genezio-examples/tree/master/javascript/cron).
:::

## More details

For more information on genezio decorators, check out [Genezio Decorators](/docs/project-structure/genezio-decorators).

## Next Steps

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/features/backend-deployment)
- [Frontend Deployment](/docs/features/frontend-deployment)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
- [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)
