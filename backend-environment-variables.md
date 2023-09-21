# Backend Environment Variables

This page describes how to set environment variables for your backend classes.

These variables can be either secrets such as database keys or 3rd party API keys, or variables to use globally across your backend classes.

### How to set environment variables using genezio dashboard

To set environment variables in the backend classes, head to the [Dashboard](https://dev.app.genez.io/dashboard) page of the project.

On the `Backend` tab, click on the `Environment Variables` button:

<figure><img src=".gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

Add the environment variables like a `<key, value>` pair. After adding all the environment variables hit the `Save` button:

<figure><img src=".gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

Note: You can also import environment variables from a file using `Import from .env` button.

### How to set environment variables using genezio CLI&#x20;

You can load your environment variables when deploying `genezio` in the CLI by appending the following flag:

```
genezio deploy --env .env
```

### How to use the environment variables in your project

The environment variables used on the deployed environment are exported.

{% tabs %}
{% tab title="TypeScript" %}
To access an environment variable use `process.env.MY_VARIABLE`

<pre class="language-typescript" data-title="main.ts" data-overflow="wrap" data-line-numbers><code class="lang-typescript">const myVariable = process.env.MY_VARIABLE;
<strong>console.log('Print environment variable', myVariable);
</strong></code></pre>
{% endtab %}

{% tab title="Dart" %}
To access an environment variable use `Platform.environment['MY_VARIABLE']`

{% code title="main.dart" overflow="wrap" lineNumbers="true" %}
```dart
import 'dart:io';

void main() {
    my_variable = Platform.environment['MY_VARIABLE'];
    print(my_variable);
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Note: There is no need to import specific libraries for loading environment variables (such as `dotenv`), `genezio` loads them for you.

