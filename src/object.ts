/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[object] */

import * as a from "./array";
import * as is from "./guards";
import * as json from "./json";
import type {
  DeepReadonly,
  DeepWritable,
  Entry,
  IndexedObject,
  objectU,
  PartialRecord,
  ReadonlyIndexedObject,
  ReadonlyRecord,
  SafeOmit,
  UndefinedToOptional,
  Writable
} from "./types/core";

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

export type FilterCallback<T extends object> = (
  value: T[keyof T],
  key: keyof T
) => boolean;

export type MapCallback<V, R> = (value: V, key: string) => R;

/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target object.
 * @param sources - Sources.
 * @returns Target.
 */
export function assign<T extends object, K extends keyof T>(
  mutableTarget: T,
  ...sources: Array<{ readonly [L in K]: T[L] }>
): T {
  return Object.assign(mutableTarget, ...sources) as T;
}

/**
 * Creates object copy.
 *
 * @param obj - Object.
 * @returns Object copy.
 */
export function clone<T extends object>(obj: T): Writable<T> {
  return { ...obj };
}

/**
 * Compares two objects.
 *
 * @param obj1 - Object 1.
 * @param obj2 - Object 2.
 * @returns _True_ if objects are equal, _false_ otherwise.
 */
export function compare(obj1: objectU, obj2: objectU): boolean {
  return json.encode(obj1) === json.encode(obj2);
}

/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Property name.
 * @param descriptor - Descriptor.
 */
export function defineProperty<T extends object>(
  obj: T,
  key: PropertyKey,
  descriptor: Descriptor<T>
): void {
  Object.defineProperty(obj, key, descriptor);
}

/**
 * Typed version of Object.entries.
 *
 * @param obj - Object.
 * @returns Object entries.
 */
function getEntries<T extends object>(
  obj: T
): ReadonlyArray<readonly [keyof T, T[keyof T]]> {
  return Object.entries(obj) as Array<[keyof T, T[keyof T]]>;
}

export { getEntries as entries };

/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source - Source.
 * @returns Target.
 */
export function extend<T extends object, A>(target: T, source: A): T & A;

/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source1 - Source 1.
 * @param source2 - Source 2.
 * @returns Target.
 */
export function extend<T extends object, A, B>(
  target: T,
  source1: A,
  source2: B
): T & A & B;

/**
 * Typed version of Object.assign.
 *
 * @param target - Target object.
 * @param source1 - Source 1.
 * @param source2 - Source 2.
 * @param source3 - Source 3.
 * @returns Target.
 */
export function extend<T extends object, A, B, C>(
  target: T,
  source1: A,
  source2: B,
  source3: C
): T & A & B & C;

export function extend(target: object, ...sources: unknown[]): unknown {
  return Object.assign(target, ...sources);
}

/**
 * Filters object by callback.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New filtered object.
 */
export function filter<T extends object>(
  obj: T,
  callback: FilterCallback<T>
): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of getEntries(obj))
    if (callback(value, key)) result[key] = value;

  return result;
}

/**
 * Marks object as readonly.
 *
 * @param obj - Object.
 * @returns Object marked as readonly.
 */
export function freeze<T extends object>(obj: T): Readonly<T> {
  return obj;
}

/**
 * Marks object as deep readonly.
 *
 * @param obj - Object.
 * @returns Object marked as deep readonly.
 */
export function freezeDeep<T extends object>(obj: T): DeepReadonly<T> {
  return obj as DeepReadonly<T>;
}

freeze.deep = freezeDeep;

/**
 * Creates object from entries.
 *
 * @param entries - Entries.
 * @returns Object.
 */
export function fromEntries<K extends PropertyKey, V>(
  entries: Iterable<readonly [K, V]>
): PartialRecord<K, V> {
  const result = {} as Record<K, V>;

  for (const entry of entries) result[entry[0]] = entry[1];

  return result;
}

fromEntries.exhaustive = fromEntries as <K extends PropertyKey, V>(
  entries: Iterable<readonly [K, V]>
) => Record<K, V>;

/**
 * Typed version of Object.getPrototypeOf.
 *
 * @param obj - Object.
 * @returns Prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj: object): objectU {
  const prototype = Object.getPrototypeOf(obj);

  return is.object(prototype) ? prototype : undefined;
}

/**
 * Alias of Object.prototype.hasOwnProperty.
 *
 * @param key - Property name.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key: PropertyKey, obj: object): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Typed version of Object.keys.
 *
 * @param obj - Object.
 * @returns Object keys.
 */
export function keys<T extends object>(obj: T): ReadonlyArray<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map<V, R>(
  obj: ReadonlyRecord<string, V>,
  callback: MapCallback<V, R>
): ReadonlyRecord<string, R> {
  return fromEntries.exhaustive(
    Object.entries(obj).map(([key, value]): [string, R] => [
      key,
      callback(value, key)
    ])
  );
}

/**
 * Merges several objects.
 * If more than one object has the same key, respective values are combined into array.
 *
 * @param objects - Objects.
 * @returns Merged object.
 */
export function merge(
  ...objects: ReadonlyIndexedObject[]
): ReadonlyIndexedObject {
  const pool: IndexedObject<unknown[]> = {};

  for (const obj of objects)
    for (const [key, value] of Object.entries(obj)) {
      const valuesByKey = pool[key];

      if (valuesByKey) valuesByKey.push(value);
      else pool[key] = [value];
    }

  return fromEntries(
    Object.entries(pool).map(([key, valuesByKey]) => [
      key,
      valuesByKey.length === 1 ? valuesByKey[0] : valuesByKey
    ])
  );
}

/**
 * Omits keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to exclude.
 * @returns New object with given keys omitted.
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  ...exclude: K[]
): SafeOmit<T, K> {
  const keysSet = new Set<keyof T>(exclude);

  return filter(obj, (_value, key) => !keysSet.has(key)) as SafeOmit<T, K>;
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
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<T extends object>(
  obj: T,
  compareFn?: (x: Entry<T>, y: Entry<T>) => number
): T {
  return fromEntries(a.sort(getEntries(obj), compareFn)) as T;
}

/**
 * Converts undefined properties to optional.
 *
 * @param obj - Object.
 * @returns New object.
 */
export function undefinedToOptional<T extends object>(
  obj: T
): UndefinedToOptional<T> {
  return filter(obj, is.not.empty) as UndefinedToOptional<T>;
}

/**
 * Marks object as writable.
 *
 * @param obj - Object.
 * @returns Object marked as writable.
 */
export function unfreeze<T extends object>(obj: T): Writable<T> {
  return obj;
}

/**
 * Marks object as deep writable.
 *
 * @param obj - Object.
 * @returns Object marked as deep writable.
 */
export function unfreezeDeep<T extends object>(obj: T): DeepWritable<T> {
  return obj as DeepReadonly<T>;
}

unfreeze.deep = unfreezeDeep;

/**
 * Typed version of Object.values.
 *
 * @param obj - Object.
 * @returns Object values.
 */
export function values<T extends object>(obj: T): ReadonlyArray<T[keyof T]> {
  return Object.values(obj) as Array<T[keyof T]>;
}
