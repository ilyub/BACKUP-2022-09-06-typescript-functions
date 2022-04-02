[Typescript functions](../index.md) / [Exports](../modules.md) / regexp

# Module: regexp

## Table of contents

### Functions

- [addFlags](regexp.md#addflags)
- [escapeString](regexp.md#escapestring)
- [matchAll](regexp.md#matchall)

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
