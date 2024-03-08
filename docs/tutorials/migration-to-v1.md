# Guide on how to migrate to v1.0.0

## genezio.yaml v2

## Remove region from SDK

In the genezio CLI v1.0.0 release, we updated the generated SDK npm package name by removing "region" for a more intuitive naming convention. 

Let's say you have a project named `my-project` in region `us-east-1`.

When using genezio CLI version v0.8.0, the SDK will be named `@genezio-sdk/my-project_us-east-1`. Updating to genezio CLI v1.0.0 will change the SDK package name to `@genezio-sdk/my-project`.

We advise adopting the updated SDK naming convention. To migrate you have to do the following steps:

1. Make sure you don't have any reference in `scripts` in `package.json` to `@genezio-sdk/<project_name>_<project_region>`.

```json
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
    "@genezio-sdk/todo-list-ts_us-east-1": "npm:@genezio-sdk/todo-list-ts@^1.0.0-prod",
    ...
  }
}
```

2. After updating the genezio CLI and deploying for the first time, run `npm install @genezio-sdk/<project_name>`.
3. Replace all genezio SDK imports in your frontend project.

```tsx
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

It is not completely mandatory to switch right away. If you continue using the old name SDK package name, npm will create an alias in your `package.json`. In that case, your `package.json` will look like this:

```
"dependencies": {
    "@genezio-sdk/<project_name>_<project_region>": "npm:@genezio-sdk/<project_name>",
}
```

However, you might still have problems if you are using `genezio local`. It's better to do the change as soon as possible to avoid any unpleasant errors further on.

