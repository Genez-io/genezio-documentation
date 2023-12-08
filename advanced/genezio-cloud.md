# Genezio Cloud

Deploying on the genezio cloud is the default mechanism. You only need a genezio account to host your application using genezio. You can either don't set anything special in the `genezio.yaml` configuration file or set `genezio` for the `cloudProvider` key.

Here's an example of how to set it up:

```yaml
name: getting-started
sdk:
  language: ts
  path: ../client/sdk/
cloudProvider: genezio
```

For more information on how to use `genezio.yaml`, check [genezio-configuration-file.md](../project-structure/genezio-configuration-file.md "mention") section.
