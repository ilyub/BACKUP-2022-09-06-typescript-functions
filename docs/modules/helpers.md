[Typescript functions](../index.md) / [Exports](../modules.md) / helpers

# Module: helpers

## Table of contents

### Enumerations

- [ProxyHandlerAction](../enums/helpers.ProxyHandlerAction.md)

### Interfaces

- [FacadeOwnMethods](../interfaces/helpers.FacadeOwnMethods.md)

### Type Aliases

- [ClassToInterface](helpers.md#classtointerface)
- [Facade](helpers.md#facade)
- [SafeAccess](helpers.md#safeaccess)
- [SafeAccessGuards](helpers.md#safeaccessguards)

### Functions

- [classToInterface](helpers.md#classtointerface-1)
- [createFacade](helpers.md#createfacade)
- [onDemand](helpers.md#ondemand)
- [safeAccess](helpers.md#safeaccess-1)
- [wait](helpers.md#wait)
- [wrapProxyHandler](helpers.md#wrapproxyhandler)

## Type Aliases

### ClassToInterface

Ƭ **ClassToInterface**<`T`\>: { [K in keyof T]: T[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Facade

Ƭ **Facade**<`I`, `E`\>: `E` & [`FacadeOwnMethods`](../interfaces/helpers.FacadeOwnMethods.md)<`I`\> & `I`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `I` | `I` |
| `E` | `unknown` |

___

### SafeAccess

Ƭ **SafeAccess**<`T`, `W`, `R`\>: [`And`](types_core.md#and)<{ [K in W]: T[K] }, { readonly [K in R]: T[K] }\>

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

## Functions

### classToInterface

▸ **classToInterface**<`T`\>(`obj`): [`ClassToInterface`](helpers.md#classtointerface)<`T`\>

Self-binds all methods.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `T` | Object. |

#### Returns

[`ClassToInterface`](helpers.md#classtointerface)<`T`\>

Proxy.

___

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
| `action` | [`ProxyHandlerAction`](../enums/helpers.ProxyHandlerAction.md) | Action for missing methods. |
| `handler` | `Readonly`<`ProxyHandler`<`T`\>\> | Handler. |

#### Returns

`ProxyHandler`<`T`\>

New handler with missing methods added.
