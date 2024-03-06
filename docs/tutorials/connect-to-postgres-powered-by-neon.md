---
sidebar_position: 1
---

# Connect to Postgres (Powered by Neon)

In this tutorial, you will learn how to integrate a Postgres database using Neon in a genezio project.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

- [Node.js](https://nodejs.org/en/download/current)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](../getting-started)

You need to have a genezio project. Use an existing one, or [create a new one.](../getting-started)

## 1. Initialize a Neon Postgres database

Now integrate this project with the Postgres database provided by Neon. To do that, open your genezio dashboard at [dashboard](https://app.genez.io/dashboard) and pick the project you created earlier. In the _**Integrations**_ tab you can select to install the Neon Postgres integration:

![alt_text](https://genezio.com/posts/neon1.png)

Connect with your Neon account:

![alt_text](https://genezio.com/posts/neon2.png)

Create a new Neon Project called getting-started-neon or select an existing one:

![alt_text](https://genezio.com/posts/neon3.png)

Next, choose the project details:

![alt_text](https://genezio.com/posts/neon4.png)

Finally, save the environment variable to your project so that you may use it when you want to connect to your database:

![alt_text](https://genezio.com/posts/neon5.png)

With all that done, your project is fully integrated with a free-tier Neon Postgres database.

## 2. Connect your backend to the Postgres database

Next, you will implement a simple Postgres service that will allow you to use your newly integrated database.

Install the following packages. They will allow you to connect to your database from the backend.

```fallback
npm install pg @types/pg
```

Create a new `postgres.ts` file in the root of your project. This file will contain a class that will have a constructor which will connect to your database using the `NEON_POSTGRES_URL` environment variable. This variable has already been set in your production environment so you don’t need a `.env` file when testing your deployed project from the genezio dashboard.

Add the following code snippet:

<!-- {% code title="postgres.ts" lineNumbers="true" %} -->

```typescript title="postgres.ts" showLineNumbers
import { GenezioDeploy } from "@genezio/types";
import pg from "pg";
const { Pool } = pg;

@GenezioDeploy()
export class PostgresService {
  pool = new Pool({
    connectionString: process.env.NEON_POSTGRES_URL,
    ssl: true,
  });

  async insertUser(name: string): Promise<string> {
    await this.pool.query(
      "CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY,name VARCHAR(255))"
    );

    await this.pool.query("INSERT INTO users (name) VALUES ($1)", [name]);
    const result = await this.pool.query("select * from users");

    return JSON.stringify(result.rows);
  }
}
```

<!-- {% endcode %} -->

With all that done, you now have a method for inserting a user into a table and then retrieving all the users.

## 3. Test your Postgres service

To locally test your Postgres service, you have to copy the environment variable `NEON_POSTGRES_URL` in a `.env` file in the root directory of your project. You can find this variable in the `Integrations` tab of your project page in the [genezio dashboard](https://app.genez.io/):

![alt_text](https://genezio.com/posts/neon6.png)

The `.env` file should look similar to the following snippet:

<!-- {% code title=".env" %} -->

```fallback title=".env"
NEON_POSTGRES_URL="postgres://virgil:<your-password>@ep-fragrant-band-27497881.us-east-1.aws.neon.tech/neondb"
```

<!-- {% endcode %} -->

Start your local environment by running the following command:

```fallback
genezio local
```

Test your newly created service at [test interface](https://app.genez.io/test-interface/local?port=8083).

Here you can send requests to your local backend server and receive responses to check if your service is working properly.

## 4. Deploy your application

After you tested your application, you can deploy it by running the following command in your terminal:

```bash
genezio deploy
```

## Next Steps

Other things that do not depend on connecting to a database are scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

- [Cron Jobs](../features/cron-methods)
- [HTTP Webhooks](../features/http-methods-webhooks)

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](../features/backend-deployment)
- [Frontend Deployment](../features/frontend-deployment)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
- [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)


### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
