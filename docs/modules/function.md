[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [PipeCallback](../interfaces/function.PipeCallback.md)

### Type aliases

- [PipeCallbacks](function.md#pipecallbacks)

### Functions

- [identity](function.md#identity)
- [noop](function.md#noop)
- [pipe](function.md#pipe)
- [run](function.md#run)

## Type aliases

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
| `...args` | readonly `any`[] |

#### Returns

`any`

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

### run

▸ **run**<`T`\>(`callback`): `T`

Executes callback.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`Sync`](../interfaces/types_function.Sync.md)<`T`, [`nevers`](types_core.md#nevers)\> | Callback. |

#### Returns

`T`

The result of callback execution.

▸ **run**<`T`\>(`promiseAsync`): `Promise`<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | [`AsyncPromise`](types_function.md#asyncpromise)<`T`, [`nevers`](types_core.md#nevers)\> | Promise or async function. |

#### Returns

`Promise`<`T`\>

The result of callback execution.
