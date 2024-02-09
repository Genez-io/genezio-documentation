# Dart

The main unit of deployment in Dart is a class. The methods of your class can be called using the following ways:

- JSON-RPC - [Learn more](../method-types/json-rpc-methods.md).
- HTTP - [Learn more](../method-types/http-methods-webhooks.md).
- Scheduled methods using cron strings - [Learn more](../method-types/cron-methods.md).

Below we can see a basic example of a Dart class deployed using genezio.&#x20;

```dart
// ./lib/helloWorldService.dart

class HelloWorldService {
  String hello() async {
    return "hello";
  }

  String helloWithParams(String name, String from, Season value) {
    const message = `Hello, ${name}, from ${from} during this ${value}`;
    return message
  }
}
```

### Supported types

The following types are supported natively in genezio as method parameters or return types:

- int
- double
- String
- bool
- Map
- List
- Classes
- Enums

You can also define your own custom types/classes. To use a class as a method parameter or as a return type, it has to implement the `toJson` and `fromJson` methods.

```dart
// ./lib/helloWorldService.dart

class Person {
  String firstName;
  String lastName;

  Person(
    this.firstName,
    this.lastName,
  );

  factory Person.fromJson(Map<String, dynamic> json) {
      return Person(
        json['firstName'] as String,
        json['lastName'] as String,
    );
  }

  Map<String, dynamic> toJson() {
    return <String, dynamic>{
      'firstName': this.firstName,
      'lastName': this.lastName,
    };
  }
}

// Class deployed on genezio
class HelloWorldService {
  String hello() async {
    return "hello";
  }

  String helloToPerson(Person p) {
    const message = `Hello, ${p.firstName} ${p.lastName}`;
    return message
  }
}
```

One way to implement these methods automatically is to use `json_serializable` code generator. You can check out [this detailed explanation](https://docs.flutter.dev/data-and-backend/json#serializing-json-using-code-generation-libraries) on how to use it.

:::info
We currently don't support importing classes and enums from other files. If you want to use a custom type as method's parameter or return type, it has to be declared in the same file.
:::

### Genezio configuration file

To deploy the classes using genezio, you also need a `genezio.yaml` file. Below we see an example of such a configuration file.

```yaml
# genezio.yaml

name: hello-world
region: us-east-1
sdk:
  language: dart
  options: {}
  path: ../client/lib/sdk
classes:
  - path: ./lib/helloWorldService.dart
    name: "HelloWorldService"
    type: jsonrpc
    methods: []
```

An important aspect is in the `classes` array: here you have to put all your Dart classes you want to deploy. The `name` property identifies which class is the one that you want to deploy.

:::info
The Dart language does not have a cross-compiler. This means that the dart code won't be compiled on your computer. It will be compiled on the genezio infrastructure.
:::
