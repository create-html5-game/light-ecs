import { Message } from 'protobufjs/light';

export class World {
  public nextEntityId: number = 0;

  // key is entity id. value indicates whether the entity is currently active.
  public entities: Record<number, boolean> = {};

  // top level key is component type name. second level key is entity id.
  public components: Record<string, Record<number, Message>> = {};

  public createEntity(): number {
    var newEntityId = this.nextEntityId++;
    this.entities[newEntityId] = true;
    return newEntityId;
  }

  public addComponentToEntity<T extends Message>(
    entityId: number,
    componentType: new () => T
  ): T {
    if (!this.entities[entityId]) {
      throw new Error('invalid entity id');
    }
    var componentTypeName = componentType.name;
    if (!this.components[componentTypeName]) {
      throw new Error(
        'the specified component type has not been registered in the engine yet'
      );
    }
    var newComponent = new componentType();
    this.components[componentTypeName][entityId] = newComponent;
    return newComponent;
  }
}
