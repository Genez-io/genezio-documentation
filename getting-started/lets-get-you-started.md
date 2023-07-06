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
{% tab title="Unix/MacOS" %}
```
git clone https://github.com/Genez-io/genezio-examples.git
```
{% endtab %}

{% tab title="Windows" %}
```
git clone https://github.com/Genez-io/genezio-examples.git
```
{% endtab %}
{% endtabs %}

### Step 4

**Navigate to the project directory.** Copy the following command in your terminal to go to our getting started project folder:

{% tabs %}
{% tab title="Unix/MacOS" %}
```
cd ./genezio-examples/javascript/getting-started/server
```
{% endtab %}

{% tab title="Windows" %}
```
cd ./genezio-examples/javascript/getting-started/server
```
{% endtab %}
{% endtabs %}

### Step 5

**Deploy your code.** Use the command below to deploy both the backend and frontend code using genezio:

{% tabs %}
{% tab title="Unix/MacOS" %}
```
genezio deploy
```
{% endtab %}

{% tab title="Windows" %}
```
genezio deploy
```
{% endtab %}
{% endtabs %}

### Step 6

**Your code is up and running** :tada: Access it using the output link:

```
$ genezio deploy
Bundling your code...✅

Deploying your backend project to genezio infrastructure...

Deploying your frontend to genezio infrastructure...

Frontend successfully deployed at https://getting-started.app.genez.io.
```
