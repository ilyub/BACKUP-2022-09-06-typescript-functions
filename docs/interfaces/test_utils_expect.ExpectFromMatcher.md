[Typescript functions](../index.md) / [Exports](../modules.md) / [test-utils/expect](../modules/test_utils_expect.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher<K\>

[test-utils/expect](../modules/test_utils_expect.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](../modules/test_utils_expect_internal.md#matchers) |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, ...`args`): `If`<`Extends`<`ReturnType`<`Readonly`<`Matchers`<`unknown`, `unknown`\>\>[`K`]\>, `Promise`<`unknown`\>\>, `Promise`<[`Result`](test_utils_expect_internal.Result.md)\>, [`Result`](test_utils_expect_internal.Result.md)\>

Expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got. |
| `...args` | `Parameters`<`Readonly`<`Matchers`<`unknown`, `unknown`\>\>[`K`]\> | Arguments. |

#### Returns

`If`<`Extends`<`ReturnType`<`Readonly`<`Matchers`<`unknown`, `unknown`\>\>[`K`]\>, `Promise`<`unknown`\>\>, `Promise`<[`Result`](test_utils_expect_internal.Result.md)\>, [`Result`](test_utils_expect_internal.Result.md)\>

Result.
