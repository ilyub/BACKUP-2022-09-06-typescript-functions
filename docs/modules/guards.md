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
- [map](guards.map.md)
- [not](guards.not.md)
- [object](guards.object.md)
- [objectOf](guards.objectOf.md)
- [or](guards.or.md)
- [set](guards.set.md)
- [tuple](guards.tuple.md)

### Interfaces

- [ExclusionGuard](../interfaces/guards.ExclusionGuard.md)
- [Guard](../interfaces/guards.Guard.md)
- [MultiArgGuard](../interfaces/guards.MultiArgGuard.md)

### Type aliases

- [Guards](guards.md#guards)
- [ObjectOfReturn](guards.md#objectofreturn)

### Functions

- [\_false](guards.md#_false)
- [\_true](guards.md#_true)
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
- [empty](guards.md#empty)
- [enumeration](guards.md#enumeration)
- [factory](guards.md#factory)
- [indexedObject](guards.md#indexedobject)
- [indexedObjectOf](guards.md#indexedobjectof)
- [indexedObjectU](guards.md#indexedobjectu)
- [indexedObjects](guards.md#indexedobjects)
- [indexedObjectsU](guards.md#indexedobjectsu)
- [instance](guards.md#instance)
- [instances](guards.md#instances)
- [map](guards.md#map)
- [mapOf](guards.md#mapof)
- [mapU](guards.md#mapu)
- [maps](guards.md#maps)
- [mapsU](guards.md#mapsu)
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
- [objectOfFactory](guards.md#objectoffactory)
- [objectU](guards.md#objectu)
- [objects](guards.md#objects)
- [objectsU](guards.md#objectsu)
- [or](guards.md#or)
- [orFactory](guards.md#orfactory)
- [set](guards.md#set)
- [setOf](guards.md#setof)
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
- [tuple](guards.md#tuple)
- [tupleFactory](guards.md#tuplefactory)
- [undefined](guards.md#undefined)
- [unknown](guards.md#unknown)
- [unknowns](guards.md#unknowns)
- [unknownsU](guards.md#unknownsu)

## References

### false

Renames and re-exports [_false](guards.md#_false)

___

### true

Renames and re-exports [_true](guards.md#_true)

## Type aliases

### Guards

Ƭ **Guards**<`T`, `K`\>: { readonly [L in K]-?: Guard<T[L]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

___

### ObjectOfReturn

Ƭ **ObjectOfReturn**<`R`, `O`\>: [`OptionalPropertiesToOptional`](types_object.md#optionalpropertiestooptional)<`Partial`<`O`\>\> & [`OptionalPropertiesToUndefined`](types_object.md#optionalpropertiestoundefined)<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

## Functions

### \_false

▸ **_false**(`value`): value is false

Checks that value is _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is false

_True_ if value is _false_, _false_ otherwise.

___

### \_true

▸ **_true**(`value`): value is true

Checks that value is _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is true

_True_ if value is _true_, _false_ otherwise.

___

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

▸ **booleanU**(`value`): value is undefined \| boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| boolean

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
| `vo` | [`ValidationObject`](helpers.md#validationobject)<`T`\> | Validation object. |

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
| `A` | extends `unknown`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`MultiArgGuard`](../interfaces/guards.MultiArgGuard.md)<`T`, `A`\> | Multi-arg guard. |
| `...args` | `A` | Arguments. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`T`\>

Single-arg guard.

___

### indexedObject

▸ **indexedObject**(`value`): value is Readonly<TypedObject<PropertyKey, unknown\>\>

Checks that value type is IndexedObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is Readonly<TypedObject<PropertyKey, unknown\>\>

_True_ if value type is IndexedObject, _false_ otherwise.

___

### indexedObjectOf

▸ **indexedObjectOf**<`T`\>(`value`, `guard`): value is Readonly<TypedObject<PropertyKey, T\>\>

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

value is Readonly<TypedObject<PropertyKey, T\>\>

_True_ if value type is IndexedObject\<T\>, _false_ otherwise.

___

### indexedObjectU

▸ **indexedObjectU**(`value`): value is undefined \| Readonly<TypedObject<PropertyKey, unknown\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| Readonly<TypedObject<PropertyKey, unknown\>\>

___

### indexedObjects

▸ **indexedObjects**(`value`): value is readonly Readonly<TypedObject<PropertyKey, unknown\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly Readonly<TypedObject<PropertyKey, unknown\>\>[]

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): value is undefined \| readonly Readonly<TypedObject<PropertyKey, unknown\>\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly Readonly<TypedObject<PropertyKey, unknown\>\>[]

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
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |

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
| `ctor` | [`Constructor`](../interfaces/types_function.Constructor.md)<`T`\> | Constructor. |

#### Returns

value is readonly T[]

_True_ if value type is T[], _false_ otherwise.

___

### map

▸ **map**(`value`): value is ReadonlyMap<unknown, unknown\>

Checks that value type is Map.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlyMap<unknown, unknown\>

_True_ if value type is Map, _false_ otherwise.

___

### mapOf

▸ **mapOf**<`K`, `V`\>(`value`, `keyGuard`, `valueGuard`): value is ReadonlyMap<K, V\>

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

### mapU

▸ **mapU**(`value`): value is undefined \| ReadonlyMap<unknown, unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| ReadonlyMap<unknown, unknown\>

___

### maps

▸ **maps**(`value`): value is readonly ReadonlyMap<unknown, unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly ReadonlyMap<unknown, unknown\>[]

___

### mapsU

▸ **mapsU**(`value`): value is undefined \| readonly ReadonlyMap<unknown, unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly ReadonlyMap<unknown, unknown\>[]

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

▸ **notFactory**<`T`\>(`guard`): [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`T`\>

Creates guard for type not T.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

[`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`T`\>

Guard for type not T.

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

▸ **numStrU**(`value`): value is undefined \| NumStr

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| NumStr

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

▸ **numberU**(`value`): value is undefined \| number

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| number

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

▸ **objectOf**<`R`, `O`\>(`value`, `required`, `optional`): value is ObjectOfReturn<R, O\>

Checks that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `required` | [`Guards`](guards.md#guards)<`R`, keyof `R`\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`O`, keyof `O`\> | Guards for optional properties. |

#### Returns

value is ObjectOfReturn<R, O\>

_True_ if value type is T, _false_ otherwise.

▸ **objectOf**<`T`\>(`value`, `required`, `optional`): value is T

Checks that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `required` | [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\> | Guards for optional properties. |

#### Returns

value is T

_True_ if value type is T, _false_ otherwise.

___

### objectOfFactory

▸ **objectOfFactory**<`R`, `O`\>(`required`, `optional`): [`Guard`](../interfaces/guards.Guard.md)<[`ObjectOfReturn`](guards.md#objectofreturn)<`R`, `O`\>\>

Creates guard for type T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | [`Guards`](guards.md#guards)<`R`, keyof `R`\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`O`, keyof `O`\> | Guards for optional properties. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<[`ObjectOfReturn`](guards.md#objectofreturn)<`R`, `O`\>\>

Guard for type T.

▸ **objectOfFactory**<`T`\>(`required`, `optional`): [`Guard`](../interfaces/guards.Guard.md)<`T`\>

Creates guard for type T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\> | Guards for optional properties. |

#### Returns

[`Guard`](../interfaces/guards.Guard.md)<`T`\>

Guard for type T.

___

### objectU

▸ **objectU**(`value`): value is undefined \| object

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| object

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

▸ **set**(`value`): value is ReadonlySet<unknown\>

Checks that value type is Set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is ReadonlySet<unknown\>

_True_ if value type is Set, _false_ otherwise.

___

### setOf

▸ **setOf**<`T`\>(`value`, `guard`): value is ReadonlySet<T\>

Checks that value type is Set\<T\>.

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

_True_ if value type is Set\<T\>, _false_ otherwise.

___

### setU

▸ **setU**(`value`): value is undefined \| ReadonlySet<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| ReadonlySet<unknown\>

___

### sets

▸ **sets**(`value`): value is readonly ReadonlySet<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly ReadonlySet<unknown\>[]

___

### setsU

▸ **setsU**(`value`): value is undefined \| readonly ReadonlySet<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly ReadonlySet<unknown\>[]

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

▸ **stringU**(`value`): value is undefined \| string

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| string

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

### symbolU

▸ **symbolU**(`value`): value is undefined \| symbol

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| symbol

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

___

### unknownsU

▸ **unknownsU**(`value`): value is undefined \| readonly unknown[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly unknown[]
