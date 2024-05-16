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
