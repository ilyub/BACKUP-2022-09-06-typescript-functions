[Typescript functions](../index.md) / [Exports](../modules.md) / [testUtils](../modules/testUtils.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher<K\>

[testUtils](../modules/testUtils.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](../modules/testUtils.md#matchers) |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, ...`args`): `If`<`Extends`<`ReturnType`<[`Matcher`](../modules/testUtils.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](testUtils.ExpectReturnType.md)\>, [`ExpectReturnType`](testUtils.ExpectReturnType.md)\>

Expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | `Parameters`<[`Matcher`](../modules/testUtils.md#matcher)<`K`\>\> | Arguments. |

#### Returns

`If`<`Extends`<`ReturnType`<[`Matcher`](../modules/testUtils.md#matcher)<`K`\>\>, `Promise`<`unknown`\>\>, `Promise`<[`ExpectReturnType`](testUtils.ExpectReturnType.md)\>, [`ExpectReturnType`](testUtils.ExpectReturnType.md)\>

Result.
