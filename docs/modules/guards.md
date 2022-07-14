[Typescript functions](../index.md) / [Exports](../modules.md) / guards

# Module: guards

## Table of contents

### Interfaces

- [ExclusionGuard](../interfaces/guards.ExclusionGuard.md)
- [Guard](../interfaces/guards.Guard.md)
- [MultiArgGuard](../interfaces/guards.MultiArgGuard.md)

### Type Aliases

- [Guards](guards.md#guards)
- [GuardsRecord](guards.md#guardsrecord)

### Functions

- [and](guards.md#and)
- [array](guards.md#array)
- [arrayU](guards.md#arrayu)
- [arrays](guards.md#arrays)
- [arraysU](guards.md#arraysu)
- [boolean](guards.md#boolean)
- [booleanU](guards.md#booleanu)
- [booleans](guards.md#booleans)
- [booleansU](guards.md#booleansu)
- [callable](guards.md#callable)
- [empty](guards.md#empty)
- [enumeration](guards.md#enumeration)
- [factory](guards.md#factory)
- [false](guards.md#false)
- [indexedObject](guards.md#indexedobject)
- [indexedObjectU](guards.md#indexedobjectu)
- [indexedObjects](guards.md#indexedobjects)
- [indexedObjectsU](guards.md#indexedobjectsu)
- [instanceOf](guards.md#instanceof)
- [instancesOf](guards.md#instancesof)
- [map](guards.md#map)
- [mapU](guards.md#mapu)
- [maps](guards.md#maps)
- [mapsU](guards.md#mapsu)
- [never](guards.md#never)
- [not](guards.md#not)
- [null](guards.md#null)
- [numStr](guards.md#numstr)
- [numStrU](guards.md#numstru)
- [numStrs](guards.md#numstrs)
- [numStrsU](guards.md#numstrsu)
- [number](guards.md#number)
- [numberU](guards.md#numberu)
- [numbers](guards.md#numbers)
- [numbersU](guards.md#numbersu)
- [object](guards.md#object)
- [objectU](guards.md#objectu)
- [objects](guards.md#objects)
- [objectsU](guards.md#objectsu)
- [or](guards.md#or)
- [set](guards.md#set)
- [setU](guards.md#setu)
- [sets](guards.md#sets)
- [setsU](guards.md#setsu)
- [string](guards.md#string)
- [stringU](guards.md#stringu)
- [strings](guards.md#strings)
- [stringsU](guards.md#stringsu)
- [symbol](guards.md#symbol)
- [symbolU](guards.md#symbolu)
- [symbols](guards.md#symbols)
- [symbolsU](guards.md#symbolsu)
- [true](guards.md#true)
- [tuple](guards.md#tuple)
- [undefined](guards.md#undefined)
- [unknown](guards.md#unknown)
- [unknowns](guards.md#unknowns)
- [unknownsU](guards.md#unknownsu)

## Type Aliases

### Guards

Ƭ **Guards**: readonly [`Guard`](../interfaces/guards.Guard.md)[]

___

### GuardsRecord

Ƭ **GuardsRecord**<`T`, `K`\>: { readonly [L in K]-?: Guard<T[L]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Functions

### and

▸ **and**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A & B

Checks if value type is A & B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

#### Returns

value is A & B

_True_ if value type is A & B, _false_ otherwise.

▸ **and**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A & B & C

Checks if value type is A & B & C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

#### Returns

value is A & B & C

_True_ if value type is A & B & C, _false_ otherwise.

▸ **and**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A & B & C & D

Checks if value type is A & B & C & D.

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

#### Returns

value is A & B & C & D

_True_ if value type is A & B & C & D, _false_ otherwise.

___

### array

▸ **array**(`value`): value is unknowns

Checks if value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is unknowns

_True_ if value is an array, _false_ otherwise.

___

### arrayU

▸ **arrayU**(`value`): value is undefined \| unknowns

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| unknowns

_True_ if value type is T, _false_ otherwise.

___

### arrays

▸ **arrays**(`value`): value is readonly unknowns[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly unknowns[]

_True_ if value type is T, _false_ otherwise.

___

### arraysU

▸ **arraysU**(`value`): value is undefined \| readonly unknowns[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly unknowns[]

_True_ if value type is T, _false_ otherwise.

___

### boolean

▸ **boolean**(`value`): value is boolean

Checks if value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is boolean

_True_ if value is a boolean, _false_ otherwise.

___

### booleanU

▸ **booleanU**(`value`): value is undefined \| boolean

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| boolean

_True_ if value type is T, _false_ otherwise.

___

### booleans

▸ **booleans**(`value`): value is readonly boolean[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly boolean[]

_True_ if value type is T, _false_ otherwise.

___

### booleansU

▸ **booleansU**(`value`): value is undefined \| readonly boolean[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly boolean[]

_True_ if value type is T, _false_ otherwise.

___

### callable

▸ **callable**<`T`\>(`value`): value is T

Checks if value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### empty

▸ **empty**(`value`): value is empty

Checks if value type is empty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is empty

_True_ if value type is empty, _false_ otherwise.

___

### enumeration

▸ **enumeration**<`T`\>(`value`, `vo`): value is T

Checks if value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `vo` | [`IndexedObject`](types_core.md#indexedobject)<`T`\> | Validation object. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### factory

▸ **factory**<`T`, `A`\>(`guard`, ...`args`): [`Guard`](../interfaces/guards.Guard.md)<`T`\>

Creates single-arg guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends readonly `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`MultiArgGuard`](../interfaces/guards.MultiArgGuard.md)<`T`, `A`\> | Multi-arg guard. |
| `...args` | `A` | Arguments. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`T`\>

Single-arg guard.

___

### false

▸ **false**(`value`): value is false

Checks if value is _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is false

_True_ if value is _false_, _false_ otherwise.

___

### indexedObject

▸ **indexedObject**(`value`): value is IndexedObject<unknown\>

Checks if value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is IndexedObject<unknown\>

_True_ if value type is IndexedObject, _false_ otherwise.

___

### indexedObjectU

▸ **indexedObjectU**(`value`): value is undefined \| IndexedObject<unknown\>

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| IndexedObject<unknown\>

_True_ if value type is T, _false_ otherwise.

___

### indexedObjects

▸ **indexedObjects**(`value`): value is readonly IndexedObject<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly IndexedObject<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): value is undefined \| readonly IndexedObject<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly IndexedObject<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### instanceOf

▸ **instanceOf**<`T`\>(`value`, `ctor`): value is T

Checks if value type is T.

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

value is T

_True_ if value type is T, _false_ otherwise.

___

### instancesOf

▸ **instancesOf**<`T`\>(`value`, `ctor`): value is readonly T[]

Checks if value type is T[].

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

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.

___

### map

▸ **map**(`value`): value is ReadonlyMap<unknown, unknown\>

Checks if value type is Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlyMap<unknown, unknown\>

_True_ if value type is Map, _false_ otherwise.

___

### mapU

▸ **mapU**(`value`): value is undefined \| ReadonlyMap<unknown, unknown\>

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| ReadonlyMap<unknown, unknown\>

_True_ if value type is T, _false_ otherwise.

___

### maps

▸ **maps**(`value`): value is readonly ReadonlyMap<unknown, unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly ReadonlyMap<unknown, unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### mapsU

▸ **mapsU**(`value`): value is undefined \| readonly ReadonlyMap<unknown, unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly ReadonlyMap<unknown, unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### never

▸ **never**(`_value`): \_value is never

Checks if value is _never_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_value` | `unknown` | Value. |

#### Returns

\_value is never

_False_.

___

### not

▸ **not**<`T`, `V`\>(`value`, `guard`): value is Exclude<V, T\>

Checks if value type is not T.

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

value is Exclude<V, T\>

_True_ if value type is not T, _false_ otherwise.

___

### null

▸ **null**(`value`): value is null

Checks if value is _null_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is null

_True_ if value is _null_, _false_ otherwise.

___

### numStr

▸ **numStr**(`value`): value is NumStr

Checks if value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is NumStr

_True_ if value type is NumStr, _false_ otherwise.

___

### numStrU

▸ **numStrU**(`value`): value is undefined \| NumStr

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| NumStr

_True_ if value type is T, _false_ otherwise.

___

### numStrs

▸ **numStrs**(`value`): value is readonly NumStr[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly NumStr[]

_True_ if value type is T, _false_ otherwise.

___

### numStrsU

▸ **numStrsU**(`value`): value is undefined \| readonly NumStr[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly NumStr[]

_True_ if value type is T, _false_ otherwise.

___

### number

▸ **number**(`value`): value is number

Checks if value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is number

_True_ if value is a number, _false_ otherwise.

___

### numberU

▸ **numberU**(`value`): value is undefined \| number

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| number

_True_ if value type is T, _false_ otherwise.

___

### numbers

▸ **numbers**(`value`): value is readonly number[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly number[]

_True_ if value type is T, _false_ otherwise.

___

### numbersU

▸ **numbersU**(`value`): value is undefined \| readonly number[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly number[]

_True_ if value type is T, _false_ otherwise.

___

### object

▸ **object**(`value`): value is object

Checks if value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is object

_True_ if value is an object, _false_ otherwise.

___

### objectU

▸ **objectU**(`value`): value is undefined \| object

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| object

_True_ if value type is T, _false_ otherwise.

___

### objects

▸ **objects**(`value`): value is readonly object[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly object[]

_True_ if value type is T, _false_ otherwise.

___

### objectsU

▸ **objectsU**(`value`): value is undefined \| readonly object[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly object[]

_True_ if value type is T, _false_ otherwise.

___

### or

▸ **or**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A \| B

Checks if value type is A | B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

#### Returns

value is A \| B

_True_ if value type is A | B, _false_ otherwise.

▸ **or**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A \| B \| C

Checks if value type is A | B | C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

#### Returns

value is A \| B \| C

_True_ if value type is A | B | C, _false_ otherwise.

▸ **or**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A \| B \| C \| D

Checks if value type is A | B | C | D.

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

#### Returns

value is A \| B \| C \| D

_True_ if value type is A | B | C | D, _false_ otherwise.

___

### set

▸ **set**(`value`): value is ReadonlySet<unknown\>

Checks if value type is Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlySet<unknown\>

_True_ if value type is Set, _false_ otherwise.

___

### setU

▸ **setU**(`value`): value is undefined \| ReadonlySet<unknown\>

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| ReadonlySet<unknown\>

_True_ if value type is T, _false_ otherwise.

___

### sets

▸ **sets**(`value`): value is readonly ReadonlySet<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly ReadonlySet<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### setsU

▸ **setsU**(`value`): value is undefined \| readonly ReadonlySet<unknown\>[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly ReadonlySet<unknown\>[]

_True_ if value type is T, _false_ otherwise.

___

### string

▸ **string**(`value`): value is string

Checks if value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is string

_True_ if value is a string, _false_ otherwise.

___

### stringU

▸ **stringU**(`value`): value is stringU

Checks if value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is stringU

_True_ if value is a string, _false_ otherwise.

___

### strings

▸ **strings**(`value`): value is readonly string[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly string[]

_True_ if value type is T, _false_ otherwise.

___

### stringsU

▸ **stringsU**(`value`): value is undefined \| readonly string[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly string[]

_True_ if value type is T, _false_ otherwise.

___

### symbol

▸ **symbol**(`value`): value is symbol

Checks if value is a symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is symbol

_True_ if value is a symbol, _false_ otherwise.

___

### symbolU

▸ **symbolU**(`value`): value is undefined \| symbol

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| symbol

_True_ if value type is T, _false_ otherwise.

___

### symbols

▸ **symbols**(`value`): value is readonly symbol[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly symbol[]

_True_ if value type is T, _false_ otherwise.

___

### symbolsU

▸ **symbolsU**(`value`): value is undefined \| readonly symbol[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly symbol[]

_True_ if value type is T, _false_ otherwise.

___

### true

▸ **true**(`value`): value is true

Checks if value is _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is true

_True_ if value is _true_, _false_ otherwise.

___

### tuple

▸ **tuple**<`A`\>(`value`, `guard`): value is readonly [A]

Checks if value type is [A].

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |

#### Returns

value is readonly [A]

_True_ if value type is [A], _false_ otherwise.

▸ **tuple**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is readonly [A, B]

Checks if value type is [A, B].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

#### Returns

value is readonly [A, B]

_True_ if value type is [A, B], _false_ otherwise.

▸ **tuple**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is readonly [A, B, C]

Checks if value type is [A, B, C].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

#### Returns

value is readonly [A, B, C]

_True_ if value type is [A, B, C], _false_ otherwise.

▸ **tuple**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is readonly [A, B, C, D]

Checks if value type is [A, B, C, D].

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
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

#### Returns

value is readonly [A, B, C, D]

_True_ if value type is [A, B, C, D], _false_ otherwise.

___

### undefined

▸ **undefined**(`value`): value is undefined

Checks if value is _undefined_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined

_True_ if value is _undefined_, _false_ otherwise.

___

### unknown

▸ **unknown**(`_value`): \_value is unknown

Checks if value is _unknown_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_value` | `unknown` | Value. |

#### Returns

\_value is unknown

_True_.

___

### unknowns

▸ **unknowns**(`value`): value is readonly unknown[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is readonly unknown[]

_True_ if value type is T, _false_ otherwise.

___

### unknownsU

▸ **unknownsU**(`value`): value is undefined \| readonly unknown[]

Checks if value type is T.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| readonly unknown[]

_True_ if value type is T, _false_ otherwise.
