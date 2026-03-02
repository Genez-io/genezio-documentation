---
sidebar_position: 2
description: Import your existing project and deploy it with Genezio.
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Import an Existing Project

<head>
  <title>Getting Started with DeployApps | DeployApps Documentation</title>
</head>

At DeployApps, we’re all about making the deployment process as seamless as possible. Whether you're a seasoned developer or just getting started, deploying your projects should be quick, easy, and efficient. That’s why we’ve made it incredibly simple to import your existing projects into DeployApps.

DeployApps provides a powerful platform that’s optimized for deploying full-stack projects, including frameworks like Next.js, Express.js, React, Vue, Angular. When you use one of DeployApps's [Supported Languages](https://genezio.com/docs/learn-more/supported-languages/s), we’ll automatically detect your setup and apply the best build and deployment configurations for your project.

In this article, we'll guide you through the steps to bring your GitHub projects to DeployApps, so you can spend more time building and less time on deployment.

## Step-by-Step Guide to Importing and Deploying Your Project

### 1. **Connect to Your GitHub Account**
   Getting started is simple. Navigate to the [New Project page](http://app.genez.io/auth/login?redirect=new-project) on DeployApps, and under the "Import Git Repository" section, connect the GitHub account that you would like to import your project from. Follow the prompts to securely sign in to your GitHub account.

2. **Import Your Repository**
   Once connected, you’ll see a list of your repositories. Find the one you want to import and select "Import". This action will bring your project into the DeployApps environment, ready for configuration and deployment.

3. **Optionally, Configure Any Settings**
   DeployApps is designed to make your life easier. When you import a project built on one of our supported frameworks, DeployApps will automatically detect the framework and set the optimal build and deployment configurations. However, if you have specific needs, you can customize the project settings at this stage.

   - **Build & Output Settings:** You can update the framework, build command, output directory or install command by expanding the "Build & Output Settings" section and making the necessary adjustments.

   - **Environment Variables:** If your project requires environment variables, DeployApps will identify these automatically. You can then paste or enter the necessary values in the "Environment Variables" section.

These configurations can also be updated later, giving you flexibility in how you manage your project.

4. **Deploy Your Project**
   When you’re ready, simply press the "Deploy" button. DeployApps will take care of creating the project and deploying it based on the chosen configurations. This streamlined process ensures that your project is live quickly, with minimal hassle.

5. **Congratulations! View Your Live App**
   Once your deployment is complete, you’ll receive a URL where your app is hosted.
   Your project is now live!

### Next Steps

Now that your project is live, what’s next?

- **Make Continuous Improvements:** After deployment, you’ll be redirected to DeployApps’s in-browser code editor, where you can view the structure of your project and make any necessary changes.
  Every time you push changes to your GitHub main branch, DeployApps automatically deploys the updates, keeping your live app up-to-date. Additionally, DeployApps creates a new environment for each pull request (PR), allowing you to test and review changes in isolation before merging.

- **Add a Custom Domain:** Want your app to have a personalized web address? You can easily configure a custom domain for your project. [Learn how to set up a custom domain here](https://genezio.com/docs/features/custom-domain-configuration/).
