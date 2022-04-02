[Typescript functions](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Interfaces

- [ExpectFromMatcher](../interfaces/testUtils.ExpectFromMatcher.md)
- [ExpectReturnType](../interfaces/testUtils.ExpectReturnType.md)
- [FakeTimerOptions](../interfaces/testUtils.FakeTimerOptions.md)

### Type aliases

- [Matcher](testUtils.md#matcher)
- [MatcherParameters](testUtils.md#matcherparameters)
- [MatcherReturnType](testUtils.md#matcherreturntype)
- [Matchers](testUtils.md#matchers)

### Variables

- [clock](testUtils.md#clock)

### Functions

- [executionTimeToBe](testUtils.md#executiontimetobe)
- [executionTimeToBeWithin](testUtils.md#executiontimetobewithin)
- [installFakeTimer](testUtils.md#installfaketimer)
- [jestReset](testUtils.md#jestreset)
- [jestSetup](testUtils.md#jestsetup)
- [run](testUtils.md#run)
- [setRandomSystemTime](testUtils.md#setrandomsystemtime)
- [toBeSameAs](testUtils.md#tobesameas)

## Type aliases

### Matcher

Ƭ **Matcher**<`K`\>: [`Matchers`](testUtils.md#matchers)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils.md#matchers) |

___

### MatcherParameters

Ƭ **MatcherParameters**<`K`\>: `Parameters`<[`Matcher`](testUtils.md#matcher)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils.md#matchers) |

___

### MatcherReturnType

Ƭ **MatcherReturnType**<`K`\>: `ReturnType`<[`Matcher`](testUtils.md#matcher)<`K`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Matchers`](testUtils.md#matchers) |

___

### Matchers

Ƭ **Matchers**: `Readonly`<`jest.Matchers`<`unknown`\>\>

## Variables

### clock

• `Const` **clock**: `Clock`

## Functions

### executionTimeToBe

▸ **executionTimeToBe**(`got`, ...`args`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [time: number] | - |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Result.

___

### executionTimeToBeWithin

▸ **executionTimeToBeWithin**(`got`, ...`args`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [min: number, max: number] | - |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Result.

___

### installFakeTimer

▸ **installFakeTimer**(`options?`): `void`

Installs fake timer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`FakeTimerOptions`](../interfaces/testUtils.FakeTimerOptions.md) | Options. |

#### Returns

`void`

___

### jestReset

▸ **jestReset**(): `void`

Jest reset.

#### Returns

`void`

___

### jestSetup

▸ **jestSetup**(): `void`

Jest setup.

#### Returns

`void`

___

### run

▸ **run**<`T`\>(`promiseAsync`): `Promise`<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | [`AsyncPromise`](types_function.md#asyncpromise)<`T`, [`nevers`](types_core.md#nevers)\> | Promise or async function. |

#### Returns

`Promise`<`T`\>

The result of callback execution.

___

### setRandomSystemTime

▸ **setRandomSystemTime**(): `void`

Sets random system time.

#### Returns

`void`

___

### toBeSameAs

▸ **toBeSameAs**(`got`, ...`args`): [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Checks that two objects are identical.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | [expected: object] | - |

#### Returns

[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Result.
