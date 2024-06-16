import { Component } from "../src/components/Component";


describe('Component', () => {
	it('should create a component with a name', () => {
		const component = new Component('TestComponent');
		expect(component.name).toBe('TestComponent');
	});
})

describe('Component with ID', () => {
	it('should create a component with a name and ID', () => {
		const component = new Component('TestComponent');
		expect(component.name).toBe('TestComponent');
		expect(component.id).toBeGreaterThan(0);
	});
})