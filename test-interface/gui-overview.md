# GUI Overview

The Genezio Test Interface is visually divided into 3 sections.

<figure><img src="../.gitbook/assets/image (7).png" alt="Genezio Test Interface"><figcaption><p>Genezio Test Interface</p></figcaption></figure>

### Project Menu

The left part of the interface contains a card that will display your project in a menu-like structure. You can see your classes and their respective functions as collapsable items when you click each class. Clicking a function in the menu will open a tab for calling that specific function.

At the top of the section, you have a refresh button next to the `My Workspace` label and a Dropdown for switching between `Local` and `Production` environments.

### Parameter Section

The upper side of the right card is dedicated to passing arguments to your functions.

At the top of the section, you will see a green-bordered label, indicating that the connection was established successfully (or a red-bordered error when failing to connect to the local environment), and a `SEND` button for calling your function.

The lower part of the section will be automatically filled with fields for each of your function's parameters. You can pass any value as well as select the type of each parameter, choosing from `Primitive` (any string, number, or boolean),  `Object` and `Array` (those 2 have to be valid JSONs).

Your most recent functions are organized in tabs that you can select, close, and drag around. The active tab will always be underlined with a purple line.&#x20;

### Response Section

The lower side of the right card is where you will see the response after calling your functions.

You can see the response in a `RAW` format or a `PRETTY` format available only for valid JSON responses.

The upper-right part of the section will display the time it took for the request to be made and the status of the response.

<figure><img src="../.gitbook/assets/image (15).png" alt="Pretty Response"><figcaption><p>Genezio Test Interface Pretty Response</p></figcaption></figure>

