[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / map

# Namespace: map

[guards](guards.md).map

## Table of contents

### Functions

- [of](guards.map.md#of)

## Functions

### of

▸ **of**<`K`, `V`\>(`value`, `keyGuard`, `valueGuard`): value is ReadonlyMap<K, V\>

Checks that value type is Map\<K, V\>.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `keyGuard` | [`Guard`](../interfaces/guards.Guard.md)<`K`\> | Key guard. |
| `valueGuard` | [`Guard`](../interfaces/guards.Guard.md)<`V`\> | Value guard. |

#### Returns

value is ReadonlyMap<K, V\>

_True_ if value type is Map\<K, V\>, _false_ otherwise.
