---
sidebar_position: 5
description: Explore how to integrate Upstash Qstash with your applications using Genezio. Perfect for developers seeking advanced messaging solutions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Upstash Qstash

<head>
  <title>Upstash Qstash Integration | Genezio Documentation</title>
</head>
### Introduction to Upstash

[Upstash](https://upstash.com/?utm_source=genezio+&utm_medium=documentation&utm_campaign=post) is a cutting-edge platform for modern developers seeking seamless data management in serverless and cloud-native applications. QStash is an HTTP based messaging and scheduling queue solution for the serverless environments.

### Set up a queue with Qstash

Navigate to the project integration page in the dashboard and select to `Install` Upstash QStash to your project:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/integrations.webp")} alt=""/><figcaption></figcaption></figure>

Connect with an Upstash account using the preferred login method:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (52).webp")} alt=""/><figcaption></figcaption></figure>

Hit `Save` to save the queue credentials as backend environment variables:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (53).webp")} alt=""/><figcaption></figcaption></figure>

Use the environment variables in your genezio project to publish to the Qstash queue.

In the code snippet below `sendPing()` is the producer that will post information on the Qstash queue. Once there is data in the queue, the consumer - `ping()` - will be executed.

To know which consumer should be called, Qstash needs a webhook URL. This information will be available to you once the code is deployed and publicly available. To get the webhook URL you can either check the terminal output or the project dashboard for it.

<!-- {% code title="index.ts" %} -->

```typescript title="index.ts"
import {
  GenezioDeploy,
  GenezioMethod,
  GenezioHttpRequest,
  GenezioHttpResponse,
} from "@genezio/types";
import axios from "axios";

@GenezioDeploy()
export class QstashService {
  async sendPing(): Promise<boolean> {
    const url = `https://qstash.upstash.io/v2/publish/${process.env.QUEUE_WEBHOOK_URL}`;
    const payload = {
      ping: "ping",
    };

    const headers = {
      Authorization: "Bearer " + process.env.QSTASH_TOKEN,
      "Content-Type": "application/json",
    };

    axios
      .post(url, payload, { headers: headers })
      .then((response) => {
        console.log(response.data);
        return true;
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
    return true;
  }

  @GenezioMethod({ type: "http" })
  async ping(request: GenezioHttpRequest): Promise<GenezioHttpResponse> {
    const ping: string = request.body.ping;
    console.log(ping);

    const response: GenezioHttpResponse = {
      body: {},
      headers: { "content-type": "application/json" },
      statusCode: "200",
    };
    return response;
  }
}
```

<!-- {% endcode %} -->

Note: Install `@genezio/types` and `axios` using npm, if you don't have this dependency already in your project:

```
npm install @genezio/types axios
```

The last step is to copy the webhook URL from the terminal after you deployed your project:

```
genezio deploy
```

```
Running preBackendDeploy script...
npm install

Deploying your backend project to the genezio infrastructure

Your backend code was deployed and the SDK was successfully generated!

HTTP Methods Deployed:
  - QstashService.ping: https://<lambdaUrl>/QstashService/ping

App Dashboard URL: https://app.genez.io/project/<projectId>/<projectEnvId>
```

And paste it into the environments variable page to set `QUEUE_WEBHOOK_URL` environment variable. Hit `Save` to set the webhook url:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (54).webp")} alt=""/><figcaption></figcaption></figure>

To check more on how to manipulate environment variables, go to [backend-environment-variables](/docs/project-structure/backend-environment-variables "mention").

### Test locally with a Qstash queue

To test your project locally, you have to create a file named `.env` and store the Upstash Qstash credentials there. This file should be in the root directory of your backend.

Use the Genezio [dashboard](https://app.genez.io) under `Integrations/Upstash Qstash` card to copy the Qstash credentials in your `.env` file.

<!-- {% code title=".env" %} -->

```fallback title=".env"
QSTASH_URL="https://qstash.upstash.io/v2/publish/
QSTASH_TOKEN=<token>
QSTASH_CURRENT_SIGNING_KEY=<current-signing-key>
QSTASH_NEXT_SIGNING_KEY=<next-siging-key>
```

<!-- {% endcode %} -->

To use QStash, the consumer webhook has to be exposed online in order for QStash to forward data to it. Genezio doesn't yet support this for testing local webhooks. Hence, to expose a webhook online, you can use `ngrok`. The following command will expose the local Genezio server which listens to 8083:

```bash
ngrok http http://localhost:8083
```

Add the following environment variable to the `.env` file:

<!-- {% code title=".env" %} -->

```fallback title=".env"
QUEUE_WEBHOOK_URL = https://e43d-2a02-2f0c-5801-ce00-edfd-f543-22cc-9395.ngrok.io/QstashService/ping
```

<!-- {% endcode %} -->

For more details on ngrok, check out [their getting started](https://ngrok.com/docs/getting-started/).
