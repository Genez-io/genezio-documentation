# Genezio Context

The `GnzContext` object provided by the `@genezio/types` packages is the primary way in which you can interact with middlewares in Genezio projects.
Our out of the box middleware already uses this type to ensure cross-integration between our platform and your code.

The `GnzContext` object has the following structure:

```typescript
export type GnzContext = {
  token: string | undefined;
  user:
    | {
        email: string;
        userId: string;
        authProvider: string;
        createdAt: Date;
        verified: boolean;
        name?: string;
        address?: string;
        profilePictureUrl?: string;
        customInfo?: {
          [key: string]: string;
        };
      }
    | undefined;
  requestContext: any | undefined;
  headers: any | undefined;
  isGnzContext: boolean | undefined;
};
```

The `token` and the `user` properties are used for the `@GenezioAuth` decorator. The `requestContext` and the `headers` properties are used to store information
about the incoming request. These two properties can be used to monitor cookies, source IPs, browser information, etc. The last property is used to tell the genezio platform that this is a `GnzContext` object. This is used to populate the object with the intended information.

:::info
It is important to note that the `GnzContext` object needs to be placed as the first parameter of your function for it to work as intended.
:::

## How to use the GnzContext object

Let's see an example of how to use the `GnzContext` object in a Genezio project:

You will need a Genezio project to continue. If you don't have one, you can check out the [Getting Started](https://genezio.com/docs/getting-started/) guide.

The best way to use the GnzContext for your middleware is by creating decorators that will perform the necessary operations on the context object. Let's create a simple middleware that logs the context object using decorators.
In your Genezio project, create a new file called `middleware.ts` and add the following code:

```typescript title="middleware.ts" showLineNumbers
export function LogGnzContext() {
  return function (value: Function, context: any) {
    return function (...args: any[]) {
      // Check if the first parameter is a GnzContext object
      if (args.length === 0 || !args[0].isGnzContext) {
        console.log(
          "Error: the LogGnzContext decorator must be used with the first parameter being a GnzContext object"
        );
        throw new Error("Invalid context");
      }
      // If the first parameter is a GnzContext object, log it
      console.log(args[0]);
      // @ts-expect-error
      const func = value.bind(this);
      const result = func(...args);
      return result;
    };
  };
}
```

Now go into a class that will be deployed and attach the middleware to a method. For example, let's create a class called `BackendService` and attach the middleware to the `hello` method:

```typescript title="backendService.ts" showLineNumbers
import { GenezioDeploy, GnzContext } from "@genezio/types";
import { LogGnzContext } from "./middleware";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  @LogGnzContext()
  async hello(ctx: GnzContext, name: string): Promise<string> {
    console.log(`Hello from backend service ${name}`);

    return `Hello from backend service ${name}`;
  }
}
```

Notice how the `LogGnzContext` decorator is attached to the `hello` method. This will log the `GnzContext` object to the console every time the `hello` method is called.

Now, you can run `genezio local` and test the `hello` method from the [test interface](/docs/features/testing/). You should see the `GnzContext` object being logged to the console.

This is an example of how a `GnzContext` might look like:

```json
{
  "requestContext": {
    "http": {
      "method": "POST",
      "path": "/",
      "protocol": "HTTP/1.1",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
      "sourceIp": "78.96.207.59"
    },
    "url": {
      "password": "",
      "host": "localhost",
      "hostname": "localhost",
      "port": "",
      "pathname": "/",
      "search": "",
      "searchParams": {
        "URLSearchParams": {}
      },
      "hash": ""
    }
  },
  "headers": {
    "Host": "a752d3e0-937e-4939-9734-fda0670168db.dev-fkt.cloud.genez.io",
    "Accept": "*/ *",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9",
    "Content-Length": "336",
    "Content-Type": "application/json",
    "Origin": "https://app.genez.io",
    "Priority": "u=1, i",
    "Referer": "https://app.genez.io/",
    "Sec-Ch-Ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": "\"Windows\"",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    "X-Forwarded-For": "78.96.207.59"
  },
  "isGnzContext": true
}
```

Here we can see that the `GnzContext` object was successfully populated with the request context and headers information. Even though the `user` and `token` properties are not present, they would be populated if the request was authenticated. Using this object and decorators you can create a set of middlewares that can be used to perform operations based on the network information provided by the `GnzContext` object.

## More details

If you want to learn more about how to use the `GnzContext` object, you can check out the [Authentication](/docs/features/authentication) and [Rate Limiter](/docs/genezio-typesafe/rate-limiter) features. Both of these features use the `GnzContext` object to perform their operations.
