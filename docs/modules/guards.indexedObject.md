[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / indexedObject

# Namespace: indexedObject

[guards](guards.md).indexedObject

## Table of contents

### Variables

- [of](guards.indexedObject.md#of)

## Variables

### of

• **of**: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is Readonly<TypedObject<PropertyKey, T\>\>

#### Type declaration

▸ <`T`\>(`value`, `guard`): value is Readonly<TypedObject<PropertyKey, T\>\>

Checks that value type is IndexedObject\<T\>.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

##### Returns

value is Readonly<TypedObject<PropertyKey, T\>\>

_True_ if value type is IndexedObject\<T\>, _false_ otherwise.
