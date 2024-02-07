# Quickstart

### Introduction <a href="#introduction" id="introduction"></a>

Genezio's frontend deployment offers a simple and cost-effective way to host and serve static websites. It leverages Amazon S3 in combination with CloudFront CDN (Content Delivery Network) to ensure fast and reliable content delivery to users across the globe. In this documentation, we will explore the key features, benefits, and steps involved in deploying your frontend applications using genezio.

{% hint style="success" %}
You can deploy all kinds of frontend apps, including React, Angular, Vue.js, Flutter Web, Pure HTML, Jekyll, Hugo, Svelte, Foundation, etc
:::

### Deploy the frontend project <a href="#introduction" id="introduction"></a>

First, you have to add the following fields in the `genezio.yaml`:

{% code title="genezio.yaml" %}

```yaml
name: my-project
sdk:
  language: ts
  path: ../client/src/sdk/
frontend:
  path: ../client/build
  subdomain: test-domain # not mandatory, we will provide a random one for you
classes:
  - path: ./hello.ts
    type: jsonrpc
    methods: []
```

{% endcode %}

Now you have to deploy a frontend project using this command in a folder with `genezio.yaml`:

```
genezio deploy --frontend
```

You can start with a project from our [examples](https://github.com/genez-io/genezio-examples).

If you don't provide a subdomain in your `genezio.yaml` config file, a random one will be provided for you. More information about this can be found on [Yaml Configuration File Page](../yaml-configuration-file.md).

After the deployment succeeds, you can go to the [genezio's dashboard](https://app.genez.io/dashboard) and you will have a frontend tab in your project page where you can see all the information about your frontend deployment.

Once your deployment is successful, you can conveniently access comprehensive information about your frontend deployment through the [genezio dashboard](http://localhost:3000/dashboard). Within your project page, you will find a dedicated "Frontend" tab, providing you with valuable insights and details regarding your deployed frontend application.
