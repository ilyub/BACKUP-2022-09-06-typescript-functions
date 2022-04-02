[Typescript functions](../index.md) / [Exports](../modules.md) / programFlow

# Module: programFlow

## Table of contents

### References

- [clearInterval](programFlow.md#clearinterval)
- [clearTimeout](programFlow.md#cleartimeout)
- [setTimeout](programFlow.md#settimeout)

### Functions

- [\_clearInterval](programFlow.md#_clearinterval)
- [\_clearTimeout](programFlow.md#_cleartimeout)
- [\_setTimeout](programFlow.md#_settimeout)
- [setInterval](programFlow.md#setinterval)

## References

### clearInterval

Renames and re-exports [_clearInterval](programFlow.md#_clearinterval)

___

### clearTimeout

Renames and re-exports [_clearTimeout](programFlow.md#_cleartimeout)

___

### setTimeout

Renames and re-exports [_setTimeout](programFlow.md#_settimeout)

## Functions

### \_clearInterval

▸ **_clearInterval**(`id`): `void`

Removes interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`numberU`](types_core.md#numberu) | Id. |

#### Returns

`void`

___

### \_clearTimeout

▸ **_clearTimeout**(`id`): `void`

Removes timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`numberU`](types_core.md#numberu) | Id. |

#### Returns

`void`

___

### \_setTimeout

▸ **_setTimeout**(`callback`, `timeout`): `number`

Adds timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `timeout` | `number` | Timeout. |

#### Returns

`number`

Handler.

___

### setInterval

▸ **setInterval**(`callback`, `timeout`): `number`

Adds interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `timeout` | `number` | Timeout. |

#### Returns

`number`

Handler.
