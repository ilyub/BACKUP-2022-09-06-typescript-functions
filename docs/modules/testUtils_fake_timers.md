[Typescript functions](../index.md) / [Exports](../modules.md) / testUtils/fake-timers

# Module: testUtils/fake-timers

## Table of contents

### Interfaces

- [Options](../interfaces/testUtils_fake_timers.Options.md)

### Variables

- [clock](testUtils_fake_timers.md#clock)

### Functions

- [installFakeTimer](testUtils_fake_timers.md#installfaketimer)
- [run](testUtils_fake_timers.md#run)
- [setRandomSystemTime](testUtils_fake_timers.md#setrandomsystemtime)

## Variables

### clock

• `Const` **clock**: `Clock`

## Functions

### installFakeTimer

▸ **installFakeTimer**(`options?`): `void`

Installs fake timer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | [`Options`](../interfaces/testUtils_fake_timers.Options.md) | Options. |

#### Returns

`void`

___

### run

▸ **run**<`T`\>(`promiseAsync`): `Promise`<`T`\>

Executes promise or async function.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promiseAsync` | [`AsyncPromise`](types_function.md#asyncpromise)<`T`, [`nevers`](types_core.md#nevers)\> | Promise or async function. |

#### Returns

`Promise`<`T`\>

The result of callback execution.

___

### setRandomSystemTime

▸ **setRandomSystemTime**(): `void`

Sets random system time.

#### Returns

`void`
