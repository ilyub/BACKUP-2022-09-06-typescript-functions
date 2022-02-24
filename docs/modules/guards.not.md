[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / not

# Namespace: not

[guards](guards.md).not

## Table of contents

### Variables

- [boolean](guards.not.md#boolean)
- [booleanU](guards.not.md#booleanu)
- [callable](guards.not.md#callable)
- [callableU](guards.not.md#callableu)
- [empty](guards.not.md#empty)
- [factory](guards.not.md#factory)
- [null](guards.not.md#null)
- [numStr](guards.not.md#numstr)
- [numStrU](guards.not.md#numstru)
- [number](guards.not.md#number)
- [numberU](guards.not.md#numberu)
- [object](guards.not.md#object)
- [string](guards.not.md#string)
- [stringU](guards.not.md#stringu)
- [symbol](guards.not.md#symbol)
- [undefined](guards.not.md#undefined)

## Variables

### boolean

• **boolean**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`boolean`\>

___

### booleanU

• **booleanU**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`booleanU`](types_core.md#booleanu)\>

___

### callable

• **callable**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`Function`\>

___

### callableU

• **callableU**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`undefined` \| `Function`\>

___

### empty

• **empty**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`empty`](types_core.md#empty)\>

___

### factory

• **factory**: <T\>(`guard`: [`Guard`](../interfaces/guards.Guard.md)<`T`\>) => [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`T`\>

#### Type declaration

▸ <`T`\>(`guard`): [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`T`\>

Creates guard for not T type.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

##### Returns

[`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`T`\>

Guard for not T type.

___

### null

• **null**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<``null``\>

___

### numStr

• **numStr**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`NumStr`](types_core.md#numstr)\>

___

### numStrU

• **numStrU**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`NumStrU`](types_core.md#numstru)\>

___

### number

• **number**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`number`\>

___

### numberU

• **numberU**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`numberU`](types_core.md#numberu)\>

___

### object

• **object**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`object`\>

___

### string

• **string**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`string`\>

___

### stringU

• **stringU**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<[`stringU`](types_core.md#stringu)\>

___

### symbol

• **symbol**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`symbol`\>

___

### undefined

• **undefined**: [`ExclusiveGuard`](../interfaces/guards.ExclusiveGuard.md)<`undefined`\>
