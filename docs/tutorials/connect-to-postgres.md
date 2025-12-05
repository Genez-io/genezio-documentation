---
sidebar_position: 3
description: In this tutorial, you will learn how to integrate a Postgres database using in a DeployApps project.
---

# Connect to Postgres

<head>
  <title>Connect to Postgres | DeployApps Documentation</title>
</head>
In this tutorial, you will learn how to integrate a Postgres database in a DeployApps project.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

- [Node.js](https://nodejs.org/en/download/current)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](/docs/getting-started)

You need to have a DeployApps project. Use an existing one, or [create a new one.](/docs/getting-started)

## 1. Create a Postgres database

Open the [DeployApps dashboard](https://app.genez.io/dashboard), pick the project you created earlier and choose "Database" from the left-side menu.

On the Databases page choose to create a Database. Give it a name - say "demo", and choose a region that is closest to your project's deployed region.

## 2. Connect your backend to the Postgres database

Next, you will implement a simple Postgres service that will allow you to use your newly integrated database.

Install the following packages. They will allow you to connect to your database from the backend.

```bash
npm install pg @types/pg
```

Create a new `postgres.ts` file in the root of your project. This file will contain a class that will have a constructor which will connect to your database using the `DEMO_DATABASE_URL` environment variable.

Add the following code snippet:

<!-- {% code title="postgres.ts" lineNumbers="true" %} -->

```typescript title="postgres.ts" showLineNumbers
import { GenezioDeploy } from "@genezio/types";
import pg from "pg";
const { Pool } = pg;

@GenezioDeploy()
export class PostgresService {
  pool = new Pool({
    connectionString: process.env.DEMO_DATABASE_URL,
    ssl: true,
  });

  async insertUser(name: string): Promise<string> {
    await this.pool.query(
      "CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY,name VARCHAR(255))"
    );

    await this.pool.query("INSERT INTO users (name) VALUES ($1)", [name]);
    const result = await this.pool.query("SELECT * FROM users");

    return JSON.stringify(result.rows);
  }
}
```

<!-- {% endcode %} -->

With all that done, you now have a method for inserting a user into a table and then retrieving all the users.

## 3. Test your Postgres service locally

To locally test your Postgres service, you have to copy the environment variable `DEMO_DATABASE_URL` in a `.env` file in the root directory of your project. You can find the value by clicking the "Connect" button in the Database list, under the "Save your databse connection URL" section. Click the eye icon on the right side to be able to copy it.

The `.env` file should look similar to the following snippet:

<!-- {% code title=".env" %} -->

```fallback title=".env"
DEMO_DATABASE_URL="postgres://admin:password@subdomain.region.aws.neon.tech/demo?sslmode=require"
```

<!-- {% endcode %} -->

Start your local environment by running the following command:

```bash
genezio local
```

Test your newly created service in your local test interface at http://localhost:8083/explore.

Here you can send requests to your local backend server and receive responses to check if your service is working properly.

## 4. Deploy your application

After you tested your application, you can deploy it by running the following command in your terminal:

```bash
genezio deploy
```

## Next Steps

Learn about other features like scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

- [Cron Jobs](/docs/genezio-typesafe/cron-methods)
- [HTTP Webhooks](/docs/genezio-typesafe/http-methods-webhooks)

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/deploy/backend)
- [Frontend Deployment](/docs/deploy/frontend)

**Happy Learning!**
