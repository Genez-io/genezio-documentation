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

If you want to test it locally, you can skip this step.&#x20;

```
genezio login
```

## 3. **Create a blank project**

Copy this command in your terminal to start from a blank template:

<pre class="language-bash"><code class="lang-bash"><strong>genezio create fullstack ts-blank-api ts-blank-react --name=genezio-project
</strong></code></pre>

This will create the following folder structure:

```markdown
genezio-project/
 ├── client/
 │  └── (basic-react-app)
 ├── server/
 │  └── package.json
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

The generated SDK supports both Typescript and Javascript using either ESM or CJS standards and uses JSON-RPC for communication.&#x20;

For the curious, the generated code can be found in `client/node_modules/@genezio-sdk/genezio-project_us-east-1`

You are now done setting up the backend in the local environment.

**Note:** You can test your API using the [Testing Interface](https://app.genez.io/test-interface/local?port=8083) provided in the genezio dashboard.

## 6. Use your newly created backend in the frontend of your choice

You can use any frontend framework locally to test the backend. For this quick start guide, let’s use our placeholder frontend written in React using [Vite](https://vitejs.dev/).

```bash
cd ./client
npm install
npm run dev
```

**Note 1:** your frontend can now be accessed at [http://localhost:5173](http://localhost:5173).  At this point, it is not connected to the genezio backend.

**Note 2:** To benefit from the genezio SDK auto regeneration we added the following code to  `client/vite.config.ts`

<pre class="language-typescript" data-title="client/vite.config.ts" data-line-numbers><code class="lang-typescript">import genezioLocalSDKReload from '@genezio/vite-plugin-genezio'

<strong>export default defineConfig({
</strong>  plugins: [react(), genezioLocalSDKReload()],
})
</code></pre>

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

Point the browser to [http://localhost:5173](http://localhost:5173) to test your app. Let us know if you have any questions on [Discord](https://discord.com/invite/uc9H5YKjXv).

## 9. Deploy your full-stack app to the genezio cloud

Harness the full power of genezio by deploying the backend with `genezio deploy`. A free hosting account will be created for you. The free account comes packed with features like a dashboard, user authentication, database provisioning, and more.

```
genezio deploy
```

Now you have a fully functional app deployed on the genezio infrastructure to be used publicly. A unique URL is created for your app. Point your browser to it and start using it right away.

### Next Steps <a href="#next-steps" id="next-steps"></a>

Congratulations! You've completed the Getting Started tutorial. 🌟

Now that you have the basics down, it's time to take the next step in your journey.

Here's what you can do next:

<table data-card-size="large" data-view="cards"><thead><tr><th></th><th></th><th data-hidden></th></tr></thead><tbody><tr><td><a href="tutorials/connect-to-mongodb-atlas.md"><strong>Connect to MongoDB</strong></a></td><td>Powered by Atlas</td><td></td></tr><tr><td><a href="tutorials/connect-to-postgres-powered-by-neon.md"><strong>Connect to Postgres SQL</strong></a></td><td>Powered by Neon</td><td></td></tr><tr><td><a href="broken-reference"><strong>Schedule a Cron / Automation</strong></a></td><td>Automated Task Management Simplified</td><td></td></tr><tr><td><a href="features/http-methods-webhooks.md"><strong>HTTP Calls / Webhooks</strong></a></td><td>Connect your project with other services</td><td></td></tr></tbody></table>

### Support <a href="#support" id="support"></a>

We invite you to join our community on [Discord](https://discord.gg/uc9H5YKjXv) for further information and help.

**Happy Learning!**

