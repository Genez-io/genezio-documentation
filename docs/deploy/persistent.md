---
description: Genezio offers seamless application deployments. Deploy a long-running backend service with a single command `genezio deploy`.
---

# Persistent (Long-Running) Server

Genezio supports deploying persistent or long-running servers, ensuring that your application remains active without scaling down to zero.
This is particularly useful for applications that require continuous processing or stateful operations.


## What is a Persistent Server?

A persistent or long-running server is an application that stays active and does not automatically scale down to zero when there are no incoming requests.
Unlike serverless functions that are event-driven and ephemeral, persistent servers allow for stateful operations and long-running tasks.

## Deploy Persistent Server in Genezio

To deploy a persistent server on Genezio, you need to define the function type as persistent in your genezio.yaml configuration file.

Here's an example of a genezio.yaml configuration file with a persistent function:

```yaml
name: my-project
region: us-east-1
yamlVersion: 2
backend:
  path: .
  language:
    name: js
  functions:
    - name: persistent-server
      path: .
      entry: server.mjs
      handler: handler
      type: persistent
```

Once you have configured the `genezio.yaml` file, you can either commit it to your GitHub repository or deploy it directly using the Genezio CLI:

```bash
genezio deploy
```

Genezio will provision the necessary resources to ensure that your server remains running continuously.

After deploying, you can send requests to your server using the generated endpoint URL available in the Genezio dashboard or in the CLI output.

:::tip info
To send requests to your persistent server, do not forget to prepend `compute-` to the endpoint URL.
The format should be `https://compute-<server-uuid>.<region>.cloud.genez.io`.
:::

Note: Sending requests to the URL `https://<server-uuid>.<region>.cloud.genez.io` will trigger a serverless call instead of a persistent server call.

## Enterprise Support

Persistent servers are available as an Enterprise-only feature.
If you are interested in deploying a persistent server on Genezio, please [contact us](mailto:contact@genez.io) for more information.

For further details on server types and configurations, refer to the [Genezio Configuration File](/docs/project-structure/genezio-configuration-file.md).
