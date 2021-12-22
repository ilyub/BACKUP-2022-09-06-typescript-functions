[Typescript functions](../index.md) / [Exports](../modules.md) / object

# Module: object

## Table of contents

### Namespaces

- [freeze](object.freeze.md)
- [fromEntries](object.fromEntries.md)
- [unfreeze](object.unfreeze.md)

### Interfaces

- [Descriptor](../interfaces/object.Descriptor.md)

### Type aliases

- [FilterCallback](object.md#filtercallback)
- [MapCallback](object.md#mapcallback)

### Functions

- [assign](object.md#assign)
- [clone](object.md#clone)
- [compare](object.md#compare)
- [defineProperty](object.md#defineproperty)
- [entries](object.md#entries)
- [extend](object.md#extend)
- [filter](object.md#filter)
- [freeze](object.md#freeze)
- [freezeDeep](object.md#freezedeep)
- [fromEntries](object.md#fromentries)
- [getPrototypeOf](object.md#getprototypeof)
- [hasOwnProp](object.md#hasownprop)
- [keys](object.md#keys)
- [map](object.md#map)
- [merge](object.md#merge)
- [omit](object.md#omit)
- [removeUndefinedKeys](object.md#removeundefinedkeys)
- [size](object.md#size)
- [sort](object.md#sort)
- [unfreeze](object.md#unfreeze)
- [unfreezeDeep](object.md#unfreezedeep)
- [values](object.md#values)

## Type aliases

### FilterCallback

Ƭ **FilterCallback**<`T`\>: (`value`: `T`[keyof `T`], `key`: keyof `T`) => `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Type declaration

▸ (`value`, `key`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T`[keyof `T`] |
| `key` | keyof `T` |

##### Returns

`boolean`

___

### MapCallback

Ƭ **MapCallback**<`V`, `R`\>: (`value`: `V`, `key`: `string`) => `R`

#### Type parameters

| Name |
| :------ |
| `V` |
| `R` |

#### Type declaration

▸ (`value`, `key`): `R`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `V` |
| `key` | `string` |

##### Returns

`R`

## Functions

### assign

▸ **assign**<`T`, `K`\>(`mutableTarget`, ...`sources`): `T`

Typed version of Object.assign.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableTarget` | `T` | Target object. |
| `...sources` | { readonly [L in string \| number \| symbol]: T[L] }[] | Sources. |

#### Returns

`T`

Target.

___

### clone

▸ **clone**<`T`\>(`obj`): [`Writable`](types_core.md#writable)<`T`\>

Creates object copy.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`Writable`](types_core.md#writable)<`T`\>

Object copy.

___

### compare

▸ **compare**(`obj1`, `obj2`): `boolean`

Compares two objects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj1` | [`objectU`](types_core.md#objectu) | Object 1. |
| `obj2` | [`objectU`](types_core.md#objectu) | Object 2. |

#### Returns

`boolean`

_True_ if objects are equal, _false_ otherwise.

___

### defineProperty

▸ **defineProperty**<`T`\>(`obj`, `key`, `descriptor`): `void`

Typed version of Object.defineProperty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `key` | `PropertyKey` | Property name. |
| `descriptor` | [`Descriptor`](../interfaces/object.Descriptor.md)<`T`\> | Descriptor. |

#### Returns

`void`

___

### entries

▸ **entries**<`T`\>(`obj`): `ReadonlyArray`<readonly [keyof `T`, `T`[keyof `T`]]\>

Typed version of Object.entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`ReadonlyArray`<readonly [keyof `T`, `T`[keyof `T`]]\>

Object entries.

___

### extend

▸ **extend**<`T`, `A`\>(`target`, `source`): `T` & `A`

Typed version of Object.assign.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | Target object. |
| `source` | `A` | Source. |

#### Returns

`T` & `A`

Target.

▸ **extend**<`T`, `A`, `B`\>(`target`, `source1`, `source2`): `T` & `A` & `B`

Typed version of Object.assign.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |
| `B` | `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | Target object. |
| `source1` | `A` | Source 1. |
| `source2` | `B` | Source 2. |

#### Returns

`T` & `A` & `B`

Target.

▸ **extend**<`T`, `A`, `B`, `C`\>(`target`, `source1`, `source2`, `source3`): `T` & `A` & `B` & `C`

Typed version of Object.assign.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |
| `B` | `B` |
| `C` | `C` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `T` | Target object. |
| `source1` | `A` | Source 1. |
| `source2` | `B` | Source 2. |
| `source3` | `C` | Source 3. |

#### Returns

`T` & `A` & `B` & `C`

Target.

___

### filter

▸ **filter**<`T`\>(`obj`, `callback`): `Partial`<`T`\>

Filters object by callback.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `callback` | [`FilterCallback`](object.md#filtercallback)<`T`\> | Callback. |

#### Returns

`Partial`<`T`\>

New filtered object.

___

### freeze

▸ **freeze**<`T`\>(`obj`): `Readonly`<`T`\>

Marks object as readonly.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`Readonly`<`T`\>

Object marked as readonly.

___

### freezeDeep

▸ **freezeDeep**<`T`\>(`obj`): [`DeepReadonly`](types_core.md#deepreadonly)<`T`\>

Marks object as deep readonly.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`DeepReadonly`](types_core.md#deepreadonly)<`T`\>

Object marked as deep readonly.

___

### fromEntries

▸ **fromEntries**<`K`, `V`\>(`entries`): [`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\>

Creates object from entries.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `Iterable`<readonly [`K`, `V`]\> | Entries. |

#### Returns

[`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\>

Object.

___

### getPrototypeOf

▸ **getPrototypeOf**(`obj`): [`objectU`](types_core.md#objectu)

Typed version of Object.getPrototypeOf.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |

#### Returns

[`objectU`](types_core.md#objectu)

Prototype if available, _undefined_ otherwise.

___

### hasOwnProp

▸ **hasOwnProp**(`key`, `obj`): `boolean`

Alias of Object.prototype.hasOwnProperty.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PropertyKey` | Property name. |
| `obj` | `object` | Object. |

#### Returns

`boolean`

_True_ if object has property, _false_ otherwise.

___

### keys

▸ **keys**<`T`\>(`obj`): `ReadonlyArray`<keyof `T`\>

Typed version of Object.keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`ReadonlyArray`<keyof `T`\>

Object keys.

___

### map

▸ **map**<`V`, `R`\>(`obj`, `callback`): [`ReadonlyRecord`](types_core.md#readonlyrecord)<`string`, `R`\>

Applies callback to each property.

#### Type parameters

| Name |
| :------ |
| `V` |
| `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Readonly`<`Record`<`string`, `V`\>\> | Object. |
| `callback` | [`MapCallback`](object.md#mapcallback)<`V`, `R`\> | Callback. |

#### Returns

[`ReadonlyRecord`](types_core.md#readonlyrecord)<`string`, `R`\>

New object.

___

### merge

▸ **merge**(...`objects`): [`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)

Merges several objects.
If more than one object has the same key, respective values are combined into array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | `Readonly`<[`IndexedObject`](types_core.md#indexedobject)<`unknown`\>\>[] | Objects. |

#### Returns

[`ReadonlyIndexedObject`](types_core.md#readonlyindexedobject)

Merged object.

___

### omit

▸ **omit**<`T`, `K`\>(`obj`, ...`exclude`): [`SafeOmit`](types_core.md#safeomit)<`T`, `K`\>

Omits keys from object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `...exclude` | `K`[] | Keys to exclude. |

#### Returns

[`SafeOmit`](types_core.md#safeomit)<`T`, `K`\>

New object with given keys omitted.

___

### removeUndefinedKeys

▸ **removeUndefinedKeys**<`T`\>(`obj`): `T`

Removes undefined keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`OptionalToUndefined`](types_core.md#optionaltoundefined)<`T`\> | Object. |

#### Returns

`T`

New object with undefined keys removed.

▸ **removeUndefinedKeys**<`T`\>(`obj`): [`UndefinedToOptional`](types_core.md#undefinedtooptional)<`T`\>

Removes undefined keys.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`UndefinedToOptional`](types_core.md#undefinedtooptional)<`T`\>

New object with undefined keys removed.

___

### size

▸ **size**(`obj`): `number`

Returns the number of enumerable properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |

#### Returns

`number`

The number of enumerable properties.

___

### sort

▸ **sort**<`T`\>(`obj`, `compareFn?`): `T`

Sorts object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `compareFn?` | (`x`: [`Entry`](types_core.md#entry)<`T`\>, `y`: [`Entry`](types_core.md#entry)<`T`\>) => `number` | Comparison function. |

#### Returns

`T`

New object.

___

### unfreeze

▸ **unfreeze**<`T`\>(`obj`): [`Writable`](types_core.md#writable)<`T`\>

Marks object as writable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`Writable`](types_core.md#writable)<`T`\>

Object marked as writable.

___

### unfreezeDeep

▸ **unfreezeDeep**<`T`\>(`obj`): [`DeepWritable`](types_core.md#deepwritable)<`T`\>

Marks object as deep writable.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`DeepWritable`](types_core.md#deepwritable)<`T`\>

Object marked as deep writable.

___

### values

▸ **values**<`T`\>(`obj`): `ReadonlyArray`<`T`[keyof `T`]\>

Typed version of Object.values.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

`ReadonlyArray`<`T`[keyof `T`]\>

Object values.
