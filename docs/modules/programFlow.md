[Typescript functions](../index.md) / [Exports](../modules.md) / programFlow

# Module: programFlow

## Table of contents

### Functions

- [clearInterval](programFlow.md#clearinterval)
- [clearTimeout](programFlow.md#cleartimeout)
- [setInterval](programFlow.md#setinterval)
- [setTimeout](programFlow.md#settimeout)

## Functions

### clearInterval

▸ **clearInterval**(`id`): `void`

Clears interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`numberU`](types_core.md#numberu) | ID. |

#### Returns

`void`

___

### clearTimeout

▸ **clearTimeout**(`id`): `void`

Clears timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`numberU`](types_core.md#numberu) | ID. |

#### Returns

`void`

___

### setInterval

▸ **setInterval**(`callback`, `timeout`): `number`

Sets interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `timeout` | `number` | Timeout. |

#### Returns

`number`

Handler.

___

### setTimeout

▸ **setTimeout**(`callback`, `timeout`): `number`

Sets timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `timeout` | `number` | Timeout. |

#### Returns

`number`

Handler.
