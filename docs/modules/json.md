[Typescript functions](../index.md) / [Exports](../modules.md) / json

# Module: json

## Table of contents

### Functions

- [decode](json.md#decode)
- [encode](json.md#encode)
- [eq](json.md#eq)
- [neq](json.md#neq)

## Functions

### decode

▸ **decode**(`source`): `unknown`

Decodes JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`stringE`](types_core.md#stringe) | JSON string. |

#### Returns

`unknown`

Decoded value.

___

### encode

▸ **encode**(`source`): `string`

Encodes to JSON string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `unknown` | Value to encode. |

#### Returns

`string`

JSON string.

___

### eq

▸ **eq**(`x`, `y`): `boolean`

Compares two values as JSON strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | Value. |
| `y` | `unknown` | Value. |

#### Returns

`boolean`

_True_ if two values are not equal, _false_ otherwise.

___

### neq

▸ **neq**(`x`, `y`): `boolean`

Compares two values as JSON strings.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x` | `unknown` | Value. |
| `y` | `unknown` | Value. |

#### Returns

`boolean`

_True_ if two values are not equal, _false_ otherwise.
