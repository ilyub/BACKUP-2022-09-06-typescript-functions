[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](../modules/guards.md) / MultiArgGuard

# Interface: MultiArgGuard<T, A\>

[guards](../modules/guards.md).MultiArgGuard

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends [`unknowns`](../modules/types_core.md#unknowns) |

## Callable

### MultiArgGuard

▸ **MultiArgGuard**(`value`, ...`args`): value is T

Checks that value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `...args` | `A` | Arguments. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.
