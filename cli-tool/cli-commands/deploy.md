# Deploy

### Usage

`genezio deploy [--backend] [--frontend] [--stage <stage_name>] [--logLevel <logLevel>] [--installDeps]`

### Description

{% hint style="info" %}
You must be authenticated to use this command.
{% endhint %}

This command deploys your project to the genezio infrastructure and generates the SDK. You can then use it to access the functions from the cloud.

In case some of your methods are of `type: http`, calling this command will return some links as output in the CLI. You can use these links to call your `type: http` methods.

If you execute this command without `--backend` or `--frontend` both the backend and the frontend will be deployed.

If you executed this command with the `--backend` option, the backend code specified in the `genezio.yaml` configuration file will be deployed.&#x20;

If you executed this command with the `--frontend` option, the frontend code specified in the `genezio.yaml` configuration file will be deployed.&#x20;

If the `--install-deps` option is used and your project's dependencies are incomplete, the CLI will install the necessary dependencies.
