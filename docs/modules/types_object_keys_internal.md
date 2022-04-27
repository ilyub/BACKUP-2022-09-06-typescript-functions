[Typescript functions](../index.md) / [Exports](../modules.md) / types/object-keys.internal

# Module: types/object-keys.internal

## Table of contents

### Type aliases

- [ObjectKeysDefined](types_object_keys_internal.md#objectkeysdefined)
- [ObjectKeysOption](types_object_keys_internal.md#objectkeysoption)
- [ObjectKeysOptional](types_object_keys_internal.md#objectkeysoptional)
- [ObjectKeysReadonly](types_object_keys_internal.md#objectkeysreadonly)
- [ObjectKeysRequired](types_object_keys_internal.md#objectkeysrequired)
- [ObjectKeysUndefined](types_object_keys_internal.md#objectkeysundefined)
- [ObjectKeysWritable](types_object_keys_internal.md#objectkeyswritable)

## Type aliases

### ObjectKeysDefined

Ƭ **ObjectKeysDefined**<`T`, `C`, `D`\>: `If`<`Extends`<``"defined"``, `C`\>, `FilterKeys`<`T`, `undefined`, ``"<-extends"``\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysOption

Ƭ **ObjectKeysOption**: ``"defined"`` \| ``"optional"`` \| ``"readonly"`` \| ``"required"`` \| ``"undefined"`` \| ``"writable"``

___

### ObjectKeysOptional

Ƭ **ObjectKeysOptional**<`T`, `C`, `D`\>: `If`<`Extends`<``"optional"``, `C`\>, `OptionalKeys`<`T`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysReadonly

Ƭ **ObjectKeysReadonly**<`T`, `C`, `D`\>: `If`<`Extends`<``"readonly"``, `C`\>, `ReadonlyKeys`<`T`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysRequired

Ƭ **ObjectKeysRequired**<`T`, `C`, `D`\>: `If`<`Extends`<``"required"``, `C`\>, `RequiredKeys`<`T`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysUndefined

Ƭ **ObjectKeysUndefined**<`T`, `C`, `D`\>: `If`<`Extends`<``"undefined"``, `C`\>, `Exclude`<keyof `T`, `FilterKeys`<`T`, `undefined`, ``"<-extends"``\>\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysWritable

Ƭ **ObjectKeysWritable**<`T`, `C`, `D`\>: `If`<`Extends`<``"writable"``, `C`\>, `WritableKeys`<`T`\>, `D`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `D` | extends keyof `T` |
