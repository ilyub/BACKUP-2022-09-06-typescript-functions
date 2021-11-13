[Typescript functions](../index.md) / [Exports](../modules.md) / helpers

# Module: helpers

## Table of contents

### Interfaces

- [FacadeOwnMethods](../interfaces/helpers.FacadeOwnMethods.md)

### Type aliases

- [Facade](helpers.md#facade)

### Functions

- [createFacade](helpers.md#createfacade)
- [onDemand](helpers.md#ondemand)
- [wait](helpers.md#wait)
- [wrapProxyHandler](helpers.md#wrapproxyhandler)

## Type aliases

### Facade

Ƭ **Facade**<`F`, `E`\>: `F` & [`FacadeOwnMethods`](../interfaces/helpers.FacadeOwnMethods.md)<`F`\> & `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | `F` |
| `E` | `unknown` |

## Functions

### createFacade

▸ **createFacade**<`F`, `E`\>(`name`, `extension`): [`Facade`](helpers.md#facade)<`F`, `E`\>

Creates facade.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends `object` |
| `E` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Facade name. |
| `extension` | `E` | Facade extension. |

#### Returns

[`Facade`](helpers.md#facade)<`F`, `E`\>

Facade.

___

### onDemand

▸ **onDemand**<`T`\>(`generator`): `T`

Delays resource generation until demanded.

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

▸ **wrapProxyHandler**<`T`\>(`handler`): `ProxyHandler`<`T`\>

Adds missing methods to proxy handler.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `Readonly`<`ProxyHandler`<`T`\>\> | Handler. |

#### Returns

`ProxyHandler`<`T`\>

New handler with missing methods added.
