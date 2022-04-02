[Typescript functions](../index.md) / [Exports](../modules.md) / object

# Module: object

## Table of contents

### Namespaces

- [fromEntries](object.fromEntries.md)

### Interfaces

- [Assign](../interfaces/object.Assign.md)
- [Callback](../interfaces/object.Callback.md)
- [CompareFn](../interfaces/object.CompareFn.md)
- [DefineProperty](../interfaces/object.DefineProperty.md)
- [Descriptor](../interfaces/object.Descriptor.md)
- [Entries](../interfaces/object.Entries.md)
- [Extend](../interfaces/object.Extend.md)
- [Keys](../interfaces/object.Keys.md)
- [Values](../interfaces/object.Values.md)

### Functions

- [assign](object.md#assign)
- [clone](object.md#clone)
- [defineProperty](object.md#defineproperty)
- [entries](object.md#entries)
- [every](object.md#every)
- [extend](object.md#extend)
- [filter](object.md#filter)
- [freeze](object.md#freeze)
- [fromEntries](object.md#fromentries)
- [getPrototypeOf](object.md#getprototypeof)
- [hasOwnProp](object.md#hasownprop)
- [keys](object.md#keys)
- [map](object.md#map)
- [merge](object.md#merge)
- [omit](object.md#omit)
- [removeUndefinedKeys](object.md#removeundefinedkeys)
- [size](object.md#size)
- [some](object.md#some)
- [sort](object.md#sort)
- [unfreeze](object.md#unfreeze)
- [values](object.md#values)

## Functions

### assign

▸ **assign**<`T`\>(`mutableTarget`, ...`sources`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutableTarget` | `T` |
| `...sources` | `Partial`<`T`\>[] |

#### Returns

`T`

___

### clone

▸ **clone**<`T`\>(`obj`): [`Writable`](types_core.md#writable)<`T`\>

Clones object.

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

New object.

___

### defineProperty

▸ **defineProperty**<`T`, `K`\>(`obj`, `key`, `descriptor`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |
| `key` | `PropertyKey` |
| `descriptor` | [`Descriptor`](../interfaces/object.Descriptor.md)<`T`, `K`\> |

#### Returns

`void`

___

### entries

▸ **entries**<`T`\>(`obj`): readonly readonly [keyof `T`, `T`[keyof `T`]][]

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

readonly readonly [keyof `T`, `T`[keyof `T`]][]

Object entries.

___

### every

▸ **every**<`T`\>(`obj`, `callback`): `boolean`

Checks that every object property satisfies condition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `callback` | [`Callback`](../interfaces/object.Callback.md)<`T`\> | Callback. |

#### Returns

`boolean`

_True_ if every object property satisfies condition, _false_ otherwise.

___

### extend

▸ **extend**<`T`, `A`\>(`target`, `source`): `A` & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source` | `A` |

#### Returns

`A` & `T`

▸ **extend**<`T`, `A`, `B`\>(`target`, `source1`, `source2`): `A` & `B` & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |
| `B` | `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `A` |
| `source2` | `B` |

#### Returns

`A` & `B` & `T`

▸ **extend**<`T`, `A`, `B`, `C`\>(`target`, `source1`, `source2`, `source3`): `A` & `B` & `C` & `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `A` | `A` |
| `B` | `B` |
| `C` | `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `T` |
| `source1` | `A` |
| `source2` | `B` |
| `source3` | `C` |

#### Returns

`A` & `B` & `C` & `T`

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
| `callback` | [`Callback`](../interfaces/object.Callback.md)<`T`\> | Callback. |

#### Returns

`Partial`<`T`\>

New object.

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

Object.

___

### fromEntries

▸ **fromEntries**<`K`, `V`\>(`entries`): [`PartialTypedObject`](types_core.md#partialtypedobject)<`K`, `V`\>

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

[`PartialTypedObject`](types_core.md#partialtypedobject)<`K`, `V`\>

Object.

___

### getPrototypeOf

▸ **getPrototypeOf**(`obj`): [`objectU`](types_core.md#objectu)

Returns object prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |

#### Returns

[`objectU`](types_core.md#objectu)

Object prototype if available, _undefined_ otherwise.

___

### hasOwnProp

▸ **hasOwnProp**(`key`, `obj`): `boolean`

Checks that object has property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PropertyKey` | Property key. |
| `obj` | `object` | Object. |

#### Returns

`boolean`

_True_ if object has property, _false_ otherwise.

___

### keys

▸ **keys**<`T`\>(`obj`): readonly keyof `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

readonly keyof `T`[]

___

### map

▸ **map**<`K`, `V`, `R`\>(`obj`, `callback`): [`TypedObject`](types_core.md#typedobject)<`K`, `R`\>

Applies callback to each property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `V` | `V` |
| `R` | `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`TypedObject`](types_core.md#typedobject)<`K`, `V`\> | Object. |
| `callback` | (`value`: `V`, `key`: `K`) => `R` | Callback. |

#### Returns

[`TypedObject`](types_core.md#typedobject)<`K`, `R`\>

New object.

___

### merge

▸ **merge**(...`objects`): [`IndexedObject`](types_core.md#indexedobject)

Merges objects.
If more than one object has the same key, respective values are combined into array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | `Readonly`<[`TypedObject`](types_core.md#typedobject)<`PropertyKey`, `unknown`\>\>[] | Objects. |

#### Returns

[`IndexedObject`](types_core.md#indexedobject)

Merged object.

___

### omit

▸ **omit**<`T`, `K`\>(`obj`, ...`exclude`): [`StrictOmit`](types_object.md#strictomit)<`T`, `K`\>

Removes keys from object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `...exclude` | `K`[] | Keys to remove. |

#### Returns

[`StrictOmit`](types_object.md#strictomit)<`T`, `K`\>

New object with given keys omitted.

___

### removeUndefinedKeys

▸ **removeUndefinedKeys**<`T`\>(`obj`): [`OptionalPropertiesToOptional`](types_object.md#optionalpropertiestooptional)<`T`\>

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

[`OptionalPropertiesToOptional`](types_object.md#optionalpropertiestooptional)<`T`\>

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

### some

▸ **some**<`T`\>(`obj`, `callback`): `boolean`

Checks that some object property satisfies condition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `callback` | [`Callback`](../interfaces/object.Callback.md)<`T`\> | Callback. |

#### Returns

`boolean`

_True_ if some object property satisfies condition, _false_ otherwise.

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
| `compareFn?` | [`CompareFn`](../interfaces/object.CompareFn.md)<`T`\> | Comparison function. |

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

Object.

___

### values

▸ **values**<`T`\>(`obj`): readonly `T`[keyof `T`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

readonly `T`[keyof `T`][]
