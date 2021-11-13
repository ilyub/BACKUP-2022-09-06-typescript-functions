[Typescript functions](../index.md) / [Exports](../modules.md) / arrayMap

# Module: arrayMap

## Table of contents

### Functions

- [get](arrayMap.md#get)
- [get2](arrayMap.md#get2)
- [push](arrayMap.md#push)
- [push2](arrayMap.md#push2)
- [unshift](arrayMap.md#unshift)
- [unshift2](arrayMap.md#unshift2)

## Functions

### get

▸ **get**<`K`, `T`\>(`key`, `map`): readonly `T`[]

Gets values from array map.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `K` | Key. |
| `map` | `ReadonlyMap`<`K`, readonly `T`[]\> | Array map. |

#### Returns

readonly `T`[]

Values.

___

### get2

▸ **get2**<`K`, `L`, `T`\>(`key1`, `key2`, `map`): readonly `T`[]

Gets values from array map.

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
| `map` | `ReadonlyMap`<`K`, `ReadonlyMap`<`L`, readonly `T`[]\>\> | Array map. |

#### Returns

readonly `T`[]

Values.

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
| `mutableMap` | `Map`<`K`, `T`[]\> | Array map. |

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
| `mutableMap` | `Map`<`K`, `Map`<`L`, `T`[]\>\> | Array map. |

#### Returns

`void`

___

### unshift

▸ **unshift**<`K`, `T`\>(`key`, `value`, `mutableMap`): `void`

Unshift value to array map.

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
| `mutableMap` | `Map`<`K`, `T`[]\> | Array map. |

#### Returns

`void`

___

### unshift2

▸ **unshift2**<`K`, `L`, `T`\>(`key1`, `key2`, `value`, `mutableMap`): `void`

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
| `mutableMap` | `Map`<`K`, `Map`<`L`, `T`[]\>\> | Array map. |

#### Returns

`void`
