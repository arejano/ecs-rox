import { System } from "../src/systems/System";

describe('Component', () => {
	it('should create a Entity Instace with ID maior que 0', () => {
		const entity = new System();
		expect(entity).toBeInstanceOf(System);
	});
})

