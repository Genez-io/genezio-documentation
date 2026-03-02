---
description: A scheduled method or a cron job is a function that will run periodically. By using a specific syntax, you can define the frequency and timing for each method.
---

# Crons

<head>
  <title>Crons | DeployApps Documentation</title>
</head>

A scheduled method or a cron job is a function that will run periodically. By using a specific cron syntax, you can define the frequency and timing for each method. You can use DeployApps functions to define cron jobs in your project.

## Create a cron job

To create a cron job, you will need a function that will run periodically. You can define the function in your code and then add the cron job in the configuration file. To learn more about DeployApps functions, check the [functions documentation](../tutorials/how-to-deploy-a-serverless-function.md).

```yaml title="genezio.yaml"
name: cron-getting-started
region: us-east-1
yamlVersion: 2
backend:
  path: ./
  language:
    name: js
    packageManager: npm
  functions:
    - name: my-function
      path: ./
      handler: handler
      entry: app.mjs
services:
  crons:
    - name: my-cron
      function: ${{backend.functions.my-function.name}}
      schedule: "* * * * *"
      endpoint: "/my-cron"
```

This configuration file specifies the project name, deployment region, and details about the backend. It also specifies the cron job name, the name of function that will called, the schedule, and the endpoint. In this example, the cron job will run every minute and will call the url provided by your backend function at the specifed endpoint. The `endpoint` field is optional, if it is not provided, the cron job will call the base url of your function.

If you want to learn more about cron strings and how to define a valid schedule, check https://crontab.guru/.

:::info
You can also specify the function name manually like so:

```yaml title="genezio.yaml"
services:
  crons:
    - name: my-cron
      function: my-function
      schedule: "* * * * *"
      endpoint: "/my-cron"
```

:::

## Testing

### Local

To test your crons locally you can simply run `genezio local` and check the terminal logs to see if the cron job is being executed.

### Remote

:::warning
Deploying your project will **sync** the state of the crons with what is in the `genezio.yaml` file. This means that if you delete a cron job from the file and deploy the project, it will be deleted from the cloud as well. Before deploying, make sure that the state provided in the `genezio.yaml` file is your desired output state after deployment.
:::

Simply run `genezio deploy` to deploy your project.

To test if your cron job was succesfully created, you can check the logs of the function that the cron job is calling to see if it is being executed.
