[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Entries

# Interface: Entries

[object](../modules/object.md).Entries

## Callable

### Entries

▸ **Entries**<`K`, `V`\>(`obj`): [`K`, `V`][]

Typed version of Object.entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`PartialRecord`](../modules/types_core.md#partialrecord)<`K`, `V`\> | Object. |

#### Returns

[`K`, `V`][]

Object entries.

### Entries

▸ **Entries**<`T`\>(`obj`): [`string` & keyof `T`, `T`[`string` & keyof `T` & `number` & keyof `T`]][]

Typed version of Object.entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`string` & keyof `T`, `T`[`string` & keyof `T` & `number` & keyof `T`]][]

Object entries.
