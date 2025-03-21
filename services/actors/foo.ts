import { AbstractActor } from "@dapr/dapr";

export interface IFooActor {
  bar: () => Promise<boolean>;
  error: () => Promise<boolean>;
}

export class FooActor extends AbstractActor implements IFooActor {
  count = 0;

  async bar() {
    console.log(`Called ${this.bar.name}`);
    return true;
  }

  async error() {
    console.log(`Called ${this.error.name} ${this.count++}`);
    throw new Error();
    return true;
  }
}
