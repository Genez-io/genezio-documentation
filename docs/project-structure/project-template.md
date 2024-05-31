# Project Template

The Genezio project template showcases how you can structure large projects with Genezio. This template can be used as a starting point for your project or as a way to learn how to organize your project according to the best practices. For this project, we created a dummy todo application to showcase all the functionalities of Genezio.

The whole project can be found in this [GitHub repository](https://github.com/Genez-io/ultimate-project-template.git).

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/) >= 18.2
- [MongoDB URL](https://www.mongodb.com/resources/products/fundamentals/mongodb-cluster-setup)
- [PostgreSQL URL](/docs/features/databases/#how-to-create-a-database)

## Project Structure

### Backend

The backend logic is implemented in the `server` folder. We will go through each component of the backend and thoroughly explain how it works.

#### Database

This component handles the connection to the databases. In this component, you will find two folders `mongoose` and `sequelize` which handle the logic necessary to connect to MongoDB and PostgreSQL respectively. Both of these folders contain a `task.ts` file and a `connection.ts` file. The `task.ts` file contains the schema of the task and the logic to interact with the database. The `connection.ts` file contains the logic to connect to the database. Furthermore, the `sequelize` folder contains a `migration.ts` file which can be used during development to create the tables in the database.

:::warning
Do **not** use the migration functions in production as there is a risk of data loss. We used the migration functions in this project to ensure that you can run the project without any issues.
:::

#### Config

This component contains the files that handle the configuration of the project. The `envHandler.ts` file contains the logic to load the environment variables from the `.env` file. This directory can also be used to handle multiple environments like `development`, `staging`, and `production`.

#### Utils

This component contains the utility functions that are used throughout the project. The `helperFunction.ts` file contains a simple placeholder function that could be used in multiple places in the project. In this directory, you can add files that handle logging, error handling, data processing, and other utility functions.

#### DTOs

This component contains the Data Transfer Objects (DTOs) that are used to transfer data between the frontend and the backend. The `task.ts` file contains the DTOs for the task object such as request and response objects for different backend calls.
These DTOs are used to ensure that the data is in the correct format when it is sent to the frontend. Here you can add more DTOs for different objects in your project.

#### Middlewares

This directory showcases custom made middleware using typescript decorators. The `dateChecker.ts` file contains a decorator that takes two dates as parameters
and checks if the invoked method was called between those two dates. If the request doesn't pass the check then it is dropped. The `parameterChecker.ts` file
contains a decorator that uses the `Zod` library to check if the method parameters have the right structure. Both of these decorators are used on methods inside
Genezio classes. You can also implement your own middleware that invokes classes or parameters directly. If you want to learn more about typescript decorators
you can check out the official [documentation](https://www.typescriptlang.org/docs/handbook/decorators.html).

#### Services

This component contains the main services of your application. The two files, `mongoService.ts` and `postgresService.ts` respectively, showcase how you can implement CRUD operations on a MongoDB or a PostgreSQL database. This is one of the entry points of our backend applications. Notice how the `@GenezioDeploy` decorator is used to signal that this class will be deployed to our infrastructure. To learn more about deployed classes you can check out the [documentation](/docs/features/backend-deployment).

#### Crons

This directory shows how you can implement simple cron functions that make opperations on our two databases. Using the `@GenezioDeploy` decorator we can specify
that this class will have all its associated methods set to be crons by default. Furthermore, we use the `@GenezioMethod` decorator to set the cron string for each
method. This cron string will determine the frequency with which the method will be called. If you want to learn more about crons and cron strings you can check out the [documentation](/docs/features/cron-methods) or [cronTab Guru](https://crontab.guru/).

#### Webhooks

This component contains the implementation of webhooks which can be used to access data on our databases. Again, we use the `@GenezioDeploy` decorator to specify that this class and its methods will be deployed as webhooks. Using this feature you can create endpoints that can be called by other API's or integrations. After the deployment is finished you will be provided with the `http` links that are used to call your methods. If you want to learn more about webhooks you can check out the [documentation](/docs/features/http-methods-webhooks).

### Frontend

The frontend logic is implemented in the `client` folder. We use React and Vite to create a simple UI for handling authentification and task management for each user.

#### Root

In the root of the `client` folder, we have the `main.tsx` file which is the entry point of our frontend application. In the `App.tsx` file we handle the routing for each of our views.

#### Components

The components directory contains the smaller parts of our frontend which can be reused in multiple places of our application. On top of that, this allows us to keep the code easier to read as well as divide our application into multiple modules to respect good software design practices. In our case, we created two components, one to handle the MongoDB tasks and one for the PostgreSQL tasks.

#### Layouts

Layouts are used to wrap our pages and ensure consistency between our views. They are also used to handle logic that can be applied to multiple pages such as device responsiveness and fluidity. In our case, we have two layouts to handle authentication. The `Auth.tsx` file handles unauthenticated routes while the `Adim.tsx` handles authenticated pages.

#### Views

In the views folder, we define the pages that will be served on the routes defined in the `App.tsx` file. For our simple TODO application, we need two pages to handle authentication, `Register.tsx` and `Login.tsx`, and one page to handle the user's tasks, `AllTasks.tsx`. The register and login pages are unauthenticated routes so they will be rendered using the `Auth.tsx` layout. The `AllTasks.tsx` route is authenticated so it will be rendered using the `Admin.tsx` route. All authentication logic is handled by the `AuthService` provided by the `@genezio/auth` library. If you want to learn more about the Genezio authentication, you can check out the [documentation](/docs/features/authentication).

## How to run the project

> 👉 **Step 1** - Install Genezio

```bash
$ npm install -g genezio
```

> 👉 **Step 2** - Clone the project

```bash
$ git clone https://github.com/Genez-io/ultimate-project-template.git
$ cd ultimate-project-template
```

> 👉 **Step 3** - Populate the `.env` file.
> In the `server` directory create a `.env` file and populate it using the `.env.template` file

- If you need help with the environment variables, please follow these two tutorials:

* MongoDB URL: https://genezio.com/docs/tutorials/connect-to-mongodb-atlas/
* PostgreSQL URL: https://genezio.com/docs/features/databases/

> 👉 **Step 4** - Deploy the backend with the environment variables. In the `root` of the project run:

```bash
$ genezio deploy --backend --env ./server/.env
```

> 👉 **Step 5** - Enable Authentification
> Go to the [Genezio Dashboard](https://app.genez.io/dashboard) and choose your project. Click on the `Authentification` tab and choose which database you want to use. Then click on `Enable`. You can choose either MongoDB or PostgreSQL. After that, enable the `Email` provider. Copy the `Token` and the `Region` and save them for later. For more information about authentification, check out the [documentation](/docs/features/authentication/).

> 👉 **Step 6** - Set up Authentification on the frontend
> In the `client` directory go to `src/main.tsx` file and replace the placeholders in the AuthService initialization with the values saved from the Genezio Dashboard.

```typescript title="main.tsx" showLineNumbers
// TODO: Add your token and region from the Genezio dashboard https://app.genez.io/dashboard
AuthService.getInstance().setTokenAndRegion("<token>", "<region>");
```

> 👉 **Step 7** - Test the project locally

- Run the following command in the `root` of the project to start both the backend and the frontend.

```bash
$ genezio local
```

- Open your browser and go to `http://localhost:5173` to see the application.

Alternatively, you can test only the backend methods from our test interface.
By going to `http://localhost:8083/explore` you can test all the methods that are available in the backend from a postman-like interface.

If you want to learn more about our test interface, you can check out the [documentation](/docs/features/testing/).

> 👉 **Step 8** - Deploy the entire project

- Run the following command in the `root` of the project to deploy the entire project.

```bash
$ genezio deploy
```

- Open your browser and go to the frontend link provided by Genezio to see the application.

## Conclusion

This template is a basis for how to structure large Genezio projects. You can use this project and customize it as you see fit to cater to your personal use cases. If you need any help or have any feedback feel free to reach out to us on [Discord](https://discord.com/invite/uc9H5YKjXv) or open a [Github issue](https://github.com/Genez-io/genezio/issues/new/choose) and we will assist you moving forward.
