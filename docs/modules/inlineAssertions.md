[Typescript functions](../index.md) / [Exports](../modules.md) / inlineAssertions

# Module: inlineAssertions

## Table of contents

### Variables

- [array](inlineAssertions.md#array)
- [indexedObject](inlineAssertions.md#indexedobject)
- [map](inlineAssertions.md#map)
- [not](inlineAssertions.md#not)
- [set](inlineAssertions.md#set)

### Functions

- [boolean](inlineAssertions.md#boolean)
- [callable](inlineAssertions.md#callable)
- [enumeration](inlineAssertions.md#enumeration)
- [instance](inlineAssertions.md#instance)
- [instances](inlineAssertions.md#instances)
- [numStr](inlineAssertions.md#numstr)
- [number](inlineAssertions.md#number)
- [object](inlineAssertions.md#object)
- [string](inlineAssertions.md#string)
- [stringU](inlineAssertions.md#stringu)
- [symbol](inlineAssertions.md#symbol)

## Variables

### array

• `Const` **array**: (`value`: `unknown`, `error?`: [`ErrorArg`](assertions.md#errorarg)) => [`unknowns`](types_core.md#unknowns) & { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](assertions.md#errorarg)) => readonly `T`[]  }

Asserts that value is an array.

**`param`** Value.

**`param`** Error.

**`returns`** Value if value is an array.

**`throws`** Error otherwise.

___

### indexedObject

• `Const` **indexedObject**: (`value`: `unknown`, `error?`: [`ErrorArg`](assertions.md#errorarg)) => [`IndexedObject`](types_core.md#indexedobject)<`unknown`\> & { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](assertions.md#errorarg)) => [`IndexedObject`](types_core.md#indexedobject)<`T`\>  }

Asserts that value type is IndexedObject.

**`param`** Value.

**`param`** Error.

**`returns`** Value if value type is IndexedObject.

**`throws`** Error otherwise.

___

### map

• `Const` **map**: (`value`: `unknown`, `error?`: [`ErrorArg`](assertions.md#errorarg)) => `ReadonlyMap`<`unknown`, `unknown`\> & { `of`: <K, V\>(`this`: `void`, `value`: `unknown`, `keyGuard`: [`Guard`](../interfaces/guards.Guard.md)<`K`\>, `valueGuard`: [`Guard`](../interfaces/guards.Guard.md)<`V`\>, `error?`: [`ErrorArg`](assertions.md#errorarg)) => `ReadonlyMap`<`K`, `V`\>  }

Asserts that value type is Map.

**`param`** Value.

**`param`** Error.

**`returns`** Value if value type is Map.

**`throws`** Error otherwise.

___

### not

• `Const` **not**: () => `never` & { `empty`: <T\>(`this`: `void`, `value`: `T`, `error?`: [`ErrorArg`](assertions.md#errorarg)) => `Exclude`<`T`, [`empty`](types_core.md#empty)\>  }

Not implemented.

___

### set

• `Const` **set**: (`value`: `unknown`, `error?`: [`ErrorArg`](assertions.md#errorarg)) => `ReadonlySet`<`unknown`\> & { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](assertions.md#errorarg)) => `ReadonlySet`<`T`\>  }

Asserts that value type is Set.

**`param`** Value.

**`param`** Error.

**`returns`** Value if value type is Set.

**`throws`** Error otherwise.

## Functions

### boolean

▸ **boolean**(`value`, `error?`): `boolean`

Asserts that value is a boolean.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`boolean`

Value if value is a boolean.

___

### callable

▸ **callable**<`T`\>(`value`, `error?`): `T`

Asserts that value type is T.

**`throws`** Error otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `vo`, `error?`): `T`

Asserts that value type is T.

**`throws`** Error otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`ValidationObject`](helpers.md#validationobject)<`T`\> | Validation object. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

___

### instance

▸ **instance**<`T`\>(`value`, `ctor`, `error?`): `T`

Asserts that value type is T.

**`throws`** Error otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

___

### instances

▸ **instances**<`T`\>(`value`, `ctor`, `error?`): readonly `T`[]

Asserts that value type is T[].

**`throws`** Error otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

readonly `T`[]

Value if value type is T[].

___

### numStr

▸ **numStr**(`value`, `error?`): [`NumStr`](types_core.md#numstr)

Asserts that value type is NumStr.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

[`NumStr`](types_core.md#numstr)

Value if value type is NumStr.

___

### number

▸ **number**(`value`, `error?`): `number`

Asserts that value is a number.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`number`

Value if value is a number.

___

### object

▸ **object**(`value`, `error?`): `object`

Asserts that value is an object.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`object`

Value if value is an object.

___

### string

▸ **string**(`value`, `error?`): `string`

Asserts that value is a string.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`string`

Value if value is a string.

___

### stringU

▸ **stringU**(`value`, `error?`): [`stringU`](types_core.md#stringu)

Asserts that value is a string.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

[`stringU`](types_core.md#stringu)

Value if value is a string.

___

### symbol

▸ **symbol**(`value`, `error?`): `symbol`

Asserts that value is a symbol.

**`throws`** Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

`symbol`

Value if value is a symbol.
