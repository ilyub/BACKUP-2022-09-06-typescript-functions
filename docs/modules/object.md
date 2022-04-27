[Typescript functions](../index.md) / [Exports](../modules.md) / object

# Module: object

## Table of contents

### Interfaces

- [CompareFn](../interfaces/object.CompareFn.md)
- [Descriptor](../interfaces/object.Descriptor.md)
- [Predicate](../interfaces/object.Predicate.md)

### Variables

- [fromEntries](object.md#fromentries)

### Functions

- [assign](object.md#assign)
- [clone](object.md#clone)
- [defineProperty](object.md#defineproperty)
- [entries](object.md#entries)
- [every](object.md#every)
- [extend](object.md#extend)
- [filter](object.md#filter)
- [freeze](object.md#freeze)
- [get](object.md#get)
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

## Variables

### fromEntries

• `Const` **fromEntries**: { `exhaustive`: <K, V\>(`entries`: `Iterable`<[`Entry`](types_core.md#entry)<`K`, `V`\>\>) => [`Rec`](types_core.md#rec)<`K`, `V`\>  } & <K, V\>(`entries`: `Iterable`<[`Entry`](types_core.md#entry)<`K`, `V`\>\>) => [`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\>

## Functions

### assign

▸ **assign**<`T`\>(`mutableTarget`, ...`sources`): `T`

Typed version of Object.assign.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutableTarget` | `T` | Target. |
| `...sources` | `Partial`<`T`\>[] | Sources. |

#### Returns

`T`

Target.

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

Typed version of Object.defineProperty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `K` | extends `string` \| `number` \| `symbol` = keyof `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `key` | `K` | Key. |
| `descriptor` | [`Descriptor`](../interfaces/object.Descriptor.md)<`T`, `K`\> | Descriptor. |

#### Returns

`void`

___

### entries

▸ **entries**<`K`, `V`\>(`obj`): [`Entry`](types_core.md#entry)<`K`, `V`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\> |

#### Returns

[`Entry`](types_core.md#entry)<`K`, `V`\>[]

▸ **entries**<`T`\>(`obj`): [`Entry`](types_core.md#entry)<`string` & keyof `T`, `T`[`string` & keyof `T` & `number` & keyof `T`]\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

[`Entry`](types_core.md#entry)<`string` & keyof `T`, `T`[`string` & keyof `T` & `number` & keyof `T`]\>[]

___

### every

▸ **every**<`T`\>(`obj`, `predicate`): `boolean`

Checks if every object property satisfies condition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/object.Predicate.md)<`T`\> | Predicate. |

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

▸ **filter**<`T`\>(`obj`, `predicate`): `Partial`<`T`\>

Filters object by predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/object.Predicate.md)<`T`\> | Predicate. |

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

### get

▸ **get**<`T`\>(`obj`, `key`, `guard`): `T`

Returns object property.

**`throws`** AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `object` | Object. |
| `key` | `PropertyKey` | Key. |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |

#### Returns

`T`

Object property if its type is T.

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

Checks if object has property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `PropertyKey` | Key. |
| `obj` | `object` | Object. |

#### Returns

`boolean`

_True_ if object has property, _false_ otherwise.

___

### keys

▸ **keys**<`K`, `V`\>(`obj`): `K`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\> |

#### Returns

`K`[]

▸ **keys**<`T`\>(`obj`): `string` & keyof `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`string` & keyof `T`[]

___

### map

▸ **map**<`K`, `V`, `R`\>(`obj`, `callback`): [`Rec`](types_core.md#rec)<`K`, `R`\>

Applies callback to each property.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |
| `R` | `R` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Rec`](types_core.md#rec)<`K`, `V`\> | Object. |
| `callback` | (`value`: `V`, `key`: `K`) => `R` | Callback. |

#### Returns

[`Rec`](types_core.md#rec)<`K`, `R`\>

New object.

___

### merge

▸ **merge**(...`objects`): [`IndexedObject`](types_core.md#indexedobject)

Merges objects.
If more than one object has the same key, respective values are combined into array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...objects` | [`IndexedObjects`](types_core.md#indexedobjects)<`unknown`\> | Objects. |

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
| `K` | extends `string` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `...exclude` | `K`[] | Keys to omit. |

#### Returns

[`StrictOmit`](types_object.md#strictomit)<`T`, `K`\>

New object.

___

### removeUndefinedKeys

▸ **removeUndefinedKeys**<`T`\>(`obj`): [`OptionalStyle`](types_object.md#optionalstyle)<`T`\>

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

[`OptionalStyle`](types_object.md#optionalstyle)<`T`\>

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

▸ **some**<`T`\>(`obj`, `predicate`): `boolean`

Checks if some object property satisfies condition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |
| `predicate` | [`Predicate`](../interfaces/object.Predicate.md)<`T`\> | Predicate. |

#### Returns

`boolean`

_True_ if some object property satisfies condition, _false_ otherwise.

___

### sort

▸ **sort**<`K`, `V`\>(`obj`, `compareFn?`): [`Rec`](types_core.md#rec)<`K`, `V`\>

Sorts object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`Rec`](types_core.md#rec)<`K`, `V`\> | Object. |
| `compareFn?` | [`CompareFn`](../interfaces/object.CompareFn.md)<[`Rec`](types_core.md#rec)<`K`, `V`\>\> | Comparison function. |

#### Returns

[`Rec`](types_core.md#rec)<`K`, `V`\>

New object.

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

▸ **values**<`K`, `V`\>(`obj`): `V`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |
| `V` | `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | [`PartialRecord`](types_core.md#partialrecord)<`K`, `V`\> |

#### Returns

`V`[]

▸ **values**<`T`\>(`obj`): `T`[`string` & keyof `T` & `number` & keyof `T`][]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `T` |

#### Returns

`T`[`string` & keyof `T` & `number` & keyof `T`][]
