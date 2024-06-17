import { Component } from "../core/component";
import { Entity } from "../core/entity";
import { ComponentType } from "../core/enums";
import { IFactory } from "../core/factory";
import { PositionData } from "./DefaultComponents";


export class PlayerFactory implements IFactory {
  build(): Entity {
    const player = new Entity();
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

    player.addComponent(new Component<PositionData>(
      { x: 0, y: 0, z: 0 },
      ComponentType.PositionComponent)
    )

    player.addComponent(new Component<string>(
      "Poco",
      ComponentType.NameComponent)
    )


    player.addComponent(new Component<number>(
      100,
      ComponentType.HealthComponent)
    )

    player.addComponent(new Component<Array<InventoryItem>>(
      [],
      ComponentType.InventoryComponent)
    )

    player.addComponent(new Component<boolean>(
      true,
      ComponentType.PlayableComponent)
    )

    return player;
  }

}
