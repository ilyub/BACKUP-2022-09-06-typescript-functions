[Typescript functions](../index.md) / [Exports](../modules.md) / [errors/error-arg](errors_error_arg.md) / ErrorArg

# Namespace: ErrorArg

[errors/error-arg](errors_error_arg.md).ErrorArg

## Table of contents

### Interfaces

- [Fn](../interfaces/errors_error_arg.ErrorArg.Fn.md)

### Functions

- [toError](errors_error_arg.ErrorArg.md#toerror)
- [wrapError](errors_error_arg.ErrorArg.md#wraperror)

## Functions

### toError

▸ **toError**(`error?`): `unknown`

Builds error.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `error?` | [`ErrorArg`](errors_error_arg.md#errorarg) | Error. |

#### Returns

`unknown`

Error.

___

### wrapError

▸ **wrapError**<`T`\>(`e`): () => `T`

Wraps error.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `T` | Error. |

#### Returns

`fn`

Wrapped error.

▸ (): `T`

Wraps error.

##### Returns

`T`

Wrapped error.
