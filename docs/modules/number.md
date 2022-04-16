[Typescript functions](../index.md) / [Exports](../modules.md) / number

# Module: number

## Table of contents

### Variables

- [ceil](number.md#ceil)
- [floor](number.md#floor)
- [round](number.md#round)

### Functions

- [average](number.md#average)
- [limit](number.md#limit)
- [rootMeanSquareDeviation](number.md#rootmeansquaredeviation)
- [sum](number.md#sum)

## Variables

### ceil

• `Const` **ceil**: (`value`: `number`, `precision`: `number`) => `number` & { `step`: (`value`: `number`, `step`: `number`, `from`: `number`) => `number`  }

Ceils number to a given precision.

**`param`** Value.

**`param`** The number of digits to keep.

**`returns`** Ceiled value.

___

### floor

• `Const` **floor**: (`value`: `number`, `precision`: `number`) => `number` & { `step`: (`this`: `void`, `value`: `number`, `step`: `number`, `from`: `number`) => `number`  }

Floors number to a given precision.

**`param`** Value.

**`param`** The number of digits to keep.

**`returns`** Floored value.

___

### round

• `Const` **round**: (`value`: `number`, `precision`: `number`) => `number` & { `step`: (`this`: `void`, `value`: `number`, `step`: `number`, `from`: `number`) => `number`  }

Rounds number to a given precision.

**`param`** Value.

**`param`** The number of digits to keep.

**`returns`** Rounded value.

## Functions

### average

▸ **average**(...`values`): `number`

Averages values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

The average.

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

### rootMeanSquareDeviation

▸ **rootMeanSquareDeviation**(...`values`): `number`

Calculates root-mean-square deviation.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

Root-mean-square deviation.

___

### sum

▸ **sum**(...`values`): `number`

Sums values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...values` | [`numbers`](types_core.md#numbers) | Values. |

#### Returns

`number`

The sum.
