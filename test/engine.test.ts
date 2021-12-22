import { Field, Message } from 'protobufjs/light';
import * as ECS from '../src';

describe('engine', () => {
  class TestComponentType1 extends ECS.Component {
    @Field.d(1, 'uint32')
    public int: number = 0;

    @Field.d(2, 'string')
    public text: string = '';
  }

  class TestComponentType2 extends ECS.Component {
    @Field.d(1, 'uint32')
    public bool: boolean = false;

    @Field.d(2, 'float')
    public float: number = 0;
  }

  it('should serialize and deserialize world correctly', () => {
    var engine = new ECS.Engine([TestComponentType1, TestComponentType2]);

    var world = engine.createWorld();
    var entityId1 = world.createEntity();
    var component1 = world.addComponentToEntity(entityId1, TestComponentType1);
    component1.int = 10;
    component1.text = '10';

    var entityId2 = world.createEntity();
    var component2 = world.addComponentToEntity(entityId2, TestComponentType2);
    component2.bool = true;
    component2.float = 20;

    var serialized = engine.serializeWorld(world);
    var deserialized = engine.createWorld(serialized);

    expect(deserialized.nextEntityId).toEqual(2);
    expect(deserialized.entities[entityId1]).not.toBeUndefined();
    expect(deserialized.entities[entityId2]).not.toBeUndefined();
  });
});
