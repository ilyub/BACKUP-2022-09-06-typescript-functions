[Typescript functions](../index.md) / [Exports](../modules.md) / [inline-assertions](../modules/inline_assertions.md) / ExclusionInlineAssertion

# Interface: ExclusionInlineAssertion<T\>

[inline-assertions](../modules/inline_assertions.md).ExclusionInlineAssertion

## Type parameters

| Name |
| :------ |
| `T` |

## Callable

### ExclusionInlineAssertion

▸ **ExclusionInlineAssertion**<`V`\>(`value`): `Exclude`<`V`, `T`\>

Asserts value type.

**`Throws`**

Error otherwise.

#### Type parameters

| Name |
| :------ |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `V` | Value. |

#### Returns

`Exclude`<`V`, `T`\>

Value if its type is not T.
