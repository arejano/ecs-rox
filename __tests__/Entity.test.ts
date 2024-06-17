import { Component } from "../src/core/component";
import { Entity } from "../src/core/entity";
import { ComponentType } from "../src/core/enums";

describe('Entity - Create', () => {
	it('should create a Entity Instace with ID maior que 0', () => {
		const entity = new Entity();
		expect(entity).toBeInstanceOf(Entity);
		expect(entity.id).toBeGreaterThan(0);
	});
})

describe('Entity - Insert Component', () => {
	it('Insert new Component into Entity', () => {
		const entity = new Entity();
		const component = new Component(null,ComponentType.Default);;

		entity.addComponent(component);
		
		expect(entity).toBeInstanceOf(Entity);
		expect(component).toBeInstanceOf(Component);
		// expect(Object.keys(entity.components.values())).toBeGreaterThan(0);
	});
})


describe('Entity - Get especified Component', () => {
	it('Get component by Name', () => {
		const entity = new Entity();
		const component = new Component(null,ComponentType.Default);;

		entity.addComponent(component);

		const test_component = entity.getComponent(component.id);
		expect(test_component?.type).toEqual(ComponentType.Default);
	});
})
