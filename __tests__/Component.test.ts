import { Component } from "../src/core/component";
import { ComponentType } from "../src/core/enums";

describe('Component', () => {
	it('should create a component with a name', () => {
		const component = new Component("Poco", ComponentType.NameComponent);
		expect(component.data).toBe('Poco');
	});
})

describe('Component with ID', () => {
	it('should create a component with a name and ID', () => {
		const component = new Component(null,ComponentType.Default);
		expect(component.id).toBeGreaterThan(0);
	});
})