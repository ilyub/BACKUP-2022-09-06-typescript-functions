[Typescript functions](../index.md) / [Exports](../modules.md) / test-utils/jest.internal

# Module: test-utils/jest.internal

## Table of contents

### Type Aliases

- [Calls](test_utils_jest_internal.md#calls)

### Variables

- [matchers](test_utils_jest_internal.md#matchers)

### Functions

- [error](test_utils_jest_internal.md#error)
- [warn](test_utils_jest_internal.md#warn)

## Type Aliases

### Calls

Ƭ **Calls**: readonly [`unknowns`](types_core.md#unknowns)[]

## Variables

### matchers

• `Const` **matchers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executionTimeToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)<``"executionTimeToBe"``\> |
| `mockCallsToBe` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)<``"mockCallsToBe"``\> |
| `toBeSameAs` | [`ExpectFromMatcher`](../interfaces/test_utils_expect.ExpectFromMatcher.md)<``"toBeSameAs"``\> |

## Functions

### error

▸ **error**(...`args`): `any`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`any`

Result.

___

### warn

▸ **warn**(...`args`): `any`

Function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...args` | readonly `any`[] | Arguments. |

#### Returns

`any`

Result.
