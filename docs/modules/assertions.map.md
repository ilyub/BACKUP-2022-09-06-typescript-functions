[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / map

# Namespace: map

[assertions](assertions.md).map

## Table of contents

### Functions

- [of](assertions.map.md#of)

## Functions

### of

▸ **of**<`K`, `V`\>(`value`, `keyGuard`, `valueGuard`, `error?`): asserts value is ReadonlyMap<K, V\>

Asserts that value type is Map\<K, V\>.

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
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is ReadonlyMap<K, V\>
