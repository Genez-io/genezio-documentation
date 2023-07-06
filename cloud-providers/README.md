# Cloud Providers

You can seamlessly deploy your project using genezio. Genezio offers the possibility to deploy in two ways.

* [Using the genezio cloud](genezio-cloud.md).
* [Using your own AWS account.](aws.md)

This can be configured by setting the `cloudProvider` property of the `genezio.yaml` configuration file.

```
name: hello
region: us-east-1
cloudProvider: selfManagedAws | genezio
sdk:
  language: js
  path: ../client/src/sdk
classes:
  - path: ./hello.js
```
