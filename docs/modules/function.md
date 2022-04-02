[Typescript functions](../index.md) / [Exports](../modules.md) / function

# Module: function

## Table of contents

### Interfaces

- [PipeCallback](../interfaces/function.PipeCallback.md)

### Functions

- [identity](function.md#identity)
- [noop](function.md#noop)
- [pipe](function.md#pipe)
- [run](function.md#run)

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

The value returned by callback sequence.

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
