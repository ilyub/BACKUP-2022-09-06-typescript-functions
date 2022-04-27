[Typescript functions](../index.md) / [Exports](../modules.md) / types/object-keys

# Module: types/object-keys

## Table of contents

### Type aliases

- [DefinedKeys](types_object_keys.md#definedkeys)
- [ObjectKeys](types_object_keys.md#objectkeys)
- [ReadonlyDefinedKeys](types_object_keys.md#readonlydefinedkeys)
- [ReadonlyUndefinedKeys](types_object_keys.md#readonlyundefinedkeys)
- [UndefinedKeys](types_object_keys.md#undefinedkeys)
- [WritableDefindKeys](types_object_keys.md#writabledefindkeys)
- [WritableUndefindKeys](types_object_keys.md#writableundefindkeys)

## Type aliases

### DefinedKeys

Ƭ **DefinedKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"defined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ObjectKeys

Ƭ **ObjectKeys**<`T`, `I`, `E`\>: `Exclude`<[`ObjectKeysDefined`](types_object_keys_internal.md#objectkeysdefined)<`T`, `I`, keyof `T`\> & [`ObjectKeysOptional`](types_object_keys_internal.md#objectkeysoptional)<`T`, `I`, keyof `T`\> & [`ObjectKeysReadonly`](types_object_keys_internal.md#objectkeysreadonly)<`T`, `I`, keyof `T`\> & [`ObjectKeysRequired`](types_object_keys_internal.md#objectkeysrequired)<`T`, `I`, keyof `T`\> & [`ObjectKeysUndefined`](types_object_keys_internal.md#objectkeysundefined)<`T`, `I`, keyof `T`\> & [`ObjectKeysWritable`](types_object_keys_internal.md#objectkeyswritable)<`T`, `I`, keyof `T`\> & `PropertyKey` & keyof `T`, [`ObjectKeysDefined`](types_object_keys_internal.md#objectkeysdefined)<`T`, `E`, `never`\> \| [`ObjectKeysOptional`](types_object_keys_internal.md#objectkeysoptional)<`T`, `E`, `never`\> \| [`ObjectKeysReadonly`](types_object_keys_internal.md#objectkeysreadonly)<`T`, `E`, `never`\> \| [`ObjectKeysRequired`](types_object_keys_internal.md#objectkeysrequired)<`T`, `E`, `never`\> \| [`ObjectKeysUndefined`](types_object_keys_internal.md#objectkeysundefined)<`T`, `E`, `never`\> \| [`ObjectKeysWritable`](types_object_keys_internal.md#objectkeyswritable)<`T`, `E`, `never`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
| `I` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |
| `E` | extends [`ObjectKeysOption`](types_object_keys_internal.md#objectkeysoption) |

___

### ReadonlyDefinedKeys

Ƭ **ReadonlyDefinedKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"defined"`` \| ``"readonly"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### ReadonlyUndefinedKeys

Ƭ **ReadonlyUndefinedKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"readonly"`` \| ``"undefined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### UndefinedKeys

Ƭ **UndefinedKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"undefined"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableDefindKeys

Ƭ **WritableDefindKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"defined"`` \| ``"writable"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

___

### WritableUndefindKeys

Ƭ **WritableUndefindKeys**<`T`\>: [`ObjectKeys`](types_object_keys.md#objectkeys)<`T`, ``"undefined"`` \| ``"writable"``, `never`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |
