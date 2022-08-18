[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Predicate

# Interface: Predicate<T\>

[object](../modules/object.md).Predicate

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### Predicate

▸ **Predicate**(`value`, `key`): `boolean`

Checks object entry.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T`[keyof `T`] | Value. |
| `key` | keyof `T` | Key. |

#### Returns

`boolean`

_True_ if object entry passes check, _false_ otherwise.
