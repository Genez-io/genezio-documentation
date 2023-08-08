# Deployment Environments

This guide will walk you through using the genezio CLI to deploy your applications to different environments using the `genezio deploy` command with the `--stage` option.

```bash
genezio deploy --stage <name>
```

#### Examples

Replace `<name>` with the name of the environment you want to deploy to (e.g., `development`, `staging`, `production`).

```bash
genezio deploy --stage production
genezio deploy --stage development
```

We recommend using different GitHub branches with CI / CD on each of them for different stages.

\
