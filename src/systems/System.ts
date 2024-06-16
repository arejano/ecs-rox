export interface ISystem {
  start(): void;
  destroy(): void;
  process(): void;
}

export class System implements ISystem {
  start(): void { }
  destroy(): void { }
  process() { }
}