import { DaprServer } from "@dapr/dapr";
import { FooActor, type IFooActor } from "./foo";

export { type IFooActor, FooActor } from "./foo";

const server = new DaprServer({
  serverHost: process.env.SERVER_HOST,
  serverPort: process.env.APP_PORT,
});

server.actor.init();
server.actor.registerActor(FooActor);

await server.start();
