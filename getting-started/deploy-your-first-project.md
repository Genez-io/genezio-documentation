# Deploy your first project

Run the command below to deploy both your code:

```bash
genezio deploy
```

Once you deploy your code, `genezio` will generate an SDK in the form of a node library, which you can import into the `node_modules` folder of your client application. Don't worry! We upload your SDK in our private registry, where only you can install it based on your authentification token.

\
To import your SDK in your client you have to run the following command:

```
# stage will be 'prod' unless specified otherwise using the --stage flag
npm install @genezio-sdk/{your-project-name}_{your-project-region}@1.0.0-{stage}
```

The output of the command should look like this:

```bash
$ genezio deploy
Bundling your code...✅

Deploying your backend project to genezio infrastructure...
Doing the final touch-ups...✅

Your code was deployed and the SDK was successfully generated!
Your backend project has been deployed and is available at https://app.genez.io/project/<project_id>
```

Congratulations! You just deployed your first project.

You can navigate to the output link to do the following:

* Test your code in a production environment
* Check out logs for your project
* Set up useful configurations for your projects such as environment variables

If you want to get inspired, check out more [**examples**](https://github.com/genez-io/genezio-examples)!
