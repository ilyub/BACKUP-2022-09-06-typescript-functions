[Typescript functions](../index.md) / [Exports](../modules.md) / helpers

# Module: helpers

## Table of contents

### Interfaces

- [FacadeOwnMethods](../interfaces/helpers.FacadeOwnMethods.md)

### Type aliases

- [Facade](helpers.md#facade)
- [ProxyHandlerAction](helpers.md#proxyhandleraction)
- [SafeAccess](helpers.md#safeaccess)
- [SafeAccessGuards](helpers.md#safeaccessguards)
- [ValidationObject](helpers.md#validationobject)

### Functions

- [createFacade](helpers.md#createfacade)
- [createValidationObject](helpers.md#createvalidationobject)
- [onDemand](helpers.md#ondemand)
- [safeAccess](helpers.md#safeaccess)
- [typedef](helpers.md#typedef)
- [wait](helpers.md#wait)
- [wrapProxyHandler](helpers.md#wrapproxyhandler)

## Type aliases

### Facade

Ƭ **Facade**<`I`, `E`\>: `E` & [`FacadeOwnMethods`](../interfaces/helpers.FacadeOwnMethods.md)<`I`\> & `I`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `E` | `unknown` |

___

### ProxyHandlerAction

Ƭ **ProxyHandlerAction**: ``"doDefault"`` \| ``"throw"``

___

### SafeAccess

Ƭ **SafeAccess**<`T`, `W`, `R`\>: [`Join2`](types_object.md#join2)<{ [K in W]: T[K] }, { readonly [K in R]: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `W` | extends `string` & keyof `T` |
| `R` | extends `string` & keyof `T` |

___

### SafeAccessGuards

Ƭ **SafeAccessGuards**<`T`, `W`\>: { readonly [K in W]: Guard<T[K]\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `W` | extends `string` & keyof `T` |

___

### ValidationObject

Ƭ **ValidationObject**<`T`\>: `ReadonlySet`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

## Functions

### createFacade

▸ **createFacade**<`I`, `E`\>(`name`, `extension`): [`Facade`](helpers.md#facade)<`I`, `E`\>

Creates facade.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | extends `object` |
| `E` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Facade name. |
| `extension` | `E` | Facade extension. |

#### Returns

[`Facade`](helpers.md#facade)<`I`, `E`\>

Facade.

___

### createValidationObject

▸ **createValidationObject**<`T`\>(`source`): [`ValidationObject`](helpers.md#validationobject)<`T`\>

Creates validation object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `PropertyKey` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`TypedObject`](types_core.md#typedobject)<`T`, `T`\> | Source. |

#### Returns

[`ValidationObject`](helpers.md#validationobject)<`T`\>

Validation object.

___

### onDemand

▸ **onDemand**<`T`\>(`generator`): `T`

Generates resource on demand.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | () => `T` | Resource generator. |

#### Returns

`T`

Resource.

___

### safeAccess

▸ **safeAccess**<`T`, `W`, `R`\>(`obj`, `guards`, `readonlyKeys?`): [`SafeAccess`](helpers.md#safeaccess)<`T`, `W`, `R`\>

Creates safe access interface for an object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `W` | extends `string` |
| `R` | extends `string` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `T` | `undefined` | Object. |
| `guards` | [`SafeAccessGuards`](helpers.md#safeaccessguards)<`T`, `W`\> | `undefined` | Guards. |
| `readonlyKeys` | readonly `R`[] | `[]` | Readonly keys. |

#### Returns

[`SafeAccess`](helpers.md#safeaccess)<`T`, `W`, `R`\>

Safe access interface.

___

### typedef

▸ **typedef**<`T`\>(`value`): `T`

Defines value type.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |

#### Returns

`T`

Value.

___

### wait

▸ **wait**(`timeout`): `Promise`<`void`\>

Delays program execution.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `timeout` | `number` | Timeout (ms). |

#### Returns

`Promise`<`void`\>

___

### wrapProxyHandler

▸ **wrapProxyHandler**<`T`\>(`id`, `action`, `handler`): `ProxyHandler`<`T`\>

Adds missing methods to proxy handler.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | ID. |
| `action` | [`ProxyHandlerAction`](helpers.md#proxyhandleraction) | Action for missing methods. |
| `handler` | `Readonly`<`ProxyHandler`<`T`\>\> | Handler. |

#### Returns

`ProxyHandler`<`T`\>

New handler with missing methods added.
