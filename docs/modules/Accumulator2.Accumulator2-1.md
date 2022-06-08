[Typescript functions](../index.md) / [Exports](../modules.md) / [Accumulator2](Accumulator2.md) / Accumulator2

# Namespace: Accumulator2

[Accumulator2](Accumulator2.md).Accumulator2

## Table of contents

### Type Aliases

- [Entry](Accumulator2.Accumulator2-1.md#entry)
- [Locked](Accumulator2.Accumulator2-1.md#locked)

## Type Aliases

### Entry

Ƭ **Entry**<`K`, `L`, `T`\>: readonly [`K`, `L`, readonly `T`[]]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |

___

### Locked

Ƭ **Locked**<`K`, `L`, `T`\>: `Omit`<`Readonly`<[`Accumulator2`](../classes/Accumulator2.Accumulator2-2.md)<`K`, `L`, `T`\>\>, ``"push"`` \| ``"unshift"``\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `PropertyKey` |
| `L` | extends `PropertyKey` |
| `T` | `T` |
