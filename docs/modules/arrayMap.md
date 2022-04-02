[Typescript functions](../index.md) / [Exports](../modules.md) / arrayMap

# Module: arrayMap

## Table of contents

### Type aliases

- [ArrayMap](arrayMap.md#arraymap)
- [ArrayMap2](arrayMap.md#arraymap2)
- [WritableArrayMap](arrayMap.md#writablearraymap)
- [WritableArrayMap2](arrayMap.md#writablearraymap2)

### Functions

- [get](arrayMap.md#get)
- [get2](arrayMap.md#get2)
- [push](arrayMap.md#push)
- [push2](arrayMap.md#push2)
- [unshift](arrayMap.md#unshift)
- [unshift2](arrayMap.md#unshift2)

## Type aliases

### ArrayMap

Ƭ **ArrayMap**<`K`, `T`\>: `ReadonlyMap`<`K`, readonly `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### ArrayMap2

Ƭ **ArrayMap2**<`K`, `L`, `T`\>: `ReadonlyMap`<`K`, `ReadonlyMap`<`L`, readonly `T`[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

___

### WritableArrayMap

Ƭ **WritableArrayMap**<`K`, `T`\>: `Map`<`K`, `T`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### WritableArrayMap2

Ƭ **WritableArrayMap2**<`K`, `L`, `T`\>: `Map`<`K`, `Map`<`L`, `T`[]\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

## Functions

### get

▸ **get**<`K`, `T`\>(`key`, `map`): readonly `T`[]

Returns array from array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `map` | [`ArrayMap`](arrayMap.md#arraymap)<`K`, `T`\> | Array map. |

#### Returns

readonly `T`[]

Array.

___

### get2

▸ **get2**<`K`, `L`, `T`\>(`key1`, `key2`, `map`): readonly `T`[]

Returns array from array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `map` | [`ArrayMap2`](arrayMap.md#arraymap2)<`K`, `L`, `T`\> | Array map. |

#### Returns

readonly `T`[]

Array.

___

### push

▸ **push**<`K`, `T`\>(`key`, `value`, `mutableMap`): `void`

Pushes value to array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |
| `mutableMap` | [`WritableArrayMap`](arrayMap.md#writablearraymap)<`K`, `T`\> | Array map. |

#### Returns

`void`

___

### push2

▸ **push2**<`K`, `L`, `T`\>(`key1`, `key2`, `value`, `mutableMap`): `void`

Pushes value to array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |
| `mutableMap` | [`WritableArrayMap2`](arrayMap.md#writablearraymap2)<`K`, `L`, `T`\> | Array map. |

#### Returns

`void`

___

### unshift

▸ **unshift**<`K`, `T`\>(`key`, `value`, `mutableMap`): `void`

Unshifts value to array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `value` | `T` | Value. |
| `mutableMap` | [`WritableArrayMap`](arrayMap.md#writablearraymap)<`K`, `T`\> | Array map. |

#### Returns

`void`

___

### unshift2

▸ **unshift2**<`K`, `L`, `T`\>(`key1`, `key2`, `value`, `mutableMap`): `void`

Unshifts value to array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `K` | Key 1. |
| `key2` | `L` | Key 2. |
| `value` | `T` | Value. |
| `mutableMap` | [`WritableArrayMap2`](arrayMap.md#writablearraymap2)<`K`, `L`, `T`\> | Array map. |

#### Returns

`void`
