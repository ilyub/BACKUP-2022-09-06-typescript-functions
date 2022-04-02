[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Callback

# Interface: Callback<T\>

[object](../modules/object.md).Callback

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Callable

### Callback

▸ **Callback**(`value`, `key`): `boolean`

Checks object entry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T`[keyof `T`] | Value. |
| `key` | keyof `T` | Key. |

#### Returns

`boolean`

_True_ if entry passes check, _false_ otherwise.
