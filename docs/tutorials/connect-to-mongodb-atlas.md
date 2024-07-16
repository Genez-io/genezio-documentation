---
sidebar_position: 5
description: In this tutorial, you will learn how to integrate a MongoDB Atlas database in a genezio project.
---

# Connect to MongoDB (Atlas)

<head>
  <title>Connect to MongoDB (Atlas) | Genezio Documentation</title>
</head>
In this tutorial, you will learn how to integrate a MongoDB Atlas database in a genezio project.

### Prerequisites

If you don't already have them, you'll need to install the following tools:

- [Node.js](https://nodejs.org/en/download/current)
- [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](/docs/getting-started)

You need to have a genezio project. Use an existing one, or [create a new one.](/docs/getting-started)

## 1. Initialize a MongoDB Atlas database

For detailed explanations about this step, click [here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup).

If you already have a MongoDB, skip to [step 2](#2-integrate-your-newly-created-cluster-into-the-project).

## 2. **Integrate your newly created cluster into the project**

Create a `.env` file and add a line with the `MONGO_DB_URI=<your_connection_string>` value.

A step-by-step guide on how to get `MONGO_DB_URI` can be found [here](https://www.mongodb.com/basics/mongodb-connection-string).

You can then use it all over your code using `process.env.MONGO_DB_URI`.

## 3. **Create a new DB connection into a class**

Now that we have the connection string, you can integrate MongoDB into your classes.

We will use `mongoose` it to access the database.

```
npm install mongoose
```

Now create a file `mongoDbService.ts`

<!-- {% code title="mongoDbService.ts" lineNumbers="true" %} -->

```typescript title="mongoDbService.ts" showLineNumbers
import { GenezioDeploy } from "@genezio/types";
import mongoose from "mongoose";

@GenezioDeploy()
export class TutorialClass {
  constructor() {
    this.#connect();
  }

  /**
   * Private method used to connect to the DB.
   */
  #connect() {
    mongoose.connect(process.env.MONGO_DB_URI || "").catch((error) => {
      console.log("Error connecting to the DB", error);
    });
  }

  async addUser(name: string) {
    const dbConnection = mongoose.connection;
    // Access the collection directly
    const collection = dbConnection.collection("users");

    // Create the collection if it doesn't exist
    await collection.createIndex({ name: 1 });

    // Insert an object into the collection
    const response = await collection.insertOne({ name: name });
    return response;
  }
}
```

<!-- {% endcode %} -->

Into the class’s constructor, you need to establish the connection with the database.

Now you can use all the functions provided by `mongoose` all over your class.

### **Insights** <a href="#insights" id="insights"></a>

#### **Database connection error** <a href="#database-connection-error" id="database-connection-error"></a>

You might encounter an issue when connecting to your database. One of the main reasons is that your IP might not be allowed to access the cluster. To change this, go to your cluster configuration, and on the tab ‘Network Access’ add your IP or `0.0.0.0` to give full IP access to the database.

#### **Serverless database access** <a href="#serverless-database-access" id="serverless-database-access"></a>

With MongoDB Atlas, there are 2 main ways to query the database.

**Persistent Connection**

This is the most conventional method of establishing a connection to a database, but \[IT] encounters certain issues in a serverless environment, particularly when the initial connection consumes a significant amount of time.

**Data API**

[Mongo DB Atlas Data API](https://www.mongodb.com/docs/atlas/api/data-api/) offers a solution where you can directly access the database through an API, eliminating the requirement of establishing an initial connection and reducing serverless cold-start significantly.

## Next Steps

Other things that do not depend on connecting to a database are scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

- [Cron Jobs](/docs/genezio-typesafe/cron-methods)
- [HTTP Webhooks](/docs/genezio-typesafe/http-methods-webhooks)

Also, you can find more details on deploying the backend and frontend here:

- [Backend Deployment](/docs/features/backend-deployment)
- [Frontend Deployment](/docs/features/frontend-deployment)

Now you are ready for some more advanced use cases:

- [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
- [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
- [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)
- [Integrate Stripe Payments](https://genezio.com/blog/integrate-stripe-payments/)

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
