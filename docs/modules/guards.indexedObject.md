[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / indexedObject

# Namespace: indexedObject

[guards](guards.md).indexedObject

## Table of contents

### Functions

- [of](guards.indexedObject.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`): value is IndexedObject<T\>

Checks that value type is IndexedObject\<T\>.

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

value is IndexedObject<T\>

_True_ if value type is IndexedObject\<T\>, _false_ otherwise.
