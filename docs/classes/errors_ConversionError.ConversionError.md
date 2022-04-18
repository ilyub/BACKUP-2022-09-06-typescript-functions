[Typescript functions](../index.md) / [Exports](../modules.md) / [errors/ConversionError](../modules/errors_ConversionError.md) / ConversionError

# Class: ConversionError

[errors/ConversionError](../modules/errors_ConversionError.md).ConversionError

## Hierarchy

- `Error`

  ↳ **`ConversionError`**

## Table of contents

### Constructors

- [constructor](errors_ConversionError.ConversionError.md#constructor)

### Properties

- [message](errors_ConversionError.ConversionError.md#message)
- [name](errors_ConversionError.ConversionError.md#name)
- [stack](errors_ConversionError.ConversionError.md#stack)
- [prepareStackTrace](errors_ConversionError.ConversionError.md#preparestacktrace)
- [stackTraceLimit](errors_ConversionError.ConversionError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_ConversionError.ConversionError.md#capturestacktrace)

## Constructors

### constructor

• **new ConversionError**(`message?`)

Creates class instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `"Conversion error"` | Message. |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• `Readonly` **name**: ``"ConversionError"``

#### Overrides

Error.name

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace
