[Typescript functions](../index.md) / [Exports](../modules.md) / [testUtils](../modules/testUtils.md) / ExpectFromMatcher

# Interface: ExpectFromMatcher<K\>

[testUtils](../modules/testUtils.md).ExpectFromMatcher

## Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `jest.Matchers`<`unknown`\> |

## Callable

### ExpectFromMatcher

▸ **ExpectFromMatcher**(`got`, ...`args`): `ReturnType`<`Matchers`<`unknown`, {}\>[`K`]\> extends `Promise`<`unknown`\> ? `Promise`<[`ExpectReturnType`](testUtils.ExpectReturnType.md)\> : [`ExpectReturnType`](testUtils.ExpectReturnType.md)

Converts matcher function to expect function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `got` | `unknown` | Got value. |
| `...args` | `Parameters`<`Matchers`<`unknown`, {}\>[`K`]\> | Args. |

#### Returns

`ReturnType`<`Matchers`<`unknown`, {}\>[`K`]\> extends `Promise`<`unknown`\> ? `Promise`<[`ExpectReturnType`](testUtils.ExpectReturnType.md)\> : [`ExpectReturnType`](testUtils.ExpectReturnType.md)

Result.
