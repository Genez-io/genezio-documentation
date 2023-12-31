# Environments

Genezio provides a way to organise your projects into different, isolated environments.

This enables you to create development, staging environments where you can test new features before launching them into production.

You can deploy your application on different environments by setting the flag `--stage <stage-name>` .&#x20;

<pre class="language-bash"><code class="lang-bash"><strong>genezio deploy --stage &#x3C;stage-name>
</strong></code></pre>

If the stage name passed doesn't exists, it will automatically be created during the first deployment. Otherwise, the environment will be updated with the new source code.

{% hint style="info" %}
If the argument `--stage <stage-name>` is not specified, the default value used will be `prod`.
{% endhint %}

## Create a new environment

Replace `<stage-name>` with the name of the environment you want to deploy to - for example `development`, `staging`, `production`:

```bash
# Deploying the project to the development environment 
genezio deploy --stage development
```

## Subdomain Format

The subdomain format for accessing the frontend depends on the environment name. This enables you to have a different frontend subdomain for each of your environments.  You can easily test your project end-to-end on the same infrastructure before merging into production.&#x20;

If the `stage` flag is specified the genezio subdomain format will be:

`https://<subdomain + stage_name>.app.genez.io`

If the stage flag is not specified the genezio subdomain format will be:

`https://<subdomain>.app.genez.io`

For more information on subdomains, check out the [frontend-deployment.md](frontend-deployment.md "mention") section.
