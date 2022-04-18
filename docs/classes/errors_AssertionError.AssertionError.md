[Typescript functions](../index.md) / [Exports](../modules.md) / [errors/AssertionError](../modules/errors_AssertionError.md) / AssertionError

# Class: AssertionError

[errors/AssertionError](../modules/errors_AssertionError.md).AssertionError

## Hierarchy

- `Error`

  ↳ **`AssertionError`**

## Table of contents

### Constructors

- [constructor](errors_AssertionError.AssertionError.md#constructor)

### Properties

- [message](errors_AssertionError.AssertionError.md#message)
- [name](errors_AssertionError.AssertionError.md#name)
- [stack](errors_AssertionError.AssertionError.md#stack)
- [prepareStackTrace](errors_AssertionError.AssertionError.md#preparestacktrace)
- [stackTraceLimit](errors_AssertionError.AssertionError.md#stacktracelimit)

### Methods

- [captureStackTrace](errors_AssertionError.AssertionError.md#capturestacktrace)

## Constructors

### constructor

• **new AssertionError**(`message?`)

Creates class instance.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `string` | `"Assertion failed"` | Message. |

#### Overrides

Error.constructor

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

___

### name

• `Readonly` **name**: ``"AssertionError"``

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
