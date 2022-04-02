[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Descriptor

# Interface: Descriptor<T, K\>

[object](../modules/object.md).Descriptor

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |
| `K` | extends keyof `T` = keyof `T` |

## Table of contents

### Properties

- [configurable](object.Descriptor.md#configurable)
- [enumerable](object.Descriptor.md#enumerable)
- [value](object.Descriptor.md#value)
- [writable](object.Descriptor.md#writable)

### Methods

- [get](object.Descriptor.md#get)
- [set](object.Descriptor.md#set)

## Properties

### configurable

• `Optional` `Readonly` **configurable**: `boolean`

___

### enumerable

• `Optional` `Readonly` **enumerable**: `boolean`

___

### value

• `Optional` `Readonly` **value**: `T`[`K`]

___

### writable

• `Optional` `Readonly` **writable**: `boolean`

## Methods

### get

▸ `Optional` `Readonly` **get**(`this`): `T`[`K`]

Property getter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | Object. |

#### Returns

`T`[`K`]

Value.

___

### set

▸ `Optional` `Readonly` **set**(`this`, `value`): `void`

Property setter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | Object. |
| `value` | `T`[`K`] | New value. |

#### Returns

`void`
