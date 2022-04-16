[Typescript functions](../index.md) / [Exports](../modules.md) / array

# Module: array

## Table of contents

### Interfaces

- [Reduce](../interfaces/array.Reduce.md)

### Type aliases

- [KeyOrReduce](array.md#keyorreduce)

### Functions

- [chain](array.md#chain)
- [clone](array.md#clone)
- [drop](array.md#drop)
- [findBy](array.md#findby)
- [first](array.md#first)
- [fromIterable](array.md#fromiterable)
- [fromRange](array.md#fromrange)
- [fromString](array.md#fromstring)
- [get](array.md#get)
- [includesBy](array.md#includesby)
- [last](array.md#last)
- [push](array.md#push)
- [pushOrReplaceBy](array.md#pushorreplaceby)
- [random](array.md#random)
- [removeBy](array.md#removeby)
- [replace](array.md#replace)
- [replaceBy](array.md#replaceby)
- [reverse](array.md#reverse)
- [sort](array.md#sort)
- [toggleBy](array.md#toggleby)
- [truncate](array.md#truncate)
- [uniqueBy](array.md#uniqueby)
- [unshift](array.md#unshift)
- [unshiftOrReplaceBy](array.md#unshiftorreplaceby)

## Type aliases

### KeyOrReduce

Ƭ **KeyOrReduce**<`T`\>: `PropertyKey` \| [`Reduce`](../interfaces/array.Reduce.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

## Functions

### chain

▸ **chain**<`T`\>(`arr`): [`T`, `T`][]

Creates array of pairs ([x, y, z] =\> [[x, y], [y, z]]).

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

[`T`, `T`][]

Array of pairs.

___

### clone

▸ **clone**<`A`\>(`arr`): [`A`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`] | Array. |

#### Returns

[`A`]

New array.

▸ **clone**<`A`, `B`\>(`arr`): [`A`, `B`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`, `B`] | Array. |

#### Returns

[`A`, `B`]

New array.

▸ **clone**<`A`, `B`, `C`\>(`arr`): [`A`, `B`, `C`]

Clones array.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly [`A`, `B`, `C`] | Array. |

#### Returns

[`A`, `B`, `C`]

New array.

▸ **clone**<`A`, `B`, `C`, `D`\>(`arr`): [`A`, `B`, `C`, `D`]

Clones array.

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
| `arr` | readonly [`A`, `B`, `C`, `D`] | Array. |

#### Returns

[`A`, `B`, `C`, `D`]

New array.

▸ **clone**<`T`\>(`arr`): `T`[]

Clones array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`[]

New array.

___

### drop

▸ **drop**<`T`\>(`arr`, `index`): `T`[]

Removes element at given index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index to be removed. |

#### Returns

`T`[]

New array with one element removed.

___

### findBy

▸ **findBy**<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `T` \| `undefined`

Finds element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

`T` \| `undefined`

The first element matching value if available, _undefined_ otherwise.

___

### first

▸ **first**<`T`\>(`arr`): `T`

Returns the first element from an array.

**`throws`** Error otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The first element if available.

___

### fromIterable

▸ **fromIterable**<`T`\>(`iterable`): `T`[]

Creates array from iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> | Iterable. |

#### Returns

`T`[]

Array.

___

### fromRange

▸ **fromRange**(`from`, `to`, `step?`): [`numbers`](types_core.md#numbers)

Creates array of numbers.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `number` | `undefined` | Lower limit (inclusive). |
| `to` | `number` | `undefined` | Upper limit (inclusive). |
| `step` | `number` | `1` | Step. |

#### Returns

[`numbers`](types_core.md#numbers)

Array of numbers.

___

### fromString

▸ **fromString**(`str`): [`strings`](types_core.md#strings)

Creates array from string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`strings`](types_core.md#strings)

Array.

___

### get

▸ **get**<`T`\>(`arr`, `index`): `T`

Returns element at given index.

**`throws`** Error otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index. |

#### Returns

`T`

Element if available.

___

### includesBy

▸ **includesBy**<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `boolean`

Checks that array contains element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

`boolean`

_True_ if array contains element matching value, _false_ otherwise.

___

### last

▸ **last**<`T`\>(`arr`): `T`

Returns the last element from an array.

**`throws`** Error otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

The last element if available.

___

### push

▸ **push**<`T`\>(`arr`, `value`): `T`[]

Adds element to the end of an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

`T`[]

New array with one element added.

___

### pushOrReplaceBy

▸ **pushOrReplaceBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Replaces elements matching value if found, pushes value otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array.

___

### random

▸ **random**<`T`\>(`arr`): `T`

Picks random element from an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`

Random element.

___

### removeBy

▸ **removeBy**<`T`, `V`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Removes elements matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `V` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `V` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T` \| `V`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array with matching elements removed.

___

### replace

▸ **replace**<`T`\>(`arr`, `index`, `value`): `T`[]

Replaces element at given index.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index. |
| `value` | `T` | Value. |

#### Returns

`T`[]

New array with one element replaced.

___

### replaceBy

▸ **replaceBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Replaces elements matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array with matching elements replaced.

___

### reverse

▸ **reverse**<`T`\>(`arr`): `T`[]

Reverses array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |

#### Returns

`T`[]

New array.

___

### sort

▸ **sort**<`T`\>(`arr`, `compareFn?`): `T`[]

Sorts array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `compareFn?` | (`x`: `T`, `y`: `T`) => `number` | Comparison function. |

#### Returns

`T`[]

New array.

___

### toggleBy

▸ **toggleBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Adds/removes value to/from an array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array.

___

### truncate

▸ **truncate**(`mutableArray`): `void`

Truncates array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableArray` | `unknown`[] | Array. |

#### Returns

`void`

___

### uniqueBy

▸ **uniqueBy**<`T`\>(`arr`, `keyOrReduce`): `T`[]

Creates unique array.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

Unique array.

___

### unshift

▸ **unshift**<`T`\>(`arr`, `value`): `T`[]

Adds element to the beginning of an array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |

#### Returns

`T`[]

New array with one element added.

___

### unshiftOrReplaceBy

▸ **unshiftOrReplaceBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Replaces elements matching value if found, unshifts value otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | [`KeyOrReduce`](array.md#keyorreduce)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array.
