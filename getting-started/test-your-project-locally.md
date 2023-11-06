# Test your project locally

You can test your code locally by running this command in the project's directory:

```bash
genezio local
```

The output of the command should look like this:

```bash
$ genezio local
Server listening on port 8083
Your code was deployed and the SDK was successfully generated!
Test your code at https://app.genez.io/test-interface/local?port=8083
```

This command will spawn a local server on a random port that can be used for testing and will also generate an SDK to be able to call the backend methods from the frontend code.\
\
The SDK is built as a local npm library. To use it, while the local server is running, run this command in you client project:

```
npm link @genezio-sdk/{your-project-name}_{your-project-region}
```

If you just want to test your genezio code without having to write any code in your client, head over to the output link [`https://app.genez.io/test-interface/local?port=8083`](https://app.genez.io/test-interface/local?port=8083) to test your project in the Genezio Test Interface:

<figure><img src="../.gitbook/assets/Screenshot 2023-08-11 at 19.28.34.png" alt=""><figcaption></figcaption></figure>

You can use the _Genezio Test Interface_ to test your projects locally, as well as remotely. Find more details about it at [test-interface](../test-interface/ "mention")

Now your project is ready to be deployed to a production environment.
