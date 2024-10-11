# Serverless Containers (Beta)

:::info
Please note that this feature is currently in Beta, and the API is subject to change.
:::

You can now deploy containerized web applications in a serverless environment. 

Prerequisites: 
* The image must contain an HTTP server that listens on a port. If you need to specify the port, add `LISTEN <OTHER_PORT>` in the Dockerfile. Otherwise, the default is 8080.
* To deploy your container, ensure that Docker is installed on your system, as it is required to build and manage the container image.
* To guarantee that the docker is build for the correct CPU architecture, we are using the [buildx](https://github.com/docker/buildx) plugin. Make sure you have this plugin installed.

To deploy your container run the following command:

```bash
genezio deploy --image <path_to_dockerfile>
```


The container runs in a Function-as-a-Service (FaaS) environment, using a request-response model. It will handle requests and automatically sleep when idle to optimize resources.

Keep your Docker image as small as possible for faster deployment. The max image size is currently 250MB. We recommend using slim base images, like node:slim, for better performance.
