[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](../modules/guards.md) / ExclusiveGuard

# Interface: ExclusiveGuard<T\>

[guards](../modules/guards.md).ExclusiveGuard

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ExclusiveGuard

▸ **ExclusiveGuard**<`V`\>(`value`): value is Exclude<V, T\>

Checks that value type is not T.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |

#### Returns

value is Exclude<V, T\>

_True_ if value type is not T, _false_ otherwise.
