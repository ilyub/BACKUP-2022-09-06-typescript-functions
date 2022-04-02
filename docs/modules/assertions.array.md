[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / array

# Namespace: array

[assertions](assertions.md).array

## Table of contents

### Functions

- [of](assertions.array.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`, `error?`): asserts value is readonly T[]

Asserts that value type is T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is readonly T[]
