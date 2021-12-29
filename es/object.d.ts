import type { DeepReadonly, DeepWritable, Entry, objectU, OptionalToUndefined, PartialRecord, ReadonlyIndexedObject, ReadonlyRecord, SafeOmit, UndefinedToOptional, Writable } from "./types/core";
export interface Descriptor<T extends object = object> {
    readonly configurable?: boolean;
    readonly enumerable?: boolean;
    /**
     * Getter for component's property.
     *
     * @param this - Object.
     * @returns Value.
     */
    readonly get?: (this: T) => unknown;
    /**
     * Setter for component's property.
     *
     * @param this - Object.
     * @param value - New value.
     */
    readonly set?: (this: T, value: unknown) => void;
    readonly writable?: boolean;
}
export declare type FilterCallback<T extends object> = (value: T[keyof T], key: keyof T) => boolean;
export declare type MapCallback<V, R> = (value: V, key: string) => R;
/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target object.
 * @param sources - Sources.
 * @returns Target.
 */
export declare function assign<T extends object, K extends keyof T>(mutableTarget: T, ...sources: Array<{
    readonly [L in K]: T[L];
}>): T;
/**
 * Creates object copy.
 *
 * @param obj - Object.
 * @returns Object copy.
 */
export declare function clone<T extends object>(obj: T): Writable<T>;
/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Property name.
 * @param descriptor - Descriptor.
 */
export declare function defineProperty<T extends object>(obj: T, key: PropertyKey, descriptor: Descriptor<T>): void;
/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
declare function getEntries<T extends object>(obj: T): ReadonlyArray<readonly [keyof T, T[keyof T]]>;
export { getEntries as entries };
/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source - Source.
 * @returns Target.
 */
export declare function extend<T extends object, A>(target: T, source: A): T & A;
/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source1 - Source 1.
 * @param source2 - Source 2.
 * @returns Target.
 */
export declare function extend<T extends object, A, B>(target: T, source1: A, source2: B): T & A & B;
/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source1 - Source 1.
 * @param source2 - Source 2.
 * @param source3 - Source 3.
 * @returns Target.
 */
export declare function extend<T extends object, A, B, C>(target: T, source1: A, source2: B, source3: C): T & A & B & C;
/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New filtered object.
 */
export declare function filter<T extends object>(obj: T, callback: FilterCallback<T>): Partial<T>;
/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object marked as readonly.
 */
export declare function freeze<T extends object>(obj: T): Readonly<T>;
export declare namespace freeze {
    var deep: typeof freezeDeep;
}
/**
 * Marks object as deep readonly.
 *
 * @param obj - Object.
 * @returns Object marked as deep readonly.
 */
export declare function freezeDeep<T extends object>(obj: T): DeepReadonly<T>;
/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
export declare function fromEntries<K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): PartialRecord<K, V>;
export declare namespace fromEntries {
    var exhaustive: <K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>) => Record<K, V>;
}
/**
 * Typed version of Object.getPrototypeOf.
 *
 * @param obj - Object.
 * @returns Prototype if available, _undefined_ otherwise.
 */
export declare function getPrototypeOf(obj: object): objectU;
/**
 * Alias of Object.prototype.hasOwnProperty.
 *
 * @param key - Property name.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export declare function hasOwnProp(key: PropertyKey, obj: object): boolean;
/**
 * Typed version of Object.keys.
 *
 * @param obj - Object.
 * @returns Object keys.
 */
export declare function keys<T extends object>(obj: T): ReadonlyArray<keyof T>;
/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export declare function map<V, R>(obj: ReadonlyRecord<string, V>, callback: MapCallback<V, R>): ReadonlyRecord<string, R>;
/**
 * Merges several objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export declare function merge(...objects: ReadonlyIndexedObject[]): ReadonlyIndexedObject;
/**
 * Omits keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to exclude.
 * @returns New object with given keys omitted.
 */
export declare function omit<T extends object, K extends keyof T>(obj: T, ...exclude: K[]): SafeOmit<T, K>;
export declare function removeUndefinedKeys<T extends object>(obj: OptionalToUndefined<T>): T;
export declare function removeUndefinedKeys<T extends object>(obj: T): UndefinedToOptional<T>;
/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export declare function size(obj: object): number;
/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export declare function sort<T extends object>(obj: T, compareFn?: (x: Entry<T>, y: Entry<T>) => number): T;
/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object marked as writable.
 */
export declare function unfreeze<T extends object>(obj: T): Writable<T>;
export declare namespace unfreeze {
    var deep: typeof unfreezeDeep;
}
/**
 * Marks object as deep writable.
 *
 * @param obj - Object.
 * @returns Object marked as deep writable.
 */
export declare function unfreezeDeep<T extends object>(obj: T): DeepWritable<T>;
/**
 * Typed version of Object.values.
 *
 * @param obj - Object.
 * @returns Object values.
 */
export declare function values<T extends object>(obj: T): ReadonlyArray<T[keyof T]>;
//# sourceMappingURL=object.d.ts.map