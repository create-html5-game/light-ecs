import {
  TestComponentType1,
  TestComponentType2,
  testEngine,
} from './testComponentTypes';

describe('entity', () => {
  it('should create and destroy correctly', () => {
    const world = testEngine.createWorld();

    const entityId = world.createEntity();

    expect(world.hasEntity(entityId)).toBeTruthy();
    expect(world.hasEntity(entityId + 1)).toBeFalsy();

    world.destroyEntity(entityId);

    expect(world.hasEntity(entityId)).toBeFalsy();
  });

  it('should add and remove components correctly', () => {
    const world = testEngine.createWorld();

    const entityId = world.createEntity();

    const component1 = world.addComponentToEntity(entityId, TestComponentType1);
    const component1FromGet = world.getComponentFromEntity(
      entityId,
      TestComponentType1
    );
    expect(component1FromGet).toEqual(component1);

    const nonExistent = world.getComponentFromEntity(
      entityId,
      TestComponentType2
    );
    expect(nonExistent).toBeNull();

    world.addComponentToEntity(entityId, TestComponentType2);
    const component2 = world.addComponentToEntity(entityId, TestComponentType2);
    expect(component2).not.toBeFalsy();

    const allComponents = world.getComponentsFromEntity(entityId);
    expect(allComponents).toHaveLength(2);

    expect(allComponents).toContain(component1);
    expect(allComponents).toContain(component2);

    world.removeComponentFromEntity(entityId, TestComponentType1);

    const allComponentsAfterRemoval = world.getComponentsFromEntity(entityId);
    expect(allComponentsAfterRemoval).toHaveLength(1);
    expect(allComponentsAfterRemoval).toContain(component2);
  });
});
