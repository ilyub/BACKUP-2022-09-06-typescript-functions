[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / instance

# Namespace: instance

[converters](converters.md).instance

## Table of contents

### Variables

- [orFail](converters.instance.md#orfail)

## Variables

### orFail

• **orFail**: <T\>(`value`: `unknown`, `ctor`: [`Constructor`](types_core.md#constructor)<`T`\>) => `T`

#### Type declaration

▸ <`T`\>(`value`, `ctor`): `T`

Converts value to type T.

**`throws`** ConversionError otherwise.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `ctor` | [`Constructor`](types_core.md#constructor)<`T`\> | Constructor. |

##### Returns

`T`

Value if it is a class instance.
