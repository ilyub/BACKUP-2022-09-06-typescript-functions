[Typescript functions](../index.md) / [Exports](../modules.md) / [testUtils/expect](../modules/testUtils_expect.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher<K\>

[testUtils/expect](../modules/testUtils_expect.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](../modules/testUtils_expect.md#matchers) |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, ...`args`): `If`<`Extends`<`ReturnType`<[`Matcher`](../modules/testUtils_expect.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](testUtils_expect.ExpectReturnType.md)\>, [`ExpectReturnType`](testUtils_expect.ExpectReturnType.md)\>

Expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | `Parameters`<[`Matcher`](../modules/testUtils_expect.md#matcher)<`K`\>\> | Arguments. |

#### Returns

`If`<`Extends`<`ReturnType`<[`Matcher`](../modules/testUtils_expect.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](testUtils_expect.ExpectReturnType.md)\>, [`ExpectReturnType`](testUtils_expect.ExpectReturnType.md)\>

Result.
