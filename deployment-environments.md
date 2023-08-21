# Deployment Environments

Using the genezio CLI, this guide explains how to deploy your applications to different environments using `--stage` .

```bash
genezio deploy --stage <name>
```

####

{% hint style="warning" %}
Every time you deploy with a stage name that doesn't exist, a new stage with that name will be created for your project
{% endhint %}

#### Examples

Replace `<name>` with the name of the environment you want to deploy to (e.g., `development`, `staging`, `production`).

```bash
genezio deploy --stage production
genezio deploy --stage development
```

We recommend using different GitHub branches with CI / CD on each of them for different stages.

\
