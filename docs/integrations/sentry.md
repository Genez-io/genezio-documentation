---
sidebar_position: 2
---

# Sentry

:::info
A guide to instrument genezio projects using the Sentry integration
:::

<!-- {% hint style="warning" %} -->

:::warning
In order to activate this integration for a project, that particular project should be deployed with genezio **`v0.5.0`** or higher. For older projects, make sure you have the latest version of genezio npm package installed by running **`npm install -g genezio`**, than redeploy the project for which you want to activate the integration
:::

<!-- ::: -->

### Introduction to Sentry

Sentry is an error-tracking and performance-monitoring platform. Sentry is used by developers to identify and fix software errors, crashes, and performance issues in applications. It collects and aggregates error data, providing developers with insights into the health and stability of their software products.

### Using the Sentry integration for genezio

#### Set up your Sentry account and project

In order to use this integration, you will need your own Sentry account. Go to [https://sentry.io](https://sentry.io) and create your account by filling out their signup form or by using one of the authentication methods provided (Google, GitHub or Azure)

After you created your account, you will need also to create a project which you will later link to your genezio project. From your left-side dashboard select **Projects,** then **Create Project**. You will face a page that looks like this:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/image (41).png" alt=""/><figcaption><p>Create Project Wizard</p></figcaption></figure>

Choose **NODE.JS**. In the next steps choose a suitable name for your project and hit **Create Project**. A pop-up will show asking if you use any frameworks. Click **Skip**. Next, you will see a page titled **Configure Node.js SDK**, providing some code samples. Those code samples allow you to manually instrument your Node.js code, in case you want to do that. The genezio integration does **NOT** require you to write any extra code, so just click **Take me to Issues**.

You should now see your newly created Sentry project in your projects view. Click on it. This is where you will see errors from your genezio project.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/image (43).png" alt=""/><figcaption></figcaption></figure>

In order to link our genezio project to this Sentry project, we will need to grab the project's **DSN**. You can find this by entering the project settings (this icon in the top-right corner), in the **Client Keys (DNS)** section. Copy the value of the DSN.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/Screenshot 2023-08-11 at 14.44.42 (1).png" alt=""/><figcaption><p>Sentry DSN</p></figcaption></figure>

#### Activate the integration in the genezio dashboard

Now that we have the DSN, we can switch our attention to the genezio dashboard. Go to the project for which you want to activate the integration (it must be an already deployed project), open the **Actions** dropdown, and select **Integrations**

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/image (45).png" alt=""/><figcaption></figcaption></figure>

You will see the Sentry integration listed there. Click **Install** and paste the DSN that you copied earlier, then click **Connect**. After a few seconds, you will see that your integration activated successfully. From the same screen, you can also update the integration if you want to change the DSN or disable it.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/image (47).png" alt=""/><figcaption></figcaption></figure>

You should now see your crashes in your Sentry dashboard. An error should look like this:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src="/img/image (46).png" alt=""/><figcaption></figcaption></figure>
