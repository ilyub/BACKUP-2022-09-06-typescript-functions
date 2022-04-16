import type { Entry } from "./types";
export declare class Accumulator<K extends PropertyKey, T> {
    /**
     * Creates class instance.
     *
     * @param source - Source.
     */
    constructor(source?: Iterable<IterableElement<K, T>>);
    [Symbol.iterator](): IterableIterator<IterableElement<K, T>>;
    /**
     * Returns array by key.
     *
     * @param key - Key.
     * @returns Array.
     */
    get(key: K): readonly T[];
    /**
     * Pushes value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    push(key: K, value: T): void;
    /**
     * Unshifts value.
     *
     * @param key - Key.
     * @param value - Value.
     */
    unshift(key: K, value: T): void;
    protected readonly map: Map<K, T[]>;
}
export declare type IterableElement<K extends PropertyKey, T> = Entry<K, readonly T[]>;
//# sourceMappingURL=Accumulator.d.ts.map