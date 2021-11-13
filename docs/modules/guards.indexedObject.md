[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / indexedObject

# Namespace: indexedObject

[guards](guards.md).indexedObject

## Table of contents

### Variables

- [of](guards.indexedObject.md#of)

## Variables

### of

• **of**: <T\>(`value`: `unknown`, `guard`: [`Guard`](guards.md#guard)<`T`\>) => value is Readonly<IndexedObject<T\>\>

#### Type declaration

▸ <`T`\>(`value`, `guard`): value is Readonly<IndexedObject<T\>\>

Checks that value type is IndexedObject\<T\>.

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

value is Readonly<IndexedObject<T\>\>

_True_ if value type is IndexedObject\<T\>, _false_ otherwise.
