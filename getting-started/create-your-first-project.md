# Create your first project

Go through the following steps to configure a `hello-world` project in no time using `genezio`.

### Login using the genezio cli tool

Open a terminal and run:

```
genezio login
```

### Initial Configuration

```
genezio init
```

You will be prompted to answer some questions to create the initial configuration of your project. The configuration will be saved into a new folder with an auto-generated file named `genezio.yaml`.

{% code overflow="wrap" %}
```
$ genezio init
What is the name of the project: hello_world_project
What region do you want to deploy your project to? [default value: us-east-1]: 

Your genezio project was successfully initialized!

The genezio.yaml configuration file was generated.
You can now add the classes that you want to deploy using the
'genezio addClass <className> <classType>' command.
```
{% endcode %}

### Navigate to the project folder

```
cd ./hello_world_project
```

### Add a New Class

{% tabs %}
{% tab title="TypeScript" %}
Run the command below:

<pre><code><strong>genezio addClass hello.ts
</strong></code></pre>

A new file `hello.ts` will be created where you will write the logic of your application.

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
Run the command below:

<pre><code><strong>genezio addClass hello.js
</strong></code></pre>

A new file `hello.js` will be created where you will write the logic of your application.

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
Run the command below:

<pre><code><strong>genezio addClass hello.dart
</strong></code></pre>

A new file `hello.dart` will be created where you will write the logic of your application.

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

Now your project is ready to be tested and deployed:

* [Test your project locally](test-your-project-locally.md)&#x20;
* &#x20;[Deploy your project](deploy-your-first-project.md)

