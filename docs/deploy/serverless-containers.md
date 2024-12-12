# Serverless Containers (Beta)

:::info
Please note that this feature is currently in Beta, and the API is subject to change.
:::

Genezio supports building and deploying containerized applications.

:::tip
Take a look at this [containers project repository](https://github.com/Genez-io/rust-serverless-container-getting-started).
:::

## Application Requirements

Before you get started, make sure your application meets the following requirements:

* Ensure your project directory includes a Dockerfile, as Genezio requires it to build your container image.
* Your container image must include an HTTP server that listens on a port.
* By default, Genezio assumes the server listens on port `8080`. If your server listens on a different port, add `EXPOSE <OTHER_PORT>` to your Dockerfile.
* Docker is essential to build and manage your container image. Ensure it’s installed and running on your system.
* To guarantee that the docker is build for the correct CPU architecture, we are using the [buildx](https://github.com/docker/buildx) plugin. lease install this plugin if you haven’t already.

## Deploy a Docker image

To deploy a Docker image, install `genezio` on your local machine. Check this [installation guide for more information](../cli-tool/install.md).

To deploy your container run the following command in the same directory with the `Dockerfile`:

```bash
genezio deploy
```

A wizard will start and guide you for the first deployment of the project.

Choose a project name and the region where the project will be deployed:

```bash
✔ Enter the Genezio project name: my-project
✔ Select the Genezio project region: US East (N. Virginia)
```

After the deployment is finished, a server URL will be provided. You can send requests to the server URL to interact with the HTTP server running in the container.
```
Functions Deployed:
  - docker-container: https://<id>.us-east-1.cloud.genez.io
```

The project and region will be saved in the `genezio.yaml` file alongside other infrastructure settings:
```yaml
name: my-project
region: us-east-1
yamlVersion: 2
container:
  path: ./Dockerfile
```

For more information and advanced settings to customize your project, check the [configuration file documentation](../project-structure/genezio-configuration-file.md).

:::tip
The `path` field can be used to specify a custom Dockerfile. By default, it is set to `./Dockerfile`.
:::

Note: Keep your Docker image as small as possible for faster deployment. The maximum image size is currently 1GB. We recommend using slim base images, like `node:slim`, for better performance.

## Logs & Monitoring

The container runs in a Function-as-a-Service (FaaS) environment, using a request-response model. It will handle requests and automatically scale based on the incoming traffic. To optimize resource usage, the container will be scaled down to zero when there are no incoming requests.

After deploying, you can check the logs and monitoring from the [Genezio dashboard](https://app.genez.io).

## Troubleshooting

###  Error  Failed to build Docker image. Error: ExecaError: Command failed with exit code 1: docker buildx build

This error occurs when the Docker build fails. The most common reasons are:

* Docker is not installed or running on your system. Please check if docker is installed and running on your system with `docker info`.
* The Dockerfile is missing or not in the project directory.
* The Dockerfile is invalid or contains errors.

## Support

If you have any questions or need help, please reach out to us on [Discord](https://discord.com/invite/uc9H5YKjXv).
