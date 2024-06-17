var entity_counter: number = 1;


export class Entity {
    id: number = 0;

    public components: Record<number, Component> = {};

    constructor() { this.id = entity_counter++; }

    addComponents(component: Component) {
        this.components[component.id] = component;
    }

    getComponent(componentName: number): Component {
        return this.components[componentName];
    }
}
