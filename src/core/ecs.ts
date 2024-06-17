import { Component } from "./component";
import { Entity } from "./entity";
import { ComponentType, GameState } from "./enums";
import { System } from "./system";

export class ECS {

  components: Map<number, Component<any>> = new Map();
  components_by_type: Map<ComponentType, Array<number>> = new Map();
  entities: Map<number, Array<number>> = new Map();

  systems: Map<number, System> = new Map();
  systems_by_game_state: Map<GameState, Array<number>> = new Map();


  //Entity 
  addEntity(entity: Entity) {

    const components: Array<Component<any>> = Object.values(entity.components);
    const components_ids = components.map((c) => (c.id));

    components.forEach((c: Component<any>) => {
      this.components.set(c.id, c.data)
    })

    this.entities.set(entity.id, components_ids);
    this.registerComponents(components);
  }

  //Components
  registerComponents(components: Array<Component<any>>): void {
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

  //System
  addSystem(system: System): void {
    if (this.systems.get(system.id)) {
      return
    }

    this.systems.set(system.id, system);

    if (!this.systems_by_game_state.get(system.runnning_state)) {
      this.systems_by_game_state.set(system.runnning_state, [system.id])
      return;
    }

    this.systems_by_game_state.get(system.runnning_state)?.push(system.id)
  }

  querySystemsByState(gs:GameState): QueryResult<System> {
    return new QueryResult<System>(this.systems_by_game_state.get(gs))
  }

  //Query

  queryComponentByType(componentType: ComponentType): QueryResult<Component<any>> {
    return new QueryResult<Component<any>>(this.components_by_type.get(componentType));
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