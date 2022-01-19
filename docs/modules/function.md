[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Type aliases

- [PipeCallback](function.md#pipecallback)

### Functions

- [doNotRunParallel](function.md#donotrunparallel)
- [pipe](function.md#pipe)
- [run](function.md#run)

## Type aliases

### PipeCallback

Ƭ **PipeCallback**<`V`, `R`\>: (`value`: `V`) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `V` | `unknown` |
| `R` | `unknown` |

#### Type declaration

▸ (`value`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

`R`

## Functions

### doNotRunParallel

▸ **doNotRunParallel**<`T`\>(`async`): [`Async`](types_core.md#async)<`void`, `T`\>

Prevents parallel running.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] = `never`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `async` | [`Async`](types_core.md#async)<`void`, `T`\> | Async function. |

#### Returns

[`Async`](types_core.md#async)<`void`, `T`\>

Wrapped async function.

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
| `callback1` | [`PipeCallback`](function.md#pipecallback)<`A`, `B`\> | Callback 1. |
| `callback2` | [`PipeCallback`](function.md#pipecallback)<`B`, `C`\> | Callback 2. |

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
| `callback1` | [`PipeCallback`](function.md#pipecallback)<`A`, `B`\> | Callback 1. |
| `callback2` | [`PipeCallback`](function.md#pipecallback)<`B`, `C`\> | Callback 2. |
| `callback3` | [`PipeCallback`](function.md#pipecallback)<`C`, `D`\> | Callback 3. |

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
| `callback` | [`Sync`](types_core.md#sync)<`T`, `never`[]\> | Callback. |

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
