[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / not

# Namespace: not

[assertions](assertions.md).not

## Table of contents

### Functions

- [empty](assertions.not.md#empty)
- [null](assertions.not.md#null)
- [undefined](assertions.not.md#undefined)

## Functions

### empty

▸ **empty**<`T`\>(`value`, `error?`): asserts value is Exclude<T, empty\>

Asserts that value type is not empty.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is Exclude<T, empty\>

___

### null

▸ **null**<`T`\>(`value`, `error?`): asserts value is Exclude<T, null\>

Asserts that value is not _null_.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is Exclude<T, null\>

___

### undefined

▸ **undefined**<`T`\>(`value`, `error?`): asserts value is Exclude<T, undefined\>

Asserts that value is not _undefined_.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | Value. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is Exclude<T, undefined\>
