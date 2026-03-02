---
sidebar_position: 3
description: Learn how to integrate Neon Postgres with your projects using our guide. Follow step-by-step instructions for seamless database integration.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Neon Postgres

<head>
  <title>Neon Postgres Integration | DeployApps Documentation</title>
</head>
:::info
A guide to integrate Neon resources in DeployApps projects
:::

### Introduction to Neon

[Neon](https://neon.tech/) is a fully managed serverless Postgres provider. Neon separates storage and compute and offers modern developer features such as serverless, branching, bottomless storage, and more.

### Set up a Neon Postgres Database

Navigate to the project integration page in the dashboard and select to `Install` a Neon Postgres database to your project:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/integrations.webp")} alt=""/><figcaption></figcaption></figure>

Connect with an Neon account using the preferred login method:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (47) (1).webp")} alt="" width="350"/><figcaption></figcaption></figure>

Create a Neon project or select an already existing project:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (48).webp")} alt="" width="375"/><figcaption></figcaption></figure>

Select the branch, database and role for the Neon project:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (49).webp")} alt="" width="375"/><figcaption></figcaption></figure>

Hit `Save` to save the database credentials as backend environment variables

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (50).webp")} alt="" width="375"/><figcaption></figcaption></figure>

Use the environment variables in your DeployApps project to connect to the Postgres database.

<!-- {% code title="index.ts" %} -->

```typescript title="index.ts"
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.NEON_DATABASE_URL,
});

pool.query("SELECT * FROM your_table_name", (error, results) => {
  console.log("Query Result:", results.rows);
  pool.end();
});
```

<!-- {% endcode %} -->

Note: Install `pg` using npm, if you don't have this dependency already in your project:

```bash
npm install pg
```

### Test Locally with a Neon Postgres Database

To test your project locally, you have to create a file named `.env` and store the Neon Postgres credentials there. This file should be in the root directory of your backend.

Use the DeployApps [dashboard](https://app.genez.io) under `Integrations/Neon Postgres` card to copy the Postgres credentials in your `.env` file.

<!-- {% code title=".env" %} -->

```fallback title=".env"
NEON_POSTGRES_URL=postgres://<username>:<password>@<hostname>/<database>
```

<!-- {% endcode %} -->

Now you can use `genezio local` to start a server locally that will also load up the necessary environment variables to connect to the Postgres database.
