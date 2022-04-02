[Typescript functions](../index.md) / [Exports](../modules.md) / types/function

# Module: types/function

## Table of contents

### Interfaces

- [Async](../interfaces/types_function.Async.md)
- [CallSignature](../interfaces/types_function.CallSignature.md)
- [Callable](../interfaces/types_function.Callable.md)
- [ConstructSignature](../interfaces/types_function.ConstructSignature.md)
- [Constructor](../interfaces/types_function.Constructor.md)
- [Sync](../interfaces/types_function.Sync.md)

### Type aliases

- [AsyncPromise](types_function.md#asyncpromise)
- [AsyncPromiseSync](types_function.md#asyncpromisesync)

## Type aliases

### AsyncPromise

Ƭ **AsyncPromise**<`R`, `A`\>: [`Async`](../interfaces/types_function.Async.md)<`R`, `A`\> \| `Promise`<`R`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = [`nevers`](types_core.md#nevers) |

___

### AsyncPromiseSync

Ƭ **AsyncPromiseSync**<`R`, `A`\>: [`Async`](../interfaces/types_function.Async.md)<`R`, `A`\> \| `Promise`<`R`\> \| [`Sync`](../interfaces/types_function.Sync.md)<`R`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `A` | extends [`unknowns`](types_core.md#unknowns) = [`nevers`](types_core.md#nevers) |
