[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / arrayOf

# Namespace: arrayOf

[converters](converters.md).arrayOf

## Table of contents

### Variables

- [filtered](converters.arrayOf.md#filtered)
- [orFail](converters.arrayOf.md#orfail)
- [undef](converters.arrayOf.md#undef)

## Variables

### filtered

• **filtered**: <T\>(`value`: `unknown`, `guard`: [`Guard`](guards.md#guard)<`T`\>) => `T`[]

#### Type declaration

▸ <`T`\>(`value`, `guard`): `T`[]

Converts value to type T[].

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `guard` | [`Guard`](guards.md#guard)<`T`\> | Guard for type T. |

##### Returns

`T`[]

Filtered array if value is an array, empty array otherwise.

___

### orFail

• **orFail**: <T\>(`value`: `unknown`, `guard`: [`Guard`](guards.md#guard)<`T`\>) => readonly `T`[]

#### Type declaration

▸ <`T`\>(`value`, `guard`): readonly `T`[]

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
| `guard` | [`Guard`](guards.md#guard)<`T`\> | Guard for type T. |

##### Returns

readonly `T`[]

Value if it is of type T[], empty array if value is empty.

___

### undef

• **undef**: <T\>(`value`: `unknown`, `converter`: [`Converter`](converters.md#converter)<`undefined` \| `T`\>) => `T`[]

#### Type declaration

▸ <`T`\>(`value`, `converter`): `T`[]

Converts value to type T[].

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `converter` | [`Converter`](converters.md#converter)<`undefined` \| `T`\> | Converter for type T \| undefined. |

##### Returns

`T`[]

Filtered array of converted elements if value is an array, empty array otherwise.
