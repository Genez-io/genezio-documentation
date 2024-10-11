# Frontend

Genezio's frontend deployment offers a simple and cost-effective way to host and serve static websites.
It leverages Amazon S3 in combination with CloudFront CDN (Content Delivery Network) to ensure fast and reliable content delivery to users across the globe.

:::tip
You can deploy all kinds of frontend apps, including React, Angular, Vue.js, Flutter Web, Pure HTML, Jekyll, Hugo, Svelte, Foundation, etc..
:::

## Deploy the frontend project

To deploy your frontend project, add the `frontend` section in your `genezio.yaml`:

```yaml title="genezio.yaml" showLineNumbers
name: my-project
region: us-east-1
yamlVersion: 2
frontend:
  # Specifies the path of your client code.
  path: .
  # Specifies the path to the build directory.
  # This is the folder that will be deployed.
  publish: build
  # The frontend will be deployed as `https://cool-capybara.app.genez.io`,
  subdomain: cool-capybara
  # Scripts will run in the specified `path` folder.
  scripts:
    # The command to build your frontend project. This is custom to your project.
    # It must to populate the specified `publish` folder with a `index.html` file.
    build: npm run build
```

Learn more about the `genezio.yaml` file in the [Configuration File section](/docs/project-structure/genezio-configuration-file).

This command will deploy your application according to the configuration specified in your `genezio.yaml` file:
```
genezio deploy
```
