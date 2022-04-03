[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / object

# Namespace: object

[assertions](assertions.md).object

## Table of contents

### Functions

- [of](assertions.object.md#of)

## Functions

### of

▸ **of**<`R`, `O`\>(`value`, `required`, `optional`, `error?`): asserts value is ObjectOfReturn<R, O\>

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `required` | [`Guards`](guards.md#guards)<`R`, keyof `R`\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`O`, keyof `O`\> | Guards for optional properties. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is ObjectOfReturn<R, O\>
