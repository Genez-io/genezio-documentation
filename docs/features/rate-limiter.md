# Rate Limiter

You can use Genezio Rate Limiter Decorator to limit the amount of requests per minute that are being called from the same IP address.
Genezio provides the `@GenzioRateLimiter` that can be used on any method of a deployed class. This feature is useful to prevent abuse of your backend services.

## Prerequisites

To use the rate limiter, you need to have a Redis database. You can integrate your project with an Upstash Redis database from the Genezio dashboard or use your own Redis database.
For more information on how to integrate your Genezio project with an Upstash Redis database, see the [Upstash Redis integration guide](https://genezio.com/docs/tutorials/connect-to-redis-powered-by-upstash/).

## How to use the rate limiter

### Installation

```bash
npm install @genezio/rate-limiter
```

### Usage

Add the rate limiter decorator to the method you want to limit the access to:

```typescript backendService.ts showLineNumbers
import { GenezioDeploy, GnzContext } from "@genezio/types";
import { GenezioRateLimiter } from "@genezio/rate-limiter";

@GenezioDeploy()
export class BackendService {
  @GenezioRateLimiter({ dbUrl: "<your-redis-db-url>", limit: 20 })
  hello(context: GnzContext, name: string) {
    console.log("Hello " + name);
    return "Hello " + name;
  }
}
```

:::info
Important: The rate limiter decorator **must** be used on a method that has the first parameter as `GnzContext` and the rest of the parameters are the ones you want to pass to the method. Even if you won't explicitly use the `GnzContext` parameter, it must be there. This is because the context needs to be populated with the IP address of the request. This will be done automatically by the rate limiter decorator. To learn more about the `GnzContext` object, see the [documentation](https://genezio.com/docs/features/backend-deployment/)
:::

The rate limiter decorator takes two parameters:

- `dbUrl`: The URL of the Redis database. (default will be `localhost:6379`)
- `limit`: The number of requests allowed per minute. (Default is 50)

### Testing

Once you have set up the rate limiter, you can run `genezio local` and go to the test interface URL provided by the CLI to test the rate limiter.
As of now, the rate limiter will work with the test interface only if you add to the context parameter the following field:

```json context
{
  "isGnzContext": true
}
```

After that is done, you can spam multiple requests and test if the rate limiter is working properly.
If you need a Redis GUI client to check the changes in your Redis database, you can use [RedisInsight](https://redis.com/redis-enterprise/redis-insight/).

## More coming soon

Many more functionalities will come to this decorator soon. We use user feedback to improve this sort of modular products so feel free to reach out to us with your suggestions on
[GitHub](https://github.com/Genez-io/genezio) or on our [Discord](https://discord.gg/uc9H5YKjXv).