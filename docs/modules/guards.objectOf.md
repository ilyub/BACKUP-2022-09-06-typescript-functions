[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / objectOf

# Namespace: objectOf

[guards](guards.md).objectOf

## Table of contents

### Variables

- [factory](guards.objectOf.md#factory)

## Variables

### factory

• **factory**: <T\>(`required`: [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\>, `optional`: [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\>) => [`Guard`](../interfaces/guards.Guard.md)<`T`\>

#### Type declaration

▸ <`T`\>(`required`, `optional`): [`Guard`](../interfaces/guards.Guard.md)<`T`\>

Creates guard for type T.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\> | Guards for optional properties. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<`T`\>

Guard for type T.
