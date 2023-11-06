---
description: A guide to integrate Upstash resources in genezio projects
---

# Upstash Redis

### Introduction to Upstash

[Upstash](https://upstash.com/) is a cutting-edge platform for modern developers seeking seamless data management in serverless and cloud-native applications. Offering Redis-compatible, in-memory database services, Upstash simplifies data storage and access, making it a natural fit for serverless functions, web apps, and cloud-native architectures.&#x20;

### Set Up a Upstash Redis Database

Navigate to the project integration page in the dashboard and select to `Install` Upstash Redis to your project:

![](<../.gitbook/assets/image (39).png>)

Connect with an Upstash account using the preferred login method:

![](<../.gitbook/assets/image (43).png>)

Create a Redis database or select an already existing database:

![](<../.gitbook/assets/image (42).png>)

Hit `Save` to save the database credentials as backend environment variables

![](<../.gitbook/assets/image (44).png>)

Use the environment variables in your genezio project to connect to the Redis database.

{% code title="index.ts" %}
```typescript
import { Redis } from '@upstash/redis'

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
{% endcode %}

Note: Install `@upstash/redis` using npm, if you don't have this dependency already in your project:

```bash
npm install @upstash/redis
```

### Test Locally with an Upstash Redis Database

To test your project locally, you have to create a file named `.env` and store the Upstash Redis credentials there. This file should be in the root directory of your backend.

Use the genezio [dashboard](https://app.genez.io) under `Integrations/Upstash Redis` card to copy the Redis credentials in your `.env` file.

{% code title=".env" %}
```
UPSTASH_REDIS_URL=redis://<username>:<password>@<hostname>:<port>
UPSTASH_REDIS_REST_URL=<url>
UPSTASH_REDIS_REST_TOKEN=<password>
```
{% endcode %}

Now you can use `genezio local` to start a server locally that will also load up the necessary environment variables to connect to the Redis database.
