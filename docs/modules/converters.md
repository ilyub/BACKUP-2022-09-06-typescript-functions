[Typescript functions](../index.md) / [Exports](../modules.md) / converters

# Module: converters

## Table of contents

### Variables

- [not](converters.md#not)

### Functions

- [number](converters.md#number)
- [numberU](converters.md#numberu)
- [string](converters.md#string)
- [stringU](converters.md#stringu)

## Variables

### not

• `Const` **not**: () => `never` & { `empty`: <T\>(`this`: `void`, `value`: `T`, `defVal`: `Exclude`<`T`, [`empty`](types_core.md#empty)\>) => `Exclude`<`T`, [`empty`](types_core.md#empty)\>  }

Not implemented.

## Functions

### number

▸ **number**(`value`, `defVal?`): `number`

Converts value to a number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `unknown` | `undefined` | Value. |
| `defVal` | `number` | `0` | Default value. |

#### Returns

`number`

Converted value, defVal on failure.

___

### numberU

▸ **numberU**(`value`): [`numberU`](types_core.md#numberu)

Converts value to a number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`numberU`](types_core.md#numberu)

Converted value, _undefined_ on failure.

___

### string

▸ **string**(`value`): `string`

Converts value to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

`string`

Converted value.

___

### stringU

▸ **stringU**(`value`): [`stringU`](types_core.md#stringu)

Converts value to type stringU.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

[`stringU`](types_core.md#stringu)

Converted value.
