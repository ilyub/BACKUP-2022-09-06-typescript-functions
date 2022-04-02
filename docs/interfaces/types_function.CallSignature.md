[Typescript functions](../index.md) / [Exports](../modules.md) / [types/function](../modules/types_function.md) / CallSignature

# Interface: CallSignature<T\>

[types/function](../modules/types_function.md).CallSignature

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](types_function.Callable.md) |

## Callable

### CallSignature

▸ **CallSignature**(`this`, ...`args`): `ReturnType`<`T`\>

Call signature.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ThisParameterType`<`T`\> | This argument. |
| `...args` | `Parameters`<`T`\> | Arguments. |

#### Returns

`ReturnType`<`T`\>

Result.
