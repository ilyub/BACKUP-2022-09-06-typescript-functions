[Typescript functions](../index.md) / [Exports](../modules.md) / timer

# Module: timer

## Table of contents

### Functions

- [addInterval](timer.md#addinterval)
- [addTimeout](timer.md#addtimeout)
- [removeInterval](timer.md#removeinterval)
- [removeTimeout](timer.md#removetimeout)

## Functions

### addInterval

▸ **addInterval**(`callback`, `delay`): [`Interval`](types_core.md#interval)

Adds interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `delay` | `number` | Delay. |

#### Returns

[`Interval`](types_core.md#interval)

Handler.

___

### addTimeout

▸ **addTimeout**(`callback`, `delay`): [`Timeout`](types_core.md#timeout)

Adds timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | () => `void` | Callback. |
| `delay` | `number` | Delay. |

#### Returns

[`Timeout`](types_core.md#timeout)

Handler.

___

### removeInterval

▸ **removeInterval**(`handler`): `void`

Removes interval.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `undefined` \| `number` | Handler. |

#### Returns

`void`

___

### removeTimeout

▸ **removeTimeout**(`handler`): `void`

Removes timeout.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler` | `undefined` \| `number` | Handler. |

#### Returns

`void`
