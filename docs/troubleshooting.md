---
sidebar_position: 10
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Troubleshooting

Collection of frequently asked questions with ideas on how to troubleshoot and solve them.

### I am receiving `SyntaxError: Cannot use import statement outside a module`

If you see the following error:

```
SyntaxError: Cannot use import statement outside a module
```

The solution is to add the line `"type": "module"` in `package.json`.

### I am receiving `` OverwriteModelError: Cannot overwrite `Model` model once compiled ``

This is a known Mongoose error. The fix is to add this line when you are exporting your model:

```javascript
export const Model =
  mongoose.models.Model || mongoose.model("Model", modelSchema);
```

### In Test Interface `Couldn't connect to port 8083`

Sometimes, you may see a red error message at the top instead of the green `Success` label. Most likely that means your local server has encountered an error or is running on a different port.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("img/image (39).png")} alt="Connection Failed"/><figcaption><p>Genezio Test Interface connection Failed</p></figcaption></figure>

To establish the connection, verify on which port your server is running and fill that port in the provided input, the click `Connect` (or press Enter). &#x20;

### When executing `genezio local` reloads infinitely

`genezio local` watch for files changes inside your backend directory. If `genezio local` goes into an infinite reloading loop, you might need to use [**`.genezioignore`**](./project-structure/.genezioignore) to ignore the files that keep changing.

### Module not found `Error: Can't resolve 'https' or 'http'`

You are probably trying to use the generated SDK in a browser environment, but in `genezio.yaml` is configured to run in `node` cli environment. To change that. you will need to change the `runtime` option under `sdk.options` from `node` to `browser` in `genezio.yaml`.

### TS1192: Module '@types/bcryptjs/index' has no default export&#x20;

You have to add the following lines into your `tsconfig.json`:

```json
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
  },
```

### TS7006: Parameter 'err' implicitly has an 'any' type.

You have to add the following lines into your `tsconfig.json`:

```json
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
  },
```

### genezio local doesn't reload the code changes <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

`genezio local` watches for files changes inside project directory. If your project directory path contains `(` or has `~` at the end of the path, then genezio local will stop watching for changes in the project.&#x20;

This is a known issue with the `chokidar` library used for watching files.

The solution is to not use `(` and `~` inside your project path.

### Can't Save the custom domain <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

:::info
Please note that it might take up to 12 hours to validate your domain.
:::

If you can't save the custom domain for your project, then there are 2 possible problems.

1. your domain is not a valid domain
2. you are not holding a paid subscription

### DNS misconfiguration <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

If you encounter any difficulties while configuring the default domain of your site to your desired custom domain, we recommend reaching out to your DNS provider for assistance. They will be able to provide guidance and support in properly configuring your DNS settings to ensure a smooth and successful mapping of your custom domain to your genezio hosted site.

Don't hesitate to contact us if the problems persist.

### Invalid Custom Domain <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

The domain name is not valid. Typically, this is because your domain name is not a valid top-level domain. Try again after correcting any spelling errors or typos that were in the failed request, and ensure that the domain name is valid for valid top-level domains.

### Domain not Allowed <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

We were unable to issue a certificate for your domain. Please check your DNS records and try again. If you believe that the result is a false positive, notify the organization that is reporting the domain. VirusTotal is an aggregate of several antivirus and URL scanners and cannot remove your domain from a blacklist itself. After you correct the problem and the VirusTotal registry has been updated, press "Check Again". If the problem persists, contact us.

### CAA Error <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

The CAA record for your domain is preventing us from issuing a certificate. Please add a CAA record with the value `amazon.com` for your domain. This will let us validate your certificate.

:::info
It can take up to 12 hours to validate your certificate
:::

### Browser cache <a href="#browser-cache" id="browser-cache"></a>

In case you have recently made changes to your custom domain or removed it, and you are experiencing difficulties accessing the new URL in your browser, it is recommended to clear your browser's cache. Clearing the cache will ensure that your browser fetches the latest DNS information and redirects you to the correct URL associated with your genezio deployment.

To clear your browser's cache, please refer to the documentation specific to your browser. The process may vary slightly depending on the browser you are using. By following the instructions provided by your browser's documentation, you can easily clear the cache and access your updated custom domain without any issues.

If you encounter any further problems or require additional assistance, feel free to reach out to the genezio support team for further guidance.

### Still in need for help? <a href="#need-more" id="need-more"></a>

Come and chat with us on [Discord](https://discord.com/invite/uc9H5YKjXv) and explain your issue in the `#support` channel. We’re always happy to help!

You can also drop us a [GitHub issue ](https://github.com/Genez-io/genezio/issues/new/choose)and we'll help you from there.
