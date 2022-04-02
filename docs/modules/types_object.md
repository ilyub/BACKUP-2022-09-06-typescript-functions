[Typescript functions](../index.md) / [Exports](../modules.md) / types/object

# Module: types/object

## Table of contents

### Type aliases

- [Join2](types_object.md#join2)
- [Join3](types_object.md#join3)
- [Join4](types_object.md#join4)
- [OptionalPropertiesToOptional](types_object.md#optionalpropertiestooptional)
- [OptionalPropertiesToOptionalUndefined](types_object.md#optionalpropertiestooptionalundefined)
- [OptionalPropertiesToUndefined](types_object.md#optionalpropertiestoundefined)
- [StrictOmit](types_object.md#strictomit)

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

### OptionalPropertiesToOptional

Ƭ **OptionalPropertiesToOptional**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]?: Exclude<T[K], undefined\> }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]?: Exclude<T[K], undefined\> }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### OptionalPropertiesToOptionalUndefined

Ƭ **OptionalPropertiesToOptionalUndefined**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]?: T[K] }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]?: T[K] }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### OptionalPropertiesToUndefined

Ƭ **OptionalPropertiesToUndefined**<`T`\>: [`Join4`](types_object.md#join4)<{ [K in WritableDefindKeys<T\>]: T[K] }, { [K in WritableUndefindKeys<T\>]: T[K] \| undefined }, { readonly [K in ReadonlyDefinedKeys<T\>]: T[K] }, { readonly [K in ReadonlyUndefinedKeys<T\>]: T[K] \| undefined }\>

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
