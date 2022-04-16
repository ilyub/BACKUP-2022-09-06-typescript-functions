[Typescript functions](../index.md) / [Exports](../modules.md) / [Accumulator](../modules/Accumulator.md) / Accumulator

# Class: Accumulator<K, T\>

[Accumulator](../modules/Accumulator.md).Accumulator

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

## Table of contents

### Constructors

- [constructor](Accumulator.Accumulator-1.md#constructor)

### Properties

- [map](Accumulator.Accumulator-1.md#map)

### Methods

- [[iterator]](Accumulator.Accumulator-1.md#[iterator])
- [get](Accumulator.Accumulator-1.md#get)
- [push](Accumulator.Accumulator-1.md#push)
- [unshift](Accumulator.Accumulator-1.md#unshift)

## Constructors

### constructor

• **new Accumulator**<`K`, `T`\>(`source?`)

Creates class instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `Iterable`<[`IterableElement`](../modules/Accumulator.md#iterableelement)<`K`, `T`\>\> | `[]` | Source. |

## Properties

### map

• `Protected` `Readonly` **map**: `Map`<`K`, `T`[]\>

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`IterableElement`](../modules/Accumulator.md#iterableelement)<`K`, `T`\>\>

#### Returns

`IterableIterator`<[`IterableElement`](../modules/Accumulator.md#iterableelement)<`K`, `T`\>\>

___

### get

▸ **get**(`key`): readonly `T`[]

Returns array by key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |

#### Returns

readonly `T`[]

Array.

___

### push

▸ **push**(`key`, `value`): `void`

Pushes value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |

#### Returns

`void`

___

### unshift

▸ **unshift**(`key`, `value`): `void`

Unshifts value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |

#### Returns

`void`
