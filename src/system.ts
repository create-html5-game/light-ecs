import { Component } from './component';
import { World } from './world';

export abstract class System {
  protected queryEntities<T1 extends Component>(
    world: World,
    componentType1: new () => T1
  ): [string, T1][];

  protected queryEntities<T1 extends Component, T2 extends Component>(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2
  ): [string, T1, T2][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3
  ): [string, T1, T2, T3][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3,
    componentType4: new () => T4
  ): [string, T1, T2, T3, T4][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component,
    T5 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3,
    componentType4: new () => T4,
    componentType5: new () => T5
  ): [string, T1, T2, T3, T4, T5][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component,
    T5 extends Component,
    T6 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3,
    componentType4: new () => T4,
    componentType5: new () => T5,
    componentType6: new () => T6
  ): [string, T1, T2, T3, T4, T5, T6][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component,
    T5 extends Component,
    T6 extends Component,
    T7 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3,
    componentType4: new () => T4,
    componentType5: new () => T5,
    componentType6: new () => T6,
    componentType7: new () => T7
  ): [string, T1, T2, T3, T4, T5, T6, T7][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component,
    T5 extends Component,
    T6 extends Component,
    T7 extends Component,
    T8 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2: new () => T2,
    componentType3: new () => T3,
    componentType4: new () => T4,
    componentType5: new () => T5,
    componentType6: new () => T6,
    componentType7: new () => T7,
    componentType8: new () => T8
  ): [string, T1, T2, T3, T4, T5, T6, T7, T8][];

  protected queryEntities<
    T1 extends Component,
    T2 extends Component,
    T3 extends Component,
    T4 extends Component,
    T5 extends Component,
    T6 extends Component,
    T7 extends Component,
    T8 extends Component,
    T9 extends Component,
    T10 extends Component,
    T11 extends Component,
    T12 extends Component,
    T13 extends Component,
    T14 extends Component,
    T15 extends Component,
    T16 extends Component
  >(
    world: World,
    componentType1: new () => T1,
    componentType2?: new () => T2,
    componentType3?: new () => T3,
    componentType4?: new () => T4,
    componentType5?: new () => T5,
    componentType6?: new () => T6,
    componentType7?: new () => T7,
    componentType8?: new () => T8,
    componentType9?: new () => T9,
    componentType10?: new () => T10,
    componentType11?: new () => T11,
    componentType12?: new () => T12,
    componentType13?: new () => T13,
    componentType14?: new () => T14,
    componentType15?: new () => T15,
    componentType16?: new () => T16
  ): [
    string,
    T1,
    T2?,
    T3?,
    T4?,
    T5?,
    T6?,
    T7?,
    T8?,
    T9?,
    T10?,
    T11?,
    T12?,
    T13?,
    T14?,
    T15?,
    T16?
  ][] {
    const requestedComponentTypes = [
      componentType1,
      componentType2,
      componentType3,
      componentType4,
      componentType5,
      componentType6,
      componentType7,
      componentType8,
      componentType9,
      componentType10,
      componentType11,
      componentType12,
      componentType13,
      componentType14,
      componentType15,
      componentType16,
    ].filter((t) => Boolean(t)) as (new () => Component)[];

    const counter: Record<string, number> = {};
    requestedComponentTypes.forEach((t) => {
      const entityIds = world.getEntitiesWithComponent(t);
      entityIds.forEach((id) => {
        if (!counter[id]) {
          counter[id] = 1;
        } else {
          counter[id]++;
        }
      });
    });

    return Object.entries(counter)
      .filter(([_, count]) => count === requestedComponentTypes.length)
      .map(([entityId]) => {
        return [
          entityId,
          world.getComponentFromEntity(entityId, componentType1) as T1,
          componentType2
            ? world.getComponentFromEntity(entityId, componentType2) ??
              undefined
            : undefined,
          componentType3
            ? world.getComponentFromEntity(entityId, componentType3) ??
              undefined
            : undefined,
          componentType4
            ? world.getComponentFromEntity(entityId, componentType4) ??
              undefined
            : undefined,
          componentType5
            ? world.getComponentFromEntity(entityId, componentType5) ??
              undefined
            : undefined,
          componentType6
            ? world.getComponentFromEntity(entityId, componentType6) ??
              undefined
            : undefined,
          componentType7
            ? world.getComponentFromEntity(entityId, componentType7) ??
              undefined
            : undefined,
          componentType8
            ? world.getComponentFromEntity(entityId, componentType8) ??
              undefined
            : undefined,
          componentType9
            ? world.getComponentFromEntity(entityId, componentType9) ??
              undefined
            : undefined,
          componentType10
            ? world.getComponentFromEntity(entityId, componentType10) ??
              undefined
            : undefined,
          componentType11
            ? world.getComponentFromEntity(entityId, componentType11) ??
              undefined
            : undefined,
          componentType12
            ? world.getComponentFromEntity(entityId, componentType12) ??
              undefined
            : undefined,
          componentType13
            ? world.getComponentFromEntity(entityId, componentType13) ??
              undefined
            : undefined,
          componentType14
            ? world.getComponentFromEntity(entityId, componentType14) ??
              undefined
            : undefined,
          componentType15
            ? world.getComponentFromEntity(entityId, componentType15) ??
              undefined
            : undefined,
          componentType16
            ? world.getComponentFromEntity(entityId, componentType16) ??
              undefined
            : undefined,
        ];
      });
  }

  public abstract Run(world: World): void;
}
