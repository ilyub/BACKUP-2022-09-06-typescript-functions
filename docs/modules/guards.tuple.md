[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / tuple

# Namespace: tuple

[guards](guards.md).tuple

## Table of contents

### Variables

- [factory](guards.tuple.md#factory)

## Variables

### factory

• **factory**: <A\>(`guard`: [`Guard`](guards.md#guard)<`A`\>) => [`Guard`](guards.md#guard)<readonly [`A`]\><A, B\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>) => [`Guard`](guards.md#guard)<readonly [`A`, `B`]\><A, B, C\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>, `guard3`: [`Guard`](guards.md#guard)<`C`\>) => [`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`]\><A, B, C, D\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>, `guard3`: [`Guard`](guards.md#guard)<`C`\>, `guard4`: [`Guard`](guards.md#guard)<`D`\>) => [`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`, `D`]\>

#### Type declaration

▸ <`A`\>(`guard`): [`Guard`](guards.md#guard)<readonly [`A`]\>

Creates guard for type [A].

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](guards.md#guard)<`A`\> | Guard. |

##### Returns

[`Guard`](guards.md#guard)<readonly [`A`]\>

Guard for type [A].

▸ <`A`, `B`\>(`guard1`, `guard2`): [`Guard`](guards.md#guard)<readonly [`A`, `B`]\>

Creates guard for type [A, B].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](guards.md#guard)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](guards.md#guard)<`B`\> | Guard 2. |

##### Returns

[`Guard`](guards.md#guard)<readonly [`A`, `B`]\>

Guard for type [A, B].

▸ <`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`]\>

Creates guard for type [A, B, C].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](guards.md#guard)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](guards.md#guard)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](guards.md#guard)<`C`\> | Guard 3. |

##### Returns

[`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`]\>

Guard for type [A, B, C].

▸ <`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`, `D`]\>

Creates guard for type [A, B, C, D].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](guards.md#guard)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](guards.md#guard)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](guards.md#guard)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](guards.md#guard)<`D`\> | Guard 4. |

##### Returns

[`Guard`](guards.md#guard)<readonly [`A`, `B`, `C`, `D`]\>

Guard for type [A, B, C, D].
