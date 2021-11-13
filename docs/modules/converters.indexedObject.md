[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / indexedObject

# Namespace: indexedObject

[converters](converters.md).indexedObject

## Table of contents

### Variables

- [of](converters.indexedObject.md#of)

## Variables

### of

• **of**: <T\>(`value`: `unknown`, `converter`: [`Converter`](converters.md#converter)<`T`\>) => [`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)<`T`\>

#### Type declaration

▸ <`T`\>(`value`, `converter`): [`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)<`T`\>

Converts value to IndexedObject\<T\>.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `converter` | [`Converter`](converters.md#converter)<`T`\> | Converter for type T. |

##### Returns

[`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)<`T`\>

Converted object if value is an object, empty object otherwise.
