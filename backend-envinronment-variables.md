# Set envinronment variables

This page describes how to set environment variables for your project.

These variables can be either secrets such as database keys or 3rd party API keys, or variables to use globally across the codebase such as ports.

### How to set environment variables

To set environment variables for a project, head to the [Dashboard](https://dev.app.genez.io/dashboard) page of the project.

On the `Backend` tab, click on the `Environment Variables` button:

<figure><img src=".gitbook/assets/image (25).png" alt=""><figcaption></figcaption></figure>

Add the environment variables like a \<key, value> pair, After adding all the environment variables hit the `Save` button:

<figure><img src=".gitbook/assets/image (31).png" alt=""><figcaption></figcaption></figure>

Note: You can also import environment variables from a file using `Import from .env` button.

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

### How to set environment variables locally

To test a project locally, the environment variables have to be set locally also.&#x20;

This can be achieved using 2 approaches.

1. Prefix `genezio local` command with the environment variables values, like below:

```bash
MY_VARIABLE='hello' genezio local
```

2. Set the environment variables in an `.env` file and load this file in the application:

{% tabs %}
{% tab title="TypeScript" %}
Create a `.env` file that contains all the environment variables:

{% code title=".env" %}
```
MY_VARIABLE=hello
```
{% endcode %}

Use `dotenv` to load the environment variables from the file:

{% code title="main.ts" %}
```
import dotenv from 'dotenv';
dotenv.config();

// Access environment variables
const myVariable = process.env.MY_VARIABLE;
console.log('Print environment variable', myVariable);
```
{% endcode %}
{% endtab %}

{% tab title="Dart" %}
Create a `.env` file that contains all the environment variables:

{% code title=".env" %}
```
MY_VARIABLE=hello
```
{% endcode %}

Use `load()` to load the environment variables from the file:

{% code title="main.dart" %}
```dart
import 'package:dotenv/dotenv.dart' show load, env;

Void main() {
    load();
    var my_variable = env['MY_VARIABLE'];
    print(my_variable);
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

