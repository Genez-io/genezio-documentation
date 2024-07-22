---
description: This document provides information on how to upgrade your Genezio project after the release of Genezio CLI v1.0.0.
---

# Upgrading to v1

<head>
  <title>Upgrading to v1 | Genezio Documentation</title>
</head>
This document provides information on how to upgrade your Genezio project after the release of Genezio CLI v1.0.0.

## `genezio.yaml` version 2

The `genezio.yaml` configuration file format has been updated to version 2. We have made this change because we felt that the configuration file was not as intuitive as it could be. The new format is more intuitive and easier to understand.

The main changes are:

- A new `yamlVersion` field has been added to the root of the file. It should always be set to `2`.
- All backend fields have been grouped under one `backend` key.
- All frontend fields have been grouped under one `frontend` key.
- You can deploy multiple frontends by adding an array of frontends under the `frontend` key.

We have added a migration tool in `genezio v1.0` to help you migrate your `genezio.yaml` file to version 2. To use the migration tool, you just need to run any `genezio` command:

```sh title="Terminal"
❯ genezio local
? Your project configuration is using an old version of the YAML configuration file. Would you like to migrate it to the latest version? Yes
```

Here is an example of how the `genezio.yaml` file has changed from version 1 to version 2:

```yaml title="genezio.yaml v1"
name: todo-list-ts
region: us-east-1
language: ts
cloudProvider: genezio
scripts:
  preBackendDeploy: npm install
  preFrontendDeploy: npm run install-prod-sdk && npm install && npm run build
  preStartLocal: cd client && npm install && cd ../server && npm install
frontend:
  path: ./client/dist
packageManager: npm
workspace:
  backend: server
  frontend: client
```

```yaml title="genezio.yaml v2"
name: todo-list-ts
region: us-east-1
yamlVersion: 2
backend:
  path: server
  language:
    name: ts
    packageManager: npm
  scripts:
    deploy: npm install
    local: npm install
  cloudProvider: genezio
frontend:
  path: client
  publish: dist
  scripts:
    deploy:
      - npm run install-prod-sdk
      - npm install
    build: npm run build
```

If you still have questions about how to migrate your `genezio.yaml` file to version 2, please refer to the [Genezio Configuration File](../project-structure/genezio-configuration-file.md) documentation or check our [examples](../examples/README.md).

## Remove region from SDK

In the Genezio CLI v1.0.0 release, we updated the generated SDK NPM package name by removing `region` for a more intuitive naming convention.

For instance, if you have a project called `my-project` in the `us-east-1` region, creating the SDK before Genezio CLI v1.0 will result in an NPM package called `@genezio-sdk/my-project_us-east-1`. From Genezio CLI v1.0 onward, the package will be named `@genezio-sdk/my-project`, maintaining the same functionality while being more intuitive.

We advise adopting the updated SDK naming convention. To migrate you have to do the following steps:

1. Make sure you don't have any reference in `scripts` in `package.json` to `@genezio-sdk/<project_name>_<project_region>`.

```json title="package.json"
{
  "name": "todo-list-ts",
  "scripts": {
    // diff-remove
    "install-prod-sdk": "npm install @genezio-sdk/todo-list-ts_us-east-1@1.0.0-prod"
    // diff-add
    "install-prod-sdk": "npm install @genezio-sdk/todo-list-ts@1.0.0-prod"
  },
  "dependencies": {
    // diff-remove
    "@genezio-sdk/todo-list-ts_us-east-1": "^1.0.0-prod",
    ...
  }
}
```

2. After updating the Genezio CLI and deploying for the first time, run `npm install @genezio-sdk/<project_name>`.
3. Replace all Genezio SDK imports in your frontend project.

```tsx title="App.tsx"
import { useState, useEffect } from "react";
import {
  TaskService,
  Task,
  GetTasksResponse,
// diff-remove
} from "@genezio-sdk/todo-list-ts_us-east-1";
// diff-add
} from "@genezio-sdk/todo-list-ts";
import { useNavigate } from "react-router-dom";

```

4. Make sure that there are no more references to `@genezio-sdk/<project_name>_<project_region>`.

It is not completely mandatory to switch right away. If you continue using the old name SDK package name, NPM will create an alias in your `package.json`. In that case, your `package.json` will look like this:

```json title="package.json"
"dependencies": {
    "@genezio-sdk/<project_name>_<project_region>": "npm:@genezio-sdk/<project_name>",
}
```

However, you might still have problems if you are using `genezio local`. It's better to do the change as soon as possible to avoid any unpleasant errors further on.

## Update Github Actions

If you previously used the [`genezio-github-action`](/docs/integrations/github-action.md) to install genezio in a CI/CD environment,
you have to modify your Github Actions to use the tag `@v1` instead of `@main`.

Example: In a CI/CD environment, install genezio version `v1.x.x`:

```yaml title=".github/workflows/deploy.yml"
# diff-remove
- uses: Genez-io/genezio-github-action@main
  # diff-add
- uses: Genez-io/genezio-github-action@v1
  with:
    token: ${{ secrets.GENEZIO_TOKEN }}
```
