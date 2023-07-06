# GitHub Action

The Github Action can be used to automate genezio commands in your CI/CD pipeline.

The Action is publicly available in this [repository](https://github.com/Genez-io/genezio-github-action).

### Set up a secret genezio token

To deploy your project on `genezio` using GitHub Actions, you have to provide a `genezio` access token.

Follow these steps to set up a `genezio` access token to use GitHub Actions:

* Head to the `genezio` [dashboard](https://app.genez.io/settings/tokens) to generate a `genezio` access token.
* Store the access token as a GitHub secret in your repository. To see how to create an action secret check this [tutorial](https://docs.github.com/en/actions/security-guides/encrypted-secrets?tool=webui#creating-encrypted-secrets-for-a-repository).

In the examples below the secret is referred to as `secrets.GENEZIO_TOKEN`. Change the variable name accordingly for your secret.

After setting up your secret GENEZIO\_TOKEN, you can use the full power of genezio in your CI/CD pipeline.

### Backend Deployment in your CI/CD pipeline

Check out a small example of how to use the genezio Github Action to deploy your backend:

```

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - uses: Genez-io/genezio-github-action@main
        with:
          genezio-version: latest
          token: ${{ secrets.GENEZIO_TOKEN }}
      - name: Test genezio installation
        run: genezio ls
      - name: Deploy backend
        working-directory: ./server
        run: genezio deploy
```

### Frontend deployment in your CI/CD pipeline

Check out a small example of how to use the genezio Github Action to deploy your frontend:

```
deploy-frontend:
  needs: deploy-backend
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 16
    - uses: Genez-io/genezio-github-action@main
      with:
        genezio-version: latest
        token: ${{ secrets.GENEZIO_TOKEN }}
    - name: Test genezio installation
      run: genezio ls
    - uses: actions/download-artifact@master
      with:
        name: genezio-generated-sdk
        path: ./client/sdk
    - name: Build the frontend code
      working-directory: ./client
      run: npm run build
```

### Complete example

Below you can see a complete example that deploys your backend and frontend with genezio every time you push a commit on the `main` branch.&#x20;

Moreover, it uploads the generated SDK as an artifact, so you can access it from the Actions tab for every workflow run.

```
name: genezio workflow
on:
  push:
    branches:
      - main

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - uses: Genez-io/genezio-github-action@main
        with:
          genezio-version: latest
          token: ${{ secrets.GENEZIO_TOKEN }}
      - name: Test genezio installation
        run: genezio ls
      # Check the project at https://app.genez.io
      - name: Deploy backend
        working-directory: ./server
        run: npm i && genezio deploy

      # Use this trick to upload the generated SDK as an artifact
      # It will be used to deploy the frontend
      - uses: actions/upload-artifact@v3
        with:
          name: genezio-generated-sdk
          path: ./client/sdk

  deploy-frontend:
    needs: deploy-backend
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 16
      - uses: Genez-io/genezio-github-action@main
        with:
          genezio-version: latest
          token: ${{ secrets.GENEZIO_TOKEN }}
      - name: Test genezio installation
        run: genezio ls
      - uses: actions/download-artifact@master
        with:
          name: genezio-generated-sdk
          path: ./client/sdk
      - name: Build the frontend code
        working-directory: ./client
        run: npm run build
      # Make sure that you setup a subdomain in the `genezio.yaml` file
      # The frontend can be accessed at https://<your-subdomain>.app.genez.io
      - name: Deploy the frontend for your project
        working-directory: ./server
        run: genezio deploy --frontend
```
