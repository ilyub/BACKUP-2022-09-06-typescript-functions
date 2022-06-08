[Typescript functions](../index.md) / [Exports](../modules.md) / regexp

# Module: regexp

## Table of contents

### Type Aliases

- [RegExpExecArrays](regexp.md#regexpexecarrays)

### Functions

- [addFlags](regexp.md#addflags)
- [matchAll](regexp.md#matchall)

## Type Aliases

### RegExpExecArrays

Ƭ **RegExpExecArrays**: readonly `RegExpExecArray`[]

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

### matchAll

▸ **matchAll**(`str`, `re`): [`RegExpExecArrays`](regexp.md#regexpexecarrays)

Finds all matches.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `re` | `RegExp` | Regular expression. |

#### Returns

[`RegExpExecArrays`](regexp.md#regexpexecarrays)

Matches.
