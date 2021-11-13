[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / array

# Namespace: array

[guards](guards.md).array

## Table of contents

### Variables

- [of](guards.array.md#of)

## Variables

### of

• **of**: <T\>(`value`: `unknown`, `guard`: [`Guard`](guards.md#guard)<`T`\>) => value is readonly T[]

#### Type declaration

▸ <`T`\>(`value`, `guard`): value is readonly T[]

Checks that value type is T[].

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](guards.md#guard)<`T`\> | Guard for type T. |

##### Returns

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.
