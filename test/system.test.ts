import { System, World } from '../src';
import {
  TestComponentType1,
  TestComponentType2,
  testEngine,
} from './testComponentTypes';

describe('system', () => {
  class TestSystem extends System {
    constructor(
      private callback: (
        entityId: string,
        component1: TestComponentType1,
        component2?: TestComponentType2
      ) => void
    ) {
      super();
    }

    public Run(world: World): void {
      this.queryEntities(world, TestComponentType1, TestComponentType2).forEach(
        ([entityId, c1, c2]) => {
          this.callback(entityId, c1, c2);
        }
      );
    }
  }

  it('should run on the correct entity', () => {
    const world = testEngine.createWorld();

    const entityId1 = world.createEntity();
    const entityId2 = world.createEntity();
    const entityId3 = world.createEntity();

    // entity 1 only has component 1
    world.addComponentToEntity(entityId1, TestComponentType1);
    // entity 2 only has component 2
    world.addComponentToEntity(entityId2, TestComponentType2);
    // entity 3 has both components
    world.addComponentToEntity(entityId3, TestComponentType1);
    world.addComponentToEntity(entityId3, TestComponentType2);

    let hitEntityId: string | null = null;
    let hitC1: TestComponentType1 | null = null;
    let hitC2: TestComponentType2 | null = null;
    const system = new TestSystem((entityId, c1, c2) => {
      hitEntityId = entityId;
      hitC1 = c1;
      hitC2 = c2 ?? null;
    });

    system.Run(world);

    expect(hitEntityId).toEqual(entityId3);
    expect(hitC1).not.toBeFalsy();
    expect(hitC2).not.toBeFalsy();
  });
});
