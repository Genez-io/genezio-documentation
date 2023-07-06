# Init

### Usage

`genezio init [--logLevel <logLevel>]`

### Description

Initialize and configure a new genezio project.

You will have a wizard with the following questions:

* What is the name of the project: test
* In what programming language do you want your SDK? (js, ts or swift) \[js]
* What runtime will you use? Options: "node" or "browser". \[node]
* Where do you want to save your SDK? \[./sdk/]

{% hint style="info" %}
**Note:** Between the square brackets are the default values if you leave them blank&#x20;
{% endhint %}

### Example

Run:

```bash
genezio init
```

Response:

```bash
What is the name of the project: test_project
In what programming language do you want your SDK?  (js, ts or swift) [js]: js
What runtime will you use? Options: "node" or "browser". [node]: node
Where do you want to save your SDK? [./sdk/]: ./../frontend/sdk

Your genezio project was successfully initialized!

The genezio.yaml configuration file was generated.
You can now add the classes that you want to deploy using the
'genezio addClass <className> <classType>' command.
```

