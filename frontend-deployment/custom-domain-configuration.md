# Custom domain configuration

{% hint style="info" %}
This feature is available only for users holding a subscription. Update your plan [here](https://app.genez.io/billing?plans\_modal=true).
{% endhint %}

### Introduction

With genezio, you can use custom domains, allowing you to customize the root of your website's URL. Instead of being limited to the default domain like "capybara.app.genez.io," you can easily configure genezio to use your domain, giving your website a unique and personalized web address.

This feature empowers you to create a professional online presence by associating your website with a domain that reflects your brand or project identity.

### Supported custom domains <a href="#supported-custom-domains" id="supported-custom-domains"></a>

genezio works with both apex domains and subdomains.

Example of supported types:

* Apex domain - `test.com`
* Custom domain  - `custom.test.com`&#x20;
* `www` domain/subdomain - `www.test.com`

After you add a custom domain, we automatically configure the certificate also on all subdomains, including `www`, but you have to add in the DNS configuration the CNAME to use `www`.

### Configure your custom domains <a href="#supported-custom-domains" id="supported-custom-domains"></a>

In the genezio dashboard, you can go to a project that has frontend deployed, and on the frontend tab, you can set up your custom domain.

<figure><img src="../.gitbook/assets/Screenshot 2023-05-12 at 11.34.17 (1).png" alt=""><figcaption><p>Project page - Frontend Tab</p></figcaption></figure>

On this page, you add your custom domain and click on the "Save" button.

The next step is to put the CNAMEs that you will receive in the bottom part of the page to your DNS provider. We support all DNS providers. If you want to use apex domain, then you have to make sure that your DNS provider accepts `ANAME`, `ALIAS` or `CNAME` for apex.

For some cases, after you add the CNAMEs, another CAA validation might be needed and you will see it on the same page.

Here is a list with tutorials on how to add a CNAME for some of the most common DNS providers:

* [Cloudflare](https://community.cloudflare.com/t/how-do-i-add-a-cname-record/59)
* [cPanel](https://docs.cpanel.net/cpanel/domains/zone-editor/)
* [Google](https://support.google.com/a/answer/47283?hl=en)
* [Amazon](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/)

This is just a short list of some providers that we used.

### Securing the custom domain <a href="#securing-the-custom-domain-for-your-github-pages-site" id="securing-the-custom-domain-for-your-github-pages-site"></a>

You don't need to do any extra steps. You only add the 2 given CNAMEs and we will take care of the rest. Genezio will automatically create an SSL certificate and automatically renew it so you can use it seamlessly.

## Troubleshooting custom domains <a href="#title-h1" id="title-h1"></a>

We encourage you to also read our [Troubleshooting guide](troubleshooting-guide.md) in case problems come up.

