[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / tuple

# Namespace: tuple

[guards](guards.md).tuple

## Table of contents

### Variables

- [factory](guards.tuple.md#factory)

## Variables

### factory

• **factory**: <A\>(`guard`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\><A, B\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\><A, B, C\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\><A, B, C, D\>(`guard1`: [`Guard`](../interfaces/guards.Guard.md)<`A`\>, `guard2`: [`Guard`](../interfaces/guards.Guard.md)<`B`\>, `guard3`: [`Guard`](../interfaces/guards.Guard.md)<`C`\>, `guard4`: [`Guard`](../interfaces/guards.Guard.md)<`D`\>) => [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\>

#### Type declaration

▸ <`A`\>(`guard`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\>

Creates guard for type [A].

##### Type parameters

| Name |
| :------ |
| `A` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`]\>

Guard for type [A].

▸ <`A`, `B`\>(`guard1`, `guard2`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\>

Creates guard for type [A, B].

##### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`]\>

Guard for type [A, B].

▸ <`A`, `B`, `C`\>(`guard1`, `guard2`, `guard3`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\>

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`]\>

Guard for type [A, B, C].

▸ <`A`, `B`, `C`, `D`\>(`guard1`, `guard2`, `guard3`, `guard4`): [`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\>

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
| `guard1` | [`Guard`](../interfaces/guards.Guard.md)<`A`\> | Guard for type A. |
| `guard2` | [`Guard`](../interfaces/guards.Guard.md)<`B`\> | Guard for type B. |
| `guard3` | [`Guard`](../interfaces/guards.Guard.md)<`C`\> | Guard for type C. |
| `guard4` | [`Guard`](../interfaces/guards.Guard.md)<`D`\> | Guard for type D. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<readonly [`A`, `B`, `C`, `D`]\>

Guard for type [A, B, C, D].
