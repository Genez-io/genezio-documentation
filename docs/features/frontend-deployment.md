---
sidebar_position: 2
---

# Frontend Deployment

Genezio's frontend deployment offers a simple and cost-effective way to host and serve static websites. It leverages Amazon S3 in combination with CloudFront CDN (Content Delivery Network) to ensure fast and reliable content delivery to users across the globe. In this documentation, we will explore the key features, benefits, and steps involved in deploying your frontend applications using genezio.

:::tip
You can deploy all kinds of frontend apps, including React, Angular, Vue.js, Flutter Web, Pure HTML, Jekyll, Hugo, Svelte, Foundation, etc..
:::

## Deploy the frontend project

First, you have to add the `frontend` field in your `genezio.yaml`:

```yaml title="genezio.yaml" showLineNumbers
name: my-project
region: us-east-1
frontend:
  # Specifies the path of your code.
  path: .
  # Specifies the folder where the build is located.
  # This is the folder that will be deployed.
  publish: build
  # The frontend will be deployed to `cool-capybara.app.genez.io`
  # If not provided, a random one is assigned.
  subdomain: cool-capybara
  # Scripts will run in the specified `path` folder.
  scripts:
    # The command to build your frontend project. This is custom to your project.
    # It must to populate the specified `publish` folder with a `index.html` file.
    build: npm run build
```

Learn more about the `genezio.yaml` file in the [Yaml Configuration File](/docs/project-structure/genezio-configuration-file) page.

Run the following command in the same directory as your `genezio.yaml` file to deploy your frontend project:

```sh title="Terminal"
genezio deploy --frontend
```

You can start with a project from our [examples](https://github.com/genez-io/genezio-examples).

Once your deployment is successful, you can conveniently access comprehensive information about your frontend deployment through the genezio [dashboard](https://app.genez.io). Within your project page, you will find a dedicated "Frontend" tab, providing you with valuable insights and details regarding your deployed frontend application.

## Next Steps

Check out how you can set up a [Custom Domain](/docs/features/custom-domain-configuration "mention") configuration for your frontend deployment.
