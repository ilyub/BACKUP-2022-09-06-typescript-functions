/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[functions.object] */

import * as a from "./array";
import * as is from "./guards";
import type {
  IndexedObject,
  NumStr,
  objectU,
  PartialTypedObject,
  TypedObject,
  unknowns,
  Writable
} from "./types/core";
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
  (
    value1: T[keyof T],
    value2: T[keyof T],
    key1: keyof T,
    key2: keyof T
  ): number;
}

export interface DefineProperty {
  /**
   * Typed version of Object.defineProperty.
   *
   * @param obj - Object.
   * @param key - Property key.
   * @param descriptor - Descriptor.
   */
  <T, K extends keyof T = keyof T>(
    obj: T,
    key: K,
    descriptor: Descriptor<T, K>
  ): void;
}

export interface Descriptor<T, K extends keyof T = keyof T>
  extends PropertyDescriptor {
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
  <K extends string, V>(obj: PartialTypedObject<K, V>): Array<[K, V]>;
  /**
   * Typed version of Object.entries.
   *
   * @param obj - Object.
   * @returns Object entries.
   */
  <T extends object>(obj: T): Array<[string & keyof T, T[NumStr & keyof T]]>;
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
  <T extends object, A, B, C>(
    target: T,
    source1: A,
    source2: B,
    source3: C
  ): A & B & C & T;
}

export interface Keys {
  /**
   * Typed version of Object.entries.
   *
   * @param obj - Object.
   * @returns Object entries.
   */
  <K extends string, V>(obj: PartialTypedObject<K, V>): K[];
  /**
   * Typed version of Object.keys.
   *
   * @param obj - Object.
   * @returns Object keys.
   */
  <T extends object>(obj: T): Array<string & keyof T>;
}

export interface Values {
  /**
   * Typed version of Object.entries.
   *
   * @param obj - Object.
   * @returns Object entries.
   */
  <K extends string, V>(obj: PartialTypedObject<K, V>): V[];
  /**
   * Typed version of Object.values.
   *
   * @param obj - Object.
   * @returns Object values.
   */
  <T extends object>(obj: T): Array<T[NumStr & keyof T]>;
}

export const assign: Assign = Object.assign;

/**
 * Clones object.
 *
 * @param obj - Object.
 * @returns New object.
 */
export function clone<T extends object>(obj: T): Writable<T> {
  return { ...obj };
}

export const defineProperty: DefineProperty =
  Object.defineProperty.bind(Object);

/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
const _entries: Entries = Object.entries;

export { _entries as entries };

/**
 * Checks that every object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every<T extends object>(
  obj: T,
  callback: Callback<T>
): boolean {
  return _entries(obj).every(([key, value]) => callback(value, key));
}

export const extend: Extend = Object.assign;

/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function filter<T extends object>(
  obj: T,
  callback: Callback<T>
): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of _entries(obj))
    if (callback(value, key)) result[key] = value;

  return result;
}

/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object.
 */
export function freeze<T extends object>(obj: T): Readonly<T> {
  return obj;
}

/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
export function fromEntries<K extends PropertyKey, V>(
  entries: Iterable<readonly [K, V]>
): PartialTypedObject<K, V> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const result = {} as Writable<PartialTypedObject<K, V>>;

  for (const entry of entries) result[entry[0]] = entry[1];

  return result;
}

/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
fromEntries.exhaustive = <K extends PropertyKey, V>(
  entries: Iterable<readonly [K, V]>
): TypedObject<K, V> => {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const result = {} as Writable<TypedObject<K, V>>;

  for (const entry of entries) result[entry[0]] = entry[1];

  return result;
};

/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj: object): objectU {
  const prototype = Object.getPrototypeOf(obj);

  return is.object(prototype) ? prototype : undefined;
}

/**
 * Checks that object has property.
 *
 * @param key - Property key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key: PropertyKey, obj: object): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export const keys: Keys = Object.keys;

/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map<K extends string, V, R>(
  obj: TypedObject<K, V>,
  callback: (value: V, key: K) => R
): TypedObject<K, R> {
  return fromEntries.exhaustive(
    _entries(obj).map(([key, value]) => [key, callback(value, key)])
  );
}

/**
 * Merges objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export function merge(...objects: IndexedObject[]): IndexedObject {
  const result = new Map<PropertyKey, unknown[]>();

  for (const obj of objects)
    for (const [key, value] of Object.entries(obj)) {
      const arr = result.get(key);

      if (arr) arr.push(value);
      else result.set(key, [value]);
    }

  return fromEntries(
    a
      .fromIterable(result.entries())
      .map(([key, arr]: [PropertyKey, unknowns]) => [
        key,
        arr.length === 1 ? arr[0] : arr
      ])
  );
}

/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to remove.
 * @returns New object with given keys omitted.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  ...exclude: K[]
): StrictOmit<T, K> {
  const excludeSet = new Set<keyof T>(exclude);

  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return filter(obj, (_value, key) => !excludeSet.has(key)) as StrictOmit<T, K>;
}

/**
 * Removes undefined keys.
 *
 * @param obj - Object.
 * @returns New object with undefined keys removed.
 */
export function removeUndefinedKeys<T extends object>(
  obj: T
): OptionalPropertiesToOptional<T> {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return filter(obj, is.not.empty) as OptionalPropertiesToOptional<T>;
}

/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj: object): number {
  return Object.keys(obj).length;
}

/**
 * Checks that some object property satisfies condition.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some<T extends object>(obj: T, callback: Callback<T>): boolean {
  return _entries(obj).some(([key, value]) => callback(value, key));
}

/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<T extends object>(obj: T, compareFn?: CompareFn<T>): T {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  return fromEntries(
    a.sort(
      _entries(obj),
      compareFn
        ? // eslint-disable-next-line @skylib/prefer-readonly
          (entry1, entry2): number =>
            compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
        : undefined
    )
  ) as T;
}

/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object.
 */
export function unfreeze<T extends object>(obj: T): Writable<T> {
  return obj;
}

export const values: Values = Object.values;
