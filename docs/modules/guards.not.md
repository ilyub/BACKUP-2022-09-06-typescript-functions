[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / not

# Namespace: not

[guards](guards.md).not

## Table of contents

### Variables

- [array](guards.not.md#array)
- [boolean](guards.not.md#boolean)
- [empty](guards.not.md#empty)
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

### Functions

- [factory](guards.not.md#factory)

## Variables

### array

• **array**: <V\>(`value`: `V`) => value is Exclude<V, unknowns\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, unknowns\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, unknowns\>

___

### boolean

• **boolean**: <V\>(`value`: `V`) => value is Exclude<V, boolean\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, boolean\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, boolean\>

___

### empty

• **empty**: <V\>(`value`: `V`) => value is Exclude<V, empty\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, empty\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, empty\>

___

### false

• **false**: <V\>(`value`: `V`) => value is Exclude<V, false\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, false\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, false\>

___

### indexedObject

• **indexedObject**: <V\>(`value`: `V`) => value is Exclude<V, IndexedObject<unknown\>\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, IndexedObject<unknown\>\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, IndexedObject<unknown\>\>

___

### map

• **map**: <V\>(`value`: `V`) => value is Exclude<V, ReadonlyMap<unknown, unknown\>\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, ReadonlyMap<unknown, unknown\>\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, ReadonlyMap<unknown, unknown\>\>

___

### null

• **null**: <V\>(`value`: `V`) => value is Exclude<V, null\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, null\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, null\>

___

### numStr

• **numStr**: <V\>(`value`: `V`) => value is Exclude<V, NumStr\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, NumStr\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, NumStr\>

___

### number

• **number**: <V\>(`value`: `V`) => value is Exclude<V, number\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, number\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, number\>

___

### object

• **object**: <V\>(`value`: `V`) => value is Exclude<V, object\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, object\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, object\>

___

### set

• **set**: <V\>(`value`: `V`) => value is Exclude<V, ReadonlySet<unknown\>\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, ReadonlySet<unknown\>\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, ReadonlySet<unknown\>\>

___

### string

• **string**: <V\>(`value`: `V`) => value is Exclude<V, string\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, string\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, string\>

___

### symbol

• **symbol**: <V\>(`value`: `V`) => value is Exclude<V, symbol\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, symbol\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, symbol\>

___

### true

• **true**: <V\>(`value`: `V`) => value is Exclude<V, true\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, true\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, true\>

___

### undefined

• **undefined**: <V\>(`value`: `V`) => value is Exclude<V, undefined\>

#### Type declaration

▸ <`V`\>(`value`): value is Exclude<V, undefined\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, undefined\>

## Functions

### factory

▸ **factory**<`T`\>(`guard`): <V\>(`value`: `V`) => value is Exclude<V, T\>

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

`fn`

Guard for type not T.

▸ <`V`\>(`value`): value is Exclude<V, T\>

##### Type parameters

| Name |
| :------ |
| `V` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |

##### Returns

value is Exclude<V, T\>
