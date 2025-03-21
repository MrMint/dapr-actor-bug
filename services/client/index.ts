import { ActorId, ActorProxyBuilder, DaprClient } from "@dapr/dapr";
import { FooActor, type IFooActor } from "../actors";

console.log("Starting up");

const client = new DaprClient({
  daprHost: process.env.DAPR_HOST,
  daprPort: process.env.DAPR_PORT,
});

const builder = new ActorProxyBuilder<IFooActor>(FooActor, client);

const fooActor = builder.build(new ActorId("1"));
console.log("Calling bar");
await fooActor.bar();

console.log("Calling error");
try {
  await fooActor.error();
} catch (error) {
  console.log("Error encountered.");
}

console.log("Completed");
