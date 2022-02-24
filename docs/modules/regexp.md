[Typescript functions](../index.md) / [Exports](../modules.md) / regexp

# Module: regexp

## Table of contents

### Namespaces

- [slice](regexp.slice.md)

### Functions

- [addFlags](regexp.md#addflags)
- [escapeString](regexp.md#escapestring)
- [matchAll](regexp.md#matchall)
- [slice](regexp.md#slice)

## Functions

### addFlags

▸ **addFlags**(`re`, `flags`): `RegExp`

Adds flag to regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `re` | `RegExp` | Regular expression. |
| `flags` | `string` | Flags. |

#### Returns

`RegExp`

New regular expression.

___

### escapeString

▸ **escapeString**(`str`): `string`

Escapes regular expression special characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Escaped string.

___

### matchAll

▸ **matchAll**(`str`, `re`): `RegExpExecArray`[]

Finds all matches.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `re` | `RegExp` | Regular expression. |

#### Returns

`RegExpExecArray`[]

Matches.

___

### slice

▸ **slice**(`str`, `re`): [`stringU`](types_core.md#stringu)

Finds substring matching regular expression.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `re` | `RegExp` | Regular expression. |

#### Returns

[`stringU`](types_core.md#stringu)

Substring if found, _undefined_ otherwise.
