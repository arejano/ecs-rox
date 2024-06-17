import { Component } from "../src/core/component";
import { Entity } from "../src/core/entity";
import { ComponentType } from "../src/core/enums";
import { PositionData } from "../src/examples/DefaultComponents";

describe('Factory - Create', () => {
	it('should create a Factory Instace', () => {
		const player = new Entity();

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

		expect(player).toBeInstanceOf(Entity);
		expect(player.components.size).toBeGreaterThan(0);

	});
})

