[Typescript functions](../index.md) / [Exports](../modules.md) / assertions

# Module: assertions

## Table of contents

### Type Aliases

- [ErrorArg](assertions.md#errorarg)

### Variables

- [not](assertions.md#not)

### Functions

- [array](assertions.md#array)
- [boolean](assertions.md#boolean)
- [byGuard](assertions.md#byguard)
- [callable](assertions.md#callable)
- [empty](assertions.md#empty)
- [enumeration](assertions.md#enumeration)
- [indexedObject](assertions.md#indexedobject)
- [instanceOf](assertions.md#instanceof)
- [instancesOf](assertions.md#instancesof)
- [map](assertions.md#map)
- [numStr](assertions.md#numstr)
- [number](assertions.md#number)
- [object](assertions.md#object)
- [set](assertions.md#set)
- [string](assertions.md#string)
- [stringU](assertions.md#stringu)
- [symbol](assertions.md#symbol)
- [toBeFalse](assertions.md#tobefalse)
- [toBeTrue](assertions.md#tobetrue)
- [wrapError](assertions.md#wraperror)

## Type Aliases

### ErrorArg

Ƭ **ErrorArg**: [`ErrorArgFn`](../interfaces/assertions_internal.ErrorArgFn.md) \| `string`

## Variables

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `empty` | <T\>(`value`: `T`, `error`: [`ErrorArg`](assertions.md#errorarg)) => asserts value is Exclude<T, empty\> |

## Functions

### array

▸ **array**(`value`, `error`): asserts value is unknowns

Asserts that value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is unknowns

___

### boolean

▸ **boolean**(`value`, `error`): asserts value is boolean

Asserts that value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is boolean

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### callable

▸ **callable**<`T`\>(`value`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### empty

▸ **empty**(`value`, `error`): asserts value is empty

Asserts that value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is empty

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `en`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `en` | [`IndexedObject`](types_core.md#indexedobject)<`T`\> | Validation object. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### indexedObject

▸ **indexedObject**(`value`, `error`): asserts value is IndexedObject<unknown\>

Asserts that value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is IndexedObject<unknown\>

___

### instanceOf

▸ **instanceOf**<`T`\>(`value`, `ctor`, `error`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is T

___

### instancesOf

▸ **instancesOf**<`T`\>(`value`, `ctor`, `error`): asserts value is readonly T[]

Asserts that value type is T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is readonly T[]

___

### map

▸ **map**(`value`, `error`): asserts value is ReadonlyMap<unknown, unknown\>

Asserts that value type is Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is ReadonlyMap<unknown, unknown\>

___

### numStr

▸ **numStr**(`value`, `error`): asserts value is NumStr

Asserts that value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is NumStr

___

### number

▸ **number**(`value`, `error`): asserts value is number

Asserts that value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is number

___

### object

▸ **object**(`value`, `error`): asserts value is object

Asserts that value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is object

___

### set

▸ **set**(`value`, `error`): asserts value is ReadonlySet<unknown\>

Asserts that value type is Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is ReadonlySet<unknown\>

___

### string

▸ **string**(`value`, `error`): asserts value is string

Asserts that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is string

___

### stringU

▸ **stringU**(`value`, `error`): asserts value is stringU

Asserts that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is stringU

___

### symbol

▸ **symbol**(`value`, `error`): asserts value is symbol

Asserts that value is a symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is symbol

___

### toBeFalse

▸ **toBeFalse**(`value`, `error`): asserts value is false

Asserts value to be _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is false

___

### toBeTrue

▸ **toBeTrue**(`value`, `error`): asserts value is true

Asserts value to be _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is true

___

### wrapError

▸ **wrapError**<`T`\>(`e`): () => `T`

Wraps error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `T` | Error. |

#### Returns

`fn`

Wrapped error.

▸ (): `T`

##### Returns

`T`
