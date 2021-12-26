import { Component } from './component';

/**
 * A world instance holds a set of entity IDs along with their components.
 */
export class World {
  /**
   * Construct a world instance.
   * @param nextEntityId Value that'll be used as the next new entity ID. Optional and mainly used during deserialization.
   * @param entities A set of existing entities in the world. Optional and mainly used during deserialization.
   * @param components A set of component data. Optional and mainly used during deserialization.
   */
  constructor(
    private nextEntityId: number = 0,
    // key is entity id. value indicates whether the entity is currently active.
    private entities: Record<string, boolean> = {},
    // top level key is component type name. second level key is entity id.
    private components: Record<string, Record<string, Component>> = {}
  ) {}

  /**
   * Create a new entity.
   * @returns ID of the created entity.
   */
  public createEntity(): string {
    const newEntityId = this.nextEntityId++;
    this.entities[newEntityId] = true;
    return newEntityId.toFixed(0);
  }

  /**
   * Check whether an entity ID exists in the world.
   * @param entityId ID of the entity.
   * @returns A boolean indicating whether the entity exists.
   */
  public hasEntity(entityId: string): boolean {
    return Boolean(this.entities[entityId]);
  }

  /**
   * Destroy an entity. Delete all its data from the world.
   * @param entityId ID of the entity.
   */
  public destroyEntity(entityId: string): void {
    if (!this.entities[entityId]) {
      return;
    }
    Object.values(this.components).forEach((componentType) => {
      delete componentType[entityId];
    });
    delete this.entities[entityId];
  }

  /**
   * Add a component to an entity.
   * @param entityId ID of the entity.
   * @param componentType Type of the component to add to the entity.
   * @returns The added component.
   */
  public addComponentToEntity<T extends Component>(
    entityId: string,
    componentType: new () => T
  ): T {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    const componentTypeName = componentType.name;
    if (!this.components[componentTypeName]) {
      throw new Error(
        'the specified component type has not been registered in the engine yet'
      );
    }
    if (this.components[componentTypeName][entityId]) {
      throw new Error(
        'the specified component type has already been added to this entity'
      );
    }
    const newComponent = new componentType();
    this.components[componentTypeName][entityId] = newComponent;
    return newComponent;
  }

  /**
   * Remove a component from an entity.
   * @param entityId ID of the entity.
   * @param componentType Type of the component to remove.
   */
  public removeComponentFromEntity<T extends Component>(
    entityId: string,
    componentType: new () => T
  ): void {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    const componentTypeName = componentType.name;
    if (!this.components[componentTypeName]) {
      throw new Error(
        'the specified component type has not been registered in the engine yet'
      );
    }
    delete this.components[componentTypeName][entityId];
  }

  /**
   * Get the component of a specicif type from an entity.
   * @param entityId ID of the entity.
   * @param componentType Type of the component to get.
   * @returns Component of the specified type on the entity. Null if it
   * doesn't exist.
   */
  public getComponentFromEntity<T extends Component>(
    entityId: string,
    componentType: new () => T
  ): T | null {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    const componentTypeName = componentType.name;
    if (!this.components[componentTypeName]) {
      throw new Error(
        'the specified component type has not been registered in the engine yet'
      );
    }
    return (this.components[componentTypeName][entityId] as T) ?? null;
  }

  /**
   * Get all components on a specific entity.
   * @param entityId ID of the entity.
   * @returns Array of all components on the entity.
   */
  public getComponentsFromEntity(entityId: string): Component[] {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    const results: Component[] = [];
    Object.values(this.components).forEach((componentType) => {
      const component = componentType[entityId];
      if (component) {
        results.push(component);
      }
    });
    return results;
  }

  /**
   * Get all entities that have a specific component.
   * @param componentType Component type.
   * @returns Array of entity IDs that have the specified component.
   */
  public getEntitiesWithComponent(
    componentType: new () => Component
  ): string[] {
    const entities = this.components[componentType.name];
    if (entities) {
      return Object.keys(entities);
    }
    return [];
  }
}
