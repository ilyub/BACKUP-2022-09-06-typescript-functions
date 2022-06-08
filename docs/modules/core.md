[Typescript functions](../index.md) / [Exports](../modules.md) / core

# Module: core

## Table of contents

### Type Aliases

- [ValidationObject](core.md#validationobject)

### Functions

- [createValidationObject](core.md#createvalidationobject)
- [defineFn](core.md#definefn)
- [evaluate](core.md#evaluate)
- [overload](core.md#overload)
- [typedef](core.md#typedef)

## Type Aliases

### ValidationObject

Ƭ **ValidationObject**<`T`\>: `ReadonlySet`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Functions

### createValidationObject

▸ **createValidationObject**<`T`\>(`source`): [`ValidationObject`](core.md#validationobject)<`T`\>

Creates validation object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`NumStr`](types_core.md#numstr) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`Rec`](types_core.md#rec)<`T`, `T`\> | Source. |

#### Returns

[`ValidationObject`](core.md#validationobject)<`T`\>

Validation object.

___

### defineFn

▸ **defineFn**<`F`, `P`\>(`fn`, `props`): `F` & `Readonly`<`P`\>

Defines function with properties.

#### Type parameters

| Name |
| :------ |
| `F` |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `F` | Function. |
| `props` | `P` | Properties. |

#### Returns

`F` & `Readonly`<`P`\>

Function with properties.

___

### evaluate

▸ **evaluate**<`T`\>(`callback`): `T`

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

▸ **evaluate**<`T`\>(`mixed`): `Promise`<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mixed` | [`AsyncPromise`](types_function.md#asyncpromise)<`T`, [`nevers`](types_core.md#nevers)\> | Promise or async function. |

#### Returns

`Promise`<`T`\>

The result of callback execution.

___

### overload

▸ **overload**<`T`\>(`callback`): `T`

Defines function with overloads.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `T` | Callback. |

#### Returns

`T`

The result of callback execution.

___

### typedef

▸ **typedef**<`T`\>(`value`): `T`

Defines value type.

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
