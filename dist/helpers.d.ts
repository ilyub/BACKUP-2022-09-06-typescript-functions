import * as is from "./guards";
import type { Join2 } from "./types/core";
export declare type Facade<I, E = unknown> = E & FacadeOwnMethods<I> & I;
export interface FacadeOwnMethods<I> {
    /**
     * Sets implementation.
     *
     * @param implementation - Implementation.
     */
    readonly setImplementation: (implementation: I) => void;
}
export declare type SafeAccess<T extends object, W extends string & keyof T, R extends string & keyof T> = Join2<{
    [K in W]: T[K];
}, {
    readonly [K in R]: T[K];
}>;
export declare type SafeAccessGuards<T, W extends keyof T> = {
    readonly [K in W]: is.Guard<T[K]>;
};
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export declare function createFacade<I extends object, E = unknown>(name: string, extension: E): Facade<I, E>;
/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export declare function onDemand<T extends object>(generator: () => T): T;
/**
 * Defines source type.
 *
 * @param source - Source.
 * @returns Source.
 */
export declare function typedef<T>(source: T): T;
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
export declare function wrapProxyHandler<T extends object>(id: string, action: "doDefault" | "throw", handler: Readonly<ProxyHandler<T>>): ProxyHandler<T>;
//# sourceMappingURL=helpers.d.ts.map