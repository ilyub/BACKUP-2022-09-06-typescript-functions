[Typescript functions](../index.md) / [Exports](../modules.md) / guards

# Module: guards

## Table of contents

### Interfaces

- [ExclusionGuard](../interfaces/guards.ExclusionGuard.md)
- [Guard](../interfaces/guards.Guard.md)
- [MultiArgGuard](../interfaces/guards.MultiArgGuard.md)

### Type aliases

- [Guards](guards.md#guards)

### Variables

- [and](guards.md#and)
- [array](guards.md#array)
- [indexedObject](guards.md#indexedobject)
- [map](guards.md#map)
- [not](guards.md#not)
- [object](guards.md#object)
- [or](guards.md#or)
- [set](guards.md#set)
- [tuple](guards.md#tuple)

### Functions

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
- [factory](guards.md#factory-4)
- [false](guards.md#false)
- [indexedObjectU](guards.md#indexedobjectu)
- [indexedObjects](guards.md#indexedobjects)
- [indexedObjectsU](guards.md#indexedobjectsu)
- [instance](guards.md#instance)
- [instances](guards.md#instances)
- [mapU](guards.md#mapu)
- [maps](guards.md#maps)
- [mapsU](guards.md#mapsu)
- [null](guards.md#null)
- [numStr](guards.md#numstr)
- [numStrU](guards.md#numstru)
- [numStrs](guards.md#numstrs)
- [numStrsU](guards.md#numstrsu)
- [number](guards.md#number)
- [numberU](guards.md#numberu)
- [numbers](guards.md#numbers)
- [numbersU](guards.md#numbersu)
- [objectU](guards.md#objectu)
- [objects](guards.md#objects)
- [objectsU](guards.md#objectsu)
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
- [undefined](guards.md#undefined)
- [unknown](guards.md#unknown)
- [unknowns](guards.md#unknowns)
- [unknownsU](guards.md#unknownsu)

## Type aliases

### Guards

Ƭ **Guards**<`T`, `K`\>: { readonly [L in K]-?: Guard<T[L]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends keyof `T` = keyof `T` |

## Variables

### and

• `Const` **and**: `Object`

#### Call signature

▸ <`A`, `B`\>(`value`, `guard1`, `guard2`): value is A & B

Checks that value type is A & B.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

##### Returns

value is A & B

_True_ if value type is A & B, _false_ otherwise.

▸ <`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A & B & C

Checks that value type is A & B & C.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

##### Returns

value is A & B & C

_True_ if value type is A & B & C, _false_ otherwise.

▸ <`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A & B & C & D

Checks that value type is A & B & C & D.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

##### Returns

value is A & B & C & D

_True_ if value type is A & B & C & D, _false_ otherwise.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | <A, B\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` & `B`\><A, B, C\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C`\><A, B, C, D\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>, `guard4`: [`Guard`](../interfaces/guards.Guard.md)<`D`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` & `B` & `C` & `D`\> |

___

### array

• `Const` **array**: { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is readonly T[]  } & (`value`: `unknown`) => value is unknowns

Checks that value is an array.

**`param`** Value.

**`returns`** _True_ if value is an array, _false_ otherwise.

___

### indexedObject

• `Const` **indexedObject**: { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is IndexedObject<T\>  } & (`value`: `unknown`) => value is IndexedObject<unknown\>

Checks that value type is IndexedObject.

**`param`** Value.

**`returns`** _True_ if value type is IndexedObject, _false_ otherwise.

___

### map

• `Const` **map**: { `of`: <K, V\>(`this`: `void`, `value`: `unknown`, `keyGuard`: [`Guard`](../interfaces/guards.Guard.md)<`K`\>, `valueGuard`: [`Guard`](../interfaces/guards.Guard.md)<`V`\>) => value is ReadonlyMap<K, V\>  } & (`value`: `unknown`) => value is ReadonlyMap<unknown, unknown\>

Checks that value type is Map.

**`param`** Value.

**`returns`** _True_ if value type is Map, _false_ otherwise.

___

### not

• `Const` **not**: { `array`: <V\>(`value`: `V`) => value is Exclude<V, unknowns\> ; `boolean`: <V\>(`value`: `V`) => value is Exclude<V, boolean\> ; `empty`: <V\>(`value`: `V`) => value is Exclude<V, empty\> ; `factory`: <T\>(`guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => <V\>(`value`: `V`) => value is Exclude<V, T\> = \_notFactory; `false`: <V\>(`value`: `V`) => value is Exclude<V, false\> ; `indexedObject`: <V\>(`value`: `V`) => value is Exclude<V, IndexedObject<unknown\>\> ; `map`: <V\>(`value`: `V`) => value is Exclude<V, ReadonlyMap<unknown, unknown\>\> ; `null`: <V\>(`value`: `V`) => value is Exclude<V, null\> ; `numStr`: <V\>(`value`: `V`) => value is Exclude<V, NumStr\> ; `number`: <V\>(`value`: `V`) => value is Exclude<V, number\> ; `object`: <V\>(`value`: `V`) => value is Exclude<V, object\> ; `set`: <V\>(`value`: `V`) => value is Exclude<V, ReadonlySet<unknown\>\> ; `string`: <V\>(`value`: `V`) => value is Exclude<V, string\> ; `stringU`: <V\>(`value`: `V`) => value is Exclude<V, string\> ; `symbol`: <V\>(`value`: `V`) => value is Exclude<V, symbol\> ; `true`: <V\>(`value`: `V`) => value is Exclude<V, true\> ; `undefined`: <V\>(`value`: `V`) => value is Exclude<V, undefined\>  } & <T, V\>(`value`: `V`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is Exclude<V, T\>

Checks that value type is not T.

**`param`** Value.

**`param`** Guard for type T.

**`returns`** _True_ if value type is not T, _false_ otherwise.

___

### object

• `Const` **object**: `Object`

#### Call signature

▸ (`value`): value is object

Checks that value is an object.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

##### Returns

value is object

_True_ if value is an object, _false_ otherwise.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | <R, O\>(`required`: [`Guards`](guards.md#guards)<`R`, keyof `R`\>, `optional`: [`Guards`](guards.md#guards)<`O`, keyof `O`\>) => [`Guard`](../interfaces/guards.Guard.md)<`If`<`Equals`<[`WritableDefindKeys`](types_objectKeys.md#writabledefindkeys)<`Partial`<`O`\>\>, `never`\>, `If`<`Equals`<[`WritableUndefindKeys`](types_objectKeys.md#writableundefindkeys)<`Partial`<`O`\>\>, `never`\>, `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> } & `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>\>, { [K in string \| number \| symbol]: Partial<O\>[K] } & `If`<`Equals`<[`WritableUndefindKeys`](types_objectKeys.md#writableundefindkeys)<`Partial`<`O`\>\>, `never`\>, `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> } & `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`Partial`<`O`\>\>, `never`\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>\>\> & `If`<`Equals`<[`WritableDefindKeys`](types_objectKeys.md#writabledefindkeys)<`R`\>, `never`\>, `If`<`Equals`<[`WritableUndefindKeys`](types_objectKeys.md#writableundefindkeys)<`R`\>, `never`\>, `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: undefined \| R[K] }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>, { [K in string \| number \| symbol]: undefined \| R[K] } & `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: undefined \| R[K] }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>\>, { [K in string \| number \| symbol]: R[K] } & `If`<`Equals`<[`WritableUndefindKeys`](types_objectKeys.md#writableundefindkeys)<`R`\>, `never`\>, `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: undefined \| R[K] }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>, { [K in string \| number \| symbol]: undefined \| R[K] } & `If`<`Equals`<[`ReadonlyDefinedKeys`](types_objectKeys.md#readonlydefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: undefined \| R[K] }, `If`<`Equals`<[`ReadonlyUndefinedKeys`](types_objectKeys.md#readonlyundefinedkeys)<`R`\>, `never`\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>\>\>\><T\>(`required`: [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\>, `optional`: [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\>) => [`Guard`](../interfaces/guards.Guard.md)<`T`\> |
| `of` | <R, O\>(`value`: `unknown`, `required`: [`Guards`](guards.md#guards)<`R`, keyof `R`\>, `optional`: [`Guards`](guards.md#guards)<`O`, keyof `O`\>) => value is If<Equals<WritableDefindKeys<Partial<O\>\>, never\>, If<Equals<WritableUndefindKeys<Partial<O\>\>, never\>, If<Equals<ReadonlyDefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, If<Equals<ReadonlyUndefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> } & If<Equals<ReadonlyDefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, If<Equals<ReadonlyUndefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>\>, { [K in string \| number \| symbol]: Partial<O\>[K] } & If<Equals<WritableUndefindKeys<Partial<O\>\>, never\>, If<Equals<ReadonlyDefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, If<Equals<ReadonlyUndefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> } & If<Equals<ReadonlyDefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }, If<Equals<ReadonlyUndefinedKeys<Partial<O\>\>, never\>, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]: Partial<O\>[K] } & { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\>\>\>\> & If<Equals<WritableDefindKeys<R\>, never\>, If<Equals<WritableUndefindKeys<R\>, never\>, If<Equals<ReadonlyDefinedKeys<R\>, never\>, { readonly [K in never]: undefined \| R[K] }, If<Equals<ReadonlyUndefinedKeys<R\>, never\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>, { [K in string \| number \| symbol]: undefined \| R[K] } & If<Equals<ReadonlyDefinedKeys<R\>, never\>, { readonly [K in never]: undefined \| R[K] }, If<Equals<ReadonlyUndefinedKeys<R\>, never\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>\>, { [K in string \| number \| symbol]: R[K] } & If<Equals<WritableUndefindKeys<R\>, never\>, If<Equals<ReadonlyDefinedKeys<R\>, never\>, { readonly [K in never]: undefined \| R[K] }, If<Equals<ReadonlyUndefinedKeys<R\>, never\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>, { [K in string \| number \| symbol]: undefined \| R[K] } & If<Equals<ReadonlyDefinedKeys<R\>, never\>, { readonly [K in never]: undefined \| R[K] }, If<Equals<ReadonlyUndefinedKeys<R\>, never\>, { readonly [K in never]: R[K] }, { readonly [K in never]: R[K] } & { readonly [K in never]: undefined \| R[K] }\>\>\>\><T\>(`value`: `unknown`, `required`: [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\>, `optional`: [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\>) => value is T |

___

### or

• `Const` **or**: `Object`

#### Call signature

▸ <`A`, `B`\>(`value`, `guard1`, `guard2`): value is A \| B

Checks that value type is A | B.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

##### Returns

value is A \| B

_True_ if value type is A | B, _false_ otherwise.

▸ <`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is A \| B \| C

Checks that value type is A | B | C.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

##### Returns

value is A \| B \| C

_True_ if value type is A | B | C, _false_ otherwise.

▸ <`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is A \| B \| C \| D

Checks that value type is A | B | C | D.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

##### Returns

value is A \| B \| C \| D

_True_ if value type is A | B | C | D, _false_ otherwise.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | <A, B\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\><A, B, C\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\><A, B, C, D\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>, `guard4`: [`Guard`](../interfaces/guards.Guard.md)<`D`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\> |

___

### set

• `Const` **set**: { `of`: <T\>(`this`: `void`, `value`: `unknown`, `guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => value is ReadonlySet<T\>  } & (`value`: `unknown`) => value is ReadonlySet<unknown\>

Checks that value type is Set.

**`param`** Value.

**`returns`** _True_ if value type is Set, _false_ otherwise.

___

### tuple

• `Const` **tuple**: `Object`

#### Call signature

▸ <`A`\>(`value`, `guard`): value is readonly [A]

Checks that value type is [A].

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |

##### Returns

value is readonly [A]

_True_ if value type is [A], _false_ otherwise.

▸ <`A`, `B`\>(`value`, `guard1`, `guard2`): value is readonly [A, B]

Checks that value type is [A, B].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

##### Returns

value is readonly [A, B]

_True_ if value type is [A, B], _false_ otherwise.

▸ <`A`, `B`, `C`\>(`value`, `guard1`, `guard2`, `guard3`): value is readonly [A, B, C]

Checks that value type is [A, B, C].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

##### Returns

value is readonly [A, B, C]

_True_ if value type is [A, B, C], _false_ otherwise.

▸ <`A`, `B`, `C`, `D`\>(`value`, `guard1`, `guard2`, `guard3`, `guard4`): value is readonly [A, B, C, D]

Checks that value type is [A, B, C, D].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

##### Returns

value is readonly [A, B, C, D]

_True_ if value type is [A, B, C, D], _false_ otherwise.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `factory` | <A\>(`guard`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\><A, B\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\><A, B, C\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\><A, B, C, D\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>, `guard4`: [`Guard`](../interfaces/guards.Guard.md)<`D`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\> |

## Functions

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

### false

▸ **false**(`value`): value is false

Checks that value is _false_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is false

_True_ if value is _false_, _false_ otherwise.

___

### indexedObjectU

▸ **indexedObjectU**(`value`): value is undefined \| IndexedObject<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| IndexedObject<unknown\>

___

### indexedObjects

▸ **indexedObjects**(`value`): value is readonly IndexedObject<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is readonly IndexedObject<unknown\>[]

___

### indexedObjectsU

▸ **indexedObjectsU**(`value`): value is undefined \| readonly IndexedObject<unknown\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

value is undefined \| readonly IndexedObject<unknown\>[]

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

▸ **stringU**(`value`): value is string

Checks that value is a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is string

_True_ if value is a string, _false_ otherwise.

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

### true

▸ **true**(`value`): value is true

Checks that value is _true_.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is true

_True_ if value is _true_, _false_ otherwise.

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
