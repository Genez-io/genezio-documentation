# Backend Environment Variables

This page describes how to set environment variables for your backend classes.

These variables can be either secrets such as database keys or 3rd party API keys, or variables to use globally across your backend classes.

### Set environment variables using the genezio dashboard

To set environment variables in the backend classes, head to the [Dashboard](https://dev.app.genez.io/dashboard) page of the project.

On the `Backend` tab, click on the `Environment Variables` button:

<figure><img src="/img/image (34).png" alt=""><figcaption></figcaption></figure>

Add the environment variables like a `<key, value>` pair. After adding all the environment variables hit the `Save` button:

<figure><img src="/img/image (40).png" alt=""><figcaption></figcaption></figure>

Note: You can also import environment variables from a file using `Import from .env` button.

### Set environment variables using genezio CLI&#x20;

You can load your environment variables when deploying `genezio` in the CLI by appending the following flag:

```
genezio deploy --env <your-env-file-path>
```

{% hint style="info" %}
Depending on your project's structure - a fullstack single repository or dedicated repositories for backend and frontend - be careful to provide the correct path to the file:&#x20;

`--env .env` or `--env ./server/.env`.
{% endhint %}

### Use environment variables locally

When testing locally with genezio local, the environment variable are loaded by default without any prior flags.

For fullstack single repositories, the default path and name of the environment variables file will be:

```
<root-directory>/<workspace.backend>/.env
```

For dedicated server repositories, the default path and name of the environment variables file will be:

```
<root-directory>/.env
```

If the file used to store environment variables has a different name or is located to a different path, you must provide the new name/localtion using the `.env` flag:

```
genezio local --env ./custom-path/.my-env
```

Note: There is no need for you to explicitly use the `dotenv` library in your code.

### How to use the environment variables in your project

The environment variables used on the deployed environment are exported.

{% tabs %}
{% tab title="TypeScript" %}
To access an environment variable use `process.env.MY_VARIABLE`

<pre class="language-typescript" data-title="main.ts"><code class="lang-typescript">const myVariable = process.env.MY_VARIABLE;
<strong>console.log('Print environment variable', myVariable);
</strong></code></pre>

{% endtab %}

{% tab title="JavaScript" %}
To access an environment variable use `process.env.MY_VARIABLE`

{% code title="main.js" %}

```javascript
const myVariable = process.env.MY_VARIABLE;
console.log("Print environment variable", myVariable);
```

{% endcode %}
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

{% hint style="info" %}
Note: There is no need to import specific libraries for loading environment variables (such as dotenv).`genezio` will implicitly load the `.env` file while testing locally.
{% endhint %}
