export class Accumulator2<K extends PropertyKey, L extends PropertyKey, T> {
  /**
   * Creates class instance.
   *
   * @param source - Source.
   */
  public constructor(source: Iterable<IterableElement<K, L, T>> = []) {
    for (const [key1, key2, arr] of source)
      for (const value of arr) this.push(key1, key2, value);
  }

  public *[Symbol.iterator](): IterableIterator<IterableElement<K, L, T>> {
    for (const [key1, map] of this.map)
      for (const [key2, arr] of map) yield [key1, key2, arr];
  }

  /**
   * Returns array by keys.
   *
   * @param key1 - Key 1.
   * @param key2 - Key 2.
   * @returns Array.
   */
  public get(key1: K, key2: L): readonly T[] {
    return this.map.get(key1)?.get(key2) ?? [];
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
    } else this.map.set(key1, new Map([[key2, [value]]]));
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
    } else this.map.set(key1, new Map([[key2, [value]]]));
  }

  protected map: Map<K, Map<L, T[]>> = new Map();
}

export type IterableElement<
  K extends PropertyKey,
  L extends PropertyKey,
  T
> = readonly [K, L, readonly T[]];
