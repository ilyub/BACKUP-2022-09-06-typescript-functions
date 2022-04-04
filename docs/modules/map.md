[Typescript functions](../index.md) / [Exports](../modules.md) / map

# Module: map

## Table of contents

### Functions

- [delete](map.md#delete)
- [set](map.md#set)

## Functions

### delete

▸ **delete**<`K`, `V`\>(`map`, `key`): `ReadonlyMap`<`K`, `V`\>

Removes key.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `ReadonlyMap`<`K`, `V`\> | Map. |
| `key` | `K` | Key. |

#### Returns

`ReadonlyMap`<`K`, `V`\>

Map with key removed.

___

### set

▸ **set**<`K`, `V`\>(`map`, `key`, `value`): `ReadonlyMap`<`K`, `V`\>

Sets key.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `map` | `ReadonlyMap`<`K`, `V`\> | Map. |
| `key` | `K` | Key. |
| `value` | `V` | Value. |

#### Returns

`ReadonlyMap`<`K`, `V`\>

Map with key set.
