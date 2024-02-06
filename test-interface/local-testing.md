# Local Testing

{% hint style="warning" %}
Local Testing using the Genezio Test Interface is **NOT** available on Safari
{% endhint %}

You can quickly test your project using the Genezio Test Interface without deploying it to the cloud. After you run the `genezio local` command (learn more about it from [local.md](../cli-tool/cli-commands/local.md "mention")), follow the link provided to you in your prompt or manually go to[ https://app.genez.io/test-interface/local](https://app.genez.io/test-interface/local)

You should see a green label indicating that your connection to the local server was successful. After that, you can test your functions as you would for a remote environment.

{% hint style="warning" %}
Make sure to refresh the Test Interface after you make changes in your code that make your local server reload to avoid unpredictable behavior
{% endhint %}

<figure><img src="/img/image (21).png" alt="Local Testing"><figcaption><p>Genezio Test Interface Local</p></figcaption></figure>

Sometimes, you may see a red error message at the top instead of the green Success label. Most likely that means your local server is running on a different port.&#x20;

<figure><img src="/img/image (30).png" alt="Connection Failed"><figcaption><p>Genezio Test Interface connection Failed</p></figcaption></figure>

To establish the connection, verify on which port your server is running and fill that port in the provided input, the click `Connect` (or press Enter).

<figure><img src="/img/image (10).png" alt="Different port"><figcaption><p>Connect to a different port</p></figcaption></figure>
