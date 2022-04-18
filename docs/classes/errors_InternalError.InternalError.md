[Typescript functions](../index.md) / [Exports](../modules.md) / [errors/InternalError](../modules/errors_InternalError.md) / InternalError

# Class: InternalError

[errors/InternalError](../modules/errors_InternalError.md).InternalError

## Hierarchy

- `Error`

  ↳ **`InternalError`**

## Table of contents

### Constructors

- [constructor](errors_InternalError.InternalError.md#constructor)

### Properties

- [message](errors_InternalError.InternalError.md#message)
- [name](errors_InternalError.InternalError.md#name)
- [stack](errors_InternalError.InternalError.md#stack)
- [prepareStackTrace](errors_InternalError.InternalError.md#preparestacktrace)
- [stackTraceLimit](errors_InternalError.InternalError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_InternalError.InternalError.md#capturestacktrace)

## Constructors

### constructor

• **new InternalError**(`message?`)

Creates class instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `"Internal error"` | Message. |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• `Readonly` **name**: ``"InternalError"``

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
