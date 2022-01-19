[Typescript functions](../index.md) / [Exports](../modules.md) / types/core

# Module: types/core

## Table of contents

### Type aliases

- [AddPrefix](types_core.md#addprefix)
- [ArrayElement](types_core.md#arrayelement)
- [Async](types_core.md#async)
- [CallSignature](types_core.md#callsignature)
- [Callable](types_core.md#callable)
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
- [KeysOfType](types_core.md#keysoftype)
- [NumStr](types_core.md#numstr)
- [NumStrE](types_core.md#numstre)
- [NumStrU](types_core.md#numstru)
- [PartialRecord](types_core.md#partialrecord)
- [PromiseAsync](types_core.md#promiseasync)
- [PromiseAsyncSync](types_core.md#promiseasyncsync)
- [ReadonlyArrayElement](types_core.md#readonlyarrayelement)
- [ReadonlyDeclaredKeys](types_core.md#readonlydeclaredkeys)
- [ReadonlyIndexedObject](types_core.md#readonlyindexedobject)
- [ReadonlyPartialRecord](types_core.md#readonlypartialrecord)
- [ReadonlyRecord](types_core.md#readonlyrecord)
- [ReadonlyUndeclaredKeys](types_core.md#readonlyundeclaredkeys)
- [RemovePrefix](types_core.md#removeprefix)
- [StrictOmit](types_core.md#strictomit)
- [StrictPartial](types_core.md#strictpartial)
- [StrictRequired](types_core.md#strictrequired)
- [Sync](types_core.md#sync)
- [Timeout](types_core.md#timeout)
- [UndeclaredKeys](types_core.md#undeclaredkeys)
- [UndefinedKeys](types_core.md#undefinedkeys)
- [ValidationObject](types_core.md#validationobject)
- [WithOptionalKeys](types_core.md#withoptionalkeys)
- [WithUndeclaredKeys](types_core.md#withundeclaredkeys)
- [WithUndefinedKeys](types_core.md#withundefinedkeys)
- [Writable](types_core.md#writable)
- [WritableDeclaredKeys](types_core.md#writabledeclaredkeys)
- [WritableUndeclaredKeys](types_core.md#writableundeclaredkeys)
- [booleanE](types_core.md#booleane)
- [booleanU](types_core.md#booleanu)
- [empty](types_core.md#empty)
- [numberE](types_core.md#numbere)
- [numberU](types_core.md#numberu)
- [objectE](types_core.md#objecte)
- [objectU](types_core.md#objectu)
- [stringE](types_core.md#stringe)
- [stringU](types_core.md#stringu)

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

### Async

Ƭ **Async**<`R`, `A`\>: (...`args`: `A`) => `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends `unknown`[] = `never`[] |

#### Type declaration

▸ (...`args`): `Promise`<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`Promise`<`R`\>

___

### CallSignature

Ƭ **CallSignature**<`T`\>: (`this`: `ThisParameterType`<`T`\>, ...`args`: `Parameters`<`T`\>) => `ReturnType`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Callable`](types_core.md#callable) |

#### Type declaration

▸ (`this`, ...`args`): `ReturnType`<`T`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ThisParameterType`<`T`\> |
| `...args` | `Parameters`<`T`\> |

##### Returns

`ReturnType`<`T`\>

___

### Callable

Ƭ **Callable**<`T`\>: (...`args`: `any`[]) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |

#### Type declaration

▸ (...`args`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`T`

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

Ƭ **DeclaredKeys**<`T`\>: `PropertyKey` & [`DefinedKeys`](types_core.md#definedkeys)<`T`\> & `RequiredKeys`<`T`\>

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

### KeysOfType

Ƭ **KeysOfType**<`T`, `V`\>: `KeysOfType1`<`T`, `V`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `V` |

___

### NumStr

Ƭ **NumStr**: `number` \| `string`

___

### NumStrE

Ƭ **NumStrE**: [`NumStr`](types_core.md#numstr) \| [`empty`](types_core.md#empty)

___

### NumStrU

Ƭ **NumStrU**: [`NumStr`](types_core.md#numstr) \| `undefined`

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

Ƭ **PromiseAsync**<`T`\>: `Promise`<`T`\> \| [`Async`](types_core.md#async)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### PromiseAsyncSync

Ƭ **PromiseAsyncSync**<`T`\>: `Promise`<`T`\> \| [`Async`](types_core.md#async)<`T`\> \| [`Sync`](types_core.md#sync)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ReadonlyArrayElement

Ƭ **ReadonlyArrayElement**<`T`\>: `T` extends `ReadonlyArray`<infer R\> ? `R` : `unknown`

#### Type parameters

| Name |
| :------ |
| `T` |

___

### ReadonlyDeclaredKeys

Ƭ **ReadonlyDeclaredKeys**<`T`\>: `PropertyKey` & `ReadonlyKeys`<`T`\> & [`DeclaredKeys`](types_core.md#declaredkeys)<`T`\>

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

Ƭ **StrictPartial**<`T`\>: `Join2`<{ [K in WritableKeys<T\>]?: T[K] }, { readonly [K in ReadonlyKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### StrictRequired

Ƭ **StrictRequired**<`T`\>: `Join2`<{ [K in WritableKeys<T\>]-?: T[K] }, { readonly [K in ReadonlyKeys<T\>]-?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Sync

Ƭ **Sync**<`R`, `A`\>: (...`args`: `A`) => `R`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends `unknown`[] = `never`[] |

#### Type declaration

▸ (...`args`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `A` |

##### Returns

`R`

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

### ValidationObject

Ƭ **ValidationObject**<`T`\>: `ReadonlySet`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

___

### WithOptionalKeys

Ƭ **WithOptionalKeys**<`T`\>: `Join4`<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]?: Defined<T[K]\> }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]?: Defined<T[K]\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WithUndeclaredKeys

Ƭ **WithUndeclaredKeys**<`T`\>: `Join4`<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]?: T[K] }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WithUndefinedKeys

Ƭ **WithUndefinedKeys**<`T`\>: `Join4`<{ [K in WritableDeclaredKeys<T\>]: T[K] }, { [K in WritableUndeclaredKeys<T\>]: T[K] \| undefined }, { readonly [K in ReadonlyDeclaredKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndeclaredKeys<T\>]: T[K] \| undefined }\>

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

Ƭ **WritableDeclaredKeys**<`T`\>: `PropertyKey` & `WritableKeys`<`T`\> & [`DeclaredKeys`](types_core.md#declaredkeys)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableUndeclaredKeys

Ƭ **WritableUndeclaredKeys**<`T`\>: `PropertyKey` & `WritableKeys`<`T`\> & [`UndeclaredKeys`](types_core.md#undeclaredkeys)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### booleanE

Ƭ **booleanE**: `boolean` \| [`empty`](types_core.md#empty)

___

### booleanU

Ƭ **booleanU**: `boolean` \| `undefined`

___

### empty

Ƭ **empty**: ``null`` \| `undefined`

___

### numberE

Ƭ **numberE**: `number` \| [`empty`](types_core.md#empty)

___

### numberU

Ƭ **numberU**: `number` \| `undefined`

___

### objectE

Ƭ **objectE**: `object` \| [`empty`](types_core.md#empty)

___

### objectU

Ƭ **objectU**: `object` \| `undefined`

___

### stringE

Ƭ **stringE**: `string` \| [`empty`](types_core.md#empty)

___

### stringU

Ƭ **stringU**: `string` \| `undefined`

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
