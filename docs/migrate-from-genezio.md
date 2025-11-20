---

sidebar_position: 10
description: This guide offers a practical blueprint for moving each part of your stack to well-supported alternatives.
---

# Migrating From Genezio

This guide provides a clear migration path from Genezio to reliable, widely supported providers such as **Neon**, **MongoDB Atlas**, **AWS**, **GCP**, **Azure**, and others.

Whether your app uses Genezio serverless classes, cron triggers, authentication, or managed databases, this document aims to be a **complete reference** packed with examples, official documentation links, and practical migration suggestions.

## Migrate Databases

If your project is currently using Genezio’s managed databases, you will need to export and migrate your data to another provider.  
We recommend:

- **Neon** for Serverless PostgreSQL: [https://neon.tech](https://neon.tech)
- **MongoDB Atlas** for MongoDB: [https://www.mongodb.com/atlas/database](https://www.mongodb.com/atlas/database)
- Fully-managed Postgres on major cloud platforms such as:
  - Google Cloud Cloud SQL for PostgreSQL
  - Amazon Web Services (AWS) RDS for PostgreSQL
  - Microsoft Azure Database for PostgreSQL

These platforms are fully managed, globally available, and provide generous free tiers.

#### Backup First

Before executing any migration script:

1. **Create a backup** of your database (dump or export).  
2. **Store it securely** in case you need to restore it.

#### MongoDB Migration Script

We've created a **[script](https://github.com/Genez-io/db-copy-scripts/)** that copies data from one database to another. It can be used to export your Genezio database to another database. There is a folder for MongoDB and PostgresSQL and you can follow the instructions in the README.

You can, of course, also just export the data from your database client and import it into your new database.

## Migrate Genezio Classes

You have several migration strategies depending on how closely you want to stick to the original architecture.

#### Option 1 — Keep Genezio Classes and Their SDK

If you want to minimize refactoring, you can **embed your Genezio classes inside an Express application** and continue using the automatically generated SDK. Follow **[this](https://deployapps.dev/blog/express-genezio-easy-error-free-api-management/)** tutorial to find out how to do it.

**Limitations:**

- Future TypeScript versions may break compatibility with the generated SDK.
- The Genezio RPC model, while convenient, will no longer be actively supported.

#### Option 2 — Rewrite Genezio Classes Using REST APIs

This is the recommended long-term approach, convert each Genezio class method into REST endpoints.

Advantages:

- Full control over API versioning  
- Excellent long-term maintainability  
- Compatible with modern frameworks

Here is a small example of how we recommend to migrate a class to an express.js API.

Let's assume this is your class.

```
export class UserService {
  async getUser(id: string) {
    // fetch user
    return { id, name: "Alice" };
  }

  async createUser(name: string, password: string) {
    // save user
    return { success: true };
  }
}
```

Then the express.js code will look like this:

```
const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

const userService = new UserService();

app.get("/user/:id", async (req, res) => {
  const result = await userService.getUser(req.params.id);
  res.json(result);
});

app.post("/user", async (req, res) => {
  const result = await userService.createUser(req.body.name, req.body.password);
  res.json(result);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

```

Instantiate the class and map the request parameters to the class method's parameters. The Genezio class methods were throwing errors so you might want
to handle this as it suites you better: either add a middleware where you handle all errors or add a `try catch` and handle each methods separately.

## Migrate Express.js, FastAPI, Next.js, and Similar Frameworks

If your project uses traditional frameworks inside Genezio, migration is straightforward.

You can deploy it on platforms such as:

- **AWS ECS / Fargate** [https://aws.amazon.com/ecs](https://aws.amazon.com/ecs)
- **Google Cloud Run** [https://cloud.google.com/run](https://cloud.google.com/run)
- **Render** [https://render.com](https://render.com)
- **Fly.io** [https://fly.io](https://fly.io)
- **Railway** [https://railway.app](https://railway.app)

These services support containerized workloads, making your app portable and scalable.

If your application is a frontend application that only contains static files that can be deployed on a CDN, we recommend services such as Github Pages, Cloudflare or AWS Cloudfront.

If your application is a NextJS, Nuxt or similar you can deploy it to Vercel or Netlify.

## Migrate Genezio Authentication

If you are using **Genezio Authentication**, the underlying user data already lives in your database (MongoDB or PostgreSQL). To get the URL and credentials of the database used by the Genezio Authentication system go to `https://app.genez.io`. Navigate to your project and go to Services -> Authentication -> Settings and in `Database URI` you have your database URl.

You have [here](https://github.com/Genez-io/AuthService) the code that is used now by the Genezio Authentication. It is based on Genezio Classes so you can jump to the `Migrate Genezio Classes` section.

#### Alternatives

- [Supabase Auth](https://supabase.com/auth)
- [Auth0](https://auth0.com)
- [Firebase Authentication](https://firebase.google.com/products/auth)

## Migrate Genezio Email Service

You can replace Genezio’s email service with any popular transactional email provider:

- [ZeptoMail](https://www.zoho.com/zeptomail)
- [Mailgun](https://www.mailgun.com)
- [Mailchimp Transactional](https://mailchimp.com/developer/transactional)
- [SendGrid](https://sendgrid.com)
- [NodeMailer](https://www.npmjs.com/package/nodemailer)

## Migrate Environment Variables

Once you migrated the code, you will also need to export your environment variables. You can do this using genezio CLI. First make sure you are logged in the right account.

```
genezio login
genezio account
genezio getenv --projectName <your_project_name> --stage <stage_name> --output <file_where_your_envs_will_be_exported>
```

## Migrate Genezio Cron Jobs

Cron jobs will need to be replaced with scheduled execution services offered by major cloud platforms.

#### AWS → Amazon EventBridge

[https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-rule.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-scheduled-rule.html)

---

#### Google Cloud → Cloud Scheduler

[https://cloud.google.com/scheduler/docs](https://cloud.google.com/scheduler/docs)

---

#### Azure → Logic Apps / Azure Functions Timer Trigger

[https://learn.microsoft.com/azure/azure-functions/functions-bindings-timer](https://learn.microsoft.com/azure/azure-functions/functions-bindings-timer)

---

#### Vercel → Cron Jobs

[https://vercel.com/docs/cron-jobs](https://vercel.com/docs/cron-jobs)

# Conclusion

While Genezio provided a streamlined developer experience, migrating away doesn’t need to be complicated. By transitioning your database, backend classes, authentication logic, and cron jobs to widely supported cloud services, you ensure your application remains stable, scalable, and maintainable for years to come.

This guide offers a practical blueprint for moving each part of your stack to well-supported alternatives. Once migrated, your application will be fully under your control and backed by reliable cloud providers with long-term support.

If you encounter any problem, you can drop us an email and we will be glad to help you.
