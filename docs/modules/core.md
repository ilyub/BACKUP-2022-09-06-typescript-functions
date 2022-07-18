[Typescript functions](../index.md) / [Exports](../modules.md) / core

# Module: core

## Table of contents

### Type Aliases

- [ValidationObject](core.md#validationobject)

### Variables

- [ReadonlyMap](core.md#readonlymap)
- [ReadonlySet](core.md#readonlyset)

### Functions

- [defineFn](core.md#definefn)
- [evaluate](core.md#evaluate)
- [freeze](core.md#freeze)
- [indexed](core.md#indexed)
- [overload](core.md#overload)
- [typedef](core.md#typedef)
- [unfreeze](core.md#unfreeze)

## Type Aliases

### ValidationObject

Ƭ **ValidationObject**<`T`\>: [`IndexedObject`](types_core.md#indexedobject)<`T`\>

**`Deprecated`**

-- Use enum.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Variables

### ReadonlyMap

• `Const` **ReadonlyMap**: `Object` = `Map`

___

### ReadonlySet

• `Const` **ReadonlySet**: `Object` = `Set`

## Functions

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

### freeze

▸ **freeze**<`T`\>(`value`): `Readonly`<`T`\>

Marks value as readonly.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`Readonly`<`T`\>

Value.

___

### indexed

▸ **indexed**(`value`): [`IndexedObject`](types_core.md#indexedobject)

Marks value as indexed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `object` | Value. |

#### Returns

[`IndexedObject`](types_core.md#indexedobject)

Value.

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

___

### unfreeze

▸ **unfreeze**<`T`\>(`value`): [`Writable`](types_core.md#writable)<`T`\>

Marks value as writable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

[`Writable`](types_core.md#writable)<`T`\>

Value.
