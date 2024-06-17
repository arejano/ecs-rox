import { Entity } from "../core/entity";
import { IFactory } from "../core/factory";

export class PlayerFactory implements IFactory {
  build(): Entity {
    const player = new Entity();

    return player;
  }
}