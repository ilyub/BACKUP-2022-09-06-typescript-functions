[Typescript functions](../index.md) / [Exports](../modules.md) / [assertions](assertions.md) / object

# Namespace: object

[assertions](assertions.md).object

## Table of contents

### Functions

- [of](assertions.object.md#of)

## Functions

### of

▸ **of**<`T`\>(`value`, `requiredGuards`, `optionalGuards`, `error?`): asserts value is T

Asserts that value type is T.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `requiredGuards` | [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\> | Guards for required properties. |
| `optionalGuards` | [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\> | Guards for optional properties. |
| `error?` | [`ErrorArg`](assertions.md#errorarg) | Error. |

#### Returns

asserts value is T
