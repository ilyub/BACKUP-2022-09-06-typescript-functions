[Typescript functions](../index.md) / [Exports](../modules.md) / configs/eslintrc.options

# Module: configs/eslintrc.options

## Table of contents

### Namespaces

- [export&#x3D;](configs_eslintrc_options.export_.md)

### Properties

- [export&#x3D;](configs_eslintrc_options.md#export&#x3D;)

## Properties

### export&#x3D;

• **export=**: (`importPrefix`: `any`) => { `consistentImport`: ({ `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `string` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/array"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `never` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/arrayMap"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `string` ; `localName`: `never` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/testUtils"; `type`: `string` = "wildcard" })[]  }

#### Type declaration

▸ (`importPrefix`): `Object`

Returns ESLint options.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `importPrefix` | `any` | Import prefix. |

##### Returns

`Object`

ESLint options.

| Name | Type |
| :------ | :------ |
| `consistentImport` | ({ `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `string` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/array"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `never` ; `autoImportSource`: `string` ; `localName`: `never` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/arrayMap"; `type`: `string` = "wildcard" } \| { `altLocalNames`: `string`[] ; `autoImportSource`: `string` ; `localName`: `never` = "a"; `sourcePattern`: `string` = "@skylib/functions/*/testUtils"; `type`: `string` = "wildcard" })[] |
