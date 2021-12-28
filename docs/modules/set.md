[Typescript functions](../index.md) / [Exports](../modules.md) / set

# Module: set

## Table of contents

### References

- [delete](set.md#delete)

### Functions

- [add](set.md#add)
- [setDelete](set.md#setdelete)

## References

### delete

Renames and re-exports [setDelete](set.md#setdelete)

## Functions

### add

▸ **add**<`T`\>(`set`, `value`): `ReadonlySet`<`T`\>

Adds value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `set` | `ReadonlySet`<`T`\> | Set. |
| `value` | `T` | Value. |

#### Returns

`ReadonlySet`<`T`\>

Set with value added.

___

### setDelete

▸ **setDelete**<`T`\>(`set`, `value`): `ReadonlySet`<`T`\>

Removes value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `set` | `ReadonlySet`<`T`\> | Set. |
| `value` | `T` | Value. |

#### Returns

`ReadonlySet`<`T`\>

Set with value removed.
