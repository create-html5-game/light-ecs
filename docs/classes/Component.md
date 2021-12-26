[light-ecs](../README.md) / [Exports](../modules.md) / Component

# Class: Component

Base class for all component types. This is a subclass of the Message
class from protobufjs so can be treated as a protobuf type.

## Hierarchy

- `Message`

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](Component.md#constructor)

### Properties

- [$type](Component.md#$type)
- [$type](Component.md#$type)

### Methods

- [toJSON](Component.md#tojson)
- [create](Component.md#create)
- [decode](Component.md#decode)
- [decodeDelimited](Component.md#decodedelimited)
- [encode](Component.md#encode)
- [encodeDelimited](Component.md#encodedelimited)
- [fromObject](Component.md#fromobject)
- [toObject](Component.md#toobject)
- [verify](Component.md#verify)

## Constructors

### constructor

• **new Component**(`properties?`)

Constructs a new message instance.

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `object` |

#### Inherited from

Message.constructor

#### Defined in

node_modules/protobufjs/index.d.ts:518

## Properties

### $type

• `Readonly` **$type**: `Type`

Reference to the reflected type.

#### Inherited from

Message.$type

#### Defined in

node_modules/protobufjs/index.d.ts:524

___

### $type

▪ `Static` `Readonly` **$type**: `Type`

Reference to the reflected type.

#### Inherited from

Message.$type

#### Defined in

node_modules/protobufjs/index.d.ts:521

## Methods

### toJSON

▸ **toJSON**(): `Object`

Converts this message to JSON.

#### Returns

`Object`

JSON object

#### Inherited from

Message.toJSON

#### Defined in

node_modules/protobufjs/index.d.ts:589

___

### create

▸ `Static` **create**<`T`\>(`properties?`): `Message`<`T`\>

Creates a new message of this type using the specified properties.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties?` | `Object` |

#### Returns

`Message`<`T`\>

Message instance

#### Inherited from

Message.create

#### Defined in

node_modules/protobufjs/index.d.ts:531

___

### decode

▸ `Static` **decode**<`T`\>(`reader`): `T`

Decodes a message of this type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Reader` \| `Uint8Array` | Reader or buffer to decode |

#### Returns

`T`

Decoded message

#### Inherited from

Message.decode

#### Defined in

node_modules/protobufjs/index.d.ts:554

___

### decodeDelimited

▸ `Static` **decodeDelimited**<`T`\>(`reader`): `T`

Decodes a message of this type preceeded by its length as a varint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reader` | `Reader` \| `Uint8Array` | Reader or buffer to decode |

#### Returns

`T`

Decoded message

#### Inherited from

Message.decodeDelimited

#### Defined in

node_modules/protobufjs/index.d.ts:561

___

### encode

▸ `Static` **encode**<`T`\>(`message`, `writer?`): `Writer`

Encodes a message of this type.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` \| { [k: string]: `any`;  } | Message to encode |
| `writer?` | `Writer` | - |

#### Returns

`Writer`

Writer

#### Inherited from

Message.encode

#### Defined in

node_modules/protobufjs/index.d.ts:539

___

### encodeDelimited

▸ `Static` **encodeDelimited**<`T`\>(`message`, `writer?`): `Writer`

Encodes a message of this type preceeded by its length as a varint.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` \| { [k: string]: `any`;  } | Message to encode |
| `writer?` | `Writer` | - |

#### Returns

`Writer`

Writer

#### Inherited from

Message.encodeDelimited

#### Defined in

node_modules/protobufjs/index.d.ts:547

___

### fromObject

▸ `Static` **fromObject**<`T`\>(`object`): `T`

Creates a new message of this type from a plain object. Also converts values to their respective internal types.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `Object` | Plain object |

#### Returns

`T`

Message instance

#### Inherited from

Message.fromObject

#### Defined in

node_modules/protobufjs/index.d.ts:575

___

### toObject

▸ `Static` **toObject**<`T`\>(`message`, `options?`): `Object`

Creates a plain object from a message of this type. Also converts values to other types if specified.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Message`<`T`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `T` | Message instance |
| `options?` | `IConversionOptions` | - |

#### Returns

`Object`

Plain object

#### Inherited from

Message.toObject

#### Defined in

node_modules/protobufjs/index.d.ts:583

___

### verify

▸ `Static` **verify**(`message`): ``null`` \| `string`

Verifies a message of this type.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message` | `Object` | Plain object to verify |

#### Returns

``null`` \| `string`

`null` if valid, otherwise the reason why it is not

#### Inherited from

Message.verify

#### Defined in

node_modules/protobufjs/index.d.ts:568
