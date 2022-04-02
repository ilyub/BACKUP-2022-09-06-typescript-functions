[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / not

# Namespace: not

[guards](guards.md).not

## Table of contents

### Variables

- [array](guards.not.md#array)
- [boolean](guards.not.md#boolean)
- [empty](guards.not.md#empty)
- [factory](guards.not.md#factory)
- [false](guards.not.md#false)
- [indexedObject](guards.not.md#indexedobject)
- [map](guards.not.md#map)
- [null](guards.not.md#null)
- [numStr](guards.not.md#numstr)
- [number](guards.not.md#number)
- [object](guards.not.md#object)
- [set](guards.not.md#set)
- [string](guards.not.md#string)
- [symbol](guards.not.md#symbol)
- [true](guards.not.md#true)
- [undefined](guards.not.md#undefined)

## Variables

### array

• **array**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<[`unknowns`](types_core.md#unknowns)\>

___

### boolean

• **boolean**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`boolean`\>

___

### empty

• **empty**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<[`empty`](types_core.md#empty)\>

___

### factory

• **factory**: <T\>(`guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`T`\>

#### Type declaration

▸ <`T`\>(`guard`): [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`T`\>

Creates guard for type not T.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

##### Returns

[`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`T`\>

Guard for type not T.

___

### false

• **false**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<``false``\>

___

### indexedObject

• **indexedObject**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`Readonly`<[`TypedObject`](types_core.md#typedobject)<`PropertyKey`, `unknown`\>\>\>

___

### map

• **map**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`ReadonlyMap`<`unknown`, `unknown`\>\>

___

### null

• **null**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<``null``\>

___

### numStr

• **numStr**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<[`NumStr`](types_core.md#numstr)\>

___

### number

• **number**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`number`\>

___

### object

• **object**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`object`\>

___

### set

• **set**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`ReadonlySet`<`unknown`\>\>

___

### string

• **string**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`string`\>

___

### symbol

• **symbol**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`symbol`\>

___

### true

• **true**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<``true``\>

___

### undefined

• **undefined**: [`ExclusionGuard`](../interfaces/guards.ExclusionGuard.md)<`undefined`\>
