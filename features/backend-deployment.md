# Backend deployment

\
Genezio offers a seamless and efficient solution for deploying backend logic. The platform leverages a function-as-a-service infrastructure, allowing users to deploy their backend classes easily with a simple command: `genezio deploy`.&#x20;

{% hint style="success" %}
You can deploy classes written in TypeScript, JavaScript and Dart (experimental).
{% endhint %}

## Code structure

To deploy with genezio, your code has to be structured in classes. Mark your classes for deployment with the `GenezioDeploy` decorator. This decorator also enables you to set the default type of the methods implemented in the specific class to `jsonrpc`, `http` or `cron`.

{% hint style="info" %}
Our recommendation is to use the official genezio templates and examples to be provided with fully written configuration files without having to write one from scratch.

Check out this tutorial to learn how to [create-your-first-project.md](../tutorials/create-your-first-project.md "mention") with genezio.
{% endhint %}

A snippet of a class that can be deployed with genezio is below:

{% code title="index.ts" %}
```javascript
import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class HelloWorldService {
  hello(name string, sender string): string {
    console.log(`Hello world request received with name ${name} from ${sender}!`)
    return `Hello, ${name}, from ${sender}!`
  }
}
```
{% endcode %}

## Configuration file

To deploy your code, your project needs a minimum configuration file that sets various configuration for the project such as name, region to deploy to and so on. A minimum `genezio.yaml` to deploy a project should look like this:

{% code title="genezio.yaml" %}
```yaml
name: my-project-backend
region: us-east-1
language: ts
cloudProvider: genezio
packageManager: npm
```
{% endcode %}

For more details on the `genezio.yaml` file, check the [genezio-configuration-file.md](../project-structure/genezio-configuration-file.md "mention") section.

{% hint style="info" %}
For Dart backend code, a classes list should also be set in the `genezio.yaml`. Check the classes section from[#configuration-file](backend-deployment.md#configuration-file "mention")for more information.
{% endhint %}

Deploy project

The command to actually deploy has to be executed at the same path where `genezio.yaml`is saved:

```
genezio deploy
```

Executing `genezio deploy` will deploy the `HelloWorldService`class implemented in the snippet above.

## Testing

You can make requests to the remote server either by using the[ testing functionality from the genezio dashboard](testing.md), or by using a client application - such as a React app.

To call the methods implemented in the `HelloWorldService`, you can make use of the genezio generated SDK for your project. Check [generated-sdk.md](generated-sdk.md "mention") section to find out how to install it in your project.

