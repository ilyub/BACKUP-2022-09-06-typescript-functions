export declare type Facade<F, E = unknown> = F & FacadeOwnMethods<F> & E;
export interface FacadeOwnMethods<F> {
    /**
     * Sets implementation.
     *
     * @param implementation - Implementation.
     */
    readonly setImplementation: (implementation: F) => void;
}
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
 * Delays program execution.
 *
 * @param timeout - Timeout (ms).
 */
export declare function wait(timeout: number): Promise<void>;
/**
 * Adds missing methods to proxy handler.
 *
 * @param id - ID.
 * @param handler - Handler.
 * @returns New handler with missing methods added.
 */
export declare function wrapProxyHandler<T extends object>(id: string, handler: Readonly<ProxyHandler<T>>): ProxyHandler<T>;
//# sourceMappingURL=helpers.d.ts.map