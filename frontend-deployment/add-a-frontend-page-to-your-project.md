# Add a frontend page to your project

With `genezio` you can also host your frontend. To set that up change the `genezio.yaml` as follows:

```yaml
name: getting-started
region: us-east-1
sdk:
  language: ts
  path: ../client/src/sdk
frontend:
  path: ../client/build
scripts:
  preBackendDeploy: "npm install"
  preFrontendDeploy: "cd ../client && npm install && npm run build"
classes:
  - path: ./hello.ts
    type: jsonrpc
    methods: []
```

Create a client folder and create a React template inside it:

{% tabs %}
{% tab title="Unix/MacOS" %}
```
npx create-react-app client --template typescript
```
{% endtab %}

{% tab title="Windows" %}
```
npx create-react-app client --template typescript
```
{% endtab %}
{% endtabs %}

Open up the file `client/src/App.tsx` and paste the following snippet of code:

{% code title="App.tsx" %}
```tsx
import React, { useState, useEffect } from 'react';
import { HelloWorld, Season } from './sdk/helloWorld.sdk';

function App() {
  const [helloWorldString, setHelloWorldString] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await HelloWorld.helloFoo();
      setHelloWorldString(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>{helloWorldString}</h1>
    </div>
  );
}

export default App;
```
{% endcode %}

To test the UI locally, you can run the command below in the `client` directory:

```
npm start
```

If you want to test your project locally end-to-end, open two terminals:

{% code title="Server terminal" %}
```
genezio local
```
{% endcode %}

{% code title="Client terminal" %}
```
npm start
```
{% endcode %}
