[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / indexedObject

# Namespace: indexedObject

[assertions](assertions.md).indexedObject

## Table of contents

### Functions

- [of](assertions.indexedObject.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `guard`, `error?`): asserts value is Readonly<TypedObject<PropertyKey, T\>\>

Asserts that value type is IndexedObject\<T\>.

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

asserts value is Readonly<TypedObject<PropertyKey, T\>\>
