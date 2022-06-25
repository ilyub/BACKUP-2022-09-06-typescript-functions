[Typescript functions](../index.md) / [Exports](../modules.md) / test-utils/expect

# Module: test-utils/expect

## Table of contents

### Interfaces

- [ExpectFromMatcher](../interfaces/test_utils_expect.ExpectFromMatcher.md)

### Functions

- [buildEqualsResult](test_utils_expect.md#buildequalsresult)
- [buildResult](test_utils_expect.md#buildresult)

## Functions

### buildEqualsResult

▸ **buildEqualsResult**(`pass`, `message`, `got`, `expected`, `immediate?`): [`Result`](../interfaces/test_utils_expect_internal.Result.md)

Builds matcher result.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pass` | `boolean` | `undefined` | Pass. |
| `message` | `string` | `undefined` | Message. |
| `got` | `unknown` | `undefined` | Got. |
| `expected` | `unknown` | `undefined` | Expected. |
| `immediate` | `boolean` | `false` | Immediate. |

#### Returns

[`Result`](../interfaces/test_utils_expect_internal.Result.md)

Matcher result.

___

### buildResult

▸ **buildResult**(`pass`, `expectSuccess`, `expectFailure`): [`Result`](../interfaces/test_utils_expect_internal.Result.md)

Builds matcher result.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pass` | `boolean` | Pass. |
| `expectSuccess` | `string` | Expect success message. |
| `expectFailure` | `string` | Expect failure message. |

#### Returns

[`Result`](../interfaces/test_utils_expect_internal.Result.md)

Matcher result.
