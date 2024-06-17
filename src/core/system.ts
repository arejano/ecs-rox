import { EventType, GameState } from "./enums";

var system_counter: number = 0;

export class System {
  id: number = 0;
  runnning_state: GameState;
  events_type: Array<EventType> = [];

  constructor(gs: GameState, events: Array<EventType> = []) {
    this.id = system_counter++;
    this.runnning_state = gs;
    this.events_type = events;
  }

  start(): void { }
  destroy(): void { }
  process() { }
}