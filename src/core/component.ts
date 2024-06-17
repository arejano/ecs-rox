import { ComponentType } from "./enums";

var component_counter: number = 0;

export class Component<T> {
  data: T;
  id: number = 0;
  type: ComponentType;

  constructor(d: T, type: ComponentType) {
    this.id = component_counter++;
    this.data = d;
    this.type = type;
  }
}


// export class ComponentFactory<T> {
//   data: T;
//   id: number = 0;
//   type: new (...args: any[]) => T;

//   constructor(d: T, type: new (...args: any[]) => T) {
//     this.type = type
//     this.data = d;
//     this.id = component_counter++;
//   }
// }