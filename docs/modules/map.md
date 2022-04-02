[Typescript functions](../index.md) / [Exports](../modules.md) / map

# Module: map

## Table of contents

### References

- [delete](map.md#delete)

### Functions

- [\_delete](map.md#_delete)
- [set](map.md#set)

## References

### delete

Renames and re-exports [_delete](map.md#_delete)

## Functions

### \_delete

▸ **_delete**<`K`, `V`\>(`map`, `key`): `ReadonlyMap`<`K`, `V`\>

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

Sets key to value.

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

Map with key set to value.
