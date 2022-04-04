[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / array

# Namespace: array

[guards](guards.md).array

## Table of contents

### Functions

- [of](guards.array.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`): value is readonly T[]

Checks that value type is T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.
