[Typescript functions](../index.md) / [Exports](../modules.md) / reflect

# Module: reflect

## Table of contents

### Type Aliases

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

## Type Aliases

### MetadataKey

Ƭ **MetadataKey**: `string` \| `symbol`

## Functions

### apply

▸ **apply**(`target`, `thisArg`, `args`): `unknown`

Typed version of Reflect.apply.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`Callable`](../interfaces/types_function.Callable.md)<`unknown`\> | Target function. |
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
| `target` | [`Constructor`](../interfaces/types_function.Constructor.md)<`unknown`\> | Target function. |
| `args` | `ArrayLike`<`unknown`\> | Arguments. |
| `newTarget?` | [`Constructor`](../interfaces/types_function.Constructor.md)<`unknown`\> | New target function. |

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

Adds a property to an object, or modifies attributes of an existing property.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object on which to add or modify the property. This can be a native JavaScript object         (that is, a user-defined object or a built in object) or a DOM object. |
| `propertyKey` | `PropertyKey` | The property name. |
| `attributes` | `PropertyDescriptor` & `ThisType`<`any`\> | Descriptor for the property. It can be for a data property or an accessor property. |

#### Returns

`boolean`

___

### deleteProperty

▸ **deleteProperty**(`target`, `propertyKey`): `boolean`

Removes a property from an object, equivalent to `delete target[propertyKey]`,
except it won't throw if `target[propertyKey]` is non-configurable.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object from which to remove the own property. |
| `propertyKey` | `PropertyKey` | The property name. |

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

▸ **get**<`T`\>(`target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.get.

**`Throws`**

AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Target object. |
| `key` | `PropertyKey` | Property key. |
| `guard?` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Property value if its type is T.

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

▸ **getMetadata**<`T`\>(`metadataKey`, `target`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getMetadata.

**`Throws`**

AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `guard?` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

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

▸ **getMetadataKey**<`T`\>(`metadataKey`, `target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getMetadata.

**`Throws`**

AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |
| `guard?` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

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

▸ **getOwnMetadata**<`T`\>(`metadataKey`, `target`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getOwnMetadata.

**`Throws`**

AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `guard?` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

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

▸ **getOwnMetadataKey**<`T`\>(`metadataKey`, `target`, `key`, `guard?`, `defVal?`): `T`

Typed version of Reflect.getOwnMetadata.

**`Throws`**

AssertionError otherwise.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `metadataKey` | [`MetadataKey`](reflect.md#metadatakey) | Metadata key. |
| `target` | `object` | Target object. |
| `key` | [`MetadataKey`](reflect.md#metadatakey) | Property key. |
| `guard?` | [`Guard`](../interfaces/guards.Guard.md)<`T`\> | Guard for type T. |
| `defVal?` | `T` | Default value. |

#### Returns

`T`

Metadata value if its type is T.

___

### getOwnPropertyDescriptor

▸ **getOwnPropertyDescriptor**(`target`, `propertyKey`): `PropertyDescriptor` \| `undefined`

Gets the own property descriptor of the specified object.
An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the property. |
| `propertyKey` | `PropertyKey` | The property name. |

#### Returns

`PropertyDescriptor` \| `undefined`

___

### getPrototypeOf

▸ **getPrototypeOf**(`target`): `object` \| ``null``

Returns the prototype of an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The object that references the prototype. |

#### Returns

`object` \| ``null``

___

### has

▸ **has**(`target`, `propertyKey`): `boolean`

Equivalent to `propertyKey in target`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the property on itself or in its prototype chain. |
| `propertyKey` | `PropertyKey` | Name of the property. |

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

Returns a value that indicates whether new properties can be added to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object to test. |

#### Returns

`boolean`

___

### ownKeys

▸ **ownKeys**(`target`): (`string` \| `symbol`)[]

Returns the string and symbol keys of the own properties of an object. The own properties of an object
are those that are defined directly on that object, and are not inherited from the object's prototype.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the own properties. |

#### Returns

(`string` \| `symbol`)[]

___

### preventExtensions

▸ **preventExtensions**(`target`): `boolean`

Prevents the addition of new properties to an object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object to make non-extensible. |

#### Returns

`boolean`

Whether the object has been made non-extensible.

___

### set

▸ **set**(`target`, `propertyKey`, `value`, `receiver?`): `boolean`

Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | Object that contains the property on itself or in its prototype chain. |
| `propertyKey` | `PropertyKey` | Name of the property. |
| `value` | `any` | - |
| `receiver?` | `any` | The reference to use as the `this` value in the setter function,         if `target[propertyKey]` is an accessor property. |

#### Returns

`boolean`

___

### setPrototypeOf

▸ **setPrototypeOf**(`target`, `proto`): `boolean`

Sets the prototype of a specified object o to object proto or null.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `object` | The object to change its prototype. |
| `proto` | ``null`` \| `object` | The value of the new prototype or null. |

#### Returns

`boolean`

Whether setting the prototype was successful.
