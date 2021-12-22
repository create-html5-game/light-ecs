import { Component } from './component';

export class World {
  public nextEntityId: number = 0;

  // key is entity id. value indicates whether the entity is currently active.
  public entities: Record<number, boolean> = {};

  // top level key is component type name. second level key is entity id.
  public components: Record<string, Record<number, Component>> = {};

  public createEntity(): number {
    const newEntityId = this.nextEntityId++;
    this.entities[newEntityId] = true;
    return newEntityId;
  }

  public hasEntity(entityId: number): boolean {
    return this.entities[entityId] != undefined;
  }

  public destroyEntity(entityId: number): void {
    if (!this.entities[entityId]) {
      return;
    }
    Object.values(this.components).forEach(componentType => {
      delete componentType[entityId];
    });
    delete this.entities[entityId];
  }

  public addComponentToEntity<T extends Component>(
    entityId: number,
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
    const newComponent = new componentType();
    this.components[componentTypeName][entityId] = newComponent;
    return newComponent;
  }

  public removeComponentFromEntity<T extends Component>(
    entityId: number,
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

  public getComponentFromEntity<T extends Component>(
    entityId: number,
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

  public getComponentsFromEntity(entityId: number): Component[] {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    const results: Component[] = [];
    Object.values(this.components).forEach(componentType => {
      const component = componentType[entityId];
      if (component) {
        results.push(component);
      }
    });
    return results;
  }
}
