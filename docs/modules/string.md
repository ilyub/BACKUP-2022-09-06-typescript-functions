[Typescript functions](../index.md) / [Exports](../modules.md) / string

# Module: string

## Table of contents

### Type aliases

- [Eol](string.md#eol)

### Variables

- [path](string.md#path)

### Functions

- [detectEol](string.md#detecteol)
- [empty](string.md#empty)
- [filter](string.md#filter)
- [lcFirst](string.md#lcfirst)
- [leadingSpaces](string.md#leadingspaces)
- [lines](string.md#lines)
- [multiline](string.md#multiline)
- [replaceAll](string.md#replaceall)
- [singleLine](string.md#singleline)
- [trailingSpaces](string.md#trailingspaces)
- [trimEnd](string.md#trimend)
- [trimLeadingEmptyLines](string.md#trimleadingemptylines)
- [trimStart](string.md#trimstart)
- [trimTrailingEmptyLines](string.md#trimtrailingemptylines)
- [ucFirst](string.md#ucfirst)
- [unpadMultiline](string.md#unpadmultiline)

## Type aliases

### Eol

Ƭ **Eol**: ``"\n"`` \| ``"\r\n"``

## Variables

### path

• `Const` **path**: () => `never` & { `addLeadingSlash`: (`this`: `void`, `path`: `string`) => `string` ; `addTrailingSlash`: (`this`: `void`, `path`: `string`) => `string` ; `canonicalize`: (`this`: `void`, `path`: `string`) => `string` ; `join`: (...`parts`: [`strings`](types_core.md#strings)) => `string` ; `removeLeadingSlash`: (`this`: `void`, `path`: `string`) => `string` ; `removeTrailingSlash`: (`this`: `void`, `path`: `string`) => `string`  }

## Functions

### detectEol

▸ **detectEol**(`str`): [`Eol`](string.md#eol)

Detects EOL sequence.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`Eol`](string.md#eol)

EOL sequence.

___

### empty

▸ **empty**(`str`): `boolean`

Checks if string consists of spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string consists of spaces, _false_ otherwise.

___

### filter

▸ **filter**(`str`, `predicate`): `string`

Filters string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `predicate` | (`char`: `string`, `index`: `number`) => `boolean` | Predicate. |

#### Returns

`string`

Filtered string.

___

### lcFirst

▸ **lcFirst**(`str`): `string`

Converts first letter to lower case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Converted string.

___

### leadingSpaces

▸ **leadingSpaces**(`str`): `string`

Extracts leading spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

String containing leading spaces.

___

### lines

▸ **lines**(`str`): [`strings`](types_core.md#strings)

Splits string into lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

[`strings`](types_core.md#strings)

Array of strings.

___

### multiline

▸ **multiline**(`str`): `boolean`

Checks if string is multiline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string is multiline, _false_ otherwise.

___

### replaceAll

▸ **replaceAll**(`str`, `search`, `replace`): `string`

Replaces all occurences of search term.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `search` | `string` | Search term. |
| `replace` | `string` | Replacement. |

#### Returns

`string`

New string with replacements done.

___

### singleLine

▸ **singleLine**(`str`): `boolean`

Checks if string is single-line.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string is single-line, _false_ otherwise.

___

### trailingSpaces

▸ **trailingSpaces**(`str`): `string`

Extracts trailing spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

String containing trailing spaces.

___

### trimEnd

▸ **trimEnd**(`str`): `string`

Trims string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimLeadingEmptyLines

▸ **trimLeadingEmptyLines**(`str`): `string`

Trims leading empty lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimStart

▸ **trimStart**(`str`): `string`

Trims string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### trimTrailingEmptyLines

▸ **trimTrailingEmptyLines**(`str`): `string`

Trims trailing empty lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Trimmed string.

___

### ucFirst

▸ **ucFirst**(`str`): `string`

Converts first letter to upper case.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

New string.

___

### unpadMultiline

▸ **unpadMultiline**(`str`): `string`

Unpads multiline string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`

Unpadded string.
