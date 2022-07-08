import { defineFn, indexed } from "./core";
import * as is from "./guards";
import * as as from "./inline-assertions";
import type {
  Entry,
  NumStr,
  OptionalStyle,
  PartialRecord,
  Rec,
  StrictOmit,
  Writable,
  WritableIndexedObject,
  WritablePartialRecord,
  objectU
} from "./types";

/**
 * Typed version of Object.assign.
 *
 * @param mutableTarget - Target.
 * @param sources - Sources.
 * @returns Target.
 */
export const assign: <T extends object>(
  mutableTarget: T,
  ...sources: Array<Partial<T>>
) => T = Object.assign;

/**
 * Typed version of Object.defineProperty.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param descriptor - Descriptor.
 */
export const defineProperty: <T, K extends keyof T = keyof T>(
  obj: T,
  key: K,
  descriptor: Descriptor<T, K>
) => void = Object.defineProperty.bind(Object);

export const entries: {
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
  <T extends object>(obj: T): Array<
    Entry<string & keyof T, T[NumStr & keyof T]>
  >;
} = Object.entries;

export const extend: {
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
} = Object.assign;

export const fromEntries = defineFn(
  /**
   * Creates object from entries.
   *
   * @param entries - Entries.
   * @returns Object.
   */
  <K extends PropertyKey, V>(
    entries: Iterable<Entry<K, V>>
  ): PartialRecord<K, V> => {
    const result: WritablePartialRecord<K, V> = {};

    for (const entry of entries) result[entry[0]] = entry[1];

    return result;
  },
  {
    /**
     * Creates object from entries.
     *
     * @param entries - Entries.
     * @returns Object.
     */
    exhaustive: <K extends PropertyKey, V>(
      entries: Iterable<Entry<K, V>>
    ): Rec<K, V> => {
      const result: WritablePartialRecord<K, V> = {};

      for (const entry of entries) result[entry[0]] = entry[1];

      return result as Rec<K, V>;
    }
  }
);

export const keys: {
  /**
   * Typed version of Object.keys.
   *
   * @param obj - Object.
   * @returns Object keys.
   */
  <K extends string, V>(obj: PartialRecord<K, V>): readonly K[];
  /**
   * Typed version of Object.keys.
   *
   * @param obj - Object.
   * @returns Object keys.
   */
  <T extends object>(obj: T): Array<string & keyof T>;
} = Object.keys;

export const values: {
  /**
   * Typed version of Object.values.
   *
   * @param obj - Object.
   * @returns Object values.
   */
  <K extends string, V>(obj: PartialRecord<K, V>): readonly V[];
  /**
   * Typed version of Object.values.
   *
   * @param obj - Object.
   * @returns Object values.
   */
  <T extends object>(obj: T): Array<T[NumStr & keyof T]>;
} = Object.values;

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

export interface Descriptor<T, K extends keyof T = keyof T>
  extends PropertyDescriptor {
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
export function clone<T extends object>(obj: T): Writable<T> {
  // eslint-disable-next-line @skylib/custom/functions/prefer-o-clone -- Ok
  return { ...obj };
}

/**
 * Checks if every object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if every object property satisfies condition, _false_ otherwise.
 */
export function every<T extends object>(
  obj: T,
  predicate: Predicate<T>
): boolean {
  return entries(obj).every(([key, value]) => predicate(value, key));
}

/**
 * Filters object by predicate.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns New object.
 */
export function filter<T extends object>(
  obj: T,
  predicate: Predicate<T>
): Partial<T> {
  const result: Partial<T> = {};

  for (const [key, value] of entries(obj))
    if (predicate(value, key)) result[key] = value;

  return result;
}

/**
 * Returns object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @returns Object property.
 */
export function get(obj: object, key: PropertyKey): unknown;

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
export function get<T>(
  obj: object,
  key: PropertyKey,
  guard?: is.Guard<T>,
  defVal?: T
): T;

export function get(
  obj: object,
  key: PropertyKey,
  guard: is.Guard = is.unknown,
  defVal?: unknown
): unknown {
  return as.byGuard(indexed(obj)[key] ?? defVal, guard);
}

/**
 * Returns object prototype.
 *
 * @param obj - Object.
 * @returns Object prototype if available, _undefined_ otherwise.
 */
export function getPrototypeOf(obj: object): objectU {
  // eslint-disable-next-line @skylib/custom/functions/prefer-o-getPrototypeOf -- Ok
  const prototype = Object.getPrototypeOf(obj);

  return is.object(prototype) ? prototype : undefined;
}

/**
 * Checks if object has property.
 *
 * @param key - Key.
 * @param obj - Object.
 * @returns _True_ if object has property, _false_ otherwise.
 */
export function hasOwnProp(key: PropertyKey, obj: object): boolean {
  // eslint-disable-next-line @skylib/custom/functions/prefer-o-hasOwnProp -- Ok
  return Object.prototype.hasOwnProperty.call(obj, key);
}

/**
 * Applies callback to each property.
 *
 * @param obj - Object.
 * @param callback - Callback.
 * @returns New object.
 */
export function map<K extends string, V, R>(
  obj: Rec<K, V>,
  callback: (value: V, key: K) => R
): Rec<K, R> {
  return fromEntries.exhaustive(
    entries(obj).map(([key, value]) => [key, callback(value, key)])
  );
}

/**
 * Removes keys from object.
 *
 * @param obj - Object.
 * @param exclude - Keys to omit.
 * @returns New object.
 */
export function omit<T extends object, K extends string & keyof T>(
  obj: T,
  ...exclude: readonly K[]
): StrictOmit<T, K> {
  const excludeSet = new Set<keyof T>(exclude);

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
): OptionalStyle<T> {
  return filter(obj, is.not.empty) as OptionalStyle<T>;
}

/**
 * Sets object property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param value - Value.
 */
export function set(obj: object, key: PropertyKey, value: unknown): void {
  (obj as WritableIndexedObject)[key] = value;
}

/**
 * Returns the number of enumerable properties.
 *
 * @param obj - Object.
 * @returns The number of enumerable properties.
 */
export function size(obj: object): number {
  return keys(obj).length;
}

/**
 * Checks if some object property satisfies condition.
 *
 * @param obj - Object.
 * @param predicate - Predicate.
 * @returns _True_ if some object property satisfies condition, _false_ otherwise.
 */
export function some<T extends object>(
  obj: T,
  predicate: Predicate<T>
): boolean {
  return entries(obj).some(([key, value]) => predicate(value, key));
}

/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<K extends string, V>(
  obj: Rec<K, V>,
  compareFn?: CompareFn<Rec<K, V>>
): Rec<K, V>;

/**
 * Sorts object.
 *
 * @param obj - Object.
 * @param compareFn - Comparison function.
 * @returns New object.
 */
export function sort<T extends object>(obj: T, compareFn?: CompareFn<T>): T;

export function sort<K extends string, V>(
  obj: Rec<K, V>,
  compareFn?: CompareFn<Rec<K, V>>
): Rec<K, V> {
  const arr = entries(obj);

  arr.sort(
    compareFn
      ? (entry1, entry2): number =>
          compareFn(entry1[1], entry2[1], entry1[0], entry2[0])
      : undefined
  );

  return fromEntries.exhaustive(arr);
}
