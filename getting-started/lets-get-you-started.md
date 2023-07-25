# Let's get you started!

{% hint style="warning" %}
To install the genezio CLI you must have Node.JS (a version greater than Node 14) and npm installed on your working machine.
{% endhint %}

{% hint style="info" %}
If you are experiencing a `permission denied` error on `` `npm install`, please prefix your command with `sudo`. E.g. `sudo npm install genezio -g` ``
{% endhint %}

{% hint style="info" %}
If you are experiencing `permission denied` errors on Windows, run the command below in Powershell:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
{% endhint %}

### Step 1

**Install genezio.** Use the command below to install genezio:

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

{% hint style="warning" %}
If you receive errors related to denied permissions, use the command below:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
{% endhint %}
{% endtab %}
{% endtabs %}

### Step 2

**Log in to genez.io.** Run the following command to log in to your account:

{% tabs %}
{% tab title="Unix/MacOS" %}
```
genezio login
```
{% endtab %}

{% tab title="Windows" %}
```
genezio login
```

{% hint style="warning" %}
If you receive errors related to denied permissions, use the command below:

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
{% endhint %}
{% endtab %}
{% endtabs %}

### Step 3

**Clone our examples repository.** Copy this command in your terminal to clone the repository:

{% tabs %}
{% tab title="Javascript" %}
```
git clone https://github.com/Genez-io/genezio-getting-started-javascript
```
{% endtab %}

{% tab title="Typescript" %}
<pre><code><strong>git clone https://github.com/Genez-io/genezio-getting-started-typescript
</strong></code></pre>
{% endtab %}

{% tab title="Dart" %}
```
git clone https://github.com/Genez-io/genezio-getting-started-dart
```
{% endtab %}
{% endtabs %}

### Step 4

**Navigate to the project directory.** Copy the following command in your terminal to go to our getting started project folder:

{% tabs %}
{% tab title="Javascript" %}
```
cd ./genezio-getting-started-javascript/server
```
{% endtab %}

{% tab title="Typescript" %}
```
cd ./genezio-getting-started-typescript/server
```
{% endtab %}

{% tab title="Dart" %}
```
cd ./genezio-getting-started-dart/server
```
{% endtab %}
{% endtabs %}

### Step 5

**Deploy your code.** Use the command below to deploy both the backend and frontend code using genezio:

```
genezio deploy
```

### Step 6

**Your code is up and running** :tada: Access it using the output link:

```
$ genezio deploy
Bundling your code...✅

Deploying your backend project to genezio infrastructure...

Deploying your frontend to genezio infrastructure...

Frontend successfully deployed at https://getting-started.app.genez.io.
```
