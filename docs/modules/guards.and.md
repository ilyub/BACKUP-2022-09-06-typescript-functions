[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / and

# Namespace: and

[guards](guards.md).and

## Table of contents

### Variables

- [factory](guards.and.md#factory)

## Variables

### factory

• **factory**: <A, B\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>) => [`Guard`](guards.md#guard)<`A` & `B`\><A, B, C\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>, `guard3`: [`Guard`](guards.md#guard)<`C`\>) => [`Guard`](guards.md#guard)<`A` & `B` & `C`\><A, B, C, D\>(`guard1`: [`Guard`](guards.md#guard)<`A`\>, `guard2`: [`Guard`](guards.md#guard)<`B`\>, `guard3`: [`Guard`](guards.md#guard)<`C`\>, `guard4`: [`Guard`](guards.md#guard)<`D`\>) => [`Guard`](guards.md#guard)<`A` & `B` & `C` & `D`\>

#### Type declaration

▸ <`A`, `B`\>(`guard1`, `guard2`): [`Guard`](guards.md#guard)<`A` & `B`\>

Creates guard for type A & B.

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

[`Guard`](guards.md#guard)<`A` & `B`\>

Guard for type A & B.

▸ <`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](guards.md#guard)<`A` & `B` & `C`\>

Creates guard for type A & B & C.

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

[`Guard`](guards.md#guard)<`A` & `B` & `C`\>

Guard for type A & B & C.

▸ <`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](guards.md#guard)<`A` & `B` & `C` & `D`\>

Creates guard for type A & B & C & D.

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

[`Guard`](guards.md#guard)<`A` & `B` & `C` & `D`\>

Guard for type A & B & C & D.
