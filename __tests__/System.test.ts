import { GameState } from "../src/core/enums";
import { System } from "../src/core/system";

describe('System', () => {
	it('should create a System Instace', () => {
		const system = new System(GameState.Menu, []);
		expect(system).toBeInstanceOf(System);
	});
})

