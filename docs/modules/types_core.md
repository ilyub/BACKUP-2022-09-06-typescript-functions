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
- [DeepPartial](types_core.md#deeppartial)
- [DeepReadonly](types_core.md#deepreadonly)
- [DeepWritable](types_core.md#deepwritable)
- [DefinedKeys](types_core.md#definedkeys)
- [Entry](types_core.md#entry)
- [Equal](types_core.md#equal)
- [IndexedObject](types_core.md#indexedobject)
- [Interval](types_core.md#interval)
- [IterableOrFn](types_core.md#iterableorfn)
- [KeysOfType](types_core.md#keysoftype)
- [NumStr](types_core.md#numstr)
- [NumStrE](types_core.md#numstre)
- [NumStrU](types_core.md#numstru)
- [OptionalToUndefined](types_core.md#optionaltoundefined)
- [Partial2](types_core.md#partial2)
- [PartialRecord](types_core.md#partialrecord)
- [PromiseAsync](types_core.md#promiseasync)
- [PromiseAsyncSync](types_core.md#promiseasyncsync)
- [ReadonlyArrayElement](types_core.md#readonlyarrayelement)
- [ReadonlyIndexedObject](types_core.md#readonlyindexedobject)
- [ReadonlyPartialRecord](types_core.md#readonlypartialrecord)
- [ReadonlyRecord](types_core.md#readonlyrecord)
- [RemovePrefix](types_core.md#removeprefix)
- [Required2](types_core.md#required2)
- [SafeOmit](types_core.md#safeomit)
- [Sync](types_core.md#sync)
- [Timeout](types_core.md#timeout)
- [UndefinedKeys](types_core.md#undefinedkeys)
- [UndefinedToOptional](types_core.md#undefinedtooptional)
- [ValidationObject](types_core.md#validationobject)
- [Writable](types_core.md#writable)
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

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

___

### Async

Ƭ **Async**<`T`\>: () => `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `Promise`<`T`\>

##### Returns

`Promise`<`T`\>

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

### IterableOrFn

Ƭ **IterableOrFn**<`T`\>: `Iterable`<`T`\> \| () => `Iterable`<`T`\>

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

### OptionalToUndefined

Ƭ **OptionalToUndefined**<`T`\>: `Join4`<{ readonly [K in OptionalKeys<T\> & ReadonlyKeys<T\>]: T[K] \| undefined }, { [K in Exclude<OptionalKeys<T\>, ReadonlyKeys<T\>\>]: T[K] \| undefined }, { readonly [K in RequiredKeys<T\> & ReadonlyKeys<T\>]: T[K] }, { [K in Exclude<RequiredKeys<T\>, ReadonlyKeys<T\>\>]: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Partial2

Ƭ **Partial2**<`T`\>: `Join2`<{ readonly [K in ReadonlyKeys<T\>]?: T[K] }, { [K in WritableKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

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

| Name | Type |
| :------ | :------ |
| `T` | extends readonly `unknown`[] |

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

### RemovePrefix

Ƭ **RemovePrefix**<`T`, `P`\>: `T` extends \`${P}${infer R}\` ? `R` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |
| `P` | extends `string` |

___

### Required2

Ƭ **Required2**<`T`\>: `Join2`<{ readonly [K in ReadonlyKeys<T\>]-?: T[K] }, { [K in WritableKeys<T\>]-?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### SafeOmit

Ƭ **SafeOmit**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [L in K]?: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends keyof `T` |

___

### Sync

Ƭ **Sync**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

___

### Timeout

Ƭ **Timeout**: `ReturnType`<typeof `setTimeout`\>

___

### UndefinedKeys

Ƭ **UndefinedKeys**<`T`\>: `Exclude`<keyof `T`, [`DefinedKeys`](types_core.md#definedkeys)<`T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### UndefinedToOptional

Ƭ **UndefinedToOptional**<`T`\>: `Join4`<{ readonly [K in DefinedKeys<T\> & ReadonlyKeys<T\>]: T[K] }, { [K in Exclude<DefinedKeys<T\>, ReadonlyKeys<T\>\>]: T[K] }, { readonly [K in UndefinedKeys<T\> & ReadonlyKeys<T\>]?: Exclude<T[K], undefined\> }, { [K in Exclude<UndefinedKeys<T\>, ReadonlyKeys<T\>\>]?: Exclude<T[K], undefined\> }\>

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

### Writable

Ƭ **Writable**<`T`\>: { -readonly [K in keyof T]: T[K] }

#### Type parameters

| Name |
| :------ |
| `T` |

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
