# Serverless Containers (Beta)

:::info
Please note that this feature is currently in Beta, and the API is subject to change.
:::

You can now deploy containerized web applications in a serverless environment. To deploy your container, ensure it contains an HTTP server that listens on port 8080 by default. If you need a custom port, add `LISTEN <OTHER_PORT>` in the Dockerfile.

Deploy your container using the command:

```bash
genezio deploy --image <path_to_dockerfile>
```

To deploy your container, ensure that Docker is installed on your system, as it is required to build and manage the container image.

The container runs in a Function-as-a-Service (FaaS) environment, using a request-response model. It will handle requests and automatically sleep when idle to optimize resources.

Keep your Docker image as small as possible for faster deployment. The max image size is currently 250MB. We recommend using slim base images, like node:slim, for better performance.
