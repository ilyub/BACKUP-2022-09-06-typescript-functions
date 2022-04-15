import type { Entry } from "./types";

export class Accumulator<K extends PropertyKey, T> {
  /**
   * Creates class instance.
   *
   * @param source - Source.
   */
  public constructor(source: Iterable<IterableElement<K, T>> = []) {
    for (const [key, arr] of source)
      for (const value of arr) this.push(key, value);
  }

  public *[Symbol.iterator](): IterableIterator<IterableElement<K, T>> {
    for (const [key, value] of this.map) yield [key, value];
  }

  /**
   * Returns array by key.
   *
   * @param key - Key.
   * @returns Array.
   */
  public get(key: K): readonly T[] {
    return this.map.get(key) ?? [];
  }

  /**
   * Pushes value.
   *
   * @param key - Key.
   * @param value - Value.
   */
  public push(key: K, value: T): void {
    const arr = this.map.get(key);

    if (arr) arr.push(value);
    else this.map.set(key, [value]);
  }

  /**
   * Unshifts value.
   *
   * @param key - Key.
   * @param value - Value.
   */
  public unshift(key: K, value: T): void {
    const arr = this.map.get(key);

    if (arr) arr.unshift(value);
    else this.map.set(key, [value]);
  }

  protected readonly map: Map<K, T[]> = new Map();
}

export type IterableElement<K extends PropertyKey, T> = Entry<K, readonly T[]>;
