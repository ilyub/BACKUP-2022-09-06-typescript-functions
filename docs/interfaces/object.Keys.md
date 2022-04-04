[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Keys

# Interface: Keys

[object](../modules/object.md).Keys

## Callable

### Keys

▸ **Keys**<`K`, `V`\>(`obj`): `K`[]

Typed version of Object.keys.

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

`K`[]

Object keys.

### Keys

▸ **Keys**<`T`\>(`obj`): `string` & keyof `T`[]

Typed version of Object.keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`string` & keyof `T`[]

Object keys.
