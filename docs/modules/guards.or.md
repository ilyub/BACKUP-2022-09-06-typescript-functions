[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / or

# Namespace: or

[guards](guards.md).or

## Table of contents

### Variables

- [factory](guards.or.md#factory)

## Variables

### factory

• **factory**: <A, B\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\><A, B, C\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\><A, B, C, D\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>, `guard4`: [`Guard`](../interfaces/guards.Guard.md)<`D`\>) => [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\>

#### Type declaration

▸ <`A`, `B`\>(`guard1`, `guard2`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\>

Creates guard for type A | B.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B`\>

Guard for type A | B.

▸ <`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\>

Creates guard for type A | B | C.

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C`\>

Guard for type A | B | C.

▸ <`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\>

Creates guard for type A | B | C | D.

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard 1. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard 2. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard 3. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard 4. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<`A` \| `B` \| `C` \| `D`\>

Guard for type A | B | C | D.
