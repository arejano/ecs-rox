import { Component } from "./component";

var entity_counter: number = 1;


export class Entity {
  id: number = 0;

  public components: Map<number, Component<any>> = new Map();

  constructor() { this.id = entity_counter++; }

  addComponent(component: Component<any>) {
    this.components.set(component.id, component);
  }

  getComponent(componentName: number): Component<any> | undefined {
    return this.components.get(componentName);
  }

  get_components(): Array<Component<any>> {
    return Array.from(this.components.values())
  }
}

