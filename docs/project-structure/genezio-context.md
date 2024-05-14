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

The `token` and the `user` properties as used for the `@GenezioAuth` decorator. The `requestContext` and the `headers` properties are used to store information
about the incoming request. These two properties can be used to monitor cookies, sourceIp's, browser information etc. The last property is used to tell the genezio platform that this is a `GnzContext` object. This is used to populate the object with the intended information.

:::info
It is important to note that the `GnzContext` object needs to be placed as the first parameter of your function for it to work as intended.
:::
