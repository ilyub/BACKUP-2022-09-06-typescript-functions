export declare class Accumulator2<K extends PropertyKey, L extends PropertyKey, T> {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source?: Iterable<IterableElement<K, L, T>>);
    [Symbol.iterator](): IterableIterator<IterableElement<K, L, T>>;
    /**
     * Returns array by keys.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @returns Array.
     */
    get(key1: K, key2: L): readonly T[];
    /**
     * Pushes value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    push(key1: K, key2: L, value: T): void;
    /**
     * Unshifts value.
     *
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     * @param value - Value.
     */
    unshift(key1: K, key2: L, value: T): void;
    protected readonly map: Map<K, Map<L, T[]>>;
}
export declare type IterableElement<K extends PropertyKey, L extends PropertyKey, T> = readonly [K, L, readonly T[]];
//# sourceMappingURL=Accumulator2.d.ts.map