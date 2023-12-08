# Start from a template

{% hint style="info" %}
The `genezio` command is available for versions >= 0.6.3.&#x20;
{% endhint %}

Go through the following tutorial to configure a `hello-world` project in no time using `genezio`.

Open a terminal and run `genezio`. This command will take you through a wizard to create a template for your project.

```
genezio
```

You'll be redirected to sign up with genezio. Choose your preferred sign-up method.

Your terminal should look like this:

```
$ genezio
Redirecting to browser to complete authentication...
Loading... ✅
```

You can choose a starting template based on your needs:

```
? Choose a template for your genezio project (Use arrow keys)
❯ Fullstack 
  Backend-Only
```

Choose a name for your project:

```
? Please enter a name for your project: (genezio-getting-started)
```

Choose a convenient region to deploy your project:

```
? Choose a region for your project (Use arrow keys)
❯ US East (N. Virginia) 
  US East (Ohio) 
  US West (N. California) 
  US West (Oregon) 
  Asia Pacific (Mumbai) 
  Asia Pacific (Osaka) 
  Asia Pacific (Seoul) 
  Asia Pacific (Singapore) 
  Asia Pacific (Sydney) 
  Asia Pacific (Tokyo) 
  Canada (Central) 
  Europe (Frankfurt) 
  Europe (Ireland) 
  Europe (London) 
  Europe (Paris) 
  Europe (Stockholm) 
  South America (São Paulo) 
```

If you are not in an empty directory, genezio will create an empty one for you. Choose a name for the project's directory:

```
? Please enter a name for your directory: genezio-getting-started
We are creating the project in ./genezio-getting-started.
```

Your project will be deployed in a few minutes. All the information you need is going to be displayed on the terminal.

After the deployment is successful, you'll be provided two links of interest:

A link to your backend insights. For example:

```
Your backend project has been deployed and is available at https://app.genez.io/project/0bfd9dcb-92ec-47df-8cf6-6197eebff3fc
```

A link to your frontend application (if you chose to have one). For example:

```
Frontend successfully deployed at https://purple-cute-capybara.app.genez.io.
```

### More details

Next, you can check out the following sections to get more in-depth details on the core features of genezio:

* See how you can easily [test your project locally](../features/testing.md).
* See [Project Structure](../project-structure/) section for details on how to tailor genezio for your needs.
* See other examples deployed with genezio in our [repository](https://github.com/genez-io/genezio-examples).
