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
- [lcFirst](string.md#lcfirst)
- [leadingSpaces](string.md#leadingspaces)
- [lines](string.md#lines)
- [path](string.md#path)
- [replaceAll](string.md#replaceall)
- [trailingSpaces](string.md#trailingspaces)
- [trimEnd](string.md#trimend)
- [trimLeadingEmptyLines](string.md#trimleadingemptylines)
- [trimStart](string.md#trimstart)
- [trimTrailingEmptyLines](string.md#trimtrailingemptylines)
- [ucFirst](string.md#ucfirst)
- [unpadMultiline](string.md#unpadmultiline)

## Type aliases

### Eol

Ƭ **Eol**: ``"\r\n"`` \| ``"\n"``

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

Checks that string consists of spaces.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | String. |

#### Returns

`boolean`

_True_ if string consists of spaces, _false_ otherwise.

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

Gets leading spaces.

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

### trailingSpaces

▸ **trailingSpaces**(`str`): `string`

Gets trailing spaces.

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
