[Typescript functions](../index.md) / [Exports](../modules.md) / assertions

# Module: assertions

## Table of contents

### Namespaces

- [array](assertions.array.md)
- [indexedObject](assertions.indexedObject.md)
- [not](assertions.not.md)
- [object](assertions.object.md)

### Interfaces

- [Assertion](../interfaces/assertions.Assertion.md)

### Type aliases

- [ErrorArg](assertions.md#errorarg)

### Functions

- [array](assertions.md#array)
- [boolean](assertions.md#boolean)
- [booleanU](assertions.md#booleanu)
- [byGuard](assertions.md#byguard)
- [callable](assertions.md#callable)
- [callableU](assertions.md#callableu)
- [empty](assertions.md#empty)
- [enumeration](assertions.md#enumeration)
- [enumerationU](assertions.md#enumerationu)
- [indexedObject](assertions.md#indexedobject)
- [instance](assertions.md#instance)
- [instances](assertions.md#instances)
- [not](assertions.md#not)
- [null](assertions.md#null)
- [numStr](assertions.md#numstr)
- [numStrU](assertions.md#numstru)
- [number](assertions.md#number)
- [numberU](assertions.md#numberu)
- [object](assertions.md#object)
- [objectU](assertions.md#objectu)
- [string](assertions.md#string)
- [stringU](assertions.md#stringu)
- [toBeFalse](assertions.md#tobefalse)
- [toBeTrue](assertions.md#tobetrue)
- [toErrorArg](assertions.md#toerrorarg)
- [undefined](assertions.md#undefined)

## Type aliases

### ErrorArg

Ƭ **ErrorArg**: `string` \| () => `unknown`

## Functions

### array

▸ **array**(`value`, `error?`): asserts value is unknowns

Asserts that value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is unknowns

___

### boolean

▸ **boolean**(`value`, `error?`): asserts value is boolean

Asserts that value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is boolean

___

### booleanU

▸ **booleanU**(`value`, `error?`): asserts value is booleanU

Asserts that value type is booleanU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is booleanU

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`, `error?`): asserts value is T

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
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is T

___

### callable

▸ **callable**<`T`\>(`value`, `error?`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is T

___

### callableU

▸ **callableU**<`T`\>(`value`, `error?`): asserts value is undefined \| T

Asserts that value type is T | undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is undefined \| T

___

### empty

▸ **empty**(`value`, `error?`): asserts value is empty

Asserts that value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is empty

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `vo`, `error?`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`ValidationObject`](types_core.md#validationobject)<`T`\> | Validation object. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is T

___

### enumerationU

▸ **enumerationU**<`T`\>(`value`, `vo`, `error?`): asserts value is undefined \| T

Asserts that value type is T | undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`ValidationObject`](types_core.md#validationobject)<`T`\> | Validation object. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is undefined \| T

___

### indexedObject

▸ **indexedObject**(`value`, `error?`): asserts value is Readonly<IndexedObject<unknown\>\>

Asserts that value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is Readonly<IndexedObject<unknown\>\>

___

### instance

▸ **instance**<`T`\>(`value`, `ctor`, `error?`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is T

___

### instances

▸ **instances**<`T`\>(`value`, `ctor`, `error?`): asserts value is readonly T[]

Asserts that value type is T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is readonly T[]

___

### not

▸ **not**(): `never`

Not implemented.

#### Returns

`never`

___

### null

▸ **null**(`value`, `error?`): asserts value is null

Asserts that value is _null_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is null

___

### numStr

▸ **numStr**(`value`, `error?`): asserts value is NumStr

Asserts that value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is NumStr

___

### numStrU

▸ **numStrU**(`value`, `error?`): asserts value is NumStrU

Asserts that value type is NumStrU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is NumStrU

___

### number

▸ **number**(`value`, `error?`): asserts value is number

Asserts that value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is number

___

### numberU

▸ **numberU**(`value`, `error?`): asserts value is numberU

Asserts that value type is numberU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is numberU

___

### object

▸ **object**(`value`, `error?`): asserts value is object

Asserts that value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is object

___

### objectU

▸ **objectU**(`value`, `error?`): asserts value is objectU

Asserts that value type is objectU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is objectU

___

### string

▸ **string**(`value`, `error?`): asserts value is string

Asserts that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is string

___

### stringU

▸ **stringU**(`value`, `error?`): asserts value is stringU

Asserts that value type is stringU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is stringU

___

### toBeFalse

▸ **toBeFalse**(`value`, `error?`): asserts value is false

Asserts value to be _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is false

___

### toBeTrue

▸ **toBeTrue**(`value`, `error?`): asserts value is true

Asserts value to be _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is true

___

### toErrorArg

▸ **toErrorArg**(`errorOrMessage`): [`ErrorArg`](assertions.md#errorarg)

Converts error or error message to error argument usable with assertion.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `errorOrMessage` | `unknown` | Error or error message. |

#### Returns

[`ErrorArg`](assertions.md#errorarg)

Error argument.

___

### undefined

▸ **undefined**(`value`, `error?`): asserts value is undefined

Asserts that value is _undefined_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is undefined
