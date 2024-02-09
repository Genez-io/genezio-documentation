# Typescript

### Deploying a class with genezio

The main unit of deployment in Typescript is a class. The methods of your class can be called using the following ways:

- JSON-RPC - [Learn more](../method-types/json-rpc-methods.md).
- HTTP - [Learn more](../method-types/http-methods-webhooks.md).
- Scheduled methods using cron strings - [Learn more](../method-types/cron-methods.md).

Below we can see a basic example of a Typescript class deployed using genezio.&#x20;

```typescript
// hello.ts

export enum Season {
  Winter = "Winter",
  Summer = "Summer",
}

export class HelloWorld {
  constructor() {
    console.log("Constructor called!");
  }

  helloWorld() {
    return "Hello world!";
  }

  hello(name: string, from: string, value: Season): string {
    const message = `Hello, ${name}, from ${from} during this ${value}`;
    return message;
  }
}
```

### Supported types

The following types are supported as parameters or return types:

- number
- String
- enums
- classes
- typedefs

:::info
We currently don't support importing classes and enums from other files. If you want to use a custom type as a method's parameter or return type, it has to be declared in the same file.
:::

If you don't have any `tsconfig.json` next to your classes, genezio CLI will generate one for you.

### Genezio configuration file

To deploy this class, you also need a `genezio.yaml` configuration file. [Learn more](../yaml-configuration-file.md) about which configuration fields you can tweak.

```yaml
# genezio.yaml

name: hello-world
region: us-east-1
sdk:
  language: ts
  options:
    runtime: node
  path: ../client/sdk/
classes:
  - path: ./hello.ts
    type: jsonrpc
```
