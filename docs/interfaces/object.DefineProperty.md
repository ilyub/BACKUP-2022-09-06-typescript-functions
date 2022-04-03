[Typescript functions](../index.md) / [Exports](../modules.md) / [object](../modules/object.md) / DefineProperty

# Interface: DefineProperty

[object](../modules/object.md).DefineProperty

## Callable

### DefineProperty

▸ **DefineProperty**<`T`, `K`\>(`obj`, `key`, `descriptor`): `void`

Typed version of Object.defineProperty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `key` | `K` | Property key. |
| `descriptor` | [`Descriptor`](object.Descriptor.md)<`T`, `K`\> | Descriptor. |

#### Returns

`void`
