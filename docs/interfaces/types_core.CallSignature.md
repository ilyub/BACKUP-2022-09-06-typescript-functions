[Typescript functions](../index.md) / [Exports](../modules.md) / [types/core](../modules/types_core.md) / CallSignature

# Interface: CallSignature<T\>

[types/core](../modules/types_core.md).CallSignature

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](types_core.Callable.md) |

## Callable

### CallSignature

▸ **CallSignature**(`this`, ...`args`): `ReturnType`<`T`\>

Async function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ThisParameterType`<`T`\> | This argument. |
| `...args` | `Parameters`<`T`\> | Arguments. |

#### Returns

`ReturnType`<`T`\>

Result.
