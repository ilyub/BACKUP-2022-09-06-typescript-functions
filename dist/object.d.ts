import * as is from "./guards";
import type { Entry, NumStr, OptionalStyle, PartialRecord, Rec, StrictOmit, Writable, WritablePartialRecord, objectU } from "./types";
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export declare const assign: <T extends object>(mutableTarget: T, ...sources: Array<Partial<T>>) => T;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export declare const defineProperty: <T, K extends keyof T = keyof T>(obj: T, key: K, descriptor: Descriptor<T, K>) => void;
export declare const entries: {
    /**
     * Typed version of Object.entries.
     *
     * @param obj - Object.
     * @returns Object entries.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): Array<Entry<K, V>>;
    /**
     * Typed version of Object.entries.
     *
     * @param obj - Object.
     * @returns Object entries.
     */
    <T extends object>(obj: T): Array<Entry<string & keyof T, T[NumStr & keyof T]>>;
};
export declare const extend: {
    /**
     * Typed version of Object.assign.
     *
     * @param target - Target object.
     * @param source - Source.
     * @returns Target.
     */
    <T extends object, A>(target: T, source: A): A & T;
    /**
     * Typed version of Object.assign.
     *
     * @param target - Target object.
     * @param source1 - Source 1.
     * @param source2 - Source 2.
     * @returns Target.
     */
    <T extends object, A, B>(target: T, source1: A, source2: B): A & B & T;
    /**
     * Typed version of Object.assign.
     *
     * @param target - Target object.
     * @param source1 - Source 1.
     * @param source2 - Source 2.
     * @param source3 - Source 3.
     * @returns Target.
     */
    <T extends object, A, B, C>(target: T, source1: A, source2: B, source3: C): A & B & C & T;
};
export declare const fromEntries: {
    /**
     * Creates object from entries.
     *
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive: <K extends PropertyKey, V>(entries: Iterable<Entry<K, V>>) => Rec<K, V>;
} & (<K_1 extends PropertyKey, V_1>(entries: Iterable<Entry<K_1, V_1>>) => WritablePartialRecord<K_1, V_1>);
export declare const keys: {
    /**
     * Typed version of Object.keys.
     *
     * @param obj - Object.
     * @returns Object keys.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): K[];
    /**
     * Typed version of Object.keys.
     *
     * @param obj - Object.
     * @returns Object keys.
     */
    <T extends object>(obj: T): Array<string & keyof T>;
};
export declare const values: {
    /**
     * Typed version of Object.values.
     *
     * @param obj - Object.
     * @returns Object values.
     */
    <K extends string, V>(obj: PartialRecord<K, V>): V[];
    /**
     * Typed version of Object.values.
     *
     * @param obj - Object.
     * @returns Object values.
     */
    <T extends object>(obj: T): Array<T[NumStr & keyof T]>;
};
export interface CompareFn<T extends object> {
    /**
     * Compares two object entries.
     *
     * @param value1 - Value 1.
     * @param value2 - Value 2.
     * @param key1 - Key 1.
     * @param key2 - Key 2.
     */
    (value1: T[keyof T], value2: T[keyof T], key1: keyof T, key2: keyof T): number;
}
export interface Descriptor<T, K extends keyof T = keyof T> extends PropertyDescriptor {
    readonly configurable?: boolean;
    readonly enumerable?: boolean;
    /**
     * Property getter.
     *
     * @param this - This argument.
     * @returns Value.
     */
    readonly get?: (this: T) => T[K];
    /**
     * Property setter.
     *
     * @param this - This argument.
     * @param value - New value.
     */
    readonly set?: (this: T, value: T[K]) => void;
    readonly value?: T[K];
    readonly writable?: boolean;
}
export interface Predicate<T extends object> {
    /**
     * Checks object entry.
     *
     * @param value - Value.
     * @param key - Key.
     * @returns _True_ if object entry passes check, _false_ otherwise.
     */
    (value: T[keyof T], key: keyof T): boolean;
}
/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
export declare function clone<T extends object>(obj: T): Writable<T>;
/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export declare function every<T extends object>(obj: T, predicate: Predicate<T>): boolean;
/**
 * Filters object by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export declare function filter<T extends object>(obj: T, predicate: Predicate<T>): Partial<T>;
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object.
 */
export declare function freeze<T extends object>(obj: T): Readonly<T>;
/**
 * Returns object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @returns Object property.
 */
export declare function get(obj: object, key: PropertyKey): unknown;
/**
 * Returns object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Object property if its type is T.
 * @throws AssertionError otherwise.
 */
export declare function get<T>(obj: object, key: PropertyKey, guard?: is.Guard<T>, defVal?: T): T;
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export declare function getPrototypeOf(obj: object): objectU;
/**
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export declare function hasOwnProp(key: PropertyKey, obj: object): boolean;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export declare function map<K extends string, V, R>(obj: Rec<K, V>, callback: (value: V, key: K) => R): Rec<K, R>;
/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export declare function omit<T extends object, K extends string & keyof T>(obj: T, ...exclude: K[]): StrictOmit<T, K>;
/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
export declare function removeUndefinedKeys<T extends object>(obj: T): OptionalStyle<T>;
/**
 * Sets object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
export declare function set(obj: object, key: PropertyKey, value: unknown): void;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export declare function size(obj: object): number;
/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export declare function some<T extends object>(obj: T, predicate: Predicate<T>): boolean;
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export declare function sort<K extends string, V>(obj: Rec<K, V>, compareFn?: CompareFn<Rec<K, V>>): Rec<K, V>;
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export declare function sort<T extends object>(obj: T, compareFn?: CompareFn<T>): T;
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object.
 */
export declare function unfreeze<T extends object>(obj: T): Writable<T>;
//# sourceMappingURL=object.d.ts.map