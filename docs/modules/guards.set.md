[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / set

# Namespace: set

[guards](guards.md).set

## Table of contents

### Functions

- [of](guards.set.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`): value is ReadonlySet<T\>

Checks that value type is Set\<T\>.

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

value is ReadonlySet<T\>

_True_ if value type is Set\<T\>, _false_ otherwise.
