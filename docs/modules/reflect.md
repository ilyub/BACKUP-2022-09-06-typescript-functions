[Typescript functions](../index.md) / [Exports](../modules.md) / reflect

# Module: reflect

## Table of contents

### Type aliases

- [MetadataKey](reflect.md#metadatakey)

### Functions

- [defineMetadata](reflect.md#definemetadata)
- [defineMetadataKey](reflect.md#definemetadatakey)
- [get](reflect.md#get)
- [getMetadata](reflect.md#getmetadata)
- [getMetadataKey](reflect.md#getmetadatakey)
- [getOwnMetadata](reflect.md#getownmetadata)
- [getOwnMetadataKey](reflect.md#getownmetadatakey)
- [set](reflect.md#set)

## Type aliases

### MetadataKey

Ƭ **MetadataKey**: `string` \| `symbol`

## Functions

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
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property name. |

#### Returns

`void`

___

### get

▸ **get**(`target`, `key`): `unknown`

Typed version of Reflect.get.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property name. |

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
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property name. |

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
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property name. |

#### Returns

`unknown`

Metadata value.

___

### set

▸ **set**(`target`, `key`, `value`): `void`

Typed version of Reflect.set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property name. |
| `value` | `unknown` | Property value. |

#### Returns

`void`
