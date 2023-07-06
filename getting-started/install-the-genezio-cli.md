# Install the genezio CLI

{% hint style="warning" %}
To install the genezio CLI you must have Node.JS (a version greater than Node 14) and npm installed on your working machine.
{% endhint %}

To install `genezio`, open a terminal on your machine and run:

{% tabs %}
{% tab title="Unix/MacOS" %}
```
npm install genezio -g
```
{% endtab %}

{% tab title="Windows" %}
```
npm install genezio -g
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
If you are experiencing a `permission denied` error on `` `npm install`, please prefix your command with `sudo`. E.g. `sudo npm install genezio -g` ``
{% endhint %}

{% hint style="info" %}
If you are experiencing `permission denied` errors on Windows, run the command below in Powershell:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
{% endhint %}
