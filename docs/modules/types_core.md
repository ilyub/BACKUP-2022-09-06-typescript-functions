[Typescript functions](../index.md) / [Exports](../modules.md) / types/core

# Module: types/core

## Table of contents

### Type aliases

- [IndexedObject](types_core.md#indexedobject)
- [NumStr](types_core.md#numstr)
- [NumStrE](types_core.md#numstre)
- [NumStrU](types_core.md#numstru)
- [NumStrs](types_core.md#numstrs)
- [PartialRecord](types_core.md#partialrecord)
- [PropertyKeyE](types_core.md#propertykeye)
- [PropertyKeyU](types_core.md#propertykeyu)
- [PropertyKeys](types_core.md#propertykeys)
- [Rec](types_core.md#rec)
- [Writable](types_core.md#writable)
- [WritableIndexedObject](types_core.md#writableindexedobject)
- [WritablePartialRecord](types_core.md#writablepartialrecord)
- [WritableRecord](types_core.md#writablerecord)
- [booleanE](types_core.md#booleane)
- [booleanU](types_core.md#booleanu)
- [booleans](types_core.md#booleans)
- [empty](types_core.md#empty)
- [falseU](types_core.md#falseu)
- [nevers](types_core.md#nevers)
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

## Type aliases

### IndexedObject

Ƭ **IndexedObject**<`T`\>: [`Rec`](types_core.md#rec)<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

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

Ƭ **PartialRecord**<`K`, `V`\>: { readonly [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### PropertyKeyE

Ƭ **PropertyKeyE**: [`empty`](types_core.md#empty) \| `PropertyKey`

___

### PropertyKeyU

Ƭ **PropertyKeyU**: `PropertyKey` \| `undefined`

___

### PropertyKeys

Ƭ **PropertyKeys**: readonly `PropertyKey`[]

___

### Rec

Ƭ **Rec**<`K`, `V`\>: { readonly [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### Writable

Ƭ **Writable**<`T`\>: { -readonly [P in keyof T]: T[P] }

#### Type parameters

| Name |
| :------ |
| `T` |

___

### WritableIndexedObject

Ƭ **WritableIndexedObject**<`T`\>: [`WritableRecord`](types_core.md#writablerecord)<`PropertyKey`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

___

### WritablePartialRecord

Ƭ **WritablePartialRecord**<`K`, `V`\>: { [L in K]?: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

___

### WritableRecord

Ƭ **WritableRecord**<`K`, `V`\>: { [L in K]: V }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

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

### falseU

Ƭ **falseU**: ``false`` \| `undefined`

___

### nevers

Ƭ **nevers**: readonly `never`[]

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
