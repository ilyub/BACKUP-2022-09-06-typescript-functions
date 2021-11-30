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
- [undefined](guards.not.md#undefined)

## Variables

### boolean

• **boolean**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`boolean`\>

___

### booleanU

• **booleanU**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`booleanU`](types_core.md#booleanu)\>

___

### callable

• **callable**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`Function`\>

___

### callableU

• **callableU**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`undefined` \| `Function`\>

___

### empty

• **empty**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`empty`](types_core.md#empty)\>

___

### factory

• **factory**: <T\>(`guard`: [`Guard`](guards.md#guard)<`T`\>) => [`ExclusiveGuard`](guards.md#exclusiveguard)<`T`\>

#### Type declaration

▸ <`T`\>(`guard`): [`ExclusiveGuard`](guards.md#exclusiveguard)<`T`\>

Creates guard for not T type.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](guards.md#guard)<`T`\> | Guard for type T. |

##### Returns

[`ExclusiveGuard`](guards.md#exclusiveguard)<`T`\>

Guard for not T type.

___

### null

• **null**: [`ExclusiveGuard`](guards.md#exclusiveguard)<``null``\>

___

### numStr

• **numStr**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`NumStr`](types_core.md#numstr)\>

___

### numStrU

• **numStrU**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`NumStrU`](types_core.md#numstru)\>

___

### number

• **number**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`number`\>

___

### numberU

• **numberU**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`numberU`](types_core.md#numberu)\>

___

### object

• **object**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`object`\>

___

### string

• **string**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`string`\>

___

### stringU

• **stringU**: [`ExclusiveGuard`](guards.md#exclusiveguard)<[`stringU`](types_core.md#stringu)\>

___

### undefined

• **undefined**: [`ExclusiveGuard`](guards.md#exclusiveguard)<`undefined`\>
