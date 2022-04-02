import type { IndexedObject, objectU, PartialTypedObject, TypedObject, Writable } from "./types/core";
import type { OptionalPropertiesToOptional, StrictOmit } from "./types/object";
export interface Assign {
    /**
     * Typed version of Object.assign.
     *
     * @param mutableTarget - Target.
     * @param sources - Sources.
     * @returns Target.
     */
    <T extends object>(mutableTarget: T, ...sources: Array<Partial<T>>): T;
}
export interface Callback<T extends object> {
    /**
     * Checks object entry.
     *
     * @param value - Value.
     * @param key - Key.
     * @returns _True_ if entry passes check, _false_ otherwise.
     */
    (value: T[keyof T], key: keyof T): boolean;
}
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
export interface DefineProperty {
    /**
     * Typed version of Object.defineProperty.
     *
     * @param obj - Object.
     * @param key - Property key.
     * @param descriptor - Descriptor.
     */
    <T extends object, K extends keyof T = keyof T>(obj: T, key: PropertyKey, descriptor: Descriptor<T, K>): void;
}
export interface Descriptor<T extends object = object, K extends keyof T = keyof T> {
    readonly configurable?: boolean;
    readonly enumerable?: boolean;
    /**
     * Property getter.
     *
     * @param this - Object.
     * @returns Value.
     */
    readonly get?: (this: T) => T[K];
    /**
     * Property setter.
     *
     * @param this - Object.
     * @param value - New value.
     */
    readonly set?: (this: T, value: T[K]) => void;
    readonly value?: T[K];
    readonly writable?: boolean;
}
export interface Entries {
    /**
     * Typed version of Object.entries.
     *
     * @param obj - Object.
     * @returns Object entries.
     */
    <T extends object>(obj: T): ReadonlyArray<readonly [keyof T, T[keyof T]]>;
}
export interface Extend {
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
}
export interface Keys {
    /**
     * Typed version of Object.keys.
     *
     * @param obj - Object.
     * @returns Object keys.
     */
    <T extends object>(obj: T): ReadonlyArray<keyof T>;
}
export interface Values {
    /**
     * Typed version of Object.values.
     *
     * @param obj - Object.
     * @returns Object values.
     */
    <T extends object>(obj: T): ReadonlyArray<T[keyof T]>;
}
export declare const assign: Assign;
/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
export declare function clone<T extends object>(obj: T): Writable<T>;
export declare const defineProperty: DefineProperty;
/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
declare const _entries: Entries;
export { _entries as entries };
/**
 * Checks that every object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export declare function every<T extends object>(obj: T, callback: Callback<T>): boolean;
export declare const extend: Extend;
/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export declare function filter<T extends object>(obj: T, callback: Callback<T>): Partial<T>;
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object.
 */
export declare function freeze<T extends object>(obj: T): Readonly<T>;
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
export declare function fromEntries<K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): PartialTypedObject<K, V>;
export declare namespace fromEntries {
    var exhaustive: <K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>) => TypedObject<K, V>;
}
/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export declare function getPrototypeOf(obj: object): objectU;
/**
 * Checks that object has property.
 *
 * @param key - Property key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export declare function hasOwnProp(key: PropertyKey, obj: object): boolean;
export declare const keys: Keys;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export declare function map<K extends PropertyKey, V, R>(obj: TypedObject<K, V>, callback: (value: V, key: K) => R): TypedObject<K, R>;
/**
 * Merges objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export declare function merge(...objects: IndexedObject[]): IndexedObject;
/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to remove.
 * @returns New object with given keys omitted.
 */
export declare function omit<T extends object, K extends keyof T>(obj: T, ...exclude: K[]): StrictOmit<T, K>;
/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
export declare function removeUndefinedKeys<T extends object>(obj: T): OptionalPropertiesToOptional<T>;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export declare function size(obj: object): number;
/**
 * Checks that some object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export declare function some<T extends object>(obj: T, callback: Callback<T>): boolean;
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
export declare const values: Values;
//# sourceMappingURL=object.d.ts.map