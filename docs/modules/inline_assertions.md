[Typescript functions](../index.md) / [Exports](../modules.md) / inline-assertions

# Module: inline-assertions

## Table of contents

### Interfaces

- [ExclusionInlineAssertion](../interfaces/inline_assertions.ExclusionInlineAssertion.md)
- [InlineAssertion](../interfaces/inline_assertions.InlineAssertion.md)

### Variables

- [not](inline_assertions.md#not)

### Functions

- [array](inline_assertions.md#array)
- [arrayU](inline_assertions.md#arrayu)
- [arrays](inline_assertions.md#arrays)
- [arraysU](inline_assertions.md#arraysu)
- [boolean](inline_assertions.md#boolean)
- [booleanU](inline_assertions.md#booleanu)
- [booleans](inline_assertions.md#booleans)
- [booleansU](inline_assertions.md#booleansu)
- [byGuard](inline_assertions.md#byguard)
- [callable](inline_assertions.md#callable)
- [constructor](inline_assertions.md#constructor)
- [empty](inline_assertions.md#empty)
- [enumeration](inline_assertions.md#enumeration)
- [false](inline_assertions.md#false)
- [indexedObject](inline_assertions.md#indexedobject)
- [indexedObjects](inline_assertions.md#indexedobjects)
- [indexedObjectsU](inline_assertions.md#indexedobjectsu)
- [instanceOf](inline_assertions.md#instanceof)
- [instancesOf](inline_assertions.md#instancesof)
- [map](inline_assertions.md#map)
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
- [propertyKey](inline_assertions.md#propertykey)
- [propertyKeyU](inline_assertions.md#propertykeyu)
- [propertyKeys](inline_assertions.md#propertykeys)
- [propertyKeysU](inline_assertions.md#propertykeysu)
- [set](inline_assertions.md#set)
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

### not

• `Const` **not**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `array` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<[`unknowns`](types_core.md#unknowns)\> |
| `boolean` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`boolean`\> |
| `empty` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<[`empty`](types_core.md#empty)\> |
| `false` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<``false``\> |
| `indexedObject` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<[`IndexedObject`](types_core.md#indexedobject)<`unknown`\>\> |
| `map` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`ReadonlyMap`<`unknown`, `unknown`\>\> |
| `null` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<``null``\> |
| `numStr` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<[`NumStr`](types_core.md#numstr)\> |
| `number` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`number`\> |
| `object` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`object`\> |
| `propertyKey` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`PropertyKey`\> |
| `set` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`ReadonlySet`<`unknown`\>\> |
| `string` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`string`\> |
| `stringU` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<[`stringU`](types_core.md#stringu)\> |
| `symbol` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`symbol`\> |
| `true` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<``true``\> |
| `undefined` | [`ExclusionInlineAssertion`](../interfaces/inline_assertions.ExclusionInlineAssertion.md)<`undefined`\> |

## Functions

### array

▸ **array**(`value`): [`unknowns`](types_core.md#unknowns)

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`unknowns`](types_core.md#unknowns)

Value if its type is T.

___

### arrayU

▸ **arrayU**(`value`): `undefined` \| [`unknowns`](types_core.md#unknowns)

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| [`unknowns`](types_core.md#unknowns)

Value if its type is T.

___

### arrays

▸ **arrays**(`value`): readonly [`unknowns`](types_core.md#unknowns)[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`unknowns`](types_core.md#unknowns)[]

Value if its type is T.

___

### arraysU

▸ **arraysU**(`value`): `undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`unknowns`](types_core.md#unknowns)[]

Value if its type is T.

___

### boolean

▸ **boolean**(`value`): `boolean`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`boolean`

Value if its type is T.

___

### booleanU

▸ **booleanU**(`value`): `undefined` \| `boolean`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `boolean`

Value if its type is T.

___

### booleans

▸ **booleans**(`value`): readonly `boolean`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `boolean`[]

Value if its type is T.

___

### booleansU

▸ **booleansU**(`value`): `undefined` \| readonly `boolean`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `boolean`[]

Value if its type is T.

___

### byGuard

▸ **byGuard**<`T`\>(`value`, `guard`): `T`

Asserts that value type is T.

**`Throws`**

Error otherwise.

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

**`Throws`**

Error otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](../interfaces/types_function.Callable.md)<`unknown`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`T`

Value if value type is T.

___

### constructor

▸ **constructor**<`T`\>(`value`): `T`

Asserts that value type is T.

**`Throws`**

Error otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](../interfaces/types_function.Constructor.md)<`unknown`, `T`\> |

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

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`empty`](types_core.md#empty)

Value if its type is T.

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `en`): `T`

Asserts that value type is T.

**`Throws`**

Error otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `en` | [`IndexedObject`](types_core.md#indexedobject)<`T`\> | Validation object. |

#### Returns

`T`

Value if value type is T.

___

### false

▸ **false**(`value`): ``false``

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``false``

Value if its type is T.

___

### indexedObject

▸ **indexedObject**(`value`): [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`IndexedObject`](types_core.md#indexedobject)<`unknown`\>

Value if its type is T.

___

### indexedObjects

▸ **indexedObjects**(`value`): readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

Value if its type is T.

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): `undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`IndexedObject`](types_core.md#indexedobject)<`unknown`\>[]

Value if its type is T.

___

### instanceOf

▸ **instanceOf**<`T`\>(`value`, `ctor`): `T`

Asserts that value type is T.

**`Throws`**

Error otherwise.

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

**`Throws`**

Error otherwise.

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

### map

▸ **map**(`value`): `ReadonlyMap`<`unknown`, `unknown`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`ReadonlyMap`<`unknown`, `unknown`\>

Value if its type is T.

___

### mapU

▸ **mapU**(`value`): `undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `ReadonlyMap`<`unknown`, `unknown`\>

Value if its type is T.

___

### maps

▸ **maps**(`value`): readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

Value if its type is T.

___

### mapsU

▸ **mapsU**(`value`): `undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `ReadonlyMap`<`unknown`, `unknown`\>[]

Value if its type is T.

___

### never

▸ **never**(`value`): `never`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`never`

Value if its type is T.

___

### null

▸ **null**(`value`): ``null``

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``null``

Value if its type is T.

___

### numStr

▸ **numStr**(`value`): [`NumStr`](types_core.md#numstr)

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`NumStr`](types_core.md#numstr)

Value if its type is T.

___

### numStrU

▸ **numStrU**(`value`): `undefined` \| [`NumStr`](types_core.md#numstr)

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| [`NumStr`](types_core.md#numstr)

Value if its type is T.

___

### numStrs

▸ **numStrs**(`value`): readonly [`NumStr`](types_core.md#numstr)[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly [`NumStr`](types_core.md#numstr)[]

Value if its type is T.

___

### numStrsU

▸ **numStrsU**(`value`): `undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly [`NumStr`](types_core.md#numstr)[]

Value if its type is T.

___

### number

▸ **number**(`value`): `number`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`number`

Value if its type is T.

___

### numberU

▸ **numberU**(`value`): `undefined` \| `number`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `number`

Value if its type is T.

___

### numbers

▸ **numbers**(`value`): readonly `number`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `number`[]

Value if its type is T.

___

### numbersU

▸ **numbersU**(`value`): `undefined` \| readonly `number`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `number`[]

Value if its type is T.

___

### object

▸ **object**(`value`): `object`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`object`

Value if its type is T.

___

### objectU

▸ **objectU**(`value`): `undefined` \| `object`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `object`

Value if its type is T.

___

### objects

▸ **objects**(`value`): readonly `object`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `object`[]

Value if its type is T.

___

### objectsU

▸ **objectsU**(`value`): `undefined` \| readonly `object`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `object`[]

Value if its type is T.

___

### propertyKey

▸ **propertyKey**(`value`): `PropertyKey`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`PropertyKey`

Value if its type is T.

___

### propertyKeyU

▸ **propertyKeyU**(`value`): `undefined` \| `PropertyKey`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `PropertyKey`

Value if its type is T.

___

### propertyKeys

▸ **propertyKeys**(`value`): readonly `PropertyKey`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `PropertyKey`[]

Value if its type is T.

___

### propertyKeysU

▸ **propertyKeysU**(`value`): `undefined` \| `PropertyKey`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `PropertyKey`

Value if its type is T.

___

### set

▸ **set**(`value`): `ReadonlySet`<`unknown`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`ReadonlySet`<`unknown`\>

Value if its type is T.

___

### setU

▸ **setU**(`value`): `undefined` \| `ReadonlySet`<`unknown`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `ReadonlySet`<`unknown`\>

Value if its type is T.

___

### sets

▸ **sets**(`value`): readonly `ReadonlySet`<`unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `ReadonlySet`<`unknown`\>[]

Value if its type is T.

___

### setsU

▸ **setsU**(`value`): `undefined` \| readonly `ReadonlySet`<`unknown`\>[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `ReadonlySet`<`unknown`\>[]

Value if its type is T.

___

### string

▸ **string**(`value`): `string`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Value if its type is T.

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`stringU`](types_core.md#stringu)

Value if its type is T.

___

### strings

▸ **strings**(`value`): readonly `string`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `string`[]

Value if its type is T.

___

### stringsU

▸ **stringsU**(`value`): `undefined` \| readonly `string`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `string`[]

Value if its type is T.

___

### symbol

▸ **symbol**(`value`): `symbol`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`symbol`

Value if its type is T.

___

### symbolU

▸ **symbolU**(`value`): `undefined` \| `symbol`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| `symbol`

Value if its type is T.

___

### symbols

▸ **symbols**(`value`): readonly `symbol`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `symbol`[]

Value if its type is T.

___

### symbolsU

▸ **symbolsU**(`value`): `undefined` \| readonly `symbol`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `symbol`[]

Value if its type is T.

___

### true

▸ **true**(`value`): ``true``

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

``true``

Value if its type is T.

___

### undefined

▸ **undefined**(`value`): `undefined`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined`

Value if its type is T.

___

### unknown

▸ **unknown**(`value`): `unknown`

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`unknown`

Value if its type is T.

___

### unknowns

▸ **unknowns**(`value`): readonly `unknown`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

readonly `unknown`[]

Value if its type is T.

___

### unknownsU

▸ **unknownsU**(`value`): `undefined` \| readonly `unknown`[]

Asserts value type.

**`Throws`**

Error otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`undefined` \| readonly `unknown`[]

Value if its type is T.
