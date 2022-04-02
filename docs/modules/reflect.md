[Typescript functions](../index.md) / [Exports](../modules.md) / reflect

# Module: reflect

## Table of contents

### Type aliases

- [MetadataKey](reflect.md#metadatakey)

### Functions

- [apply](reflect.md#apply)
- [construct](reflect.md#construct)
- [defineMetadata](reflect.md#definemetadata)
- [defineMetadataKey](reflect.md#definemetadatakey)
- [defineProperty](reflect.md#defineproperty)
- [deleteProperty](reflect.md#deleteproperty)
- [get](reflect.md#get)
- [getMetadata](reflect.md#getmetadata)
- [getMetadataKey](reflect.md#getmetadatakey)
- [getOwnMetadata](reflect.md#getownmetadata)
- [getOwnMetadataKey](reflect.md#getownmetadatakey)
- [getOwnPropertyDescriptor](reflect.md#getownpropertydescriptor)
- [getPrototypeOf](reflect.md#getprototypeof)
- [has](reflect.md#has)
- [hasMetadata](reflect.md#hasmetadata)
- [hasMetadataKey](reflect.md#hasmetadatakey)
- [hasOwnMetadata](reflect.md#hasownmetadata)
- [hasOwnMetadataKey](reflect.md#hasownmetadatakey)
- [isExtensible](reflect.md#isextensible)
- [ownKeys](reflect.md#ownkeys)
- [preventExtensions](reflect.md#preventextensions)
- [set](reflect.md#set)
- [setPrototypeOf](reflect.md#setprototypeof)

## Type aliases

### MetadataKey

Ƭ **MetadataKey**: `string` \| `symbol`

## Functions

### apply

▸ **apply**(`target`, `thisArg`, `args`): `unknown`

Typed version of Reflect.apply.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Function` | Target function. |
| `thisArg` | `unknown` | This argument. |
| `args` | `ArrayLike`<`unknown`\> | Arguments. |

#### Returns

`unknown`

Function execution result.

___

### construct

▸ **construct**(`target`, `args`, `newTarget?`): `unknown`

Typed version of Reflect.construct.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `Function` | Target function. |
| `args` | `ArrayLike`<`unknown`\> | Arguments. |
| `newTarget?` | `Function` | New target function. |

#### Returns

`unknown`

Constructed object.

___

### defineMetadata

▸ **defineMetadata**(`metadataKey`, `metadataValue`, `target`): `void`

Typed version of Reflect.defineMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `metadataValue` | `unknown` | Metadata value. |
| `target` | `object` | Target object. |

#### Returns

`void`

___

### defineMetadataKey

▸ **defineMetadataKey**(`metadataKey`, `metadataValue`, `target`, `key`): `void`

Typed version of Reflect.defineMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `metadataValue` | `unknown` | Metadata value. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |

#### Returns

`void`

___

### defineProperty

▸ **defineProperty**(`target`, `propertyKey`, `attributes`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |
| `attributes` | `PropertyDescriptor` |

#### Returns

`boolean`

___

### deleteProperty

▸ **deleteProperty**(`target`, `propertyKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |

#### Returns

`boolean`

___

### get

▸ **get**(`target`, `key`): `unknown`

Typed version of Reflect.get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property key. |

#### Returns

`unknown`

Property value.

___

### getMetadata

▸ **getMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`unknown`

Metadata value.

___

### getMetadataKey

▸ **getMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |

#### Returns

`unknown`

Metadata value.

___

### getOwnMetadata

▸ **getOwnMetadata**(`metadataKey`, `target`): `unknown`

Typed version of Reflect.getOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`unknown`

Metadata value.

___

### getOwnMetadataKey

▸ **getOwnMetadataKey**(`metadataKey`, `target`, `key`): `unknown`

Typed version of Reflect.getOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |

#### Returns

`unknown`

Metadata value.

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`target`, `propertyKey`): `PropertyDescriptor` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |

#### Returns

`PropertyDescriptor` \| `undefined`

___

### getPrototypeOf

▸ **getPrototypeOf**(`target`): `object` \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

`object` \| ``null``

___

### has

▸ **has**(`target`, `propertyKey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |

#### Returns

`boolean`

___

### hasMetadata

▸ **hasMetadata**(`metadataKey`, `target`): `boolean`

Typed version of Reflect.hasMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasMetadataKey

▸ **hasMetadataKey**(`metadataKey`, `target`, `key`): `boolean`

Typed version of Reflect.hasMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasOwnMetadata

▸ **hasOwnMetadata**(`metadataKey`, `target`): `boolean`

Typed version of Reflect.hasOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### hasOwnMetadataKey

▸ **hasOwnMetadataKey**(`metadataKey`, `target`, `key`): `boolean`

Typed version of Reflect.hasOwnMetadata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |

#### Returns

`boolean`

_True_ if key exists, _false_ otherwise.

___

### isExtensible

▸ **isExtensible**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

`boolean`

___

### ownKeys

▸ **ownKeys**(`target`): (`string` \| `symbol`)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

(`string` \| `symbol`)[]

___

### preventExtensions

▸ **preventExtensions**(`target`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

`boolean`

___

### set

▸ **set**(`target`, `propertyKey`, `value`, `receiver?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `propertyKey` | `PropertyKey` |
| `value` | `any` |
| `receiver?` | `any` |

#### Returns

`boolean`

___

### setPrototypeOf

▸ **setPrototypeOf**(`target`, `proto`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `proto` | ``null`` \| `object` |

#### Returns

`boolean`
