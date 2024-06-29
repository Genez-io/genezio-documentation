import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Admonition from '@theme/Admonition';

# Websockets [ALPHA]

:::warning
This feature is only available when using the `cluster` value in the **genezio.yaml** `cloudProvider` field. For more information see the **[Persistent Backend Deployment](/docs/features/backend-long-living.md)** documentation.
:::

While Websocket support is still an **alpha** feature of Genezio, these persistent connections are a great way to implement real time communications in your applications.

Genezio attempts to choose the path of least interference with the websocket libraries by giving you access to the HTTP Server instance that runs your class. In this way the socket listener can be attached and you can hit the ground running by writing the same syntax you are used to.

Currently we have tested 2 Websocket libraries:
- **[Socket.io](https://socket.io/)**
- **[Websockets/ws](https://github.com/websockets/ws)**

## Code Structure

:::tip
You can deploy websocket classes written in both TypeScript and JavaScript
:::

The following snippet of code shows a simple `HelloWorldService` class that uses sockets:

<Tabs groupId="websocket_lib">
  <TabItem value="socketio_ts" label="TypeScript (Socket.io)">
    ```ts title="service.ts" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server: http.Server) {
        // Attach the socket.io listener to the current server instance
        const io = new Server(server)

        // Define socket behaviours
        io.on("connection", (socket: Socket) => {
          // Register events to react to
          socket.on("ping", () => {
            console.log("Ping received!")

            // Send back a message
            socket.emit("pong")
          })
          
          socket.on("disconnect", () => {
            console.log("User disconnected");
          });

          console.log("A user connected");
        });
      }

      hello(name: string, sender: string): string {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
  <TabItem value="mdn_ws_ts" label="TypeScript (WebSockets)">
    ```js title="service.js" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server: http.Server) {
        // Attach the WebSocket listener to the current server instance
        const wss = new WebSocketServer({server});

        // Define socket behaviours
        wss.on('connection', (ws : WebSocket) => {
          
          // React on any incoming message
          ws.on('message', (data, isBinary) => {
            if(data.toString() === 'Ping') {
                console.log("Ping received")

                // Send something back!
                ws.send('Pong')
              }
            }
          )
          
          ws.on('close', () => {
            console.log('User disconnected');
          });
          ws.send('User connected');
        });
      }

      hello(name: string, sender: string): string {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
  <TabItem value="socketio_js" label="JavaScript (Socket.io)">
    ```ts title="service.ts" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server) {
        // Attach the socket.io listener to the current server instance
        const io = new Server(server)

        // Define socket behaviours
        io.on("connection", (socket) => {
          // Register events to react to
          socket.on("ping", () => {
            console.log("Ping received!")

            // Send back a message
            socket.emit("pong")
          })
          
          socket.on("disconnect", () => {
            console.log("User disconnected");
          });

          console.log("A user connected");
        });
      }

      hello(name, sender) {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
  <TabItem value="mdn_ws_js" label="JavaScript (Websockets)">
    ```js title="service.js" showLineNumbers
    import { GenezioDeploy } from "@genezio/types";
    import http from 'http';

    @GenezioDeploy()
    export class HelloWorldService {

      constructor(server) {
        // Attach the WebSocket listener to the current server instance
        const wss = new WebSocketServer({server});

        // Define socket behaviours
        wss.on('connection', (ws) => {
          
          // React on any incoming message
          ws.on('message', (data, isBinary) => {
            if(data.toString() === 'Ping') {
                console.log("Ping received")

                // Send something back!
                ws.send('Pong')
              }
            }
          )
          
          ws.on('close', () => {
            console.log('User disconnected');
          });
          ws.send('User connected');
        });
      }

      hello(name, sender) {
        console.log(`Hello world request received with name ${name} from ${sender}!`);

        return `Hello, ${name}, from ${sender}!`;
      }
    }
    ```
  </TabItem>
  
</Tabs>

## Testing

:::warning
Currently the default Genezio test interface for local testing does not work with or proxy websocket connections (This is a very high priority improvement and will be adressed soon). This is why you must use Postman in either Websockets or Socket.io mode and provide the `PORT` displayed in the following line:

`14:37:12:478 DEBUG      local.js:708    [START_CLASS_PROCESS] Starting class HelloWorldService on port <PORT>`

This line can be obtained by running `genezio local --logLevel=debug`
:::


