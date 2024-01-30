# Getting Started

## 1. Install genezio

Use your prefered package manager to install genezio:

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
{% endhint %}

## 2. **Login to the genezio cloud**

If you want to test it locally, you can skip this step.

```
genezio login
```

## 3. **Create a blank project**

Copy this command in your terminal to start from a blank template:

```
genezio create fullstack --frontend=onboarding-react --backend=onboarding-ts --name=genezio-project --region=us-east-1
```

This will create the following folder structure:

```markdown
genezio-project/
 ├── client/
 │  └── (basic-react-app)
 ├── server/
 │  ├── package.json
 │  ├── package-lock.json
 │  ├── tsconfig.json
 │  └── .eslintrc.js
 └── genezio.yaml
```

## 4. Create your first backend microservice

Start by creating the `HelloWorldClass`. It is a good practice to use separate files for each class. Let's name the file `helloWorld.ts`, and place it in the `server` folder. All the backend classes must be placed in the server folder.

Add the `hello` method to the newly created class. This will be the method that will be exported as a typesafe API.

{% code title="server/helloWorld.ts" lineNumbers="true" %}
```typescript
export class HelloWorldClass {
  hello(name: string): string {
    return "Hello " + name;
  }
}
```
{% endcode %}

Now, import `GenezioDeploy` from `@genezio/types` and use it as a decorator for the `HelloWorldClass`class. This will ensure that all the public class methods will be exported as APIs.

**Note:** Classes that do not use this decorator remain fully private, to be called only from the backend code.

{% code title="server/helloWorld.ts" lineNumbers="true" %}
```typescript
import { GenezioDeploy } from "@genezio/types"

@GenezioDeploy()
export class HelloWorldClass {
  hello(name: string): string {
    return "Hello " + name;
  }
}
```
{% endcode %}

## 5. Start the genezio local environment

Run `genezio local` to start the genezio backend locally.

To call the backend services from the frontend, genezio generates a Node module in the `client` folder. This Node module will need to be imported in your frontend code, and for now, will expose the hello method from the HelloWorldClass.

```
genezio local
```

The generated SDK supports both Typescript and Javascript using either ESM or CJS standards and uses JSON-RPC for communication.

For the curious, the generated code can be found in `client/node_modules/@genezio-sdk/genezio-project_us-east-1`

You are now done setting up the backend in the local environment.

**Note:** You can test your API using the [Testing Interface](https://app.genez.io/test-interface/local?port=8083) provided in the genezio dashboard.

## 6. Use your newly created backend in the frontend of your choice

You can use any frontend framework locally to test the backend. For this quick start guide, let’s use our placeholder frontend written in React using [Vite](https://vitejs.dev/).

Run these commands in a **new terminal:**

```bash
cd ./client
npm install
npm run dev
```

**Note 1:** your frontend can now be accessed at [http://localhost:5173](http://localhost:5173). At this point, it is not connected to the genezio backend.

**Note 2:** To benefit from the genezio SDK auto regeneration we added the following code to `client/vite.config.ts`

{% code title="client/vite.config.ts" lineNumbers="true" %}
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import genezioLocalSDKReload from "@genezio/vite-plugin-genezio";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), genezioLocalSDKReload()]
});
```
{% endcode %}

## 7. Call the backend method from the frontend code

Go to `client/src/App.tsx` and import the generated SDK:

```typescript
import { HelloWorldClass } from "@genezio-sdk/genezio-project_us-east-1";
```

Next, change the `sayHello` function to call the server-side code. Notice how your preferred editor auto-completes the class and function call:

{% code title="client/src/App.tsx" lineNumbers="true" %}
```typescript
async function sayHello() {
  const res = await HelloWorldClass.hello(name);
  setResponse(res);
}
```
{% endcode %}

## 8. Test your app

Point the browser to [http://localhost:5173](http://localhost:5173) to test your app locally.

Now let's take it live for everybody to use it.

## 9. Deploy your full-stack app to the genezio cloud

When you run `genezio deploy` you will be redirected to the browser to create a free genezio account. This account allows you to host your app for free and comes with a lot of features that we will explore in a moment.

Harness the full power of genezio by deploying the backend with `genezio deploy`. A free hosting account will be created for you. The free account comes packed with features like a dashboard, user authentication, database provisioning, and more.

Run this command in your **root project folder**:

```
genezio deploy
```

This is a typical part of the output that you should expect:

```
Deploying your backend project to genezio infrastructure...

Bundling your code and uploading it...✅
Checking your credentials...✅
Doing the final touch-ups...✅

Your code was deployed and the SDK was successfully generated!

Your backend project has been deployed and is available at https://app.genez.io/project/<project-id>

Deploying your frontend to genezio infrastructure...

No subdomain is specified in the genezio.yaml configuration file. We will provide a random one for you.

Frontend successfully deployed at https://<subdomain>.app.genez.io
```

## 10. All set

Now you have a fully functional app deployed on the genezio infrastructure to be used publicly. A unique URL is created for your app. Point your browser to the link provided by the genezio deploy command :`https://<subdomain>.app.genez.io` . Enjoy!

## Next Steps <a href="#next-steps" id="next-steps"></a>

Now that you have figured out how to write a backend class, export its methods, call them from the frontend code, and then deploy both the frontend and the backend locally for testing and pushing live to a staging environment, you are ready to take the next steps.

Let’s talk about connecting to a database. We support PostgreSQL, MongoDB, and Redis. If you do not have a database, you will learn how to provision one using a dedicated database hosting provider, with whom we partnered up:

* [**Connect to Postgres SQL**](tutorials/connect-to-postgres-powered-by-neon.md)
* [**Connect to MongoDB**](tutorials/connect-to-mongodb-atlas.md)
* [**Connect to Redis**](integrations/upstash-redis.md)

Other things that do not depend on connecting to a database are scheduling the execution of a function as a cron job, or implementing HTTP Webhooks:

* [Cron Jobs](features/cron-methods.md)
* [HTTP Webhooks](features/http-methods-webhooks.md)

Also, you can find more details on deploying the backend and frontend here:

* [Backend Deployment](features/backend-deployment.md)
* [Frontend Deployment](features/frontend-deployment.md)

Now you are ready for some more advanced use cases:

* [Web3 Application](https://genezio.com/blog/create-your-first-web3-app/)
* [ChatGPT App](https://genezio.com/blog/create-your-first-app-using-chatgpt/)
* [Shopping Cart Implementation](https://genezio.com/blog/implement-a-shopping-cart-using-typescript-redis-and-react/)

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**
