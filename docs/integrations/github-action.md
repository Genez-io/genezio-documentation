---
sidebar_position: 1
description: Learn how GitHub Action integration can automate your deployments and enhance your development workflow. Follow our guide for seamless integration
---

# GitHub Action

<head>
  <title>GitHub Action | Genezio Documentation</title>
</head>
This action sets up a `genezio` environment for using it in actions.

### Usage

To deploy your project on `genezio` using GitHub Actions, you have to provide a `genezio` access token.

Follow these steps to setup a `genezio` access token to use GitHub Actions:

- Head to the `genezio` [dashboard](https://app.genez.io/settings/tokens) to generate a `genezio` access token.
- Store the access token as a GitHub secret in your repository. To see how to create an action secret check this [tutorial](https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository).

In the examples below the secret is referred to as `secrets.GENEZIO_TOKEN`. Change accordingly for your project.

#### Deployment

An example workflow to deploy the backend of your project with the latest version of `genezio`:

```yaml
name: genezio workflow
on:
  push:
    branches:
      - main

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: Genez-io/genezio-github-action@v2
        with:
          token: ${{ secrets.GENEZIO_TOKEN }}
      - name: Deploy backend
        working-directory: ./server
        run: genezio deploy
```

You can test or check logs for the deployed project at https://app.genez.io/projects.

### Documentation

To find more details on how to use `genezio`, check out the official [documentation](https://genezio.com/docs):

- [Getting started](/docs/getting-started)
- [Integrations](/integrations)
- [Environment variables](/docs/project-structure/backend-envinronment-variables)

If you cannot find what you are looking for in the docs, don't hesitate to drop us a [GitHub issue](https://github.com/Genez-io/genezio/issues) or [start a discussion on Discord](https://discord.gg/uc9H5YKjXv).

### Troubleshooting

#### Warnings on `npm run build` are treated as errors:

The following error may occur when running `npm run build` to build the frontend source code:

```
Treating warnings as errors because process.env.CI = true.
Most CI servers set it automatically.

Failed to compile.
```

The solution is to set CI to false in `package.json` or in your workflow:

```yaml
- name: Deploy backend
  working-directory: ./server
  run: genezio deploy
  env:
    CI: false
```
