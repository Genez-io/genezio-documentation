# Troubleshooting Guide

{% hint style="info" %}
Please note that it might take up to 12 hours to validate your domain.
{% endhint %}

### Can't Save the custom domain <a href="#dns-misconfiguration" id="dns-misconfiguration"></a>

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

{% hint style="info" %}
It can take up to 12 hours to validate your certificate
{% endhint %}

### Browser cache <a href="#browser-cache" id="browser-cache"></a>

In case you have recently made changes to your custom domain or removed it, and you are experiencing difficulties accessing the new URL in your browser, it is recommended to clear your browser's cache. Clearing the cache will ensure that your browser fetches the latest DNS information and redirects you to the correct URL associated with your genezio deployment.

To clear your browser's cache, please refer to the documentation specific to your browser. The process may vary slightly depending on the browser you are using. By following the instructions provided by your browser's documentation, you can easily clear the cache and access your updated custom domain without any issues.

If you encounter any further problems or require additional assistance, feel free to reach out to the genezio support team for further guidance.

\




\
