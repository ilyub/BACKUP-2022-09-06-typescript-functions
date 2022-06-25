import type { AsyncPromise, IndexedObject, NumStr, Rec, Sync, Writable } from "./types";
/**
 * Defines function with properties.
 *
 * @param fn - Function.
 * @param props - Properties.
 * @returns Function with properties.
 */
export declare const defineFn: <F, P>(fn: F, props: P) => F & Readonly<P>;
export declare type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export declare function createValidationObject<T extends NumStr>(source: Rec<T, T>): ValidationObject<T>;
/**
 * Executes callback.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(callback: Sync<T>): T;
/**
 * Executes promise or async function.
 *
 * @param mixed - Promise or async function.
 * @returns The result of callback execution.
 */
export declare function evaluate<T>(mixed: AsyncPromise<T>): Promise<T>;
/**
 * Marks value as readonly.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function freeze<T>(value: T): Readonly<T>;
/**
 * Marks value as indexed.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function indexed(value: object): IndexedObject;
/**
 * Defines function with overloads.
 *
 * @param callback - Callback.
 * @returns The result of callback execution.
 */
export declare function overload<T>(callback: () => T): T;
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function typedef<T>(value: T): T;
/**
 * Marks value as writable.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function unfreeze<T>(value: T): Writable<T>;
//# sourceMappingURL=core.d.ts.map