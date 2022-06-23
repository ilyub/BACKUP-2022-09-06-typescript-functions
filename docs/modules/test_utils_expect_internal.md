[Typescript functions](../index.md) / [Exports](../modules.md) / test-utils/expect.internal

# Module: test-utils/expect.internal

## Table of contents

### Interfaces

- [Result](../interfaces/test_utils_expect_internal.Result.md)

### Type Aliases

- [Calls](test_utils_expect_internal.md#calls)
- [Matchers](test_utils_expect_internal.md#matchers)

### Functions

- [isMock](test_utils_expect_internal.md#ismock)

## Type Aliases

### Calls

Ƭ **Calls**: readonly [`unknowns`](types_core.md#unknowns)[]

___

### Matchers

Ƭ **Matchers**: `Readonly`<`jest.Matchers`<`unknown`, `unknown`\>\>

## Functions

### isMock

▸ **isMock**(`value`): value is Mock<unknown, unknown[]\>

Checks that value type is Mock.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |

#### Returns

value is Mock<unknown, unknown[]\>

_True_ if value type is Mock, _false_ otherwise.
