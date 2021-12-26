[light-ecs](README.md) / Exports

# light-ecs

## Table of contents

### Classes

- [Component](classes/Component.md)
- [Engine](classes/Engine.md)
- [System](classes/System.md)
- [World](classes/World.md)

### Functions

- [ComponentField](modules.md#componentfield)

## Functions

### ComponentField

▸ `Const` **ComponentField**<`T`\>(`fieldId`, `fieldType`, `fieldRule?`, `defaultValue?`): `FieldDecorator`

Decorator for component fields. See
[protobufjs](https://github.com/protobufjs/protobuf.js#using-decorators)
for documentation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `boolean` \| `Uint8Array` \| `number`[] \| `Long` \| `Long`[] \| `string`[] \| `boolean`[] \| `Uint8Array`[] \| `Buffer` \| `Buffer`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldId` | `number` |
| `fieldType` | `object` \| ``"string"`` \| ``"double"`` \| ``"float"`` \| ``"int32"`` \| ``"uint32"`` \| ``"sint32"`` \| ``"fixed32"`` \| ``"sfixed32"`` \| ``"int64"`` \| ``"uint64"`` \| ``"sint64"`` \| ``"fixed64"`` \| ``"sfixed64"`` \| ``"bool"`` \| ``"bytes"`` |
| `fieldRule?` | ``"optional"`` \| ``"required"`` \| ``"repeated"`` |
| `defaultValue?` | `T` |

#### Returns

`FieldDecorator`

#### Defined in

[src/component.ts:14](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/component.ts#L14)

▸ `Const` **ComponentField**<`T`\>(`fieldId`, `fieldType`, `fieldRule?`): `FieldDecorator`

Decorator for component fields. See
[protobufjs](https://github.com/protobufjs/protobuf.js#using-decorators)
for documentation.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fieldId` | `number` |
| `fieldType` | `string` \| `Constructor`<`T`\> |
| `fieldRule?` | ``"optional"`` \| ``"required"`` \| ``"repeated"`` |

#### Returns

`FieldDecorator`

#### Defined in

[src/component.ts:14](https://github.com/create-html5-game/light-ecs/blob/4bea79d/src/component.ts#L14)
