---
sidebar_position: 3
description: Genezio provides a postman-like testing tool to send requests to a deployed backend or to a local server started on your machine.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Testing

<head>
  <title>Local Testing Infrastructure | Genezio Documentation</title>
</head>
Genezio provides a local testing infrastructure that mimics the production infrastructure on the cloud.

## Genezio Testing Dashboard

Genezio provides a postman-like testing tool to send requests to a deployed backend or to a local server started on your machine.

The testing dashboard is visually divided into 3 sections as depicted in the screenshot below:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (5).webp")} alt=""/><figcaption></figcaption></figure>

### Project Section

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (4).webp")} alt="alt" width="324"/><figcaption></figcaption></figure>

The left part of the interface contains a card that will display your project in a menu-like structure. You can see your classes and their respective functions as collapsible items when you click each class. Clicking a function in the menu will open a tab for calling that specific function.

At the top of the section, you have a refresh button next to the `My Workspace` label and a Dropdown for switching between `Local` and `Production` environments.

### Parameter Section

The upper side of the right card is dedicated to passing arguments to your functions.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (6).webp")} alt=""/><figcaption></figcaption></figure>

At the top of the section, you will see a green-bordered label, indicating that the connection was established successfully (or a red-bordered error when failing to connect to the local environment), and a `SEND` button for calling your function.

The lower part of the section will be automatically filled with fields for each of your function's parameters. You can pass any value as well as select the type of each parameter, choosing from `Primitive` (any string, number, or boolean), `Object` and `Array` (those 2 have to be valid JSONs).

Your most recent functions are organized in tabs that you can select, close, and drag around. The active tab will always be underlined with a purple line.

### Response Section

The lower side of the right card is where you will see the response after calling your functions.

You can see the response in a `RAW` format or a `PRETTY` format available only for valid JSON responses.

The upper-right part of the section will display the time it took for the request to be made and the status of the response.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (7).webp")} alt=""/><figcaption></figcaption></figure>

### Remote Testing

Test your backend server in a friendly and easy-to-use graphic environment before actually integrating the functions in your frontend application.

To access the testing dashboard, go to the genezio platform, select a deployed backend and click on the `Test Interface` button on the sidebar.

You will be redirected to the testing dashboard where you can craft and send requests to the deployed backend.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (1) (1).webp")} alt=""/><figcaption></figcaption></figure>

You can see the response received from the application in the response section:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (2) (1).webp")} alt=""/><figcaption></figcaption></figure>

You can also check the logs from the backend in the logs section:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (3).webp")} alt=""/><figcaption></figcaption></figure>

<!-- :::info -->

:::info
Make sure to refresh the testing dashboard page after you make changes in your code to avoid unpredictable behavior.
:::

<!-- ::: -->

## Testing in a CLI environment

### Test the server

You can test your code locally by running this command in the project's root directory:

```bash
genezio local
```

The output of the command should look like this:

```bash
$ genezio local
Server listening on port 8083
Your local server is running and the SDK was successfully generated!


   ╭────────────────────────────────────────────────────────────────────╮
   │                                                                    │
   │   Import your classes like this:                                   │
   │   import { HelloWorldClass } from "@genezio-sdk/genezio-project"   │
   │                                                                    │
   ╰────────────────────────────────────────────────────────────────────╯

Test your code at http://localhost:8083/explore
```

This command will spawn a local server on a random port that can be used for testing and will also generate an SDK to be able to call the backend methods from the frontend code.\
\
The SDK is built as a local npm library. To use it, while the local server is running, run this command in you client project:

```bash
npm install @genezio-sdk/{your-project-name}_{your-project-region}
```

If you just want to test your genezio code without having to write any code in your client, head over to the output link [`http://localhost:8083/explore`](http://localhost:8083/explore) to test your project in the Genezio Test Interface:

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/Screenshot 2023-08-11 at 19.28.34.webp")} alt=""/><figcaption></figcaption></figure>

You can use the _Genezio Test Interface_ to test your projects locally, as well as remotely. Find more details about it at [testing](/docs/features/testing).

### Test the client

To test only the frontend locally, you can run the command below in the `client` directory:

<!-- {% code title="./project-root/client" %} -->

```bash title="./project-root/client"
npm run dev
```

<!-- {% endcode %} -->

If you want to test your project locally end-to-end, open two terminals,

<!-- {% code title="./project-root" %} -->

```bash title="./project-root"
genezio local
```

<!-- {% endcode %} -->

<!-- {% code title="./project-root/client" %} -->

```bash title="./project-root/client"
npm install @genezio-sdk/{your-project-name}_{your-project-region}
npm run dev
```

<!-- {% endcode %} -->

<!-- {% hint style="warning" %} -->

:::warning
Local testing from the testing dashboard is **NOT** supported on Safari
:::

<!-- ::: -->

You can easily test your project using the dashboard without deploying it to the cloud.

After you run the `genezio local` command (learn more about it from [local](/docs/cli-tool/cli-commands/local "mention")), follow the link provided to you in your prompt or manually go to[ http://localhost:8083/explore](http://localhost:8083/explore)

You should see a green label indicating that your connection to the local server was successful. After that, you can test your functions as you would for a remote environment.

## Troubleshooting

Sometimes, you may see a red error message at the top instead of the green success label. Most likely that means your local server is running on a different port.

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (39).webp")} alt="Connection Failed"/><figcaption><p>Genezio Test Interface connection Failed</p></figcaption></figure>

To establish the connection, verify on which port your server is running and fill that port in the provided input, the click `Connect` (or press Enter).

<figure style={{textAlign:"center", marginLeft:"0"}}><img style={{cursor:"pointer"}} src={useBaseUrl("/img/image (19).webp")} alt="Different port"/><figcaption><p>Connect to a different port</p></figcaption></figure>
