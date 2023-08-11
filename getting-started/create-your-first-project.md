# Create your first project

{% hint style="warning" %}
To create a project on genezio, you need a genezio account. Go to [Create a genezio account](create-a-genezio-account.md) to create an account.
{% endhint %}

Go through the following steps to configure a `hello-world` project in no time using `genezio`.

### Login using the genezio cli tool

Open a terminal and run `genezio login`. You will be redirected to a login page. After successfully going through this step, you will be able to use `genezio` authenticated in your account.&#x20;

### Initial Configuration

After you've successfully logged in, create a new directory and run `genezio init` inside it.&#x20;

You will be prompted to answer some questions to create the initial configuration of your project. The configuration will be saved into a new auto-generated file named`genezio.yaml`.

{% code overflow="wrap" %}
```
$ genezio init
What is the name of the project: getting-started
What region do you want to deploy your project to? [default value: us-east-1]: us-east-1
In what programming language do you want your SDK? (js, ts, swift, python, dart) [default value: ts]: ts
Where do you want to save your SDK? [default value: ./sdk/]: ../src/client/sdk
```
{% endcode %}

### Add a New Class

In the project directory run the command below. A new file `hello.ts` will be created where you will write the logic of your application.

```
genezio addClass hello.ts
```

{% tabs %}
{% tab title="TypeScript" %}
For this example, open the newly created file and write the following class:

{% code title="hello.ts" overflow="wrap" %}
```typescript
export class HelloWorldClass {
  helloFoo(): string {
    return "Hello world!";
  }

  helloBar(name: string, location: string): string {
    return `Hello, ${name}! Greetings from ${location}!`;
  }
}
```
{% endcode %}
{% endtab %}

{% tab title="JavaScript" %}
For this example, open the newly created file and write the following class:

{% code title="hello.js" overflow="wrap" %}
```javascript
export class HelloWorldClass {
  helloFoo() {
    return "Hello world!";
  }

  helloBar(name, location) {
    return `Hello, ${name}! Greetings from ${location}!`;
  }
}
```
{% endcode %}
{% endtab %}

{% tab title="Dart" %}
For this example, open the newly created file and write the following class:

{% code title="hello.dart" %}
```dart
class HelloWorldClass {
  String helloFoo() {
    return "Hello world!";
  }

  String helloBar(String name, String location) {
    return "Hello, $name! Greetings from $location!";
  }
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

Now your project is ready to be tested and deployed. [Test your project locally](test-your-project-locally.md) or [Deploy your project](deploy-your-first-project.md) if it is production-ready!

