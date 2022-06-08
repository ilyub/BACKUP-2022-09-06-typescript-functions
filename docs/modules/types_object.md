[Typescript functions](../index.md) / [Exports](../modules.md) / types/object

# Module: types/object

## Table of contents

### Type Aliases

- [Empty](types_object.md#empty)
- [Join2](types_object.md#join2)
- [Join3](types_object.md#join3)
- [Join4](types_object.md#join4)
- [OptionalStyle](types_object.md#optionalstyle)
- [OptionalUndefinedStyle](types_object.md#optionalundefinedstyle)
- [PickKeys](types_object.md#pickkeys)
- [StrictOmit](types_object.md#strictomit)
- [UndefinedStyle](types_object.md#undefinedstyle)

## Type Aliases

### Empty

Ƭ **Empty**<`T`\>: `Equals`<keyof `T`, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### Join2

Ƭ **Join2**<`A`, `B`\>: `If`<[`Empty`](types_object.md#empty)<`A`\>, `B`, `If`<[`Empty`](types_object.md#empty)<`B`\>, `A`, `A` & `B`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |

___

### Join3

Ƭ **Join3**<`A`, `B`, `C`\>: `If`<[`Empty`](types_object.md#empty)<`A`\>, [`Join2`](types_object.md#join2)<`B`, `C`\>, `A` & [`Join2`](types_object.md#join2)<`B`, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |
| `C` | extends `object` |

___

### Join4

Ƭ **Join4**<`A`, `B`, `C`, `D`\>: `If`<[`Empty`](types_object.md#empty)<`A`\>, [`Join3`](types_object.md#join3)<`B`, `C`, `D`\>, `A` & [`Join3`](types_object.md#join3)<`B`, `C`, `D`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |
| `C` | extends `object` |
| `D` | extends `object` |

___

### OptionalStyle

Ƭ **OptionalStyle**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]?: Exclude<T[K], undefined\> }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]?: Exclude<T[K], undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### OptionalUndefinedStyle

Ƭ **OptionalUndefinedStyle**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]?: T[K] }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### PickKeys

Ƭ **PickKeys**<`T`, `E`, `M`\>: `Exclude`<keyof `T`, `FilterKeys`<`T`, `E`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `E` | `E` |
| `M` | extends `Match` = ``"default"`` |

___

### StrictOmit

Ƭ **StrictOmit**<`T`, `K`\>: `Omit`<`T`, `K`\> & { [L in K]?: never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `K` | extends keyof `T` |

___

### UndefinedStyle

Ƭ **UndefinedStyle**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]: T[K] \| undefined }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]: T[K] \| undefined }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
