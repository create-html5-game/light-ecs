[light-ecs](../README.md) / [Exports](../modules.md) / Engine

# Class: Engine

An engine instance is the starting point for how you operate LightECS.

## Table of contents

### Constructors

- [constructor](Engine.md#constructor)

### Methods

- [createWorld](Engine.md#createworld)
- [serializeWorld](Engine.md#serializeworld)

## Constructors

### constructor

• **new Engine**(`componentTypes`)

Construct an engine instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentTypes` | () => [`Component`](Component.md)[] | Array of component types that will be used. This cannot be changed. |

#### Defined in

[src/engine.ts:19](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/engine.ts#L19)

## Methods

### createWorld

▸ **createWorld**(`serializedBuffer?`): [`World`](World.md)

Create a world instance, optionally from serialized binary data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serializedBuffer?` | `Uint8Array` | An optional Uint8Array that represents a serialized world instance. |

#### Returns

[`World`](World.md)

A world instance.

#### Defined in

[src/engine.ts:75](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/engine.ts#L75)

___

### serializeWorld

▸ **serializeWorld**(`world`): `Uint8Array`

Serialize a world instance into binary data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `world` | [`World`](World.md) | World instance. |

#### Returns

`Uint8Array`

Uint8Array that represents the serialized world instance.

#### Defined in

[src/engine.ts:65](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/engine.ts#L65)
