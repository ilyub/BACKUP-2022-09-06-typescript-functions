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
- [instanceOf](inline_assertions.md#instanceof)
- [instancesOf](inline_assertions.md#instancesof)
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

• `Const` **array**: (`value`: `unknown`) => [`unknowns`](types_core.md#unknowns) & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => readonly `T`[]  }\>

___

### indexedObject

• `Const` **indexedObject**: (`value`: `unknown`) => [`IndexedObject`](types_core.md#indexedobject)<`unknown`\> & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => [`IndexedObject`](types_core.md#indexedobject)<`T`\>  }\>

___

### map

• `Const` **map**: (`value`: `unknown`) => `ReadonlyMap`<`unknown`, `unknown`\> & `Readonly`<{ `of`: <K, V\>(`value`: `unknown`, `keyGuard`: [`Guard`](../interfaces/guards.Guard.md)<`K`\>, `valueGuard`: [`Guard`](../interfaces/guards.Guard.md)<`V`\>) => `ReadonlyMap`<`K`, `V`\>  }\>

___

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | <V\>(`value`: `V`) => `Exclude`<`V`, [`unknowns`](types_core.md#unknowns)\> |
| `boolean` | <V\>(`value`: `V`) => `Exclude`<`V`, `boolean`\> |
| `empty` | <V\>(`value`: `V`) => `Exclude`<`V`, [`empty`](types_core.md#empty)\> |
| `false` | <V\>(`value`: `V`) => `Exclude`<`V`, ``false``\> |
| `indexedObject` | <V\>(`value`: `V`) => `Exclude`<`V`, [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>\> |
| `map` | <V\>(`value`: `V`) => `Exclude`<`V`, `ReadonlyMap`<`unknown`, `unknown`\>\> |
| `null` | <V\>(`value`: `V`) => `Exclude`<`V`, ``null``\> |
| `numStr` | <V\>(`value`: `V`) => `Exclude`<`V`, [`NumStr`](types_core.md#numstr)\> |
| `number` | <V\>(`value`: `V`) => `Exclude`<`V`, `number`\> |
| `object` | <V\>(`value`: `V`) => `Exclude`<`V`, `object`\> |
| `set` | <V\>(`value`: `V`) => `Exclude`<`V`, `ReadonlySet`<`unknown`\>\> |
| `string` | <V\>(`value`: `V`) => `Exclude`<`V`, `string`\> |
| `stringU` | <V\>(`value`: `V`) => `Exclude`<`V`, [`stringU`](types_core.md#stringu)\> |
| `symbol` | <V\>(`value`: `V`) => `Exclude`<`V`, `symbol`\> |
| `true` | <V\>(`value`: `V`) => `Exclude`<`V`, ``true``\> |
| `undefined` | <V\>(`value`: `V`) => `Exclude`<`V`, `undefined`\> |

___

### set

• `Const` **set**: (`value`: `unknown`) => `ReadonlySet`<`unknown`\> & `Readonly`<{ `of`: <T\>(`value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => `ReadonlySet`<`T`\>  }\>

## Functions

### arrayU

▸ **arrayU**(`value`): `undefined` \| [`unknowns`](types_core.md#unknowns)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| [`unknowns`](types_core.md#unknowns)

___

### arrays

▸ **arrays**(`value`): readonly [`unknowns`](types_core.md#unknowns)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly [`unknowns`](types_core.md#unknowns)[]

___

### arraysU

▸ **arraysU**(`value`): `undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

___

### boolean

▸ **boolean**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`boolean`

___

### booleanU

▸ **booleanU**(`value`): `undefined` \| `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `boolean`

___

### booleans

▸ **booleans**(`value`): readonly `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `boolean`[]

___

### booleansU

▸ **booleansU**(`value`): `undefined` \| readonly `boolean`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `boolean`[]

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`): `T`

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

#### Returns

`T`

Value if value type is T.

___

### callable

▸ **callable**<`T`\>(`value`): `T`

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

#### Returns

`T`

Value if value type is T.

___

### empty

▸ **empty**(`value`): [`empty`](types_core.md#empty)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`empty`](types_core.md#empty)

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `vo`): `T`

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

#### Returns

`T`

Value if value type is T.

___

### false

▸ **false**(`value`): ``false``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

``false``

___

### indexedObjectU

▸ **indexedObjectU**(`value`): `undefined` \| [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

___

### indexedObjects

▸ **indexedObjects**(`value`): readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): `undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

___

### instanceOf

▸ **instanceOf**<`T`\>(`value`, `ctor`): `T`

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

#### Returns

`T`

Value if value type is T.

___

### instancesOf

▸ **instancesOf**<`T`\>(`value`, `ctor`): readonly `T`[]

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

#### Returns

readonly `T`[]

Value if value type is T[].

___

### mapU

▸ **mapU**(`value`): `undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

___

### maps

▸ **maps**(`value`): readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

___

### mapsU

▸ **mapsU**(`value`): `undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

___

### never

▸ **never**(`value`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`never`

___

### null

▸ **null**(`value`): ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

``null``

___

### numStr

▸ **numStr**(`value`): [`NumStr`](types_core.md#numstr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`NumStr`](types_core.md#numstr)

___

### numStrU

▸ **numStrU**(`value`): `undefined` \| [`NumStr`](types_core.md#numstr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| [`NumStr`](types_core.md#numstr)

___

### numStrs

▸ **numStrs**(`value`): readonly [`NumStr`](types_core.md#numstr)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly [`NumStr`](types_core.md#numstr)[]

___

### numStrsU

▸ **numStrsU**(`value`): `undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

___

### number

▸ **number**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`number`

___

### numberU

▸ **numberU**(`value`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `number`

___

### numbers

▸ **numbers**(`value`): readonly `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `number`[]

___

### numbersU

▸ **numbersU**(`value`): `undefined` \| readonly `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `number`[]

___

### object

▸ **object**(`value`): `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`object`

___

### objectU

▸ **objectU**(`value`): `undefined` \| `object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `object`

___

### objects

▸ **objects**(`value`): readonly `object`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `object`[]

___

### objectsU

▸ **objectsU**(`value`): `undefined` \| readonly `object`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `object`[]

___

### setU

▸ **setU**(`value`): `undefined` \| `ReadonlySet`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `ReadonlySet`<`unknown`\>

___

### sets

▸ **sets**(`value`): readonly `ReadonlySet`<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `ReadonlySet`<`unknown`\>[]

___

### setsU

▸ **setsU**(`value`): `undefined` \| readonly `ReadonlySet`<`unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `ReadonlySet`<`unknown`\>[]

___

### string

▸ **string**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`string`

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`stringU`](types_core.md#stringu)

___

### strings

▸ **strings**(`value`): readonly `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `string`[]

___

### stringsU

▸ **stringsU**(`value`): `undefined` \| readonly `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `string`[]

___

### symbol

▸ **symbol**(`value`): `symbol`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`symbol`

___

### symbolU

▸ **symbolU**(`value`): `undefined` \| `symbol`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| `symbol`

___

### symbols

▸ **symbols**(`value`): readonly `symbol`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `symbol`[]

___

### symbolsU

▸ **symbolsU**(`value`): `undefined` \| readonly `symbol`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `symbol`[]

___

### true

▸ **true**(`value`): ``true``

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

``true``

___

### undefined

▸ **undefined**(`value`): `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined`

___

### unknown

▸ **unknown**(`value`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`unknown`

___

### unknowns

▸ **unknowns**(`value`): readonly `unknown`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

readonly `unknown`[]

___

### unknownsU

▸ **unknownsU**(`value`): `undefined` \| readonly `unknown`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`undefined` \| readonly `unknown`[]
