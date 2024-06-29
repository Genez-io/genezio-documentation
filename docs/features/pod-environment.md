import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Persistent Deployment Pod Environment [ALPHA]


:::warning
This feature is only available when using the `cluster` value in the **genezio.yaml** `cloudProvider` field. For more information see the **[Persistent Backend Deployment](/docs/features/backend-long-living.md)** documentation.
:::

:::warning
This page is a work in progress and will be expanded in the future or it will have its contents moved to other relevant pages
:::

Knowing the environment your app runs in is important. For our persistent deployment methods you have control of the pod instance and with this comes the freedom to integrate 3rd party packages in your apps

## OS and Resources

Your pod will run with an `Alpine` base container image in our Kubernetes cluster.

Resource allocation is as follows:
- Base CPU limit is set to 150 milicores
- Base MEM limit is set to 256 MB
## 3rd Party Packages (hack)

**Scenario**: you want to deploy a class on Genezio that will automatically analyze some of your repositories for the word `foo`
First things first you will need to install `git` (yes, we know tools like [nodegit](https://github.com/nodegit/nodegit) exist but we are running a fictional scenario here!)

Next you will have to clone the repository, and then analyze the text files contained within.

For both of these tasks (install and exec) you can use a library such as shelljs or basic Node.js process spawn functions to execute your commands:
<Tabs groupId="packages">
  <TabItem value="ts" label="TypeScript">
    ```ts title="service.ts" showLineNumbers
    import { GenezioDeploy, GenezioMethod } from "@genezio/types";
    import http from 'http'
    import shell from 'shelljs';

    @GenezioDeploy()
    export class GitChecker {
      constructor(server: http.Server) {
        // Install git on this pod
        if (shell.exec('apk add git').code !== 0) {
          shell.echo('Error: Git installation failed');
        } else {
          shell.echo('Git successfully installed');
        }
      }

      /**
      * Method that will clone a given repository to the target destination
      */
      @GenezioMethod()
      gitCloneAndAnalyze(repoUrl: string, destination?: string){
        const command = destination ? `git clone ${repoUrl} ${destination}` : `git clone ${repoUrl}`;
      
        // Execute the clone command
        if (shell.exec(command).code !== 0) {
          shell.echo('Error: Git repository cloning failed');
          shell.exit(1);
        } else {
          shell.echo(\`Repository successfully cloned to ${destination || 'default directory'}`);
        }

        //...rest of the code that does the analyze part by reading files
      }
    }

    ```
  </TabItem>
</Tabs>

## Future plans

When building the container image and packaging your application it may be a good idea to allow a list of packages from the `apk` repository to be added to your Dockerfile 

