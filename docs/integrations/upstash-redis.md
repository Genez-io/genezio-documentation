---
sidebar_position: 3
description: Learn how to integrate Upstash Redis with your projects using DeployApps. Clear and detailed instructions for all developers
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Upstash Redis

<head>
  <title>Upstash Redis Integration | DeployApps Documentation</title>
</head>
:::info
A guide to integrate Upstash resources in DeployApps projects
:::

### Introduction to Upstash

[Upstash](https://upstash.com/?utm_source=genezio+&utm_medium=documentation&utm_campaign=post) is a cutting-edge platform for modern developers seeking seamless data management in serverless and cloud-native applications. Offering Redis-compatible, in-memory database services, Upstash simplifies data storage and access, making it a natural fit for serverless functions, web apps, and cloud-native architectures.

### Set Up a Upstash Redis Database

Navigate to the project integration page in the dashboard and select to `Install` Upstash Redis to your project:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/integrations.webp")} alt=""/><figcaption></figcaption></figure>

Connect with an Upstash account using the preferred login method:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (43) (1).webp")} alt=""/><figcaption></figcaption></figure>

Create a Redis database or select an already existing database:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (42) (1).webp")} alt=""/><figcaption></figcaption></figure>

Hit `Save` to save the database credentials as backend environment variables:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (44) (1).webp")} alt=""/><figcaption></figcaption></figure>

Use the environment variables in your DeployApps project to connect to the Redis database.

```typescript title="index.ts"
import { Redis } from '@upstash/redis'
import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class UpstashRedisExample {
  connect() {
    // Connect to Redis
    const redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL
      token: process.env.UPSTASH_REDIS_REST_TOKEN
    })

    // Save a data in Redis
    const data = await redis.set('foo', 'bar');
  }
}
```

<!-- {% endcode %} -->

Note: Install `@upstash/redis` using npm, if you don't have this dependency already in your project:

```bash
npm install @upstash/redis
```

### Test Locally with an Upstash Redis Database

To test your project locally, you have to create a file named `.env` and store the Upstash Redis credentials there. This file should be in the root directory of your backend.

Use the DeployApps [dashboard](https://app.genez.io) under `Integrations/Upstash Redis` card to copy the Redis credentials in your `.env` file.

<!-- {% code title=".env" %} -->

```fallback title=".env"
UPSTASH_REDIS_URL=redis://<username>:<password>@<hostname>:<port>
UPSTASH_REDIS_REST_URL=<url>
UPSTASH_REDIS_REST_TOKEN=<password>
```

<!-- {% endcode %} -->

Now you can use `genezio local` to start a server locally that will also load up the necessary environment variables to connect to the Redis database.
