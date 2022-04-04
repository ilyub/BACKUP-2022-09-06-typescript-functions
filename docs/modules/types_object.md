[Typescript functions](../index.md) / [Exports](../modules.md) / types/object

# Module: types/object

## Table of contents

### Type aliases

- [Join2](types_object.md#join2)
- [Join3](types_object.md#join3)
- [Join4](types_object.md#join4)
- [OptionalStyle](types_object.md#optionalstyle)
- [OptionalUndefinedStyle](types_object.md#optionalundefinedstyle)
- [StrictOmit](types_object.md#strictomit)
- [UndefinedStyle](types_object.md#undefinedstyle)

## Type aliases

### Join2

Ƭ **Join2**<`A`, `B`\>: keyof `A` extends `never` ? `B` : keyof `B` extends `never` ? `A` : `A` & `B`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |

___

### Join3

Ƭ **Join3**<`A`, `B`, `C`\>: keyof `A` extends `never` ? [`Join2`](types_object.md#join2)<`B`, `C`\> : `A` & [`Join2`](types_object.md#join2)<`B`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | extends `object` |
| `B` | extends `object` |
| `C` | extends `object` |

___

### Join4

Ƭ **Join4**<`A`, `B`, `C`, `D`\>: keyof `A` extends `never` ? [`Join3`](types_object.md#join3)<`B`, `C`, `D`\> : `A` & [`Join3`](types_object.md#join3)<`B`, `C`, `D`\>

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
