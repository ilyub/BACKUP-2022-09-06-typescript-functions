import * as is from "./guards";
import { ReadonlyMap } from "./core";

export class Accumulator2<K extends PropertyKey, L extends PropertyKey, T> {
  /**
   * Creates class instance.
   *
   * @param source - Source.
   */
  public constructor(source: Iterable<Accumulator2.Entry<K, L, T>> = []) {
    for (const [key1, key2, arr] of source)
      for (const value of arr) this.push(key1, key2, value);
  }

  public *[Symbol.iterator](): IterableIterator<Accumulator2.Entry<K, L, T>> {
    for (const [key1, map] of this.map)
      for (const [key2, arr] of map) yield [key1, key2, arr];
  }

  /**
   * Returns map of arrays at given key.
   *
   * @param key - Key.
   * @returns Map of arrays.
   */
  public get(key1: K): ReadonlyMap<L, readonly T[]>;

  /**
   * Returns array at given keys.
   *
   * @param key1 - Key 1.
   * @param key2 - Key 2.
   * @returns Array.
   */
  public get(key1: K, key2: L): readonly T[];

  public get(key1: K, key2?: L): ReadonlyMap<L, readonly T[]> | readonly T[] {
    const map = this.map.get(key1) ?? new ReadonlyMap<L, readonly T[]>();

    return is.not.empty(key2) ? map.get(key2) ?? [] : map;
  }

  /**
   * Pushes value.
   *
   * @param key1 - Key 1.
   * @param key2 - Key 2.
   * @param value - Value.
   */
  public push(key1: K, key2: L, value: T): void {
    const map = this.map.get(key1);

    if (map) {
      const arr = map.get(key2);

      if (arr) arr.push(value);
      else map.set(key2, [value]);
    }
    // eslint-disable-next-line @skylib/custom/functions/prefer-ReadonlyMap -- Ok
    else this.map.set(key1, new Map([[key2, [value]]]));
  }

  /**
   * Unshifts value.
   *
   * @param key1 - Key 1.
   * @param key2 - Key 2.
   * @param value - Value.
   */
  public unshift(key1: K, key2: L, value: T): void {
    const map = this.map.get(key1);

    if (map) {
      const arr = map.get(key2);

      if (arr) arr.unshift(value);
      else map.set(key2, [value]);
    }
    // eslint-disable-next-line @skylib/custom/functions/prefer-ReadonlyMap -- Ok
    else this.map.set(key1, new Map([[key2, [value]]]));
  }

  /**
   * Returns values.
   */
  public *values(): IterableIterator<readonly T[]> {
    for (const map of this.map.values())
      for (const arr of map.values()) yield arr;
  }

  // eslint-disable-next-line @skylib/custom/prefer-readonly-array, @skylib/custom/prefer-readonly-map -- Ok
  protected readonly map = new Map<K, Map<L, T[]>>();
}

export namespace Accumulator2 {
  export type Entry<
    K extends PropertyKey,
    L extends PropertyKey,
    T
    // eslint-disable-next-line @skylib/no-multi-type-tuples -- Ok
  > = readonly [K, L, readonly T[]];

  export type Locked<K extends PropertyKey, L extends PropertyKey, T> = Omit<
    Readonly<Accumulator2<K, L, T>>,
    "push" | "unshift"
  >;
}
