[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / set

# Namespace: set

[guards](guards.md).set

## Table of contents

### Variables

- [of](guards.set.md#of)

## Variables

### of

• **of**: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is ReadonlySet<T\>

#### Type declaration

▸ <`T`\>(`value`, `guard`): value is ReadonlySet<T\>

Checks that value type is Set\<T\>.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard. |

##### Returns

value is ReadonlySet<T\>

_True_ if value type is Set\<T\>, _false_ otherwise.
