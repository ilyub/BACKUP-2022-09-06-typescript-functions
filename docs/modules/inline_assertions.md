[Typescript functions](../index.md) / [Exports](../modules.md) / inline-assertions

# Module: inline-assertions

## Table of contents

### Variables

- [array](inline_assertions.md#array)
- [indexedObject](inline_assertions.md#indexedobject)
- [map](inline_assertions.md#map)
- [not](inline_assertions.md#not)
- [set](inline_assertions.md#set)

### Functions

- [arrayU](inline_assertions.md#arrayu)
- [arrays](inline_assertions.md#arrays)
- [arraysU](inline_assertions.md#arraysu)
- [boolean](inline_assertions.md#boolean)
- [booleanU](inline_assertions.md#booleanu)
- [booleans](inline_assertions.md#booleans)
- [booleansU](inline_assertions.md#booleansu)
- [byGuard](inline_assertions.md#byguard)
- [callable](inline_assertions.md#callable)
- [empty](inline_assertions.md#empty)
- [enumeration](inline_assertions.md#enumeration)
- [false](inline_assertions.md#false)
- [indexedObjectU](inline_assertions.md#indexedobjectu)
- [indexedObjects](inline_assertions.md#indexedobjects)
- [indexedObjectsU](inline_assertions.md#indexedobjectsu)
- [instance](inline_assertions.md#instance)
- [instances](inline_assertions.md#instances)
- [mapU](inline_assertions.md#mapu)
- [maps](inline_assertions.md#maps)
- [mapsU](inline_assertions.md#mapsu)
- [never](inline_assertions.md#never)
- [null](inline_assertions.md#null)
- [numStr](inline_assertions.md#numstr)
- [numStrU](inline_assertions.md#numstru)
- [numStrs](inline_assertions.md#numstrs)
- [numStrsU](inline_assertions.md#numstrsu)
- [number](inline_assertions.md#number)
- [numberU](inline_assertions.md#numberu)
- [numbers](inline_assertions.md#numbers)
- [numbersU](inline_assertions.md#numbersu)
- [object](inline_assertions.md#object)
- [objectU](inline_assertions.md#objectu)
- [objects](inline_assertions.md#objects)
- [objectsU](inline_assertions.md#objectsu)
- [setU](inline_assertions.md#setu)
- [sets](inline_assertions.md#sets)
- [setsU](inline_assertions.md#setsu)
- [string](inline_assertions.md#string)
- [stringU](inline_assertions.md#stringu)
- [strings](inline_assertions.md#strings)
- [stringsU](inline_assertions.md#stringsu)
- [symbol](inline_assertions.md#symbol)
- [symbolU](inline_assertions.md#symbolu)
- [symbols](inline_assertions.md#symbols)
- [symbolsU](inline_assertions.md#symbolsu)
- [true](inline_assertions.md#true)
- [undefined](inline_assertions.md#undefined)
- [unknown](inline_assertions.md#unknown)
- [unknowns](inline_assertions.md#unknowns)
- [unknownsU](inline_assertions.md#unknownsu)

## Variables

### array

• `Const` **array**: (`value`: `unknown`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => [`unknowns`](types_core.md#unknowns) & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => readonly `T`[]  }\>

___

### indexedObject

• `Const` **indexedObject**: (`value`: `unknown`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => [`IndexedObject`](types_core.md#indexedobject)<`unknown`\> & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => [`IndexedObject`](types_core.md#indexedobject)<`T`\>  }\>

___

### map

• `Const` **map**: (`value`: `unknown`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `ReadonlyMap`<`unknown`, `unknown`\> & `Readonly`<{ `of`: <K, V\>(`value`: `unknown`, `keyGuard`: [`Guard`](../interfaces/guards.Guard.md)<`K`\>, `valueGuard`: [`Guard`](../interfaces/guards.Guard.md)<`V`\>, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `ReadonlyMap`<`K`, `V`\>  }\>

___

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, [`unknowns`](types_core.md#unknowns)\> |
| `boolean` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `boolean`\> |
| `empty` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, [`empty`](types_core.md#empty)\> |
| `false` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, ``false``\> |
| `indexedObject` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>\> |
| `map` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `ReadonlyMap`<`unknown`, `unknown`\>\> |
| `null` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, ``null``\> |
| `numStr` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, [`NumStr`](types_core.md#numstr)\> |
| `number` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `number`\> |
| `object` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `object`\> |
| `set` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `ReadonlySet`<`unknown`\>\> |
| `string` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `string`\> |
| `stringU` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, [`stringU`](types_core.md#stringu)\> |
| `symbol` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `symbol`\> |
| `true` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, ``true``\> |
| `undefined` | <V\>(`value`: `V`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `Exclude`<`V`, `undefined`\> |

___

### set

• `Const` **set**: (`value`: `unknown`, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `ReadonlySet`<`unknown`\> & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>, `error?`: [`ErrorArg`](errors_error_arg.md#errorarg)) => `ReadonlySet`<`T`\>  }\>

## Functions

### arrayU

▸ **arrayU**(`value`, `error?`): `undefined` \| [`unknowns`](types_core.md#unknowns)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| [`unknowns`](types_core.md#unknowns)

___

### arrays

▸ **arrays**(`value`, `error?`): readonly [`unknowns`](types_core.md#unknowns)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly [`unknowns`](types_core.md#unknowns)[]

___

### arraysU

▸ **arraysU**(`value`, `error?`): `undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

___

### boolean

▸ **boolean**(`value`, `error?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`boolean`

___

### booleanU

▸ **booleanU**(`value`, `error?`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `boolean`

___

### booleans

▸ **booleans**(`value`, `error?`): readonly `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `boolean`[]

___

### booleansU

▸ **booleansU**(`value`, `error?`): `undefined` \| readonly `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `boolean`[]

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`, `error?`): `T`

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
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

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
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

___

### empty

▸ **empty**(`value`, `error?`): [`empty`](types_core.md#empty)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

[`empty`](types_core.md#empty)

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
| `vo` | [`ValidationObject`](core.md#validationobject)<`T`\> | Validation object. |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

#### Returns

`T`

Value if value type is T.

___

### false

▸ **false**(`value`, `error?`): ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

``false``

___

### indexedObjectU

▸ **indexedObjectU**(`value`, `error?`): `undefined` \| [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

___

### indexedObjects

▸ **indexedObjects**(`value`, `error?`): readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`, `error?`): `undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

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
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

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
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

#### Returns

readonly `T`[]

Value if value type is T[].

___

### mapU

▸ **mapU**(`value`, `error?`): `undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

___

### maps

▸ **maps**(`value`, `error?`): readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

___

### mapsU

▸ **mapsU**(`value`, `error?`): `undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

___

### never

▸ **never**(`value`, `error?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`never`

___

### null

▸ **null**(`value`, `error?`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

``null``

___

### numStr

▸ **numStr**(`value`, `error?`): [`NumStr`](types_core.md#numstr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

[`NumStr`](types_core.md#numstr)

___

### numStrU

▸ **numStrU**(`value`, `error?`): `undefined` \| [`NumStr`](types_core.md#numstr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| [`NumStr`](types_core.md#numstr)

___

### numStrs

▸ **numStrs**(`value`, `error?`): readonly [`NumStr`](types_core.md#numstr)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly [`NumStr`](types_core.md#numstr)[]

___

### numStrsU

▸ **numStrsU**(`value`, `error?`): `undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

___

### number

▸ **number**(`value`, `error?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`number`

___

### numberU

▸ **numberU**(`value`, `error?`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `number`

___

### numbers

▸ **numbers**(`value`, `error?`): readonly `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `number`[]

___

### numbersU

▸ **numbersU**(`value`, `error?`): `undefined` \| readonly `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `number`[]

___

### object

▸ **object**(`value`, `error?`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`object`

___

### objectU

▸ **objectU**(`value`, `error?`): `undefined` \| `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `object`

___

### objects

▸ **objects**(`value`, `error?`): readonly `object`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `object`[]

___

### objectsU

▸ **objectsU**(`value`, `error?`): `undefined` \| readonly `object`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `object`[]

___

### setU

▸ **setU**(`value`, `error?`): `undefined` \| `ReadonlySet`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `ReadonlySet`<`unknown`\>

___

### sets

▸ **sets**(`value`, `error?`): readonly `ReadonlySet`<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `ReadonlySet`<`unknown`\>[]

___

### setsU

▸ **setsU**(`value`, `error?`): `undefined` \| readonly `ReadonlySet`<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `ReadonlySet`<`unknown`\>[]

___

### string

▸ **string**(`value`, `error?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`string`

___

### stringU

▸ **stringU**(`value`, `error?`): [`stringU`](types_core.md#stringu)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

[`stringU`](types_core.md#stringu)

___

### strings

▸ **strings**(`value`, `error?`): readonly `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `string`[]

___

### stringsU

▸ **stringsU**(`value`, `error?`): `undefined` \| readonly `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `string`[]

___

### symbol

▸ **symbol**(`value`, `error?`): `symbol`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`symbol`

___

### symbolU

▸ **symbolU**(`value`, `error?`): `undefined` \| `symbol`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| `symbol`

___

### symbols

▸ **symbols**(`value`, `error?`): readonly `symbol`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `symbol`[]

___

### symbolsU

▸ **symbolsU**(`value`, `error?`): `undefined` \| readonly `symbol`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `symbol`[]

___

### true

▸ **true**(`value`, `error?`): ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

``true``

___

### undefined

▸ **undefined**(`value`, `error?`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined`

___

### unknown

▸ **unknown**(`value`, `error?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`unknown`

___

### unknowns

▸ **unknowns**(`value`, `error?`): readonly `unknown`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

readonly `unknown`[]

___

### unknownsU

▸ **unknownsU**(`value`, `error?`): `undefined` \| readonly `unknown`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) |

#### Returns

`undefined` \| readonly `unknown`[]
