import { World } from './world';
import { Type, Field, MapField } from 'protobufjs/light';
import { Component } from './component';

export class Engine {
  private worldType: Type;
  private worldComponentsFieldType: Type;
  private worldComponentsField: Field;
  private nextComponentFieldId: number;

  constructor(componentTypes: (new () => Component)[]) {
    this.worldType = new Type('World');

    var worldNextEntityIdField = new Field('nextEntityId', 1, 'uint32');
    this.worldType.add(worldNextEntityIdField);

    var worldEntitiesField = new MapField('entities', 2, 'uint32', 'bool');
    this.worldType.add(worldEntitiesField);

    this.worldComponentsFieldType = new Type('WorldComponents');
    this.worldType.add(this.worldComponentsFieldType);
    this.worldComponentsField = new Field('components', 3, 'WorldComponents');
    this.worldType.add(this.worldComponentsField);

    this.nextComponentFieldId = 1;

    componentTypes.forEach(t => {
      this.registerComponentType(t);
    });
  }

  private registerComponentType<T extends Component>(
    componentType: new () => T
  ): void {
    var protobufType = (componentType as any).$type;
    if (!protobufType) {
      throw new Error(
        'the specified component type is not a valid protobuf message type'
      );
    }
    this.worldType.add(protobufType);

    var componentField = new MapField(
      componentType.name,
      this.nextComponentFieldId++,
      'uint32',
      protobufType.name
    );
    this.worldComponentsFieldType.add(componentField);
  }

  public serializeWorld(world: World): Uint8Array {
    return this.worldType.encode(world).finish();
  }

  public createWorld(serializedBuffer?: Uint8Array): World {
    var result = new World();
    if (serializedBuffer) {
      var decoded = this.worldType.decode(serializedBuffer);
      result.nextEntityId = (decoded as any).nextEntityId;
      result.entities = (decoded as any).entities;
      result.components = (decoded as any).components;
    } else {
      Object.keys(this.worldComponentsFieldType.fields).forEach(
        componentTypeName => {
          result.components[componentTypeName] = {};
        }
      );
    }
    return result;
  }
}
