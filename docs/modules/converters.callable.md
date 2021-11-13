[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / callable

# Namespace: callable

[converters](converters.md).callable

## Table of contents

### Variables

- [orFail](converters.callable.md#orfail)

## Variables

### orFail

• **orFail**: <T\>(`value`: `unknown`) => `T`

#### Type declaration

▸ <`T`\>(`value`): `T`

Converts value to type T.

**`throws`** ConversionError otherwise.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Function` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

##### Returns

`T`

Value if it is a Function.
