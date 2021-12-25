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

    const worldNextEntityIdField = new Field('nextEntityId', 1, 'uint32');
    this.worldType.add(worldNextEntityIdField);

    const worldEntitiesField = new MapField('entities', 2, 'string', 'bool');
    this.worldType.add(worldEntitiesField);

    this.worldComponentsFieldType = new Type('WorldComponents');
    this.worldType.add(this.worldComponentsFieldType);
    this.worldComponentsField = new Field('components', 3, 'WorldComponents');
    this.worldType.add(this.worldComponentsField);

    this.nextComponentFieldId = 1;

    componentTypes.forEach((t) => {
      this.registerComponentType(t);
    });
  }

  private registerComponentType<T extends Component>(
    componentType: new () => T
  ): void {
    const protobufType = (componentType as any).$type;
    if (!protobufType) {
      throw new Error(
        'the specified component type is not a valid protobuf message type'
      );
    }
    this.worldType.add(protobufType);

    const componentField = new MapField(
      componentType.name,
      this.nextComponentFieldId++,
      'string',
      protobufType.name
    );
    this.worldComponentsFieldType.add(componentField);
  }

  public serializeWorld(world: World): Uint8Array {
    return this.worldType.encode(world).finish();
  }

  public createWorld(serializedBuffer?: Uint8Array): World {
    if (serializedBuffer) {
      const decoded = this.worldType.decode(serializedBuffer);
      return new World(
        (decoded as any).nextEntityId,
        (decoded as any).entities,
        (decoded as any).components
      );
    } else {
      return new World(
        0,
        {},
        Object.fromEntries(
          Object.keys(this.worldComponentsFieldType.fields).map(
            (componentTypeName) => {
              return [componentTypeName, {}];
            }
          )
        )
      );
    }
  }
}
