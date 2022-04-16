[Typescript functions](../index.md) / [Exports](../modules.md) / testUtils/expect

# Module: testUtils/expect

## Table of contents

### Interfaces

- [ExpectFromMatcher](../interfaces/testUtils_expect.ExpectFromMatcher.md)
- [ExpectReturnType](../interfaces/testUtils_expect.ExpectReturnType.md)

### Type aliases

- [Matcher](testUtils_expect.md#matcher)
- [MatcherParameters](testUtils_expect.md#matcherparameters)
- [MatcherReturnType](testUtils_expect.md#matcherreturntype)
- [Matchers](testUtils_expect.md#matchers)

### Variables

- [matchers](testUtils_expect.md#matchers-1)

### Functions

- [executionTimeToBe](testUtils_expect.md#executiontimetobe-1)
- [executionTimeToBeWithin](testUtils_expect.md#executiontimetobewithin-1)
- [toBeSameAs](testUtils_expect.md#tobesameas-1)

## Type aliases

### Matcher

Ƭ **Matcher**<`K`\>: [`Matchers`](testUtils_expect.md#matchers)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils_expect.md#matchers) |

___

### MatcherParameters

Ƭ **MatcherParameters**<`K`\>: `Parameters`<[`Matcher`](testUtils_expect.md#matcher)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils_expect.md#matchers) |

___

### MatcherReturnType

Ƭ **MatcherReturnType**<`K`\>: `ReturnType`<[`Matcher`](testUtils_expect.md#matcher)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils_expect.md#matchers) |

___

### Matchers

Ƭ **Matchers**: `Readonly`<`jest.Matchers`<`unknown`\>\>

## Variables

### matchers

• `Const` **matchers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `executionTimeToBe` | [`ExpectFromMatcher`](../interfaces/testUtils_expect.ExpectFromMatcher.md)<``"executionTimeToBe"``\> |
| `executionTimeToBeWithin` | [`ExpectFromMatcher`](../interfaces/testUtils_expect.ExpectFromMatcher.md)<``"executionTimeToBeWithin"``\> |
| `toBeSameAs` | [`ExpectFromMatcher`](../interfaces/testUtils_expect.ExpectFromMatcher.md)<``"toBeSameAs"``\> |

## Functions

### executionTimeToBe

▸ **executionTimeToBe**(`got`, ...`args`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [time: number] | - |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)\>

Result.

___

### executionTimeToBeWithin

▸ **executionTimeToBeWithin**(`got`, ...`args`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [min: number, max: number] | - |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)\>

Result.

___

### toBeSameAs

▸ **toBeSameAs**(`got`, ...`args`): [`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)

Checks that two objects are identical.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [expected: object] | - |

#### Returns

[`ExpectReturnType`](../interfaces/testUtils_expect.ExpectReturnType.md)

Result.
