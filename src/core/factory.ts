import { Entity } from "./entity";

export interface IFactory {
	build() : Entity;
}

export class Factory implements IFactory {
    build(): Entity {
        throw new Error("Method not implemented.");
    }
}
