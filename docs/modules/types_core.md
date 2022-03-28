[Typescript functions](../index.md) / [Exports](../modules.md) / types/core

# Module: types/core

## Table of contents

### Interfaces

- [Async](../interfaces/types_core.Async.md)
- [CallSignature](../interfaces/types_core.CallSignature.md)
- [Callable](../interfaces/types_core.Callable.md)
- [Sync](../interfaces/types_core.Sync.md)

### Type aliases

- [AddPrefix](types_core.md#addprefix)
- [ArrayElement](types_core.md#arrayelement)
- [ConstructSignature](types_core.md#constructsignature)
- [Constructor](types_core.md#constructor)
- [DeclaredKeys](types_core.md#declaredkeys)
- [DeepPartial](types_core.md#deeppartial)
- [DeepReadonly](types_core.md#deepreadonly)
- [DeepWritable](types_core.md#deepwritable)
- [Defined](types_core.md#defined)
- [DefinedKeys](types_core.md#definedkeys)
- [Entry](types_core.md#entry)
- [Equal](types_core.md#equal)
- [IndexedObject](types_core.md#indexedobject)
- [Interval](types_core.md#interval)
- [IterableLike](types_core.md#iterablelike)
- [Join2](types_core.md#join2)
- [Join3](types_core.md#join3)
- [Join4](types_core.md#join4)
- [KeysOfType](types_core.md#keysoftype)
- [LowercaseLetter](types_core.md#lowercaseletter)
- [NumStr](types_core.md#numstr)
- [NumStrE](types_core.md#numstre)
- [NumStrU](types_core.md#numstru)
- [NumStrs](types_core.md#numstrs)
- [PartialRecord](types_core.md#partialrecord)
- [PromiseAsync](types_core.md#promiseasync)
- [PromiseAsyncSync](types_core.md#promiseasyncsync)
- [PropertyKeys](types_core.md#propertykeys)
- [ReadonlyArrayElement](types_core.md#readonlyarrayelement)
- [ReadonlyDeclaredKeys](types_core.md#readonlydeclaredkeys)
- [ReadonlyIndexedObject](types_core.md#readonlyindexedobject)
- [ReadonlyParameters](types_core.md#readonlyparameters)
- [ReadonlyPartialRecord](types_core.md#readonlypartialrecord)
- [ReadonlyRecord](types_core.md#readonlyrecord)
- [ReadonlyUndeclaredKeys](types_core.md#readonlyundeclaredkeys)
- [RemovePrefix](types_core.md#removeprefix)
- [StrictOmit](types_core.md#strictomit)
- [StrictPartial](types_core.md#strictpartial)
- [StrictRequired](types_core.md#strictrequired)
- [Timeout](types_core.md#timeout)
- [UndeclaredKeys](types_core.md#undeclaredkeys)
- [UndefinedKeys](types_core.md#undefinedkeys)
- [UppercaseLetter](types_core.md#uppercaseletter)
- [ValidationObject](types_core.md#validationobject)
- [WithOptionalKeys](types_core.md#withoptionalkeys)
- [WithUndeclaredKeys](types_core.md#withundeclaredkeys)
- [WithUndefinedKeys](types_core.md#withundefinedkeys)
- [Writable](types_core.md#writable)
- [WritableDeclaredKeys](types_core.md#writabledeclaredkeys)
- [WritableUndeclaredKeys](types_core.md#writableundeclaredkeys)
- [booleanE](types_core.md#booleane)
- [booleanU](types_core.md#booleanu)
- [booleans](types_core.md#booleans)
- [empty](types_core.md#empty)
- [emptyArray](types_core.md#emptyarray)
- [falseU](types_core.md#falseu)
- [numberE](types_core.md#numbere)
- [numberU](types_core.md#numberu)
- [numbers](types_core.md#numbers)
- [objectE](types_core.md#objecte)
- [objectU](types_core.md#objectu)
- [objects](types_core.md#objects)
- [stringE](types_core.md#stringe)
- [stringU](types_core.md#stringu)
- [strings](types_core.md#strings)
- [trueU](types_core.md#trueu)
- [unknowns](types_core.md#unknowns)

### Functions

- [createValidationObject](types_core.md#createvalidationobject)

## Type aliases

### AddPrefix

Ƭ **AddPrefix**<`T`, `P`\>: \`${P}${T}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `P` | extends `string` |

___

### ArrayElement

Ƭ **ArrayElement**<`T`\>: `T` extends infer R[] ? `R` : `unknown`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ConstructSignature

Ƭ **ConstructSignature**<`T`\>: (...`args`: `ConstructorParameters`<`T`\>) => `InstanceType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Constructor`](types_core.md#constructor) |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `ConstructorParameters`<`T`\> |

___

### Constructor

Ƭ **Constructor**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

• (...`args`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

___

### DeclaredKeys

Ƭ **DeclaredKeys**<`T`\>: [`DefinedKeys`](types_core.md#definedkeys)<`T`\> & `PropertyKey` & `RequiredKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### DeepPartial

Ƭ **DeepPartial**<`T`\>: `DeepPartial1`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### DeepReadonly

Ƭ **DeepReadonly**<`T`\>: `DeepReadonly1`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### DeepWritable

Ƭ **DeepWritable**<`T`\>: `DeepWritable1`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Defined

Ƭ **Defined**<`T`\>: `Exclude`<`T`, `undefined`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### DefinedKeys

Ƭ **DefinedKeys**<`T`\>: `FilterKeys`<`T`, `undefined`, ``"<-extends"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Entry

Ƭ **Entry**<`T`\>: readonly [keyof `T`, `T`[keyof `T`]]

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Equal

Ƭ **Equal**<`A`, `B`, `C`, `D`\>: `If`<`Equals`<`A`, `B`\>, `C`, `D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

___

### IndexedObject

Ƭ **IndexedObject**<`T`\>: `Record`<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### Interval

Ƭ **Interval**: `ReturnType`<typeof `setInterval`\>

___

### IterableLike

Ƭ **IterableLike**<`T`\>: `Iterable`<`T`\> \| () => `Iterable`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### Join2

Ƭ **Join2**<`A`, `B`\>: keyof `A` extends `never` ? `B` : keyof `B` extends `never` ? `A` : `A` & `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |

___

### Join3

Ƭ **Join3**<`A`, `B`, `C`\>: keyof `A` extends `never` ? [`Join2`](types_core.md#join2)<`B`, `C`\> : `A` & [`Join2`](types_core.md#join2)<`B`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |
| `C` | extends `object` |

___

### Join4

Ƭ **Join4**<`A`, `B`, `C`, `D`\>: keyof `A` extends `never` ? [`Join3`](types_core.md#join3)<`B`, `C`, `D`\> : `A` & [`Join3`](types_core.md#join3)<`B`, `C`, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |
| `C` | extends `object` |
| `D` | extends `object` |

___

### KeysOfType

Ƭ **KeysOfType**<`T`, `V`\>: `KeysOfType1`<`T`, `V`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

___

### LowercaseLetter

Ƭ **LowercaseLetter**: ``"a"`` \| ``"b"`` \| ``"c"`` \| ``"d"`` \| ``"e"`` \| ``"f"`` \| ``"g"`` \| ``"h"`` \| ``"i"`` \| ``"j"`` \| ``"k"`` \| ``"l"`` \| ``"m"`` \| ``"n"`` \| ``"o"`` \| ``"p"`` \| ``"q"`` \| ``"r"`` \| ``"s"`` \| ``"t"`` \| ``"u"`` \| ``"v"`` \| ``"w"`` \| ``"x"`` \| ``"y"`` \| ``"z"``

___

### NumStr

Ƭ **NumStr**: `number` \| `string`

___

### NumStrE

Ƭ **NumStrE**: [`empty`](types_core.md#empty) \| [`NumStr`](types_core.md#numstr)

___

### NumStrU

Ƭ **NumStrU**: [`NumStr`](types_core.md#numstr) \| `undefined`

___

### NumStrs

Ƭ **NumStrs**: readonly [`NumStr`](types_core.md#numstr)[]

___

### PartialRecord

Ƭ **PartialRecord**<`K`, `T`\>: `Partial`<`Record`<`K`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### PromiseAsync

Ƭ **PromiseAsync**<`T`\>: [`Async`](../interfaces/types_core.Async.md)<`T`\> \| `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PromiseAsyncSync

Ƭ **PromiseAsyncSync**<`T`\>: [`Async`](../interfaces/types_core.Async.md)<`T`\> \| `Promise`<`T`\> \| [`Sync`](../interfaces/types_core.Sync.md)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PropertyKeys

Ƭ **PropertyKeys**: readonly `PropertyKey`[]

___

### ReadonlyArrayElement

Ƭ **ReadonlyArrayElement**<`T`\>: `T` extends `ReadonlyArray`<infer R\> ? `R` : `unknown`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ReadonlyDeclaredKeys

Ƭ **ReadonlyDeclaredKeys**<`T`\>: [`DeclaredKeys`](types_core.md#declaredkeys)<`T`\> & `PropertyKey` & `ReadonlyKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ReadonlyIndexedObject

Ƭ **ReadonlyIndexedObject**<`T`\>: `Readonly`<[`IndexedObject`](types_core.md#indexedobject)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### ReadonlyParameters

Ƭ **ReadonlyParameters**<`T`\>: `Readonly`<`Parameters`<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](../interfaces/types_core.Callable.md) |

___

### ReadonlyPartialRecord

Ƭ **ReadonlyPartialRecord**<`K`, `T`\>: `Readonly`<[`PartialRecord`](types_core.md#partialrecord)<`K`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### ReadonlyRecord

Ƭ **ReadonlyRecord**<`K`, `T`\>: `Readonly`<`Record`<`K`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `T` | `T` |

___

### ReadonlyUndeclaredKeys

Ƭ **ReadonlyUndeclaredKeys**<`T`\>: `PropertyKey` & `ReadonlyKeys`<`T`\> & [`UndeclaredKeys`](types_core.md#undeclaredkeys)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### RemovePrefix

Ƭ **RemovePrefix**<`T`, `P`\>: `T` extends \`${P}${infer R}\` ? `R` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `P` | extends `string` |

___

### StrictOmit

Ƭ **StrictOmit**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [L in K]?: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends keyof `T` |

___

### StrictPartial

Ƭ **StrictPartial**<`T`\>: [`Join2`](types_core.md#join2)<{ [K in WritableKeys<T\>]?: T[K] }, { readonly [K in ReadonlyKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### StrictRequired

Ƭ **StrictRequired**<`T`\>: [`Join2`](types_core.md#join2)<{ [K in WritableKeys<T\>]-?: T[K] }, { readonly [K in ReadonlyKeys<T\>]-?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Timeout

Ƭ **Timeout**: `ReturnType`<typeof `setTimeout`\>

___

### UndeclaredKeys

Ƭ **UndeclaredKeys**<`T`\>: `Exclude`<keyof `T`, [`DeclaredKeys`](types_core.md#declaredkeys)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### UndefinedKeys

Ƭ **UndefinedKeys**<`T`\>: `Exclude`<keyof `T`, [`DefinedKeys`](types_core.md#definedkeys)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### UppercaseLetter

Ƭ **UppercaseLetter**: ``"A"`` \| ``"B"`` \| ``"C"`` \| ``"D"`` \| ``"E"`` \| ``"F"`` \| ``"G"`` \| ``"H"`` \| ``"I"`` \| ``"J"`` \| ``"K"`` \| ``"L"`` \| ``"M"`` \| ``"N"`` \| ``"O"`` \| ``"P"`` \| ``"Q"`` \| ``"R"`` \| ``"S"`` \| ``"T"`` \| ``"U"`` \| ``"V"`` \| ``"W"`` \| ``"X"`` \| ``"Y"`` \| ``"Z"``

___

### ValidationObject

Ƭ **ValidationObject**<`T`\>: `ReadonlySet`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

___

### WithOptionalKeys

Ƭ **WithOptionalKeys**<`T`\>: [`Join4`](types_core.md#join4)<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]?: Defined<T[K]\> }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]?: Defined<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WithUndeclaredKeys

Ƭ **WithUndeclaredKeys**<`T`\>: [`Join4`](types_core.md#join4)<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]?: T[K] }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WithUndefinedKeys

Ƭ **WithUndefinedKeys**<`T`\>: [`Join4`](types_core.md#join4)<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]: T[K] \| undefined }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]: T[K] \| undefined }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Writable

Ƭ **Writable**<`T`\>: { -readonly [K in keyof T]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### WritableDeclaredKeys

Ƭ **WritableDeclaredKeys**<`T`\>: [`DeclaredKeys`](types_core.md#declaredkeys)<`T`\> & `PropertyKey` & `WritableKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableUndeclaredKeys

Ƭ **WritableUndeclaredKeys**<`T`\>: `PropertyKey` & [`UndeclaredKeys`](types_core.md#undeclaredkeys)<`T`\> & `WritableKeys`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### booleanE

Ƭ **booleanE**: [`empty`](types_core.md#empty) \| `boolean`

___

### booleanU

Ƭ **booleanU**: `boolean` \| `undefined`

___

### booleans

Ƭ **booleans**: readonly `boolean`[]

___

### empty

Ƭ **empty**: ``null`` \| `undefined`

___

### emptyArray

Ƭ **emptyArray**: readonly `never`[]

___

### falseU

Ƭ **falseU**: ``false`` \| `undefined`

___

### numberE

Ƭ **numberE**: [`empty`](types_core.md#empty) \| `number`

___

### numberU

Ƭ **numberU**: `number` \| `undefined`

___

### numbers

Ƭ **numbers**: readonly `number`[]

___

### objectE

Ƭ **objectE**: [`empty`](types_core.md#empty) \| `object`

___

### objectU

Ƭ **objectU**: `object` \| `undefined`

___

### objects

Ƭ **objects**: readonly `object`[]

___

### stringE

Ƭ **stringE**: [`empty`](types_core.md#empty) \| `string`

___

### stringU

Ƭ **stringU**: `string` \| `undefined`

___

### strings

Ƭ **strings**: readonly `string`[]

___

### trueU

Ƭ **trueU**: ``true`` \| `undefined`

___

### unknowns

Ƭ **unknowns**: readonly `unknown`[]

## Functions

### createValidationObject

▸ **createValidationObject**<`T`\>(`source`): [`ValidationObject`](types_core.md#validationobject)<`T`\>

Creates validation object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `Readonly`<`Record`<`T`, `T`\>\> | Source. |

#### Returns

[`ValidationObject`](types_core.md#validationobject)<`T`\>

Validation object.
