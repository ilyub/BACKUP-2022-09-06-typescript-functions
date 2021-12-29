[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / object

# Namespace: object

[guards](guards.md).object

## Table of contents

### Variables

- [of](guards.object.md#of)

## Variables

### of

• **of**: <A, B\>(`value`: `unknown`, `requiredGuards`: [`Guards`](guards.md#guards)<`A`\>, `optionalGuards`: [`Guards`](guards.md#guards)<`B`\>) => value is Required<A\> & Partial<B\>

#### Type declaration

▸ <`A`, `B`\>(`value`, `requiredGuards`, `optionalGuards`): value is Required<A\> & Partial<B\>

Checks that value type is T.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `requiredGuards` | [`Guards`](guards.md#guards)<`A`\> | Guards for required properties. |
| `optionalGuards` | [`Guards`](guards.md#guards)<`B`\> | Guards for optional properties. |

##### Returns

value is Required<A\> & Partial<B\>

_True_ if value type is T, _false_ otherwise.
