[light-ecs](../README.md) / [Exports](../modules.md) / System

# Class: System

Extend this class to implement your own systems.

## Table of contents

### Constructors

- [constructor](System.md#constructor)

### Methods

- [Run](System.md#run)
- [queryEntities](System.md#queryentities)

## Constructors

### constructor

• **new System**()

## Methods

### Run

▸ `Abstract` **Run**(`world`): `void`

Override this method to implement your own system logic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |

#### Returns

`void`

#### Defined in

[src/system.ts:273](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L273)

___

### queryEntities

▸ `Protected` **queryEntities**<`T1`\>(`world`, `componentType1`): [`string`, `T1`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |

#### Returns

[`string`, `T1`][]

#### Defined in

[src/system.ts:8](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L8)

▸ `Protected` **queryEntities**<`T1`, `T2`\>(`world`, `componentType1`, `componentType2`): [`string`, `T1`, `T2`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |

#### Returns

[`string`, `T1`, `T2`][]

#### Defined in

[src/system.ts:13](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L13)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`\>(`world`, `componentType1`, `componentType2`, `componentType3`): [`string`, `T1`, `T2`, `T3`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |

#### Returns

[`string`, `T1`, `T2`, `T3`][]

#### Defined in

[src/system.ts:19](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L19)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`, `T4`\>(`world`, `componentType1`, `componentType2`, `componentType3`, `componentType4`): [`string`, `T1`, `T2`, `T3`, `T4`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |
| `T4` | extends [`Component`](Component.md)<`T4`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |
| `componentType4` | () => `T4` |

#### Returns

[`string`, `T1`, `T2`, `T3`, `T4`][]

#### Defined in

[src/system.ts:30](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L30)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`, `T4`, `T5`\>(`world`, `componentType1`, `componentType2`, `componentType3`, `componentType4`, `componentType5`): [`string`, `T1`, `T2`, `T3`, `T4`, `T5`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |
| `T4` | extends [`Component`](Component.md)<`T4`\> |
| `T5` | extends [`Component`](Component.md)<`T5`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |
| `componentType4` | () => `T4` |
| `componentType5` | () => `T5` |

#### Returns

[`string`, `T1`, `T2`, `T3`, `T4`, `T5`][]

#### Defined in

[src/system.ts:43](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L43)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`\>(`world`, `componentType1`, `componentType2`, `componentType3`, `componentType4`, `componentType5`, `componentType6`): [`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |
| `T4` | extends [`Component`](Component.md)<`T4`\> |
| `T5` | extends [`Component`](Component.md)<`T5`\> |
| `T6` | extends [`Component`](Component.md)<`T6`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |
| `componentType4` | () => `T4` |
| `componentType5` | () => `T5` |
| `componentType6` | () => `T6` |

#### Returns

[`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`][]

#### Defined in

[src/system.ts:58](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L58)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`\>(`world`, `componentType1`, `componentType2`, `componentType3`, `componentType4`, `componentType5`, `componentType6`, `componentType7`): [`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |
| `T4` | extends [`Component`](Component.md)<`T4`\> |
| `T5` | extends [`Component`](Component.md)<`T5`\> |
| `T6` | extends [`Component`](Component.md)<`T6`\> |
| `T7` | extends [`Component`](Component.md)<`T7`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |
| `componentType4` | () => `T4` |
| `componentType5` | () => `T5` |
| `componentType6` | () => `T6` |
| `componentType7` | () => `T7` |

#### Returns

[`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`][]

#### Defined in

[src/system.ts:75](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L75)

▸ `Protected` **queryEntities**<`T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`\>(`world`, `componentType1`, `componentType2`, `componentType3`, `componentType4`, `componentType5`, `componentType6`, `componentType7`, `componentType8`): [`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T1` | extends [`Component`](Component.md)<`T1`\> |
| `T2` | extends [`Component`](Component.md)<`T2`\> |
| `T3` | extends [`Component`](Component.md)<`T3`\> |
| `T4` | extends [`Component`](Component.md)<`T4`\> |
| `T5` | extends [`Component`](Component.md)<`T5`\> |
| `T6` | extends [`Component`](Component.md)<`T6`\> |
| `T7` | extends [`Component`](Component.md)<`T7`\> |
| `T8` | extends [`Component`](Component.md)<`T8`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`World`](World.md) |
| `componentType1` | () => `T1` |
| `componentType2` | () => `T2` |
| `componentType3` | () => `T3` |
| `componentType4` | () => `T4` |
| `componentType5` | () => `T5` |
| `componentType6` | () => `T6` |
| `componentType7` | () => `T7` |
| `componentType8` | () => `T8` |

#### Returns

[`string`, `T1`, `T2`, `T3`, `T4`, `T5`, `T6`, `T7`, `T8`][]

#### Defined in

[src/system.ts:94](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/system.ts#L94)
