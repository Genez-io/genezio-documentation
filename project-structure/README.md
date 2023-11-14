# Project Structure

There are 2 recommend ways of structuring your project:

1. In a mono-repo approach - all the files will be structured in a single directory.
2. In a multi-repo approach - the files will be structured in two distinct directories - a `server` and a `client` one.

This approach makes it easy to structure your project based on your team's needs.

### Mono-repo approach

A possible structure for a mono-repo approach can be:

```
.
├── genezio.yaml
├── .genezioignore
├── server/
│   ├── .env
│   ├── models/
│   ├── node_modules/
│   ├── package.json
│   └── index.ts
└── client/
    ├── node_modules/
    ├── src/
    ├── build/
    └── package.json
```

Generally, genezio commands should be executed at path where `genezio.yaml` is present.

Hence, commands such as `genezio deploy` and `genezio local` will be executed in the project's directory.&#x20;

Genezio is implementing the concept of workspaces, so you can add in the `genezio.yaml` the paths to the corresponding server and client directories:

{% code title="genezio.yaml" %}
```
name: getting-started
region: us-east-1
language: ts
packageManager: npm
workspace:
  backend: ./server
  frontend: ./client
```
{% endcode %}

For more info on how to modify the `genezio.yaml` check [yaml-configuration-file.md](../yaml-configuration-file.md "mention").

### Multi-repo approach

A possible structure for a multi-repo approach can be:

{% code title="Server directory" %}
```
.
└── server/
    ├── genezio.yaml
    ├── .genezioignore
    ├── .env
    ├── models/
    ├── node_modules/
    ├── package.json
    └── index.ts
```
{% endcode %}

{% code title="Client directory" %}
```
.
└── client/
    ├── genezio.yaml
    ├── .genezioignore
    ├── node_modules/
    ├── src/
    ├── build/
    └── package.json
```
{% endcode %}

In the `server` directory you can add the source code related to the backend.&#x20;

There you will create or modify the `genezio.yaml` configuration file. More details on the configuration options you can find in the [yaml-configuration-file.md](../yaml-configuration-file.md "mention").&#x20;

If you need to ignore certain files while testing locally your project, you can use [.genezioignore.md](.genezioignore.md "mention").

In the `client` directory you can add the source code related to the frontend. Usually, you will find the SDK saved here because conceptually the client needs to know how to call the backend methods. You can change the location where the SDK is saved in `genezio.yaml`.

In genezio, a backend is composed of one or multiple classes. A class contains a set of methods. The methods can be called either directly or by using the SDK that is automatically generated on deployment and when using the local environment. There are three types of methods:

* [JSON-RPC Methods](../method-types/json-rpc-methods.md)
* [HTTP Methods](../method-types/http-methods-webhooks.md)
* [CRON Methods](../method-types/cron-methods.md)
