---
description: Learn about Genezio’s on-demand databases, including PostgreSQL and MongoDB. Create, manage, and link databases effortlessly with Genezio
---

import CreateDatabase from '/img/features/databases/create_database.webp';
import LinkDatabase from '/img/features/databases/link_database.gif';

# Databases

<head>
  <title>Databases | Genezio Documentation</title>
</head>
Databases enable you to store and manage data in a structured way. They are a fundamental part of most applications and
are used to store information such as user data, application data, logs, and more.

Genezio offers on demand databases that are provisioned through our partners. This means that you can create a
database in a few seconds without having to worry about the infrastructure, scalability or maintenance of it.

## Supported Databases

We support the following databases:

- PostgreSQL (provided through [**Neon**](https://neon.tech/))
- MongoDB (coming soon)

## Create a database

### Using the dashboard

To create a database you can navigate our dashboard, go to the [**Databases**](https://app.genez.io/databases/) page
and click on the **Create Database** button.

Alternatively, you can select a project, choose "Database" from the left-side menu and click on the **Create Database** button.

### Using the configuration file

To create a database, you can add the following snippet in the configuration file:

```yaml title="genezio.yaml"
services:
  databases:
    - name: my-database
      region: us-east-1
```

This will automatically create and link a database named `my-database` in the `us-east-1` region.

You can connect to it in the code using the environment variable `${<DATABASE_NAME>_DATABASE_URL}`.
For example, if the database name is `my-postgres`, the environment variable will be `MY_POSTGRES_DATABASE_URL`.

:::tip
Use `${{services.databases.<database-name>.uri}}` in the `genezio.yaml` to access the connection URI.
:::

## Using the database

Once the database is created, you have two options to use it:

- **Directly**: You can use the credentials provided to connect to the database and start using it. To gather them,
  press the `Connect` button corresponding to the database you want to use.

  :::info
  This is useful when you want to inspect/modify the database using a database client such as psql, DBeaver or TablePlus.
  :::

- **Through a Genezio project**: You can create a project and link the database to it. Click on the project you want to add the database to and
  click on the `Database` button on the sidebar. Here you can link a previously created database to the project or create a new database. This way you can use the
  database in your project without having to worry about the credentials. The connection URL can be accessed by
  your application through an environment variable that has the following format: `${DATABASE_NAME}_DATABASE_URL`.

  :::info
  For example, if you linked a database named `purple-capybara` to your project, the environment variable name will be
  `PURPLE_CAPYBARA_DATABASE_URL` and it's value will be set to the database connection URL.
  :::
