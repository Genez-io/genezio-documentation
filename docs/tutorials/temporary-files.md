---
description: This tutorial explains how to use temporary files in Genezio functions. Learn how to create, read, and delete temporary files in your functions.
---

# Temporary Files in Genezio Functions

<head>
  <title>Temporary Files in Genezio Functions | Genezio Documentation</title>
</head>

This tutorial will walk you through reading and writing temporary files from Genezio Functions.
We'll cover how bundling operates and how Genezio includes additional files for runtime use in your functions.

## Bundling Genezio Functions

Your application is by default bundled by Genezio to include all necessary user code and dependencies needed for runtime.

You can ignore files or directories from the bundling process by adding them to the `.genezioignore` file in the root of your project. Learn more about [the `.genezioignore` file here](/docs/project-structure/.genezioignore).

## Examples of reading files

Use `process.cwd()` to determine the current directory of the Genezio Function.

```typescript title="./server/index.mjs"
import fs from 'fs';
import path from 'path';

export const handler = async () => {
  const filePath = path.join(process.cwd(), 'test.md');

  const data = fs.readFileSync(filePath, 'utf8');
  console.log("The file contents are:", data);

  return {
    statusCode: 200,
    body: data,
  };
};
```

To deploy this function to Genezio, you have to configure the `genezio.yaml` file. Learn more about [the configuration file here](/docs/project-structure/genezio-configuration-file.md).

## Examples of writing files

Use `process.cwd()` to determine the current directory of the Genezio Function.

```typescript title="./server/index.mjs"
import fs from 'fs';
import path from 'path';

export const handler = async () => {
  const filePath = path.join(process.cwd(), 'test.md');

  fs.writeFileSync(filePath, '# Hello, World!');

  return {
    statusCode: 200,
    body: 'File written successfully',
  };
};
```

To deploy this function to Genezio, you have to configure the `genezio.yaml` file. Learn more about [the configuration file here](/docs/project-structure/genezio-configuration-file.md).

**Note**: When using Function-as-a-Service (FaaS) platforms like Genezio, file system within these environments is ephemeral. This means that any files written to or modified within the function's execution environment will not persist after the function is killed. To use local files, you typically bundle them with your function during deployment, ensuring they are available at runtime. However, since the file system is temporary, any changes made to these files won't be saved after the function completes its execution. For persistent data storage, you'll need to use external storage solutions such a KV store or a database.

Learn how to connect a Postgres or a Redis database to your Genezio function in the [Tutorials section](/docs/tutorials/).
