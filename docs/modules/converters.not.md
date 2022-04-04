[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / not

# Namespace: not

[converters](converters.md).not

## Table of contents

### Functions

- [empty](converters.not.md#empty)

## Functions

### empty

▸ **empty**<`T`\>(`value`, `defVal`): `Exclude`<`T`, [`empty`](types_core.md#empty)\>

Converts value to not empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `defVal` | `Exclude`<`T`, [`empty`](types_core.md#empty)\> | Default value. |

#### Returns

`Exclude`<`T`, [`empty`](types_core.md#empty)\>

Value if it is not empty, defVal otherwise.
