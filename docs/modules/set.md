[Typescript functions](../index.md) / [Exports](../modules.md) / set

# Module: set

## Table of contents

### References

- [delete](set.md#delete)

### Functions

- [\_delete](set.md#_delete)
- [add](set.md#add)

## References

### delete

Renames and re-exports [_delete](set.md#_delete)

## Functions

### \_delete

▸ **_delete**<`T`\>(`set`, `value`): `ReadonlySet`<`T`\>

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

___

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
