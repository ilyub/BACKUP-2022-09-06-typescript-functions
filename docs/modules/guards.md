[Typescript functions](../index.md) / [Exports](../modules.md) / guards

# Module: guards

## Table of contents

### References

- [false](guards.md#false)
- [true](guards.md#true)

### Namespaces

- [and](guards.and.md)
- [array](guards.array.md)
- [indexedObject](guards.indexedObject.md)
- [not](guards.not.md)
- [object](guards.object.md)
- [or](guards.or.md)
- [tuple](guards.tuple.md)

### Interfaces

- [ExclusiveGuard](../interfaces/guards.ExclusiveGuard.md)
- [Guard](../interfaces/guards.Guard.md)
- [MultiArgGuard](../interfaces/guards.MultiArgGuard.md)

### Type aliases

- [Guards](guards.md#guards)

### Functions

- [and](guards.md#and)
- [andFactory](guards.md#andfactory)
- [array](guards.md#array)
- [arrayOf](guards.md#arrayof)
- [arrayU](guards.md#arrayu)
- [arrays](guards.md#arrays)
- [arraysU](guards.md#arraysu)
- [boolean](guards.md#boolean)
- [booleanU](guards.md#booleanu)
- [booleans](guards.md#booleans)
- [booleansU](guards.md#booleansu)
- [callable](guards.md#callable)
- [callableU](guards.md#callableu)
- [empty](guards.md#empty)
- [enumeration](guards.md#enumeration)
- [enumerationU](guards.md#enumerationu)
- [factory](guards.md#factory)
- [falseGuard](guards.md#falseguard)
- [indexedObject](guards.md#indexedobject)
- [indexedObjectOf](guards.md#indexedobjectof)
- [indexedObjectU](guards.md#indexedobjectu)
- [indexedObjects](guards.md#indexedobjects)
- [indexedObjectsU](guards.md#indexedobjectsu)
- [instance](guards.md#instance)
- [instances](guards.md#instances)
- [map](guards.md#map)
- [not](guards.md#not)
- [notFactory](guards.md#notfactory)
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
- [objectOf](guards.md#objectof)
- [objectU](guards.md#objectu)
- [objects](guards.md#objects)
- [objectsU](guards.md#objectsu)
- [or](guards.md#or)
- [orFactory](guards.md#orfactory)
- [set](guards.md#set)
- [string](guards.md#string)
- [stringU](guards.md#stringu)
- [strings](guards.md#strings)
- [stringsU](guards.md#stringsu)
- [symbol](guards.md#symbol)
- [symbols](guards.md#symbols)
- [symbolsU](guards.md#symbolsu)
- [trueGuard](guards.md#trueguard)
- [tuple](guards.md#tuple)
- [tupleFactory](guards.md#tuplefactory)
- [undefined](guards.md#undefined)
- [unknown](guards.md#unknown)
- [unknowns](guards.md#unknowns)

## References

### false

Renames and re-exports [falseGuard](guards.md#falseguard)

___

### true

Renames and re-exports [trueGuard](guards.md#trueguard)

## Type aliases

### Guards

Ƭ **Guards**<`T`\>: { readonly [K in keyof T]: Guard<T[K]\> }

#### Type parameters

| Name |
| :------ |
| `T` |

## Functions

### and

▸ **and**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A & B

Checks that value type is A & B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

value is A & B

_True_ if value type is A & B, _false_ otherwise.

▸ **and**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A & B & C

Checks that value type is A & B & C.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

value is A & B & C

_True_ if value type is A & B & C, _false_ otherwise.

▸ **and**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A & B & C & D

Checks that value type is A & B & C & D.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

value is A & B & C & D

_True_ if value type is A & B & C & D, _false_ otherwise.

___

### andFactory

▸ **andFactory**<`A`, `B`\>(`guard1`, `guard2`): [`Guard`](../interfaces/guards.Guard.md)<`A` & `B`\>

Creates guard for type A & B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` & `B`\>

Guard for type A & B.

▸ **andFactory**<`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C`\>

Creates guard for type A & B & C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C`\>

Guard for type A & B & C.

▸ **andFactory**<`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C` & `D`\>

Creates guard for type A & B & C & D.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C` & `D`\>

Guard for type A & B & C & D.

___

### array

▸ **array**(`value`): value is unknowns

Checks that value is an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is unknowns

_True_ if value is an array, _false_ otherwise.

___

### arrayOf

▸ **arrayOf**<`T`\>(`value`, `guard`): value is readonly T[]

Checks that value type is T[].

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

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.

___

### arrayU

▸ **arrayU**(`value`): value is undefined \| unknowns

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| unknowns

___

### arrays

▸ **arrays**(`value`): value is readonly unknowns[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly unknowns[]

___

### arraysU

▸ **arraysU**(`value`): value is undefined \| readonly unknowns[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly unknowns[]

___

### boolean

▸ **boolean**(`value`): value is boolean

Checks that value is a boolean.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is boolean

_True_ if value is a boolean, _false_ otherwise.

___

### booleanU

▸ **booleanU**(`value`): value is booleanU

Checks that value type is booleanU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is booleanU

_True_ if value type is booleanU, _false_ otherwise.

___

### booleans

▸ **booleans**(`value`): value is readonly boolean[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly boolean[]

___

### booleansU

▸ **booleansU**(`value`): value is undefined \| readonly boolean[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly boolean[]

___

### callable

▸ **callable**<`T`\>(`value`): value is T

Checks that value type is T.

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

### callableU

▸ **callableU**<`T`\>(`value`): value is undefined \| T

Checks that value type is T | undefined.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is undefined \| T

_True_ if value type is T | undefined, _false_ otherwise.

___

### empty

▸ **empty**(`value`): value is empty

Checks that value type is empty.

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

Checks that value type is T.

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

value is T

_True_ if value type is T, _false_ otherwise.

___

### enumerationU

▸ **enumerationU**<`T`\>(`value`, `vo`): value is undefined \| T

Checks that value type is T | undefined.

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

value is undefined \| T

_True_ if value type is T | undefined, _false_ otherwise.

___

### factory

▸ **factory**<`T`, `A`\>(`guard`, ...`args`): [`Guard`](../interfaces/guards.Guard.md)<`T`\>

Creates single-arg guard.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `A` | extends `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`MultiArgGuard`](../interfaces/guards.MultiArgGuard.md)<`T`, `A`\> | Multi-arg guard. |
| `...args` | `A` | Rest arguments. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`T`\>

Single-arg guard.

___

### falseGuard

▸ **falseGuard**(`value`): value is false

Checks that value is _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is false

_True_ if value is _false_, _false_ otherwise.

___

### indexedObject

▸ **indexedObject**(`value`): value is Readonly<IndexedObject<unknown\>\>

Checks that value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is Readonly<IndexedObject<unknown\>\>

_True_ if value type is IndexedObject, _false_ otherwise.

___

### indexedObjectOf

▸ **indexedObjectOf**<`T`\>(`value`, `guard`): value is Readonly<IndexedObject<T\>\>

Checks that value type is IndexedObject\<T\>.

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

value is Readonly<IndexedObject<T\>\>

_True_ if value type is IndexedObject\<T\>, _false_ otherwise.

___

### indexedObjectU

▸ **indexedObjectU**(`value`): value is undefined \| Readonly<IndexedObject<unknown\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| Readonly<IndexedObject<unknown\>\>

___

### indexedObjects

▸ **indexedObjects**(`value`): value is readonly Readonly<IndexedObject<unknown\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly Readonly<IndexedObject<unknown\>\>[]

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): value is undefined \| readonly Readonly<IndexedObject<unknown\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly Readonly<IndexedObject<unknown\>\>[]

___

### instance

▸ **instance**<`T`\>(`value`, `ctor`): value is T

Checks that value type is T.

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

value is T

_True_ if value type is T, _false_ otherwise.

___

### instances

▸ **instances**<`T`\>(`value`, `ctor`): value is readonly T[]

Checks that value type is T[].

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

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.

___

### map

▸ **map**<`K`, `V`\>(`value`, `keyGuard`, `valueGuard`): value is ReadonlyMap<K, V\>

Checks that value type is Map\<K, V\>.

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `keyGuard` | [`Guard`](../interfaces/guards.Guard.md)<`K`\> | Key guard. |
| `valueGuard` | [`Guard`](../interfaces/guards.Guard.md)<`V`\> | Value guard. |

#### Returns

value is ReadonlyMap<K, V\>

_True_ if value type is Map\<K, V\>, _false_ otherwise.

___

### not

▸ **not**<`T`, `V`\>(`value`, `guard`): value is Exclude<V, T\>

Checks that value type is not T.

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

### notFactory

▸ **notFactory**<`T`\>(`guard`): [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`T`\>

Creates guard for not T type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

[`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`T`\>

Guard for not T type.

___

### null

▸ **null**(`value`): value is null

Checks that value is _null_.

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

Checks that value type is NumStr.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is NumStr

_True_ if value type is NumStr, _false_ otherwise.

___

### numStrU

▸ **numStrU**(`value`): value is NumStrU

Checks that value type is NumStrU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is NumStrU

_True_ if value type is NumStrU, _false_ otherwise.

___

### numStrs

▸ **numStrs**(`value`): value is readonly NumStr[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly NumStr[]

___

### numStrsU

▸ **numStrsU**(`value`): value is undefined \| readonly NumStr[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly NumStr[]

___

### number

▸ **number**(`value`): value is number

Checks that value is a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is number

_True_ if value is a number, _false_ otherwise.

___

### numberU

▸ **numberU**(`value`): value is numberU

Checks that value type is numberU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is numberU

_True_ if value type is numberU, _false_ otherwise.

___

### numbers

▸ **numbers**(`value`): value is readonly number[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly number[]

___

### numbersU

▸ **numbersU**(`value`): value is undefined \| readonly number[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly number[]

___

### object

▸ **object**(`value`): value is object

Checks that value is an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is object

_True_ if value is an object, _false_ otherwise.

___

### objectOf

▸ **objectOf**<`A`, `B`\>(`value`, `requiredGuards`, `optionalGuards`): value is Partial<B\> & Required<A\>

Checks that value type is T.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `requiredGuards` | [`Guards`](guards.md#guards)<`A`\> | Guards for required properties. |
| `optionalGuards` | [`Guards`](guards.md#guards)<`B`\> | Guards for optional properties. |

#### Returns

value is Partial<B\> & Required<A\>

_True_ if value type is T, _false_ otherwise.

___

### objectU

▸ **objectU**(`value`): value is objectU

Checks that value type is objectU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is objectU

_True_ if value type is objectU, _false_ otherwise.

___

### objects

▸ **objects**(`value`): value is readonly object[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly object[]

___

### objectsU

▸ **objectsU**(`value`): value is undefined \| readonly object[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly object[]

___

### or

▸ **or**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is A \| B

Checks that value type is A | B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

value is A \| B

_True_ if value type is A | B, _false_ otherwise.

▸ **or**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A \| B \| C

Checks that value type is A | B | C.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

value is A \| B \| C

_True_ if value type is A | B | C, _false_ otherwise.

▸ **or**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A \| B \| C \| D

Checks that value type is A | B | C | D.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

value is A \| B \| C \| D

_True_ if value type is A | B | C | D, _false_ otherwise.

___

### orFactory

▸ **orFactory**<`A`, `B`\>(`guard1`, `guard2`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\>

Creates guard for type A | B.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\>

Guard for type A | B.

▸ **orFactory**<`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\>

Creates guard for type A | B | C.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\>

Guard for type A | B | C.

▸ **orFactory**<`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\>

Creates guard for type A | B | C | D.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\>

Guard for type A | B | C | D.

___

### set

▸ **set**<`T`\>(`value`, `guard`): value is ReadonlySet<T\>

Checks that value type is Set<T>.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard. |

#### Returns

value is ReadonlySet<T\>

_True_ if value type is Set<T>, _false_ otherwise.

___

### string

▸ **string**(`value`): value is string

Checks that value is a string.

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

Checks that value type is stringU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is stringU

_True_ if value type is stringU, _false_ otherwise.

___

### strings

▸ **strings**(`value`): value is readonly string[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly string[]

___

### stringsU

▸ **stringsU**(`value`): value is undefined \| readonly string[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly string[]

___

### symbol

▸ **symbol**(`value`): value is symbol

Checks that value is a symbol.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is symbol

_True_ if value is a symbol, _false_ otherwise.

___

### symbols

▸ **symbols**(`value`): value is readonly symbol[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly symbol[]

___

### symbolsU

▸ **symbolsU**(`value`): value is undefined \| readonly symbol[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly symbol[]

___

### trueGuard

▸ **trueGuard**(`value`): value is true

Checks that value is _true_.

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

Checks that value type is [A].

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard . |

#### Returns

value is readonly [A]

_True_ if value type is [A], _false_ otherwise.

▸ **tuple**<`A`, `B`\>(`value`, `guard1`, `guard2`): value is readonly [A, B]

Checks that value type is [A, B].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

value is readonly [A, B]

_True_ if value type is [A, B], _false_ otherwise.

▸ **tuple**<`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is readonly [A, B, C]

Checks that value type is [A, B, C].

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

value is readonly [A, B, C]

_True_ if value type is [A, B, C], _false_ otherwise.

▸ **tuple**<`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is readonly [A, B, C, D]

Checks that value type is [A, B, C, D].

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

value is readonly [A, B, C, D]

_True_ if value type is [A, B, C, D], _false_ otherwise.

___

### tupleFactory

▸ **tupleFactory**<`A`\>(`guard`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\>

Creates guard for type [A].

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\>

Guard for type [A].

▸ **tupleFactory**<`A`, `B`\>(`guard1`, `guard2`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\>

Creates guard for type [A, B].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\>

Guard for type [A, B].

▸ **tupleFactory**<`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\>

Creates guard for type [A, B, C].

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\>

Guard for type [A, B, C].

▸ **tupleFactory**<`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\>

Creates guard for type [A, B, C, D].

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\>

Guard for type [A, B, C, D].

___

### undefined

▸ **undefined**(`value`): value is undefined

Checks that value is _undefined_.

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

Checks that value is _unknown_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_value` | `unknown` | Value. |

#### Returns

\_value is unknown

_True_ if value is _unknown_, _false_ otherwise.

___

### unknowns

▸ **unknowns**(`value`): value is readonly unknown[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly unknown[]
