[Typescript functions](../index.md) / [Exports](../modules.md) / test-utils/expect

# Module: test-utils/expect

## Table of contents

### Interfaces

- [ExpectFromMatcher](../interfaces/test_utils_expect.ExpectFromMatcher.md)

### Functions

- [buildResult](test_utils_expect.md#buildresult)

## Functions

### buildResult

▸ **buildResult**(`pass`, `message`, `got`, `expected`, `immediate?`): [`Result`](../interfaces/test_utils_expect_internal.Result.md)

Builds result.

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

Info.
