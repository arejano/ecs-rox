import { Component, ComponentType } from "./components/Component";
import { Entity } from "./entities/Entity";

export class ECS {

  components: Map<number, Component> = new Map();
  components_by_type: Map<ComponentType, Array<number>> = new Map();
  entities: Map<number, Array<number>> = new Map();


  //Entity 
  addEntity(entity: Entity) {

    const components: Array<Component> = Object.values(entity.components);
    const components_ids = components.map((c) => (c.id));

    components.forEach((c: Component) => {
      this.components.set(c.id, c.data)
    })

    this.entities.set(entity.id, components_ids);
    this.registerComponents(components);
  }

  //Components
  registerComponents(components: Array<Component>): void {
    components.forEach((c) => {
      const value = this.components_by_type.get(c.type);

      if (value) {
        if (value.includes(c.id)) {
          return;
        } else {
          value.push(c.id)
          this.components_by_type.set(c.type, value);
        }
        return;
      }
      if (!value) {
        this.components_by_type.set(c.type, [c.id]);
        return;
      }
    })
  }

  queryComponentByType(componentType: ComponentType): QueryResult<Component> {
    return new QueryResult<Component>(this.components_by_type.get(componentType));
  }

}

export class QueryResult<T> {
  data: Array<T> = [];
  is_sucess: boolean = false;

  constructor(r: any | undefined) {
    if (r === undefined) {
      this.data = [];
      this.is_sucess = false;
    } else {
      this.data = Array.from(r);
      this.is_sucess = true;
    }
  }
}