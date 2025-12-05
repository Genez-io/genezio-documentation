---
sidebar_position: 9
description: Easily set up custom domains with DeployApps. Learn about DNS configurations, SSL certificates, and supported domain types
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Custom Domain

<head>
  <title>Custom Domain | DeployApps Documentation</title>
</head>
<!-- :::info -->

:::info
This feature is available only for users holding a subscription. Update your plan [here](https://app.genez.io/billing?plans_modal=true).
::::

<!-- ::: -->

## Introduction

With DeployApps, you can use custom domains, allowing you to customize the root of your website's URL, as well as your backend functions. Instead of being limited to the default domain like "capybara.app.genez.io," you can easily configure DeployApps to use your domain, giving your website a unique and personalized web address.

This feature empowers you to create a professional online presence by associating your website with a domain that reflects your brand or project identity.

## Supported custom domains <a href="#supported-custom-domains" id="supported-custom-domains"></a>

DeployApps works with both apex domains and subdomains.

Example of supported types:

- Apex domain - `test.com`
- Custom Domain - `custom.test.com`
- `www` domain/subdomain - `www.test.com`

After you add a custom domain, we automatically configure the certificate also on all subdomains, including `www`, but you have to add in the DNS configuration the CNAME to use `www` (valid only for frontend custom domains).

## Configure your custom domains <a href="#supported-custom-domains" id="supported-custom-domains"></a>

In the DeployApps dashboard, you can go to a project that has a frontend and/or a function deployed, and on the `Domains` tab in the sidebar, you can set up your custom domain.

On this page, you add your custom domain and click on the "Save" button.

The next step is to put the CNAMEs that you will receive in the bottom part of the page to your DNS provider. We support all DNS providers. If you want to use apex domain, then you have to make sure that your DNS provider accepts `ANAME`, `ALIAS` or `CNAME` for apex.

For some cases, after you add the CNAMEs, another CAA validation might be needed and you will see it on the same page.

Here is a list with tutorials on how to add a CNAME for some of the most common DNS providers:

- [Cloudflare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
- [cPanel](https://docs.cpanel.net/cpanel/domains/zone-editor/)
- [Google](https://support.google.com/a/answer/47283?hl=en)
- [Amazon](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html)
- [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

This is just a short list of some providers that we used.

## Securing the custom domain <a href="#securing-the-custom-domain-for-your-github-pages-site" id="securing-the-custom-domain-for-your-github-pages-site"></a>

You don't need to do any extra steps. You only add the given CNAMEs (most likely 2 for frontend custom domains and only one for backend functions) and we will take care of the rest. DeployApps will automatically create an SSL certificate and automatically renew it so you can use it seamlessly.

## Known limitations

There are some known limitations on setting custom domains depending on the domain's provider.

### Apex Domains

Adding an apex domain such as `test.com` hosted on GoDaddy may encounter limitations during the DNS configuration. To address this, we recommend transferring the domain’s DNS settings to another DNS provider such as Cloudflare. For assistance, please contact our technical support team by sending an email to `contact@genez.io`.

### Function custom domains on Cloudflare

If your domain DNS is hosted on Cloudflare, when you add the CNAME provided in your DeployApps dashboard to your DNS configuration, please make sure you disable the proxy setting for that CNAME record (it should be in "DNS only" mode). This limitation comes from the fact that we need to verify that your domain is pointing to our server before we can move forward with the SSL certificate generation. If proxy is enabled, your domain will point to a Cloudflare IP, and we won't be able to verify it.

## Troubleshooting custom domains <a href="#title-h1" id="title-h1"></a>

In case you encounter issues setting your custom domain, check the [troubleshooting](/docs/troubleshooting "mention") section.

If you cannot find a solution there, ask us on [Discord](https://discord.com/invite/uc9H5YKjXv) in the `#support` channel. We are always happy to help!
