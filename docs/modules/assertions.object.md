[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / object

# Namespace: object

[assertions](assertions.md).object

## Table of contents

### Functions

- [of](assertions.object.md#of)

## Functions

### of

▸ **of**<`A`, `B`\>(`value`, `requiredGuards`, `optionalGuards`, `error?`): asserts value is Required<A\> & Partial<B\>

Asserts that value type is T.

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `requiredGuards` | [`Guards`](guards.md#guards)<`A`\> | Guards for required properties. |
| `optionalGuards` | [`Guards`](guards.md#guards)<`B`\> | Guards for optional properties. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error to be thrown. |

#### Returns

asserts value is Required<A\> & Partial<B\>
