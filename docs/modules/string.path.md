[Typescript functions](../index.md) / [Exports](../modules.md) / [string](string.md) / path

# Namespace: path

[string](string.md).path

## Table of contents

### Functions

- [addLeadingSlash](string.path.md#addleadingslash)
- [addTrailingSlash](string.path.md#addtrailingslash)
- [canonicalize](string.path.md#canonicalize)
- [join](string.path.md#join)
- [removeLeadingSlash](string.path.md#removeleadingslash)
- [removeTrailingSlash](string.path.md#removetrailingslash)

## Functions

### addLeadingSlash

▸ **addLeadingSlash**(`path`): `string`

Adds leading slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with leading slash added.

___

### addTrailingSlash

▸ **addTrailingSlash**(`path`): `string`

Adds trailing slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with trailing slash added.

___

### canonicalize

▸ **canonicalize**(`path`): `string`

Canonicalizes path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

Canonical path.

___

### join

▸ **join**(...`parts`): `string`

Creates path from parts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...parts` | `string`[] | Parts. |

#### Returns

`string`

Path.

___

### removeLeadingSlash

▸ **removeLeadingSlash**(`path`): `string`

Removes leading slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with leading slash removed.

___

### removeTrailingSlash

▸ **removeTrailingSlash**(`path`): `string`

Removes trailing slash.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | Path. |

#### Returns

`string`

New string with trailing slash removed.
