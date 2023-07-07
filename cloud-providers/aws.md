# AWS

For enhanced control over your cloud assets, you have the choice to deploy your project independently on your AWS account. This arrangement allows you to harness the capabilities of the genezio CLI without a genezio account. To accomplish this, specify the `cloudProvider` attribute in your `genezio.yaml` as `selfHostedAws`.

Here's an example of how to set it up:

```yaml
name: project-name
sdk:
  language: js
  path: ../client/sdk/
cloudProvider: selfHostedAws
classes:
  - path: "./index.js"
    type: jsonrpc
```

This setup requires AWS CLI authentication on your end. Please verify the presence of your access key and secret access key in `~/.aws/credentials`. If you possess multiple access keys, you can choose the one to use by exporting environment variables with `AWS_PROFILE=<profile-name>`.

### Application Architecture

The backend application is deployed on AWS Lambda. Each class defined in the `classes` attribute in `genezio.yaml` will have its own separate AWS Lambda instance for deployment. An API Gateway is placed ahead of all AWS Lambdas, redirecting the requests to their respective functions.

The frontend application is hosted on S3, utilizing its static website features, while a CloudFront configuration forwards requests to the S3 Bucket hosting the application.

Both frontend and backend code deployment employs the AWS CloudFormation service, creating separate stacks for each.

<figure><img src="../.gitbook/assets/image (2).png" alt="" width="372"><figcaption><p>Each class is deployed on a separate AWS Lambda. API Gateway is forwarding the request to the function that should handle that request.</p></figcaption></figure>

{% hint style="info" %}
If your development involves a Dart application, note that you will need a genezio account for Dart code compilation in the Genezio Cloud. We're currently working on integrating with widely used build systems.&#x20;
{% endhint %}
