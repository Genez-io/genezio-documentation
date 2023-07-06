# Project Structure

We recommend structuring your genezio project like this:

```
.
├── server/
│   ├── genezio.yaml
│   ├── .genezioignore
│   └── index.js
└── client/
    ├── src/
    ├── build/
    └── sdk/
```

In the `server` directory you can add the source code related to the backend.&#x20;

There you will create or modify the `genezio.yaml` configuration file. More details on the configuration options you can find in the [yaml-configuration-file.md](../yaml-configuration-file.md "mention").&#x20;

If you need to ignore certain files while testing locally your project, you can use [.genezioignore.md](.genezioignore.md "mention").

In the `client` directory you can add the source code related to the frontend. Usually, you will find the SDK saved here because conceptually the client needs to know how to call the backend methods. You can change the location where the SDK is saved in `genezio.yaml`.

In genezio, a backend is composed of one or multiple classes. A class contains a set of methods. The methods can be called either directly or by using the SDK that is automatically generated on deployment and when using the local environment. There are three types of methods:

* [JSON-RPC Methods](../method-types/json-rpc-methods.md)
* [HTTP Methods](../method-types/http-methods-webhooks.md)
* [CRON Methods](../method-types/cron-methods.md)
