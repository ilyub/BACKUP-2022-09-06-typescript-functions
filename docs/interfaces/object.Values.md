[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / Values

# Interface: Values

[object](../modules/object.md).Values

## Callable

### Values

▸ **Values**<`K`, `V`\>(`obj`): `V`[]

Typed version of Object.entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`PartialTypedObject`](../modules/types_core.md#partialtypedobject)<`K`, `V`\> | Object. |

#### Returns

`V`[]

Object entries.

### Values

▸ **Values**<`T`\>(`obj`): `T`[`string` & keyof `T` & `number` & keyof `T`][]

Typed version of Object.values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`T`[`string` & keyof `T` & `number` & keyof `T`][]

Object values.