# Genezio Cloud

Deploying on the genezio cloud is the default mechanism. You only need a genezio account to host your application using genezio. You can either don't set anything special in the `genezio.yaml` configuration file or set `genezio` for the `cloudProvider` key.



Here's an example of how to set it up:

```yaml
name: project-name
sdk:
  language: ts
  path: ../client/sdk/
cloudProvider: genezio
classes:
  - path: "./index.ts"
    type: jsonrpc
```

For more information on how to use `genezio.yaml`, check [yaml-configuration-file.md](../yaml-configuration-file.md "mention") section.
