import { ECS } from "../src/core/ecs";
import { GameState } from "../src/core/enums";
import { System } from "../src/core/system";
import { PlayerFactory } from "../src/examples/DefaultFactories";

describe('Component with ID', () => {
	it('should be a instance of ECS', () => {
		const ecs = new ECS();
		expect(ecs).toBeInstanceOf(ECS);
	});
})

describe('World - queryComonentByType', () => {
	it('should return a instance of Array<Component>', () => {

		const world = new ECS();
		const player = new PlayerFactory().build();
		world.addEntity(player);


		// const positionComponent = new PositionComponent("Position_one");
		// const positionComponent_2 = new PositionComponent("Position_one");
		// const positionComponent_3 = new PositionComponent("Position_one");
		// const positionComponent_4 = new PositionComponent("Position_one");

		// const component_name = new NameComponent("NameComponent");

		// entity.addComponents(positionComponent);
		// entity.addComponents(positionComponent_2);
		// entity.addComponents(positionComponent_3);
		// entity.addComponents(positionComponent_4);
		// entity.addComponents(component_name);

		// entity.addComponents(positionComponent);
		// entity.addComponents(component_name);


		// const query = world.queryComponentByType(ComponentType.Position)
		// const names = world.queryComponentByType(ComponentType.Name)

		// console.log("Positions", query)
		// console.log("Names", names)

		// expect(query.data.length).toBeGreaterThan(0);
		// expect(world).toBeInstanceOf(ECS);
		// expect(world.entities.size).toBeGreaterThan(0);
	});
})

describe('World - System', () => {
	it('Insert System', () => {
		const world = new ECS();
		const system = new System(GameState.Running, []);
		world.addSystem(system)

		expect(world.systems.size).toBeGreaterThan(0);
	});

})

describe('World - System', () => {
	it('Insert System - Index By Type', () => {
		const world = new ECS();
		const system = new System(GameState.Running, []);
		const system_menu = new System(GameState.Menu, []);
		const system_config = new System(GameState.Menu, []);
		const system_pause = new System(GameState.Pause, []);
		const system_invetory = new System(GameState.Running, []);
		const system_health = new System(GameState.Running, []);
		world.addSystem(system)
		world.addSystem(system_menu)
		world.addSystem(system_config)
		world.addSystem(system_pause)
		world.addSystem(system_invetory)
		world.addSystem(system_health)

		expect(world.systems.size).toBeGreaterThan(0);
		expect(world.systems_by_game_state.size).toBeGreaterThan(0);
	});
})

describe('World - System', () => {


	it('Insert System -QueryByType', () => {
		const world = new ECS();
		const system = new System(GameState.Running, []);
		const system_invetory = new System(GameState.Running, []);
		const system_health = new System(GameState.Running, []);

		const system_menu = new System(GameState.Menu, []);
		const system_config = new System(GameState.Menu, []);

		const system_pause = new System(GameState.Pause, []);

		world.addSystem(system)
		world.addSystem(system_menu)
		world.addSystem(system_config)
		world.addSystem(system_pause)
		world.addSystem(system_invetory)
		world.addSystem(system_health)

		const query_system_running = world.querySystemsByState(GameState.Running);
		const query_system_menu = world.querySystemsByState(GameState.Menu);
		const query_system_pause = world.querySystemsByState(GameState.Pause);

		expect(query_system_running.data.length).toEqual(3);
		expect(query_system_menu.data.length).toEqual(2);
		expect(query_system_pause.data.length).toEqual(1);

		expect(world.systems.size).toBeGreaterThan(0);
		expect(world.systems_by_game_state.size).toBeGreaterThan(0);
		// console.log(world.systems_by_game_state)
	});
})
