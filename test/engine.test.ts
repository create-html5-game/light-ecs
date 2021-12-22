import * as ECS from '../src';

describe('engine', () => {
  class TestComponentType1 extends ECS.Component {
    @ECS.ComponentField(1, 'uint32')
    public int: number = 0;

    @ECS.ComponentField(2, 'string')
    public text: string = '';
  }

  class TestComponentType2 extends ECS.Component {
    @ECS.ComponentField(1, 'bool')
    public bool: boolean = false;

    @ECS.ComponentField(2, 'float')
    public float: number = 0;
  }

  it('should serialize and deserialize world correctly', () => {
    const engine = new ECS.Engine([TestComponentType1, TestComponentType2]);

    const world = engine.createWorld();

    // entity 1 has a single component
    const entityId1 = world.createEntity();
    const e1c1 = world.addComponentToEntity(entityId1, TestComponentType1);
    e1c1.int = 10;
    e1c1.text = '10';

    // entity 2 has two components
    const entityId2 = world.createEntity();
    const e2c1 = world.addComponentToEntity(entityId2, TestComponentType1);
    e2c1.int = 20;
    e2c1.text = '20';
    const e2c2 = world.addComponentToEntity(entityId2, TestComponentType2);
    e2c2.bool = true;
    e2c2.float = 30;

    const serialized = engine.serializeWorld(world);
    const deserialized = engine.createWorld(serialized);

    expect(deserialized.nextEntityId).toEqual(2);
    expect(deserialized.entities[entityId1]).not.toBeFalsy();
    expect(deserialized.entities[entityId2]).not.toBeFalsy();

    const e1c1Deserialized = deserialized.getComponentFromEntity(
      entityId1,
      TestComponentType1
    );
    expect(e1c1Deserialized?.int).toEqual(e1c1.int);
    expect(e1c1Deserialized?.text).toEqual(e1c1.text);

    const e2c1Deserialized = deserialized.getComponentFromEntity(
      entityId2,
      TestComponentType1
    );
    expect(e2c1Deserialized?.int).toEqual(e2c1.int);
    expect(e2c1Deserialized?.text).toEqual(e2c1.text);
    const e2c2Deserialized = deserialized.getComponentFromEntity(
      entityId2,
      TestComponentType2
    );
    expect(e2c2Deserialized?.bool).toEqual(e2c2.bool);
    expect(e2c2Deserialized?.float).toEqual(e2c2.float);
  });
});
