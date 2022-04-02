[Typescript functions](../index.md) / [Exports](../modules.md) / string

# Module: string

## Table of contents

### Namespaces

- [path](string.path.md)

### Type aliases

- [Eol](string.md#eol)

### Functions

- [detectEol](string.md#detecteol)
- [empty](string.md#empty)
- [filter](string.md#filter)
- [lcFirst](string.md#lcfirst)
- [leadingSpaces](string.md#leadingspaces)
- [lines](string.md#lines)
- [multiline](string.md#multiline)
- [path](string.md#path)
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

Checks that string consists of only spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string consists of only spaces, _false_ otherwise.

___

### filter

▸ **filter**(`str`, `predicate`): `string`

Filters string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |
| `predicate` | (`char`: `string`, `index`: `number`) => `unknown` | Filter function. |

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

▸ **lines**(`str`): `string`[]

Splits string into lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`string`[]

Array of strings.

___

### multiline

▸ **multiline**(`str`): `boolean`

Checks that string is multiline.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string is multiline, _false_ otherwise.

___

### path

▸ **path**(): `never`

Not implemented.

#### Returns

`never`

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

Checks that string is single-line.

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
