---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

# Getting Started

Welcome to the "Getting Started" guide! In this tutorial, you will learn how to write a backend class, export its methods, call them from the frontend code, and then deploy both the frontend and the backend locally for testing and pushing live to a staging environment.

## 1. Install genezio

Use your prefered package manager to install genezio:

<Tabs>
  <TabItem className="tab-item" value="npm" label="npm">
<div id="step1-install-npm">
  ```
  npm install genezio -g
  ```
  </div>
  </TabItem>
  <TabItem className="tab-item" value="pnpm" label="pnpm">
  <div id="step1-install-pnpm">
  ```
  pnpm add -g genezio
  ```
  </div>
  </TabItem>
  <TabItem  className="tab-item" value="yarn" label="yarn">
  <div id="step1-install-yarn">
  ```
  yarn add global genezio
  ```
  </div>
  </TabItem>
</Tabs>

<!--
{% tabs %}
{% tab title="npm" %}

```
npm install genezio -g
```

{% endtab %}

{% tab title="pnpm" %}

```
pnpm add -g genezio
```

{% endtab %}

{% tab title="yarn" %}

```
yarn add global genezio
```

{% endtab %}
{% endtabs %}

{% hint style="warning" %}
To install genezio you must have **Node version >= 16**.
::: -->

## 2. Login to the genezio cloud

If you want to test it locally, you can skip this step.

<div id="step2-login">
```
genezio login
```
</div>

:::info
To install the genezio CLI you must have Node.JS >= 18.2
:::

:::info
If you are experiencing permission-denied errors on Windows, run the command below in Powershell:

<div id="step2-error">
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
</div>

:::

## 3. Create a blank project

Copy this command in your terminal to start from a blank template:

<div id="step3-genezio-create">
```
genezio create fullstack --frontend=onboarding-react --backend=onboarding-ts --name=genezio-project --region=us-east-1
```
</div>

:::info
The `genezio create` command can be run using the syntax above or it can be run as a standalone command which will offer a wizard through which you can configure your project.
:::

This will create the following folder structure:

```markdown
genezio-project/
├── client/
│ └── (basic-react-app)
├── server/
│ ├── package.json
│ ├── package-lock.json
│ ├── tsconfig.json
│ └── .eslintrc.js
└── genezio.yaml
```

## 4. Create your first backend microservice

Start by creating the `HelloWorldClass`. It is a good practice to use separate files for each class. Let's name the file `helloWorld.ts`, and place it in the `server` folder. All the backend classes must be placed in the server folder.

Add the `hello` method to the newly created class. This will be the method that will be exported as a typesafe API.

<!-- {% code title="server/helloWorld.ts" lineNumbers="true" %} -->
<div id="step4-server-hello">

```typescript title="server/helloWorld.ts" showLineNumbers
export class HelloWorldClass {
  hello(name: string): string {
    console.log("DEBUG: Call hello method");
    return "Hello " + name;
  }
}
```

</div>

<!-- {% endcode %} -->

Now, import `GenezioDeploy` from `@genezio/types` and use it as a decorator for the `HelloWorldClass`class. This will ensure that all the public class methods will be exported as APIs.

**Note:** Classes that do not use this decorator remain fully private, to be called only from the backend code.

<div id="step4-server-import">
<!-- {% code title="server/helloWorld.ts" lineNumbers="true" %} -->

```typescript title="server/helloWorld.ts" showLineNumbers
// highlight-next-line
import { GenezioDeploy } from "@genezio/types";

// highlight-next-line
@GenezioDeploy()
export class HelloWorldClass {
  hello(name: string): string {
    console.log("DEBUG: Call hello method");
    return "Hello " + name;
  }
}
```

<!-- {% endcode %} -->
</div>

## &#x20;5. Start the genezio local environment

Run `genezio local` to start the genezio backend locally.

To call the backend services from the frontend, genezio generates a Node module in the `client` folder. This Node module will need to be imported in your frontend code, and for now, will expose the `hello` method from the `HelloWorldClass`.

Run this command in your **root project folder**:

<div id="step5-local">
```
genezio local
```
</div>

The generated SDK supports both Typescript and Javascript using either ESM or CJS standards and uses JSON-RPC for communication.

For those who are curious, the generated code can be found in `client/node_modules/@genezio-sdk/genezio-project`

You are now done setting up the backend in the local environment.

**Note:** You can test your API using the [Testing Interface](http://localhost:8083/explore) provided in the genezio dashboard.

## 6. Use your newly created backend in the frontend of your choice

You can use any frontend framework locally to test the backend. For this quick start guide, let’s use our placeholder frontend written in React using [Vite](https://vitejs.dev/).

Run these commands in a **new terminal:**

<div id="step6-run-dev">
```bash
cd ./client
npm install
npm run dev
```
</div>

**Note 1:** your frontend can now be accessed at [http://localhost:5173](http://localhost:5173). At this point, it is not connected to the genezio backend.

**Note 2:** To benefit from the genezio SDK auto regeneration we added the following code to `client/vite.config.ts`

<div id="step6-vite-config">
<!-- {% code title="client/vite.config.ts" lineNumbers="true" %} -->

```typescript title="client/vite.config.ts" showLineNumbers
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import genezioLocalSDKReload from "@genezio/vite-plugin-genezio";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), genezioLocalSDKReload()],
});
```

<!-- {% endcode %} -->
</div>
## 7. Call the backend method from the frontend code

Go to `client/src/App.tsx` and import the generated SDK:

<div id="step7-import">
```typescript
import { HelloWorldClass } from "@genezio-sdk/genezio-project";
```
</div>

Next, change the `sayHello` function to call the server-side code. Notice how your preferred editor auto-completes the class and function call:

<div id="step7-call">
<!-- {% code title="client/src/App.tsx" lineNumbers="true" %} -->

```typescript title="client/src/App.tsx" showLineNumbers
async function sayHello() {
  const res = await HelloWorldClass.hello(name);
  setResponse(res);
}
```

<!-- {% endcode %} -->
</div>

## 8. Test your app

Point the browser to [http://localhost:5173](http://localhost:5173) to test your app locally.

Now let's take it live for everybody to use it.

## 9. Deploy your full-stack app to the genezio cloud

Harness the full power of genezio by deploying both the **backend** and the **frontend** with `genezio deploy`. Also when you run this command, a production SDK will be generated before deploying your frontend.

Run this command in your **root project folder**:

<div id="step9-deploy">
```
genezio deploy
```
</div>

This is a typical part of the output that you should expect:

```
Deploying your backend project to genezio infrastructure...

Your backend code was deployed and the SDK was successfully generated

   ╭────────────────────────────────────────────────────────────────────────────────╮
   │                                                                                │
   │   To install the SDK in your client, run this command in your client's root:   │
   │   npm add @genezio-sdk/genezio-project@1.0.0-prod                              │
   │                                                                                │
   │   Then import your classes like this:                                          │
   │   import { HelloWorldClass } from "@genezio-sdk/genezio-project"               │
   │                                                                                │
   ╰────────────────────────────────────────────────────────────────────────────────╯

Deploying your frontend to genezio infrastructure...

No subdomain is specified in the genezio.yaml configuration file. We will provide a random one for you.

App Dashboard URL: https://app.genez.io/project/<projectId>/<projectEnvId>
Frontend URL: https://<subdomain>.dev.app.genez.io
```

After the deployment succeeds, you can access the [Dashboard](https://app.genez.io), check the logs of the project, and use the [Test Interface](/docs/features/testing) to call your backend functions manually.

## 10. All set

Now you have a fully functional app deployed on the genezio infrastructure to be used publicly. A unique URL is created for your app. Point your browser to the link provided by the genezio deploy command :`https://<subdomain>.app.genez.io` . Enjoy!

## Next Steps <a href="#next-steps" id="next-steps"></a>

Now that you have figured out how to write a backend class, export its methods, call them from the frontend code, and then deploy both the frontend and the backend locally for testing and pushing live to a staging environment, you are ready to take the next steps.

Let’s talk about connecting to a database. We support `PostgreSQL`, `MongoDB`, and `Redis`. If you do not have a database, you will learn how to provision one using a dedicated database hosting provider, with whom we partnered up:

- [**Connect to `Postgres SQL`**](/docs/tutorials/connect-to-postgres-powered-by-neon)
- [**Connect to `MongoDB`**](/docs/tutorials/connect-to-mongodb-atlas)
- [**Connect to `Redis`**](/docs/integrations/upstash-redis)

Every application needs to handle user authentication and authorization. If you do not have an authentication provider, you can learn how to use the genezio authentication service:

- [Create a React application with `genezio authentication`](/docs/tutorials/create-react-app-genezio-auth)
- [Create a React application with `genezio` and `Google OAuth 2.0`](/docs/tutorials/create-react-app-genezio-google-oauth)

Other things that do not depend on connecting to a database are scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

- [Cron Jobs](/docs/features/cron-methods)
- [HTTP Webhooks](/docs/features/http-methods-webhooks)

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
