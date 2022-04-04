[Typescript functions](../index.md) / [Exports](../modules.md) / [guards](guards.md) / object

# Namespace: object

[guards](guards.md).object

## Table of contents

### Variables

- [factory](guards.object.md#factory)
- [of](guards.object.md#of)

## Variables

### factory

• **factory**: <R, O\>(`required`: [`Guards`](guards.md#guards)<`R`, keyof `R`\>, `optional`: [`Guards`](guards.md#guards)<`O`, keyof `O`\>) => [`Guard`](../interfaces/guards.Guard.md)<[`OptionalStyle`](types_object.md#optionalstyle)<`Partial`<`O`\>\> & [`UndefinedStyle`](types_object.md#undefinedstyle)<`R`\>\><T\>(`required`: [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\>, `optional`: [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\>) => [`Guard`](../interfaces/guards.Guard.md)<`T`\>

#### Type declaration

▸ <`R`, `O`\>(`required`, `optional`): [`Guard`](../interfaces/guards.Guard.md)<[`OptionalStyle`](types_object.md#optionalstyle)<`Partial`<`O`\>\> & [`UndefinedStyle`](types_object.md#undefinedstyle)<`R`\>\>

Creates object guard.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `required` | [`Guards`](guards.md#guards)<`R`, keyof `R`\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`O`, keyof `O`\> | Guards for optional properties. |

##### Returns

[`Guard`](../interfaces/guards.Guard.md)<[`OptionalStyle`](types_object.md#optionalstyle)<`Partial`<`O`\>\> & [`UndefinedStyle`](types_object.md#undefinedstyle)<`R`\>\>

Object guard.

▸ <`T`\>(`required`, `optional`): [`Guard`](../interfaces/guards.Guard.md)<`T`\>

Creates object guard.

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

Object guard.

___

### of

• **of**: <R, O\>(`value`: `unknown`, `required`: [`Guards`](guards.md#guards)<`R`, keyof `R`\>, `optional`: [`Guards`](guards.md#guards)<`O`, keyof `O`\>) => value is Join4<{ [K in string \| number \| symbol]: Partial<O\>[K] }, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> }, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\> & Join4<{ [K in string \| number \| symbol]: R[K] }, { [K in string \| number \| symbol]: undefined \| R[K] }, { readonly [K in never]: R[K] }, { readonly [K in never]: undefined \| R[K] }\><T\>(`value`: `unknown`, `required`: [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\>, `optional`: [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\>) => value is T

#### Type declaration

▸ <`R`, `O`\>(`value`, `required`, `optional`): value is Join4<{ [K in string \| number \| symbol]: Partial<O\>[K] }, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> }, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\> & Join4<{ [K in string \| number \| symbol]: R[K] }, { [K in string \| number \| symbol]: undefined \| R[K] }, { readonly [K in never]: R[K] }, { readonly [K in never]: undefined \| R[K] }\>

Checks that value is an object.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `object` |
| `O` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `required` | [`Guards`](guards.md#guards)<`R`, keyof `R`\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`O`, keyof `O`\> | Guards for optional properties. |

##### Returns

value is Join4<{ [K in string \| number \| symbol]: Partial<O\>[K] }, { [K in string \| number \| symbol]?: Exclude<Partial<O\>[K], undefined\> }, { readonly [K in never]: Partial<O\>[K] }, { readonly [K in never]?: Exclude<Partial<O\>[K], undefined\> }\> & Join4<{ [K in string \| number \| symbol]: R[K] }, { [K in string \| number \| symbol]: undefined \| R[K] }, { readonly [K in never]: R[K] }, { readonly [K in never]: undefined \| R[K] }\>

_True_ if value is an object, _false_ otherwise.

▸ <`T`\>(`value`, `required`, `optional`): value is T

Checks that value is an object.

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | Value. |
| `required` | [`Guards`](guards.md#guards)<`T`, `RequiredKeys`<`T`\>\> | Guards for required properties. |
| `optional` | [`Guards`](guards.md#guards)<`T`, `OptionalKeys`<`T`\>\> | Guards for optional properties. |

##### Returns

value is T

_True_ if value is an object, _false_ otherwise.
