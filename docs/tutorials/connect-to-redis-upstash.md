---
sidebar_position: 4
description: In this tutorial, you will learn how to integrate a Redis database using Upstash in a genezio project.
---

# Connect to Redis (Upstash)

<head>
  <title>Connect to Redis (Upstash) | Genezio Documentation</title>
</head>

In this tutorial, you will learn how to integrate a Redis database using Upstash in a genezio project.

## Common use cases of Redis

### Out-of-the-box caching system <a href="#out-of-the-box-caching-system" id="out-of-the-box-caching-system"></a>

Redis is often used as a caching layer to store frequently accessed data in memory, reducing the need to fetch data from slower disk-based databases. This can significantly improve application performance.

### Session storage <a href="#session-storage" id="session-storage"></a>

Storing session data in Redis is a common practice. Because of its speed, Redis is well-suited for managing user sessions in web applications. It allows for quick and efficient retrieval of user-specific information.

### Rate limiting <a href="#rate-limiting" id="rate-limiting"></a>

Redis can be used to implement rate-limiting mechanisms. By tracking and controlling access rates for different operations, Redis helps prevent abuse and ensures the stability and performance of an application.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

- [Node.js](https://nodejs.org/en/download/current)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](/docs/getting-started)

You need to have a genezio project. Use an existing one, or [create a new one.](/docs/getting-started)

## 1. Initialize an Upstash Redis database

\
Go to the `Integrations` sidebar and select to install the Upstash Redis integration:

![Alt text](/img/integrations.webp)

Connect with an Upstash account using the preferred login method:

![Alt text](https://genezio.com/posts/image.png)

Create a Redis database or select an already existing database:

![Alt text](https://genezio.com/posts/image-1.png)

Hit the `Save` button to set the database credentials as environment variables in your genezio project:

![Alt text](https://genezio.com/posts/image-2.png)

## 2. Connect your backend to the Redis database

We will use `ioredis` to connect our code to the Redis Database:

```
 npm install ioredis
```

To connect to the Redis database from your NodeJs backend, create a new file called `redis.ts` in the root folder of your project.

The following code snippet creates a new class that will be a minimal Redis service. In the constructor, we initialize the Redis client using the `UPSTASH_REDIS_URL` environment variable. This variable is already set remotely in your project by the Upstash Redis integration.

<!-- {% code title="redis.ts" lineNumbers="true" %} -->

```typescript title="redis.ts" showLineNumbers
import { GenezioDeploy } from "@genezio/types";
import Redis from "ioredis";

@GenezioDeploy()
export class ShoppingCartService {
  client: Redis;
  constructor() {
    if (!process.env.UPSTASH_REDIS_URL) {
      throw new Error("UPSTASH_REDIS_URL is not set in the `.env` file.");
    }
    this.client = new Redis(process.env.UPSTASH_REDIS_URL);
  }
}
```

<!-- {% endcode %} -->

## 3. Store and retrieve data from Redis

Implement two methods to store and retrieve \<key, value> pairs in the Redis database:

<!-- {% code lineNumbers="true" %} -->

```typescript showLineNumbers
addItemToCart(cartId: string, productId: string, quantity: number): Promise<boolean> {
    const cartKey = `cart:${cartId}`;
    await this.client.set(`${cartKey}:${productId}`, quantity);

    // the rest of the implementation goes here
  }

  getCartContents(cartId: string): Promise<Map<string, number> | null> {
    const cartKey = `cart:${cartId}`;
    const cartItems = await this.client.keys(`${cartKey}:*`);

    // the rest of the implementation goes here
  }
```

<!-- {% endcode %} -->

## 4. Test your Redis service

To locally test your Redis service, you have to use the copy button to add the environment variables to your clipboard. Using the copy button will disclose the sensitive information from the environment variables. Paste them in a `.env` file in the root folder of your project.

You can find the environment variables in the `Integrations` tab of your project page in the [dashboard](https://app.genez.io/).

The `.env` file should look similar to the following snippet:

<!-- {% code title=".env" lineNumbers="true" %} -->

```fallback code title=".env" showLineNumbers
UPSTASH_REDIS_URL="redis://default:sensitivepassword@cute-capybara-33897.upstash.io:33897"
UPSTASH_REDIS_REST_URL="https://cute-capybara-33897.upstash.io"
UPSTASH_REDIS_REST_TOKEN="sensitivetoken"
```

<!-- {% endcode %} -->

After setting the environment variables, you can test your Redis service by running the following command in your terminal:

```
genezio local
```

Open the testing page in your browser by navigating to [`http://localhost:8083/explore`](http://localhost:8083/explore) .

Here you can create and send a request to your backend to test if it works as expected.

## 5. Deploy your application

After you tested your application, you can deploy it by running the following command in your terminal:

```bash
genezio deploy
```

## Next Steps

Other things that do not depend on connecting to a database are scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

- [Cron Jobs](/docs/genezio-typesafe/cron-methods)
- [HTTP Webhooks](/docs/genezio-typesafe/http-methods-webhooks)

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/deploy/function)
- [Frontend Deployment](/docs/deploy/frontend)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
- [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
