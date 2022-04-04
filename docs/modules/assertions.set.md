[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / set

# Namespace: set

[assertions](assertions.md).set

## Table of contents

### Functions

- [of](assertions.set.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`, `error?`): asserts value is ReadonlySet<T\>

Asserts that value type is Set\<T\>.

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

asserts value is ReadonlySet<T\>
