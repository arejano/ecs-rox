import { Component } from "../src/components/Component";
import { Entity } from "../src/entities/Entity";

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
		const component = new Component("Test Component");;

		entity.addComponents(component);
		
		expect(entity).toBeInstanceOf(Entity);
		expect(component).toBeInstanceOf(Component);
		expect(Object.keys(entity.components).length).toBeGreaterThan(0);
	});
})


describe('Entity - Get especified Component', () => {
	it('Get component by Name', () => {
		const entity = new Entity();
		const component = new Component("Test Component");;

		entity.addComponents(component);
		
		// expect(entity).toBeInstanceOf(Entity);

		const test_component = entity.getComponent(component.id);
		expect(test_component.name).toEqual(component.name);
		// expect(component).toBeInstanceOf(Component);
		// expect(Object.keys(entity.components).length).toBeGreaterThan(0);
	});
})
