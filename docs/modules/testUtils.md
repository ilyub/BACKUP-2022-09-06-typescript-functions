[Typescript functions](../index.md) / [Exports](../modules.md) / testUtils

# Module: testUtils

## Table of contents

### Namespaces

- [jestReset](testUtils.jestReset.md)
- [jestSetup](testUtils.jestSetup.md)

### Interfaces

- [ExpectReturnType](../interfaces/testUtils.ExpectReturnType.md)
- [FakeTimerOptions](../interfaces/testUtils.FakeTimerOptions.md)

### Type aliases

- [ExpectFromMatcher](testUtils.md#expectfrommatcher)

### Functions

- [executionTimeToBeWithin](testUtils.md#executiontimetobewithin)
- [executionTimeToEqual](testUtils.md#executiontimetoequal)
- [getClock](testUtils.md#getclock)
- [htmlToEqual](testUtils.md#htmltoequal)
- [installFakeTimer](testUtils.md#installfaketimer)
- [jestReset](testUtils.md#jestreset)
- [jestSetup](testUtils.md#jestsetup)
- [run](testUtils.md#run)
- [setRandomSystemTime](testUtils.md#setrandomsystemtime)
- [textToEqual](testUtils.md#texttoequal)
- [toBeSameAs](testUtils.md#tobesameas)

## Type aliases

### ExpectFromMatcher

Ƭ **ExpectFromMatcher**<`K`\>: (`got`: `unknown`, ...`args`: `Parameters`<`jest.Matchers`<`unknown`\>[`K`]\>) => `ReturnType`<`jest.Matchers`<`unknown`\>[`K`]\> extends `Promise`<`unknown`\> ? `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\> : [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `jest.Matchers`<`unknown`\> |

#### Type declaration

▸ (`got`, ...`args`): `ReturnType`<`jest.Matchers`<`unknown`\>[`K`]\> extends `Promise`<`unknown`\> ? `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\> : [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `got` | `unknown` |
| `...args` | `Parameters`<`jest.Matchers`<`unknown`\>[`K`]\> |

##### Returns

`ReturnType`<`jest.Matchers`<`unknown`\>[`K`]\> extends `Promise`<`unknown`\> ? `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\> : [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

## Functions

### executionTimeToBeWithin

▸ **executionTimeToBeWithin**(`got`, `min`, `max`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `min` | `number` | Min time (inclusive). |
| `max` | `number` | Max time (inclusive). |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Result object.

___

### executionTimeToEqual

▸ **executionTimeToEqual**(`got`, `time`): `Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Checks that async function executes within expected time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `time` | `number` | Expected time. |

#### Returns

`Promise`<[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)\>

Result object.

___

### getClock

▸ **getClock**(): [`DeepReadonly`](types_core.md#deepreadonly)<`fakeTimers.Clock`\>

Gets fake timer.

#### Returns

[`DeepReadonly`](types_core.md#deepreadonly)<`fakeTimers.Clock`\>

Fake timer.

___

### htmlToEqual

▸ **htmlToEqual**(`got`, `expected`): [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Checks that HTMLElement contains expected HTML code.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `string` | Expected HTML code. |

#### Returns

[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Result object.

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
Should be used instead of fn.run when fake timer is install.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | [`PromiseAsync`](types_core.md#promiseasync)<`T`\> | Promise or async function. |

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

### textToEqual

▸ **textToEqual**(`got`, `expected`): [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Checks that HTMLElement contains expected text.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `string` | Expected text. |

#### Returns

[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Result object.

___

### toBeSameAs

▸ **toBeSameAs**(`got`, `expected`): [`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Checks that two objects are identical.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `expected` | `object` | Expected object. |

#### Returns

[`ExpectReturnType`](../interfaces/testUtils.ExpectReturnType.md)

Result object.
