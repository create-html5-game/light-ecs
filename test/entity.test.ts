import { testEngine } from './testComponentTypes';

describe('entity', () => {
  it('should create and destroy correctly', () => {
    const world = testEngine.createWorld();

    const entityId = world.createEntity();

    expect(world.hasEntity(entityId)).toBeTruthy();
    expect(world.hasEntity(entityId + 1)).toBeFalsy();

    world.destroyEntity(entityId);

    expect(world.hasEntity(entityId)).toBeFalsy();
  });
});
