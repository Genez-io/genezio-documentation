# Connect to Redis (Powered by Upstash)

In this tutorial, you will learn how to integrate a Redis database using Upstash in a genezio project.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

* [Node.js](https://nodejs.org/en/download/current)
* [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Genezio](connect-to-redis-powered-by-upstash.md#getting-started)

You need to have a genezio project. Use an existing one, or [create a new one.](../getting-started.md)

## Common use cases of Redis

### Out-of-the-box caching system <a href="#out-of-the-box-caching-system" id="out-of-the-box-caching-system"></a>

Redis is often used as a caching layer to store frequently accessed data in memory, reducing the need to fetch data from slower disk-based databases. This can significantly improve application performance.

### Session storage <a href="#session-storage" id="session-storage"></a>

Storing session data in Redis is a common practice. Because of its speed, Redis is well-suited for managing user sessions in web applications. It allows for quick and efficient retrieval of user-specific information.

### Rate limiting <a href="#rate-limiting" id="rate-limiting"></a>

Redis can be used to implement rate-limiting mechanisms. By tracking and controlling access rates for different operations, Redis helps prevent abuse and ensures the stability and performance of an application.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

* [Node.js](https://nodejs.org/en/download/current)
* [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Genezio](connect-to-redis-powered-by-upstash.md#getting-started)

## [1. Create a new genezio project](../getting-started.md)

## 2. Initialize an Upstash Redis database

\
Go to the `Integrations` tab and select to install the Upstash Redis integration:

![Alt text](https://genez.io/images/blog/getting\_started\_upstash\_images/image-3.png)

Connect with an Upstash account using the preferred login method:

![Alt text](https://genez.io/images/blog/getting\_started\_upstash\_images/image.png)

Create a Redis database or select an already existing database:

![Alt text](https://genez.io/images/blog/getting\_started\_upstash\_images/image-1.png)

Hit the `Save` button to set the database credentials as environment variables in your genezio project:

![Alt text](https://genez.io/images/blog/getting\_started\_upstash\_images/image-2.png)

## 3. Connect your backend to the Redis database

We will use `ioredis` to connect our code to the Redis Database:

```
 npm install ioredis
```

To connect to the Redis database from your NodeJs backend, create a new file called `redis.ts` in the root folder of your project.

The following code snippet creates a new class that will be a minimal Redis service. In the constructor, we initialize the Redis client using the `UPSTASH_REDIS_URL` environment variable. This variable is already set remotely in your project by the Upstash Redis integration.

{% code title="redis.ts" lineNumbers="true" %}
```ts
import { GenezioDeploy } from "@genezio/types";
import Redis from "ioredis"

@GenezioDeploy()
export class ShoppingCartService {
  client: Redis;
  constructor() {
    if (!process.env.UPSTASH_REDIS_URL) {
      throw new Error("UPSTASH_REDIS_URL is not set in the `.env` file.")
    }
    this.client = new Redis(process.env.UPSTASH_REDIS_URL);
  }
}
```
{% endcode %}

## 4. Store and retrieve data from Redis

Implement two methods to store and retrieve \<key, value> pairs in the Redis database:

{% code lineNumbers="true" %}
```typescript
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
{% endcode %}

## 5. Test your Redis service

To locally test your Redis service, you have to use the copy button to add the environment variables to your clipboard. Using the copy button will disclose the sensitive information from the environment variables. Paste them in a `.env` file in the root folder of your project.

You can find the environment variables in the `Integrations` tab of your project page in the [dashboard](https://app.genez.io/).

The `.env` file should look similar to the following snippet:

{% code title=".env" lineNumbers="true" %}
```fallback
UPSTASH_REDIS_URL="redis://default:sensitivepassword@cute-capybara-33897.upstash.io:33897"
UPSTASH_REDIS_REST_URL="https://cute-capybara-33897.upstash.io"
UPSTASH_REDIS_REST_TOKEN="sensitivetoken"
```
{% endcode %}

After setting the environment variables, you can test your Redis service by running the following command in your terminal:

```
genezio local
```

Open the testing page in your browser by navigating to [`https://app.genez.io/test-interface/local?port=8083`](https://app.genez.io/test-interface/local?port=8083) .

Here you can create and send a request to your backend to test if it works as expected.

## 6. Deploy your application

After you tested your application, you can deploy it by running the following command in your terminal:

```bash
genezio deploy
```
