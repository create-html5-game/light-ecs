import * as ECS from '../src';

export class TestComponentType1 extends ECS.Component {
  @ECS.ComponentField(1, 'uint32')
  public int: number = 0;

  @ECS.ComponentField(2, 'string')
  public text: string = '';
}

export class TestComponentType2 extends ECS.Component {
  @ECS.ComponentField(1, 'bool')
  public bool: boolean = false;

  @ECS.ComponentField(2, 'float')
  public float: number = 0;
}

export const testEngine = new ECS.Engine([
  TestComponentType1,
  TestComponentType2,
]);
