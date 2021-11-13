[Typescript functions](../index.md) / [Exports](../modules.md) / [converters](converters.md) / not

# Namespace: not

[converters](converters.md).not

## Table of contents

### Variables

- [empty](converters.not.md#empty)

## Variables

### empty

• **empty**: <T\>(`value`: `T`, `defVal`: `Exclude`<`T`, [`empty`](types_core.md#empty)\>) => `Exclude`<`T`, [`empty`](types_core.md#empty)\>

#### Type declaration

▸ <`T`\>(`value`, `defVal`): `Exclude`<`T`, [`empty`](types_core.md#empty)\>

Converts value to non-empty.

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `defVal` | `Exclude`<`T`, [`empty`](types_core.md#empty)\> | Default value. |

##### Returns

`Exclude`<`T`, [`empty`](types_core.md#empty)\>

Value if it is not empty, defVal otherwise.
