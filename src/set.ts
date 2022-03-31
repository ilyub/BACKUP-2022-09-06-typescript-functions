/**
 * Adds value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value added.
 */
export function add<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const result = new Set(set);

  result.add(value);

  return result;
}

/**
 * Checks if set has value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns _True_ if set has value, _false_ otherwise.
 */
export function has(set: ReadonlySet<unknown>, value: unknown): boolean {
  return set.has(value);
}

/**
 * Removes value.
 *
 * @param set - Set.
 * @param value - Value.
 * @returns Set with value removed.
 */
export function setDelete<T>(set: ReadonlySet<T>, value: T): ReadonlySet<T> {
  const result = new Set(set);

  result.delete(value);

  return result;
}

export { setDelete as delete };
