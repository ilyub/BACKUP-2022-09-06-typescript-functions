[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / instances

# Namespace: instances

[converters](converters.md).instances

## Table of contents

### Variables

- [filtered](converters.instances.md#filtered)
- [orFail](converters.instances.md#orfail)

## Variables

### filtered

• **filtered**: <T\>(`value`: `unknown`, `ctor`: [`Constructor`](types_core.md#constructor)<`T`\>) => `T`[]

#### Type declaration

▸ <`T`\>(`value`, `ctor`): `T`[]

Converts value to type T[].

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

`T`[]

Filtered array if value is an array, empty array otherwise.

___

### orFail

• **orFail**: <T\>(`value`: `unknown`, `ctor`: [`Constructor`](types_core.md#constructor)<`T`\>) => readonly `T`[]

#### Type declaration

▸ <`T`\>(`value`, `ctor`): readonly `T`[]

Converts value to type T[].

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

readonly `T`[]

Value if it is of type T[], empty array if value is empty.
