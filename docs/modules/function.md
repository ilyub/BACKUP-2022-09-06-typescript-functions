[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [PipeCallback](../interfaces/function.PipeCallback.md)
- [ValueGenerator](../interfaces/function.ValueGenerator.md)

### Type Aliases

- [PipeCallbacks](function.md#pipecallbacks)

### Functions

- [identity](function.md#identity)
- [never](function.md#never)
- [noop](function.md#noop)
- [noopTrue](function.md#nooptrue)
- [pipe](function.md#pipe)
- [valueFromGenerator](function.md#valuefromgenerator)
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

### never

▸ **never**(...`args`): `unknown`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`unknown`

Result.

___

### noop

▸ **noop**(...`args`): `void`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`void`

Result.

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

### valueFromGenerator

▸ **valueFromGenerator**<`T`\>(`mixed`): `T`

Gets value from generator.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | `T` \| [`ValueGenerator`](../interfaces/function.ValueGenerator.md)<`T`\> | Value or generator. |

#### Returns

`T`

Factory function.

___

### valueToGenerator

▸ **valueToGenerator**<`T`\>(`value`): [`ValueGenerator`](../interfaces/function.ValueGenerator.md)<`T`\>

Creates generator from value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

[`ValueGenerator`](../interfaces/function.ValueGenerator.md)<`T`\>

Generator.
