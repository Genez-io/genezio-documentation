/**
 * Creating a sidebar enables you to:
 create an ordered group of docs
 render a sidebar for each doc of that group
 provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "README",
    {
      type: "category",
      label: "Getting Started",
      link: { type: "doc", id: "getting-started/README" },
      items: [
        "getting-started/use-a-template",
        "getting-started/import-existing-project"
      ],
      collapsed: false
    },
    {
      type: "category",
      label: "Frameworks",
      link: { type: "doc", id: "frameworks/README" },
      items: [
        "frameworks/angular",
        "frameworks/expressjs",
        "frameworks/fastify",
        "frameworks/nextjs",
        "frameworks/react",
        "frameworks/react-admin",
        "frameworks/refine",
        "frameworks/fastify",
        "frameworks/typesafe-project"
        "frameworks/vue",
      ],
      collapsed: false
    },
    {
      type: "category",
      label: "Tutorials",
      link: { type: "doc", id: "tutorials/README" },
      items: [
        "tutorials/how-to-deploy-a-serverless-function",
        "tutorials/connect-to-postgres-powered-by-neon",
        "tutorials/connect-to-redis-powered-by-upstash",
        "tutorials/connect-to-mongodb-atlas",
        "tutorials/create-react-app-genezio-auth",
        "tutorials/create-react-app-genezio-google-oauth",
        {
          type: "link",
          label: "Create your first Web3 App", // The link label
          href: "https://genezio.com/blog/create-your-first-web3-app/", // The external URL
          description:
            "In this tutorial, you will learn how to create your first Web3 application on Ethereum using genezio and Blast API. You don’t have to know anything beforehand to follow along. I will introduce you to the most basic blockchain concepts and tools to get you from zero to hero in Web3 development. Excited? Let’s get started 🤩"
        },
        {
          type: "link",
          label: "Create your first Chat GPT App", // The link label
          href: "https://genezio.com/blog/create-your-first-app-using-chatgpt/", // The external URL
          description:
            "In this tutorial, you will learn how to create an app called the Rephrasing App. The app that you are going to build has a simple UI written in React, uses the ChatGPT API and is deployed on genezio."
        },
        {
          type: "link",
          label: "Implement a Shopping Cart", // The link label
          href:
            "https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/", // The external URL
          description:
            "In this tutorial, you will learn how to use Redis, NodeJs, and React to easily implement a shopping cart for your online store."
        },
        {
          type: "link",
          label: "Integrate Stripe Payments", // The link label
          href: "https://genezio.com/blog/integrate-stripe-payments/", // The external URL
          description:
            "This guide will walk you through integrating Stripe payments using a genezio backend and a React frontend."
        }
      ]
    },
    {
      type: "category",
      label: "Features",
      link: { type: "doc", id: "features/README" },
      items: [
        "features/backend-deployment",
        "features/frontend-deployment",
        "features/databases",
        "features/testing",
        "features/deployment-environments",
        "features/email-service",
        "features/custom-domain-configuration",
        "features/project-collaboration",
        "features/check-genezio-dashboard",
        "features/genezio-deploy-button"
      ]
    },
    {
      type: "category",
      label: "Genezio Typesafe",
      link: { type: "doc", id: "genezio-typesafe/README" },
      items: [
        "genezio-typesafe/typesafety",
        "genezio-typesafe/authentication",
        "genezio-typesafe/rate-limiter",
        "genezio-typesafe/generated-sdk",
        "genezio-typesafe/http-methods-webhooks",
        "genezio-typesafe/cron-methods",
        "genezio-typesafe/genezio-decorators",
        "genezio-typesafe/project-template",
        "genezio-typesafe/genezio-context"
      ]
    },
    {
      type: "category",
      label: "Project Structure",
      link: { type: "doc", id: "project-structure/README" },
      items: [
        "project-structure/genezio-configuration-file",
        "project-structure/.genezioignore",
        "project-structure/backend-environment-variables"
      ]
    },
    {
      type: "category",
      label: "Genezio CLI",
      link: { type: "doc", id: "cli-tool/README" },
      items: [
        {
          type: "category",
          label: "CLI Commands",
          link: { type: "doc", id: "cli-tool/cli-commands/README" },
          items: [
            "cli-tool/cli-commands/genezio",
            "cli-tool/cli-commands/local",
            "cli-tool/cli-commands/deploy",
            "cli-tool/cli-commands/genezio-clone",
            "cli-tool/cli-commands/genezio-pull",
            "cli-tool/cli-commands/genezio-create",
            "cli-tool/cli-commands/genezio-addclass",
            "cli-tool/cli-commands/genezio-link",
            "cli-tool/cli-commands/genezio-unlink",
            "cli-tool/cli-commands/generatesdk",
            "cli-tool/cli-commands/ls",
            "cli-tool/cli-commands/delete",
            "cli-tool/cli-commands/login",
            "cli-tool/cli-commands/account",
            "cli-tool/cli-commands/logout"
          ]
        },
        "cli-tool/analytics",
        "cli-tool/update"
      ]
    },
    {
      type: "category",
      label: "Integrations",
      link: { type: "doc", id: "integrations/README" },
      items: [
        "integrations/github-action",
        "integrations/upstash-redis",
        "integrations/neon-postgres",
        "integrations/upstash-qstash"
      ]
    },
    {
      type: "category",
      label: "Examples",
      link: { type: "doc", id: "examples/README" },
      items: [
        {
          type: "category",
          label: "TypeScript",
          link: { type: "doc", id: "examples/typescript/README" },
          items: [
            "examples/typescript/getting-started",
            "examples/typescript/hello-world",
            "examples/typescript/todo-list",
            "examples/typescript/todo-list-flutter",
            "examples/typescript/todo-list-angular",
            "examples/typescript/multiversx-integration",
            "examples/typescript/trivia-application",
            "examples/typescript/crud-application",
            "examples/typescript/shopping-cart",
            "examples/typescript/webhook-example"
          ]
        },
        {
          type: "category",
          label: "JavaScript",
          link: { type: "doc", id: "examples/javascript/README" },
          items: [
            "examples/javascript/getting-started",
            "examples/javascript/hello-world",
            "examples/javascript/todo-list",
            "examples/javascript/todo-list-sql",
            "examples/javascript/todo-list-vue",
            "examples/javascript/webhook",
            "examples/javascript/cron",
            "examples/javascript/blockchain-app",
            "examples/javascript/chatgpt-project",
            "examples/javascript/stripe-integration",
            "examples/javascript/html-example"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Learn more",
      link: { type: "doc", id: "learn-more/README" },
      items: ["learn-more/upgrading-to-v1", "learn-more/supported-languages"]
    },
    "troubleshooting",
    {
      type: "link",
      label: "Release Notes", // The link label
      href: "https://github.com/Genez-io/genezio/releases" // The external URL
    }
  ]
};

export default sidebars;
