[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [PipeCallback](../interfaces/function.PipeCallback.md)

### Functions

- [doNotRunParallel](function.md#donotrunparallel)
- [identity](function.md#identity)
- [noop](function.md#noop)
- [pipe](function.md#pipe)
- [run](function.md#run)

## Functions

### doNotRunParallel

▸ **doNotRunParallel**<`T`\>(`async`): [`Async`](../interfaces/types_core.Async.md)<`void`, `T`\>

Prevents parallel running.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] = `never`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `async` | [`Async`](../interfaces/types_core.Async.md)<`void`, `T`\> | Async function. |

#### Returns

[`Async`](../interfaces/types_core.Async.md)<`void`, `T`\>

Wrapped async function.

___

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

### pipe

▸ **pipe**<`A`, `B`, `C`\>(`value`, `callback1`, `callback2`): `C`

Applies callbacks to the value.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `A` | Value. |
| `callback1` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`A`, `B`\> | Callback 1. |
| `callback2` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`B`, `C`\> | Callback 2. |

#### Returns

`C`

The value returned by callbacks sequence.

▸ **pipe**<`A`, `B`, `C`, `D`\>(`value`, `callback1`, `callback2`, `callback3`): `D`

Applies callbacks to the value.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `A` | Value. |
| `callback1` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`A`, `B`\> | Callback 1. |
| `callback2` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`B`, `C`\> | Callback 2. |
| `callback3` | [`PipeCallback`](../interfaces/function.PipeCallback.md)<`C`, `D`\> | Callback 3. |

#### Returns

`D`

The value returned by callbacks sequence.

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
| `callback` | [`Sync`](../interfaces/types_core.Sync.md)<`T`, [`nevers`](types_core.md#nevers)\> | Callback. |

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
| `promiseAsync` | [`PromiseAsync`](types_core.md#promiseasync)<`T`\> | Promise or async function. |

#### Returns

`Promise`<`T`\>

The result of callback execution.
