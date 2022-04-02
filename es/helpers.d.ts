import * as is from "./guards";
import type { TypedObject } from "./types/core";
import type { Join2 } from "./types/object";
export declare type Facade<I, E = unknown> = E & FacadeOwnMethods<I> & I;
export interface FacadeOwnMethods<I> {
    /**
     * Sets implementation.
     *
     * @param implementation - Implementation.
     */
    readonly setImplementation: (implementation: I) => void;
}
export declare type ProxyHandlerAction = "doDefault" | "throw";
export declare type SafeAccess<T extends object, W extends string & keyof T, R extends string & keyof T> = Join2<{
    [K in W]: T[K];
}, {
    readonly [K in R]: T[K];
}>;
export declare type SafeAccessGuards<T, W extends string & keyof T> = {
    readonly [K in W]: is.Guard<T[K]>;
};
export declare type ValidationObject<T extends PropertyKey> = ReadonlySet<T>;
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export declare function createFacade<I extends object, E = unknown>(name: string, extension: E): Facade<I, E>;
/**
 * Creates validation object.
 *
 * @param source - Source.
 * @returns Validation object.
 */
export declare function createValidationObject<T extends PropertyKey>(source: TypedObject<T, T>): ValidationObject<T>;
/**
 * Generates resource on demand.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export declare function onDemand<T extends object>(generator: () => T): T;
/**
 * Defines value type.
 *
 * @param value - Value.
 * @returns Value.
 */
export declare function typedef<T>(value: T): T;
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param guards - Guards.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export declare function safeAccess<T extends object, W extends string & keyof T, R extends string & keyof T>(obj: T, guards: SafeAccessGuards<T, W>, readonlyKeys?: readonly R[]): SafeAccess<T, W, R>;
/**
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export declare function wait(timeout: number): Promise<void>;
/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param action - Action for missing methods.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export declare function wrapProxyHandler<T extends object>(id: string, action: ProxyHandlerAction, handler: Readonly<ProxyHandler<T>>): ProxyHandler<T>;
//# sourceMappingURL=helpers.d.ts.map