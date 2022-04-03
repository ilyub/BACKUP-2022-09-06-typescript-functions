[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Descriptor

# Interface: Descriptor<T, K\>

[object](../modules/object.md).Descriptor

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Hierarchy

- `PropertyDescriptor`

  ↳ **`Descriptor`**

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

#### Overrides

PropertyDescriptor.configurable

___

### enumerable

• `Optional` `Readonly` **enumerable**: `boolean`

#### Overrides

PropertyDescriptor.enumerable

___

### value

• `Optional` `Readonly` **value**: `T`[`K`]

#### Overrides

PropertyDescriptor.value

___

### writable

• `Optional` `Readonly` **writable**: `boolean`

#### Overrides

PropertyDescriptor.writable

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

#### Overrides

PropertyDescriptor.get

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

#### Overrides

PropertyDescriptor.set
