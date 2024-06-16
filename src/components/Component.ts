var component_counter: number = 0;

export enum ComponentType {
  Default,
  Position,
  Name
}

export class Component {
  data: any;
  id: number = 0;

  type: ComponentType = ComponentType.Default;

  constructor(public name: string) {
    this.id = component_counter++;
  }
}

export class ComponentFactory<T> {
  data: T;
  id: number = 0;
  type: new (...args: any[]) => T;

  constructor(d: T, type: new (...args: any[]) => T) {
    this.type = type
    this.data = d;
    this.id = component_counter++;
  }
}