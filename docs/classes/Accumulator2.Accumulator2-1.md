[Typescript functions](../index.md) / [Exports](../modules.md) / [Accumulator2](../modules/Accumulator2.md) / Accumulator2

# Class: Accumulator2<K, L, T\>

[Accumulator2](../modules/Accumulator2.md).Accumulator2

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

## Table of contents

### Constructors

- [constructor](Accumulator2.Accumulator2-1.md#constructor)

### Properties

- [map](Accumulator2.Accumulator2-1.md#map)

### Methods

- [[iterator]](Accumulator2.Accumulator2-1.md#[iterator])
- [get](Accumulator2.Accumulator2-1.md#get)
- [push](Accumulator2.Accumulator2-1.md#push)
- [unshift](Accumulator2.Accumulator2-1.md#unshift)

## Constructors

### constructor

• **new Accumulator2**<`K`, `L`, `T`\>(`source?`)

Creates class instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `Iterable`<[`IterableElement`](../modules/Accumulator2.md#iterableelement)<`K`, `L`, `T`\>\> | `[]` | Source. |

## Properties

### map

• `Protected` `Readonly` **map**: `Map`<`K`, `Map`<`L`, `T`[]\>\>

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`IterableElement`](../modules/Accumulator2.md#iterableelement)<`K`, `L`, `T`\>\>

#### Returns

`IterableIterator`<[`IterableElement`](../modules/Accumulator2.md#iterableelement)<`K`, `L`, `T`\>\>

___

### get

▸ **get**(`key1`, `key2`): readonly `T`[]

Returns array by keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |

#### Returns

readonly `T`[]

Array.

___

### push

▸ **push**(`key1`, `key2`, `value`): `void`

Pushes value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### unshift

▸ **unshift**(`key1`, `key2`, `value`): `void`

Unshifts value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |

#### Returns

`void`
