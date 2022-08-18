[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / CompareFn

# Interface: CompareFn<T\>

[object](../modules/object.md).CompareFn

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### CompareFn

▸ **CompareFn**(`value1`, `value2`, `key1`, `key2`): `number`

Compares two object entries.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value1` | `T`[keyof `T`] | Value 1. |
| `value2` | `T`[keyof `T`] | Value 2. |
| `key1` | keyof `T` | Key 1. |
| `key2` | keyof `T` | Key 2. |

#### Returns

`number`
