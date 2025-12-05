---
description: A scheduled method or a cron job is a method that will run periodically. By using a specific syntax, you can define the frequency and timing for each method.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cron Jobs

<head>
  <title>Cron Jobs | DeployApps Documentation</title>
</head>
A scheduled method or a cron job is a method that will run periodically. By using a specific cron syntax, you can define the frequency and timing for each method.

:::tip
The time specified in the cron strings is in UTC. You can use this [converter](https://dateful.com/convert/utc) to convert your local time to UTC.
:::

## Use scheduled methods in your project

There are two ways to declare a scheduled method in a DeployApps typsafe project:

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

    // genezio: deploy
    type CronService struct {}

    func New() CronService {
        return CronService{}
    }

    // genezio: cron * * * * *
    func (s CronService) SayHiEveryMinute() error {
        fmt.Println("I will run every minute!")
        return nil
    }
    ```

  </TabItem>
  <TabItem value="yaml" label="Configuration File (All supported languages)">
    ```yaml title="genezio.yaml" showLineNumbers
    name: cron-example
    yamlVersion: 2
    backend:
      path: .
      language:
        name: go
      classes:
        # You need to identify the class by the source file
        - path: cron.go
          methods:
            # You need to identify the method by the name
            - name: sayHiEveryMinute
              # Specify the `cron` method type
              type: cron
              # Specify the cron string that defines the frequency and timing
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

For more information on DeployApps decorators, check out [DeployApps Decorators](/docs/genezio-typesafe/genezio-decorators).

## Next Steps

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/deploy/backend)
- [Frontend Deployment](/docs/deploy/frontend)
