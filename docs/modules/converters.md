[Typescript functions](../index.md) / [Exports](../modules.md) / converters

# Module: converters

## Table of contents

### Namespaces

- [array](converters.array.md)
- [arrayOf](converters.arrayOf.md)
- [callable](converters.callable.md)
- [indexedObject](converters.indexedObject.md)
- [instance](converters.instance.md)
- [instances](converters.instances.md)
- [not](converters.not.md)
- [number](converters.number.md)
- [string](converters.string.md)

### Interfaces

- [Converter](../interfaces/converters.Converter.md)
- [MultiArgConverter](../interfaces/converters.MultiArgConverter.md)

### Type aliases

- [OrFail](converters.md#orfail)

### Variables

- [orFail](converters.md#orfail)

### Functions

- [array](converters.md#array)
- [arrayOf](converters.md#arrayof)
- [arrayOfFiltered](converters.md#arrayoffiltered)
- [arrayOfOrFail](converters.md#arrayoforfail)
- [arrayOfUndef](converters.md#arrayofundef)
- [boolean](converters.md#boolean)
- [byGuard](converters.md#byguard)
- [callable](converters.md#callable)
- [callableOrFail](converters.md#callableorfail)
- [callableU](converters.md#callableu)
- [enumeration](converters.md#enumeration)
- [enumerationU](converters.md#enumerationu)
- [factory](converters.md#factory)
- [indexedObject](converters.md#indexedobject)
- [indexedObjectOf](converters.md#indexedobjectof)
- [instance](converters.md#instance)
- [instanceOrFail](converters.md#instanceorfail)
- [instanceU](converters.md#instanceu)
- [instances](converters.md#instances)
- [instancesFiltered](converters.md#instancesfiltered)
- [instancesOrFail](converters.md#instancesorfail)
- [not](converters.md#not)
- [notEmpty](converters.md#notempty)
- [numStr](converters.md#numstr)
- [numStrU](converters.md#numstru)
- [number](converters.md#number)
- [numberOrFail](converters.md#numberorfail)
- [numberU](converters.md#numberu)
- [object](converters.md#object)
- [string](converters.md#string)
- [stringOrFail](converters.md#stringorfail)
- [stringU](converters.md#stringu)
- [unknown](converters.md#unknown)

## Type aliases

### OrFail

Ƭ **OrFail**: typeof [`orFail`](converters.md#orfail)

## Variables

### orFail

• `Const` **orFail**: typeof [`orFail`](converters.md#orfail)

## Functions

### array

▸ **array**(`value`): [`unknowns`](types_core.md#unknowns)

Converts value to an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`unknowns`](types_core.md#unknowns)

Value if it is an array, empty array otherwise.

___

### arrayOf

▸ **arrayOf**<`T`\>(`value`, `converter`): `T`[]

Converts value to type T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `converter` | [`Converter`](../interfaces/converters.Converter.md)<`T`\> | Converter for type T. |

#### Returns

`T`[]

An array of converted elements if value is an array, empty array otherwise.

___

### arrayOfFiltered

▸ **arrayOfFiltered**<`T`\>(`value`, `guard`): `T`[]

Converts value to type T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

`T`[]

Filtered array if value is an array, empty array otherwise.

___

### arrayOfOrFail

▸ **arrayOfOrFail**<`T`\>(`value`, `guard`): readonly `T`[]

Converts value to type T[].

**`throws`** ConversionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

readonly `T`[]

Value if it is of type T[], empty array if value is empty.

___

### arrayOfUndef

▸ **arrayOfUndef**<`T`\>(`value`, `converter`): `T`[]

Converts value to type T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `converter` | [`Converter`](../interfaces/converters.Converter.md)<`undefined` \| `T`\> | Converter for type T \| undefined. |

#### Returns

`T`[]

Filtered array of converted elements if value is an array, empty array otherwise.

___

### boolean

▸ **boolean**(`value`): `boolean`

Converts value to a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`boolean`

Converted value.

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`, `defVal`): `T`

Converts value to type T.

**`throws`** ConversionError if defVal is equal to orFail.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal` | `T` \| typeof [`orFail`](converters.md#orfail) | Default value. |

#### Returns

`T`

Value if it is of type T, defVal otherwise.

___

### callable

▸ **callable**(): `never`

Not implemented.

#### Returns

`never`

___

### callableOrFail

▸ **callableOrFail**<`T`\>(`value`): `T`

Converts value to type T.

**`throws`** ConversionError otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`T`

Value if it is a Function.

___

### callableU

▸ **callableU**<`T`\>(`value`): `T` \| `undefined`

Converts value to type T | undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`T` \| `undefined`

Value if it is a Function, _undefined_ otherwise.

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `vo`, `defVal`): `T`

Converts value to type T.

**`throws`** ConversionError if defVal is equal to orFail.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`ValidationObject`](types_core.md#validationobject)<`T`\> | Validation object. |
| `defVal` | typeof [`orFail`](converters.md#orfail) \| `T` | Default value. |

#### Returns

`T`

Value if it is of type T, defVal otherwise.

___

### enumerationU

▸ **enumerationU**<`T`\>(`value`, `vo`): `T` \| `undefined`

Converts value to type T | undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`ValidationObject`](types_core.md#validationobject)<`T`\> | Validation object. |

#### Returns

`T` \| `undefined`

Value if it is of type T, _undefined_ otherwise.

___

### factory

▸ **factory**<`T`, `A`\>(`converter`, ...`args`): [`Converter`](../interfaces/converters.Converter.md)<`T`\>

Creates single-arg converter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `converter` | [`MultiArgConverter`](../interfaces/converters.MultiArgConverter.md)<`T`, `A`\> | Multi-arg converter. |
| `...args` | `A` | Rest arguments. |

#### Returns

[`Converter`](../interfaces/converters.Converter.md)<`T`\>

Single-arg converter.

___

### indexedObject

▸ **indexedObject**(`value`): [`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)

Converts value to IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)

Value if it is an object, empty object otherwise.

___

### indexedObjectOf

▸ **indexedObjectOf**<`T`\>(`value`, `converter`): [`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)<`T`\>

Converts value to IndexedObject\<T\>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `converter` | [`Converter`](../interfaces/converters.Converter.md)<`T`\> | Converter for type T. |

#### Returns

[`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)<`T`\>

Converted object if value is an object, empty object otherwise.

___

### instance

▸ **instance**(): `never`

Not implemented.

#### Returns

`never`

___

### instanceOrFail

▸ **instanceOrFail**<`T`\>(`value`, `ctor`): `T`

Converts value to type T.

**`throws`** ConversionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |

#### Returns

`T`

Value if it is a class instance.

___

### instanceU

▸ **instanceU**<`T`\>(`value`, `ctor`): `T` \| `undefined`

Converts value to type T | undefined.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |

#### Returns

`T` \| `undefined`

Value if it is a class instance, _undefined_ otherwise.

___

### instances

▸ **instances**(): `never`

Not implemented.

#### Returns

`never`

___

### instancesFiltered

▸ **instancesFiltered**<`T`\>(`value`, `ctor`): `T`[]

Converts value to type T[].

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |

#### Returns

`T`[]

Filtered array if value is an array, empty array otherwise.

___

### instancesOrFail

▸ **instancesOrFail**<`T`\>(`value`, `ctor`): readonly `T`[]

Converts value to type T[].

**`throws`** ConversionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |

#### Returns

readonly `T`[]

Value if it is of type T[], empty array if value is empty.

___

### not

▸ **not**(): `never`

Not implemented.

#### Returns

`never`

___

### notEmpty

▸ **notEmpty**<`T`\>(`value`, `defVal`): `Exclude`<`T`, [`empty`](types_core.md#empty)\>

Converts value to non-empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `defVal` | `Exclude`<`T`, [`empty`](types_core.md#empty)\> | Default value. |

#### Returns

`Exclude`<`T`, [`empty`](types_core.md#empty)\>

Value if it is not empty, defVal otherwise.

___

### numStr

▸ **numStr**(`value`): [`NumStr`](types_core.md#numstr)

Converts value to NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`NumStr`](types_core.md#numstr)

Converted value.

___

### numStrU

▸ **numStrU**(`value`): [`NumStrU`](types_core.md#numstru)

Converts value to NumStrU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`NumStrU`](types_core.md#numstru)

Converted value.

___

### number

▸ **number**(`value`, `defVal?`): `number`

Converts value to a number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `unknown` | `undefined` | Value. |
| `defVal` | `number` | `0` | Default value. |

#### Returns

`number`

Converted value, defVal on failure.

___

### numberOrFail

▸ **numberOrFail**(`value`): `number`

Converts value to a number.

**`throws`** ConversionError on failure.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`number`

Converted value.

___

### numberU

▸ **numberU**(`value`): [`numberU`](types_core.md#numberu)

Converts value to numberU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`numberU`](types_core.md#numberu)

Converted value, _undefined_ on failure.

___

### object

▸ **object**(`value`): `object`

Converts value to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`object`

Value if it is an object, empty object otherwise.

___

### string

▸ **string**(`value`): `string`

Converts value to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Converted value.

___

### stringOrFail

▸ **stringOrFail**(`value`): `string`

Converts value to a string.

**`throws`** ConversionError if value is converted to an empty string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Converted value.

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

Converts value to stringU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`stringU`](types_core.md#stringu)

Converted value.

___

### unknown

▸ **unknown**(`value`): `unknown`

Do nothing converter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`unknown`

Value.
