[light-ecs](../README.md) / [Exports](../modules.md) / World

# Class: World

A world instance holds a set of entity IDs along with their components.

## Table of contents

### Constructors

- [constructor](World.md#constructor)

### Methods

- [addComponentToEntity](World.md#addcomponenttoentity)
- [createEntity](World.md#createentity)
- [destroyEntity](World.md#destroyentity)
- [getComponentFromEntity](World.md#getcomponentfromentity)
- [getComponentsFromEntity](World.md#getcomponentsfromentity)
- [getEntitiesWithComponent](World.md#getentitieswithcomponent)
- [hasEntity](World.md#hasentity)
- [removeComponentFromEntity](World.md#removecomponentfromentity)

## Constructors

### constructor

• **new World**(`nextEntityId?`, `entities?`, `components?`)

Construct a world instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nextEntityId` | `number` | `0` | Value that'll be used as the next new entity ID. Optional and mainly used during deserialization. |
| `entities` | `Record`<`string`, `boolean`\> | `{}` | A set of existing entities in the world. Optional and mainly used during deserialization. |
| `components` | `Record`<`string`, `Record`<`string`, [`Component`](Component.md)\>\> | `{}` | A set of component data. Optional and mainly used during deserialization. |

#### Defined in

[src/world.ts:13](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L13)

## Methods

### addComponentToEntity

▸ **addComponentToEntity**<`T`\>(`entityId`, `componentType`): `T`

Add a component to an entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |
| `componentType` | () => `T` | Type of the component to add to the entity. |

#### Returns

`T`

The added component.

#### Defined in

[src/world.ts:60](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L60)

___

### createEntity

▸ **createEntity**(): `string`

Create a new entity.

#### Returns

`string`

ID of the created entity.

#### Defined in

[src/world.ts:25](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L25)

___

### destroyEntity

▸ **destroyEntity**(`entityId`): `void`

Destroy an entity. Delete all its data from the world.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |

#### Returns

`void`

#### Defined in

[src/world.ts:44](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L44)

___

### getComponentFromEntity

▸ **getComponentFromEntity**<`T`\>(`entityId`, `componentType`): ``null`` \| `T`

Get the component of a specicif type from an entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |
| `componentType` | () => `T` | Type of the component to get. |

#### Returns

``null`` \| `T`

Component of the specified type on the entity. Null if it
doesn't exist.

#### Defined in

[src/world.ts:111](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L111)

___

### getComponentsFromEntity

▸ **getComponentsFromEntity**(`entityId`): [`Component`](Component.md)[]

Get all components on a specific entity.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |

#### Returns

[`Component`](Component.md)[]

Array of all components on the entity.

#### Defined in

[src/world.ts:132](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L132)

___

### getEntitiesWithComponent

▸ **getEntitiesWithComponent**(`componentType`): `string`[]

Get all entities that have a specific component.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentType` | () => [`Component`](Component.md) | Component type. |

#### Returns

`string`[]

Array of entity IDs that have the specified component.

#### Defined in

[src/world.ts:151](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L151)

___

### hasEntity

▸ **hasEntity**(`entityId`): `boolean`

Check whether an entity ID exists in the world.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |

#### Returns

`boolean`

A boolean indicating whether the entity exists.

#### Defined in

[src/world.ts:36](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L36)

___

### removeComponentFromEntity

▸ **removeComponentFromEntity**<`T`\>(`entityId`, `componentType`): `void`

Remove a component from an entity.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md)<`T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entityId` | `string` | ID of the entity. |
| `componentType` | () => `T` | Type of the component to remove. |

#### Returns

`void`

#### Defined in

[src/world.ts:88](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/world.ts#L88)
