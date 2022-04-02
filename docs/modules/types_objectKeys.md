[Typescript functions](../index.md) / [Exports](../modules.md) / types/objectKeys

# Module: types/objectKeys

## Table of contents

### Type aliases

- [DefinedKeys](types_objectKeys.md#definedkeys)
- [ObjectKeys](types_objectKeys.md#objectkeys)
- [ObjectKeysDefined](types_objectKeys.md#objectkeysdefined)
- [ObjectKeysOption](types_objectKeys.md#objectkeysoption)
- [ObjectKeysOptional](types_objectKeys.md#objectkeysoptional)
- [ObjectKeysReadonly](types_objectKeys.md#objectkeysreadonly)
- [ObjectKeysRequired](types_objectKeys.md#objectkeysrequired)
- [ObjectKeysUndefined](types_objectKeys.md#objectkeysundefined)
- [ObjectKeysWritable](types_objectKeys.md#objectkeyswritable)
- [ReadonlyDefinedKeys](types_objectKeys.md#readonlydefinedkeys)
- [ReadonlyUndefinedKeys](types_objectKeys.md#readonlyundefinedkeys)
- [UndefinedKeys](types_objectKeys.md#undefinedkeys)
- [WritableDefindKeys](types_objectKeys.md#writabledefindkeys)
- [WritableUndefindKeys](types_objectKeys.md#writableundefindkeys)

## Type aliases

### DefinedKeys

Ƭ **DefinedKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"defined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ObjectKeys

Ƭ **ObjectKeys**<`T`, `I`, `E`\>: `Exclude`<[`ObjectKeysDefined`](types_objectKeys.md#objectkeysdefined)<`T`, `I`, keyof `T`\> & [`ObjectKeysOptional`](types_objectKeys.md#objectkeysoptional)<`T`, `I`, keyof `T`\> & [`ObjectKeysReadonly`](types_objectKeys.md#objectkeysreadonly)<`T`, `I`, keyof `T`\> & [`ObjectKeysRequired`](types_objectKeys.md#objectkeysrequired)<`T`, `I`, keyof `T`\> & [`ObjectKeysUndefined`](types_objectKeys.md#objectkeysundefined)<`T`, `I`, keyof `T`\> & [`ObjectKeysWritable`](types_objectKeys.md#objectkeyswritable)<`T`, `I`, keyof `T`\> & `PropertyKey` & keyof `T`, [`ObjectKeysDefined`](types_objectKeys.md#objectkeysdefined)<`T`, `E`, `never`\> \| [`ObjectKeysOptional`](types_objectKeys.md#objectkeysoptional)<`T`, `E`, `never`\> \| [`ObjectKeysReadonly`](types_objectKeys.md#objectkeysreadonly)<`T`, `E`, `never`\> \| [`ObjectKeysRequired`](types_objectKeys.md#objectkeysrequired)<`T`, `E`, `never`\> \| [`ObjectKeysUndefined`](types_objectKeys.md#objectkeysundefined)<`T`, `E`, `never`\> \| [`ObjectKeysWritable`](types_objectKeys.md#objectkeyswritable)<`T`, `E`, `never`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `I` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `E` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |

___

### ObjectKeysDefined

Ƭ **ObjectKeysDefined**<`T`, `C`, `D`\>: ``"defined"`` extends `C` ? `FilterKeys`<`T`, `undefined`, ``"<-extends"``\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysOption

Ƭ **ObjectKeysOption**: ``"defined"`` \| ``"optional"`` \| ``"readonly"`` \| ``"required"`` \| ``"undefined"`` \| ``"writable"``

___

### ObjectKeysOptional

Ƭ **ObjectKeysOptional**<`T`, `C`, `D`\>: ``"optional"`` extends `C` ? `OptionalKeys`<`T`\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysReadonly

Ƭ **ObjectKeysReadonly**<`T`, `C`, `D`\>: ``"readonly"`` extends `C` ? `ReadonlyKeys`<`T`\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysRequired

Ƭ **ObjectKeysRequired**<`T`, `C`, `D`\>: ``"required"`` extends `C` ? `RequiredKeys`<`T`\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysUndefined

Ƭ **ObjectKeysUndefined**<`T`, `C`, `D`\>: ``"undefined"`` extends `C` ? `Exclude`<keyof `T`, `FilterKeys`<`T`, `undefined`, ``"<-extends"``\>\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ObjectKeysWritable

Ƭ **ObjectKeysWritable**<`T`, `C`, `D`\>: ``"writable"`` extends `C` ? `WritableKeys`<`T`\> : `D`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `C` | extends [`ObjectKeysOption`](types_objectKeys.md#objectkeysoption) |
| `D` | extends keyof `T` |

___

### ReadonlyDefinedKeys

Ƭ **ReadonlyDefinedKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"defined"`` \| ``"readonly"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ReadonlyUndefinedKeys

Ƭ **ReadonlyUndefinedKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"readonly"`` \| ``"undefined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### UndefinedKeys

Ƭ **UndefinedKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"undefined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableDefindKeys

Ƭ **WritableDefindKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"defined"`` \| ``"writable"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableUndefindKeys

Ƭ **WritableUndefindKeys**<`T`\>: [`ObjectKeys`](types_objectKeys.md#objectkeys)<`T`, ``"undefined"`` \| ``"writable"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
