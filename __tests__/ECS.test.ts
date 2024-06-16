import { ECS } from "../src/ECS";
import { Component, ComponentType } from "../src/components/Component";
import { Entity } from "../src/entities/Entity";

describe('Component with ID', () => {
	it('should be a instance of ECS', () => {
		const ecs = new ECS();
		expect(ecs).toBeInstanceOf(ECS);
	});
})

describe('World - queryComonentByType', () => {
	it('should return a instance of Array<Component>', () => {

		const world = new ECS();
		const entity = new Entity();
		const entity_2 = new Entity();
		const positionComponent = new PositionComponent("Position_one");
		const positionComponent_2 = new PositionComponent("Position_one");
		const positionComponent_3 = new PositionComponent("Position_one");
		const positionComponent_4 = new PositionComponent("Position_one");

		const component_name = new NameComponent("NameComponent");

		entity.addComponents(positionComponent);
		entity.addComponents(positionComponent_2);
		entity.addComponents(positionComponent_3);
		entity.addComponents(positionComponent_4);
		entity.addComponents(component_name);

		entity.addComponents(positionComponent);
		entity.addComponents(component_name);

		world.addEntity(entity);
		world.addEntity(entity_2);

		const query = world.queryComponentByType(ComponentType.Position)
		const names = world.queryComponentByType(ComponentType.Name)

		console.log("Positions", query)
		console.log("Names", names)

		expect(query.data.length).toBeGreaterThan(0);
		expect(world).toBeInstanceOf(ECS);
		expect(world.entities.size).toBeGreaterThan(0);
	});
})


interface PositionData { x: number, y: number, z: number }

class PositionComponent extends Component {
	data: PositionData = { x: 0, y: 0, z: 0 }
	type: ComponentType = ComponentType.Position;
}


class NameComponent extends Component {
	data: string =  "Gustavo"
	type: ComponentType = ComponentType.Name;
}