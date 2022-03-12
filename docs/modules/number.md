[Typescript functions](../index.md) / [Exports](../modules.md) / number

# Module: number

## Table of contents

### Namespaces

- [ceil](number.ceil.md)
- [floor](number.floor.md)
- [round](number.round.md)

### Functions

- [average](number.md#average)
- [ceil](number.md#ceil)
- [ceilStep](number.md#ceilstep)
- [floor](number.md#floor)
- [floorStep](number.md#floorstep)
- [limit](number.md#limit)
- [round](number.md#round)
- [roundStep](number.md#roundstep)
- [sum](number.md#sum)

## Functions

### average

▸ **average**(...`values`): `number`

Averages values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `number`[] | Values. |

#### Returns

`number`

The average.

___

### ceil

▸ **ceil**(`value`, `precision`): `number`

Ceils number to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Ceiled value.

___

### ceilStep

▸ **ceilStep**(`value`, `step`, `from?`): `number`

Ceils number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | Value. |
| `step` | `number` | `undefined` | Step. |
| `from` | `number` | `0` | From. |

#### Returns

`number`

Ceiled value.

___

### floor

▸ **floor**(`value`, `precision`): `number`

Floors number to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Floored value.

___

### floorStep

▸ **floorStep**(`value`, `step`, `from?`): `number`

Floors number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | Value. |
| `step` | `number` | `undefined` | Step. |
| `from` | `number` | `0` | From. |

#### Returns

`number`

Floored value.

___

### limit

▸ **limit**(`value`, `min`, `max`): `number`

Limits value to be within [min, max] range.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `min` | `number` | Min. |
| `max` | `number` | Max. |

#### Returns

`number`

Limited value.

___

### round

▸ **round**(`value`, `precision`): `number`

Rounds number to a given precision.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Value. |
| `precision` | `number` | The number of digits to keep. |

#### Returns

`number`

Rounded value.

___

### roundStep

▸ **roundStep**(`value`, `step`, `from?`): `number`

Rounds number.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | Value. |
| `step` | `number` | `undefined` | Step. |
| `from` | `number` | `0` | From. |

#### Returns

`number`

Rounded value.

___

### sum

▸ **sum**(...`values`): `number`

Sums values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | `number`[] | Values. |

#### Returns

`number`

The sum.
