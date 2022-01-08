import type { AddPrefix } from "./types/core";
export declare type Facade<F, E = unknown> = F & FacadeOwnMethods<F> & E;
export interface FacadeOwnMethods<F> {
    /**
     * Sets implementation.
     *
     * @param implementation - Implementation.
     */
    readonly setImplementation: (implementation: F) => void;
}
export declare type SafeAccess<T extends object, W extends keyof T & string, R extends keyof T> = {
    readonly [K in W as AddPrefix<Capitalize<K>, "set">]: (value: T[K]) => void;
} & {
    readonly [K in W]: T[K];
} & {
    readonly [K in R]: T[K];
};
/**
 * Creates facade.
 *
 * @param name - Facade name.
 * @param extension - Facade extension.
 * @returns Facade.
 */
export declare function createFacade<F extends object, E = unknown>(name: string, extension: E): Facade<F, E>;
/**
 * Delays resource generation until demanded.
 *
 * @param generator - Resource generator.
 * @returns Resource.
 */
export declare function onDemand<T extends object>(generator: () => T): T;
/**
 * Creates safe access interface for an object.
 *
 * @param obj - Object.
 * @param writableKeys - Writable keys.
 * @param readonlyKeys - Readonly keys.
 * @returns Safe access interface.
 */
export declare function safeAccess<T extends object, W extends keyof T & string, R extends keyof T>(obj: T, writableKeys: readonly W[], readonlyKeys?: readonly R[]): SafeAccess<T, W, R>;
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