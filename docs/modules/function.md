[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [PipeCallback](../interfaces/function.PipeCallback.md)

### Type Aliases

- [PipeCallbacks](function.md#pipecallbacks)

### Functions

- [identity](function.md#identity)
- [noop](function.md#noop)
- [noopTrue](function.md#nooptrue)
- [pipe](function.md#pipe)
- [valueToGenerator](function.md#valuetogenerator)

## Type Aliases

### PipeCallbacks

Ƭ **PipeCallbacks**: readonly [`PipeCallback`](../interfaces/function.PipeCallback.md)[]

## Functions

### identity

▸ **identity**<`T`\>(`value`): `T`

Identity function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`T`

Value.

___

### noop

▸ **noop**(...`args`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

#### Returns

`any`

___

### noopTrue

▸ **noopTrue**(...`_args`): ``true``

Noop function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `..._args` | [`unknowns`](types_core.md#unknowns) | Arguments. |

#### Returns

``true``

_True_.

___

### pipe

▸ **pipe**<`V`, `A`, `R`\>(`value`, `callback1`, `callback2`): `R`

Applies callbacks to a value.

#### Type parameters

| Name |
| :------ |
| `V` |
| `A` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |
| `callback1` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`V`, `A`\> | Callback 1. |
| `callback2` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`A`, `R`\> | Callback 2. |

#### Returns

`R`

The value returned by callback sequence.

▸ **pipe**<`V`, `A`, `B`, `R`\>(`value`, `callback1`, `callback2`, `callback3`): `R`

Applies callbacks to a value.

#### Type parameters

| Name |
| :------ |
| `V` |
| `A` |
| `B` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |
| `callback1` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`V`, `A`\> | Callback 1. |
| `callback2` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`A`, `B`\> | Callback 2. |
| `callback3` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`B`, `R`\> | Callback 3. |

#### Returns

`R`

The value returned by callback sequence.

___

### valueToGenerator

▸ **valueToGenerator**<`T`\>(`value`): () => `T`

Creates factory function from value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`fn`

Factory function.

▸ (): `T`

Creates factory function from value.

##### Returns

`T`

Factory function.
