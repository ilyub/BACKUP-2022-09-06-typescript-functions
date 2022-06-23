[Typescript functions](../index.md) / [Exports](../modules.md) / test-utils/jest.internal

# Module: test-utils/jest.internal

## Table of contents

### Variables

- [matchers](test_utils_jest_internal.md#matchers)

### Functions

- [error](test_utils_jest_internal.md#error)
- [warn](test_utils_jest_internal.md#warn)

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

▸ **error**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

▸ **error**(`message?`, ...`optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

___

### warn

▸ **warn**(...`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...data` | `any`[] |

#### Returns

`void`

▸ **warn**(`message?`, ...`optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`
