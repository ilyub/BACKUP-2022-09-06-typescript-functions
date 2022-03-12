[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Descriptor

# Interface: Descriptor<T\>

[object](../modules/object.md).Descriptor

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` = `object` |

## Table of contents

### Properties

- [configurable](object.Descriptor.md#configurable)
- [enumerable](object.Descriptor.md#enumerable)
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

### writable

• `Optional` `Readonly` **writable**: `boolean`

## Methods

### get

▸ `Optional` `Readonly` **get**(`this`): `unknown`

Getter for component's property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | Object. |

#### Returns

`unknown`

Value.

___

### set

▸ `Optional` `Readonly` **set**(`this`, `value`): `void`

Setter for component's property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `T` | Object. |
| `value` | `unknown` | New value. |

#### Returns

`void`
