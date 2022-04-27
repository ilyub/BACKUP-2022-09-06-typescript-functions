[Typescript functions](../index.md) / [Exports](../modules.md) / module-definition

# Module: module-definition

## Table of contents

### Functions

- [defineFn](module_definition.md#definefn)
- [overloadedFn](module_definition.md#overloadedfn)

## Functions

### defineFn

▸ **defineFn**<`F`, `P`\>(`fn`, `props`): `F` & `P`

Defines function with properties.

#### Type parameters

| Name |
| :------ |
| `F` |
| `P` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `F` | Function. |
| `props` | `P` | Properties. |

#### Returns

`F` & `P`

Function with properties.

___

### overloadedFn

▸ **overloadedFn**<`T`\>(`callback`): `T`

Defines function with overloads.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `T` | Callback. |

#### Returns

`T`

The result of callback execution.
