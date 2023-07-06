# Deploy your first project

Run `genezio deploy` to deploy both your backend and frontend code:

```bash
genezio deploy
```

Once you deploy your code, `genezio` will generate the SDK files for you to import them in the client code.

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
