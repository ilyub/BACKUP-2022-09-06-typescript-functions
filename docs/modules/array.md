[Typescript functions](../index.md) / [Exports](../modules.md) / array

# Module: array

## Table of contents

### Interfaces

- [ReduceForComparison](../interfaces/array.ReduceForComparison.md)

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

## Functions

### chain

▸ **chain**<`T`\>(`arr`): [`T`, `T`][]

Creates an array of pairs [x1, x2], [x2, x3]...

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

An array of pairs.

___

### clone

▸ **clone**<`A`\>(`arr`): [`A`]

Creates array copy.

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

Array copy.

▸ **clone**<`A`, `B`\>(`arr`): [`A`, `B`]

Creates array copy.

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

Array copy.

▸ **clone**<`A`, `B`, `C`\>(`arr`): [`A`, `B`, `C`]

Creates array copy.

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

Array copy.

▸ **clone**<`A`, `B`, `C`, `D`\>(`arr`): [`A`, `B`, `C`, `D`]

Creates array copy.

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

Array copy.

▸ **clone**<`T`\>(`arr`): `T`[]

Creates array copy.

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

Array copy.

___

### drop

▸ **drop**<`T`\>(`arr`, `index`): `T`[]

Removes element from an array.

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

▸ **findBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T` \| `undefined`

Finds element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `object` | Value for comparison. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

#### Returns

`T` \| `undefined`

The first element matching value if available, _undefined_ otherwise.

___

### first

▸ **first**<`T`\>(`arr`): `T`

Gets the first element.

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
| `iterable` | [`IterableLike`](types_core.md#iterablelike)<`T`\> | Iterable. |

#### Returns

`T`[]

Array.

___

### fromRange

▸ **fromRange**(`from`, `to`, `step?`): `number`[]

Creates array from range.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `from` | `number` | `undefined` | Starting number. |
| `to` | `number` | `undefined` | Upper limit (inclusive). |
| `step` | `number` | `1` | Step. |

#### Returns

`number`[]

Array of numbers.

___

### fromString

▸ **fromString**(`str`): `string`[]

Creates array from string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`[]

Array.

___

### get

▸ **get**<`T`\>(`arr`, `index`): `T`

Gets element by index.

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

Array element if available.

___

### includesBy

▸ **includesBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `boolean`

Checks that array contains element matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `object` | Value for comparison. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

#### Returns

`boolean`

_True_ if array contains element matching value, _false_ otherwise.

___

### last

▸ **last**<`T`\>(`arr`): `T`

Gets the last element.

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

Adds element to the end of array.

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

Pushes value or replaces elements matching value if found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `T` | Value. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

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

▸ **removeBy**<`T`\>(`arr`, `value`, `keyOrReduce`): `T`[]

Removes elements matching value.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `value` | `object` | Value for comparison. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

#### Returns

`T`[]

New array with matching elements removed.

___

### replace

▸ **replace**<`T`\>(`arr`, `index`, `value`): `T`[]

Replaces element.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `index` | `number` | Index to be replaced. |
| `value` | `T` | New value. |

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
| `value` | `T` | New value. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

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

New reversed array.

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

New sorted array.

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
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`object`\> | Comparison key or reduce function. |

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

Creates an array of unique elements.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arr` | readonly `T`[] | Array. |
| `keyOrReduce` | `PropertyKey` \| [`ReduceForComparison`](../interfaces/array.ReduceForComparison.md)<`T`\> | Comparison key or reduce function. |

#### Returns

`T`[]

An array of unique elements.

___

### unshift

▸ **unshift**<`T`\>(`arr`, `value`): `T`[]

Adds element to the beginning of the array.

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
