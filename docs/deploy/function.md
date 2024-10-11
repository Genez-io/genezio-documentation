---
description: Genezio offers seamless backend  and frontend deployment using a function-as-a-service infrastructure. Deploy your project with a single-command `genezio deploy`.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Backend Functions 

To deploy your backend functions project, add the `backend` section in your `genezio.yaml`:

:::info
The `genezio.yaml` file is specific to the framework you are using.
Check the [Frameworks](/docs/frameworks/) for more details.
:::

```yaml title="genezio.yaml" showLineNumbers
name: my-project
region: us-east-1
yamlVersion: 2
backend:
  path: .
  language:
    name: js
  functions:
    - name: hello
      path: ./server
      entry: hello.mjs
      handler: handler
```

Learn more about the `genezio.yaml` file in the [Configuration File section](/docs/project-structure/genezio-configuration-file).

This command will deploy your application according to the configuration specified in your `genezio.yaml` file:
```
genezio deploy
```


