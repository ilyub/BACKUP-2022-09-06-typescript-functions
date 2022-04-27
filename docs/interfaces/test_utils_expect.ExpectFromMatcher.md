[Typescript functions](../index.md) / [Exports](../modules.md) / [test-utils/expect](../modules/test_utils_expect.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher<K\>

[test-utils/expect](../modules/test_utils_expect.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](../modules/test_utils_expect.md#matchers) |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, ...`args`): `If`<`Extends`<`ReturnType`<[`Matcher`](../modules/test_utils_expect.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](test_utils_expect.ExpectReturnType.md)\>, [`ExpectReturnType`](test_utils_expect.ExpectReturnType.md)\>

Expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | `Parameters`<[`Matcher`](../modules/test_utils_expect.md#matcher)<`K`\>\> | Arguments. |

#### Returns

`If`<`Extends`<`ReturnType`<[`Matcher`](../modules/test_utils_expect.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](test_utils_expect.ExpectReturnType.md)\>, [`ExpectReturnType`](test_utils_expect.ExpectReturnType.md)\>

Result.
