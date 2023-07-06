# Local

### Usage

`genezio local [-p, --port <port>] [--logLevel <logLevel>] [--env <envFile>]`

### Description

{% hint style="info" %}
You must be authenticated to use this command.
{% endhint %}

This command emulates locally the behaviour of a deployed project and generates the SDK for calling the classes locally.

It opens a local server for faster and easier development and debugging.

`-p, --port <port>`: Select a custom port for the local server. By default, the server is opened on port 8083. If that port is already occupied or if you want to use another one.

`--env <envFile>`:  Let's you select a custom environment variables file to be used in your locally run project. If not present, the `.env` file will be used by default.
