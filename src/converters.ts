import { ConversionError } from "./errors/ConversionError";
import * as is from "./guards";
import * as o from "./object";
// eslint-disable-next-line @skylib/consistent-import
import type * as types from "./types/core";

export interface Converter<T> {
  /**
   * Converts value to type T.
   *
   * @param value - Value.
   * @returns Converted value.
   */
  (value: unknown): T;
}

export interface MultiArgConverter<T, A extends unknown[]> {
  /**
   * Converts value to type T.
   *
   * @param value - Value.
   * @param args - Arguments.
   * @returns Converted value.
   */
  (value: unknown, ...args: A): T;
}

export type OrFail = typeof orFail;

export const orFail = Symbol("OrFail");

/**
 * Creates single-arg converter.
 *
 * @param converter - Multi-arg converter.
 * @param args - Rest arguments.
 * @returns Single-arg converter.
 */
export function factory<T, A extends unknown[]>(
  converter: MultiArgConverter<T, A>,
  ...args: A
): Converter<T> {
  return (value): T => converter(value, ...args);
}

/**
 * Not implemented.
 */
export function not(): never {
  throw new Error("Not implemented");
}

/**
 * Converts value to an array.
 *
 * @param value - Value.
 * @returns Value if it is an array, empty array otherwise.
 */
export function array(value: unknown): types.unknowns {
  return is.array(value) ? value : [];
}

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns An array of converted elements if value is an array, empty array otherwise.
 */
export function arrayOf<T>(value: unknown, converter: Converter<T>): T[] {
  return is.array(value) ? value.map(element => converter(element)) : [];
}

array.of = arrayOf;

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
export function arrayOfFiltered<T>(value: unknown, guard: is.Guard<T>): T[] {
  return is.array(value) ? value.filter(guard) : [];
}

arrayOf.filtered = arrayOfFiltered;

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
export function arrayOfOrFail<T>(
  value: unknown,
  guard: is.Guard<T>
): readonly T[] {
  if (is.array.of(value, guard)) return value;

  if (is.empty(value)) return [];

  throw new ConversionError();
}

arrayOf.orFail = arrayOfOrFail;

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T | undefined.
 * @returns Filtered array of converted elements if value is an array, empty array otherwise.
 */
export function arrayOfUndef<T>(
  value: unknown,
  converter: Converter<T | undefined>
): T[] {
  return is.array(value)
    ? value.map(element => converter(element)).filter(is.not.empty)
    : [];
}

arrayOf.undef = arrayOfUndef;

/**
 * Converts value to a boolean.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function boolean(value: unknown): boolean {
  return Boolean(value);
}

/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Value if it is of type T, defVal otherwise.
 * @throws ConversionError if defVal is equal to orFail.
 */
export function byGuard<T>(
  value: unknown,
  guard: is.Guard<T>,
  defVal: OrFail | T
): T {
  if (guard(value)) return value;

  if (defVal === orFail) throw new ConversionError();

  return defVal;
}

/**
 * Not implemented.
 */
export function callable(): never {
  throw new Error("Not implemented");
}

/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @returns Value if it is a Function.
 * @throws ConversionError otherwise.
 */
export function callableOrFail<T extends Function>(value: unknown): T {
  if (is.callable<T>(value)) return value;

  throw new ConversionError();
}

callable.orFail = callableOrFail;

/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @returns Value if it is a Function, _undefined_ otherwise.
 */
export function callableU<T extends Function>(value: unknown): T | undefined {
  return is.callable<T>(value) ? value : undefined;
}

/**
 * Converts value to non-empty.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Value if it is not empty, defVal otherwise.
 */
export function notEmpty<T>(
  value: T,
  defVal: Exclude<T, types.empty>
): Exclude<T, types.empty> {
  return is.not.empty(value) ? value : defVal;
}

not.empty = notEmpty;

/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param defVal - Default value.
 * @returns Value if it is of type T, defVal otherwise.
 * @throws ConversionError if defVal is equal to orFail.
 */
export function enumeration<T extends PropertyKey>(
  value: unknown,
  vo: types.ValidationObject<T>,
  defVal: OrFail | T
): T {
  if (is.enumeration(value, vo)) return value;

  if (defVal === orFail) throw new ConversionError();

  return defVal;
}

/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns Value if it is of type T, _undefined_ otherwise.
 */
export function enumerationU<T extends PropertyKey>(
  value: unknown,
  vo: types.ValidationObject<T>
): T | undefined {
  return is.enumeration(value, vo) ? value : undefined;
}

/**
 * Converts value to IndexedObject.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
export function indexedObject(value: unknown): types.ReadonlyIndexedObject {
  return is.indexedObject(value) ? value : {};
}

/**
 * Converts value to IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns Converted object if value is an object, empty object otherwise.
 */
export function indexedObjectOf<T>(
  value: unknown,
  converter: Converter<T>
): types.ReadonlyIndexedObject<T> {
  return is.object(value)
    ? o.fromEntries.exhaustive(
        Object.entries(value).map(([k, v]) => [k, converter(v)])
      )
    : {};
}

indexedObject.of = indexedObjectOf;

/**
 * Not implemented.
 */
export function instance(): never {
  throw new Error("Not implemented");
}

/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance.
 * @throws ConversionError otherwise.
 */
export function instanceOrFail<T>(
  value: unknown,
  ctor: types.Constructor<T>
): T {
  if (value instanceof ctor) return value;

  throw new ConversionError();
}

instance.orFail = instanceOrFail;

/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance, _undefined_ otherwise.
 */
export function instanceU<T>(
  value: unknown,
  ctor: types.Constructor<T>
): T | undefined {
  return value instanceof ctor ? value : undefined;
}

/**
 * Not implemented.
 */
export function instances(): never {
  throw new Error("Not implemented");
}

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
export function instancesFiltered<T>(
  value: unknown,
  ctor: types.Constructor<T>
): T[] {
  return arrayOf.filtered(value, is.factory(is.instance, ctor));
}

instances.filtered = instancesFiltered;

/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
export function instancesOrFail<T>(
  value: unknown,
  ctor: types.Constructor<T>
): readonly T[] {
  return arrayOf.orFail(value, is.factory(is.instance, ctor));
}

instances.orFail = instancesOrFail;

/**
 * Converts value to NumStr.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function numStr(value: unknown): types.NumStr {
  return is.number(value) ? value : string(value);
}

/**
 * Converts value to NumStrU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function numStrU(value: unknown): types.NumStrU {
  return is.number(value) ? value : stringU(value);
}

/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export function number(value: unknown, defVal = 0): number {
  return numberU(value) ?? defVal;
}

/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError on failure.
 */
export function numberOrFail(value: unknown): number {
  const result = numberU(value);

  if (is.not.empty(result)) return result;

  throw new ConversionError();
}

number.orFail = numberOrFail;

/**
 * Converts value to numberU.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export function numberU(value: unknown): types.numberU {
  switch (typeof value) {
    case "boolean":
      return Number(value);

    case "number":
      return value;

    case "string": {
      if (value === "" || value === "\n" || value === "\r\n") return undefined;

      const result = Number(value);

      return Number.isNaN(result) ? undefined : result;
    }

    default:
      return undefined;
  }
}

/**
 * Converts value to an object.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
export function object(value: unknown): object {
  return is.object(value) ? value : {};
}

/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function string(value: unknown): string {
  return is.not.empty(value) ? String(value) : "";
}

/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError if value is converted to an empty string.
 */
export function stringOrFail(value: unknown): string {
  const result = string(value);

  if (result) return result;

  throw new ConversionError();
}

string.orFail = stringOrFail;

/**
 * Converts value to stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function stringU(value: unknown): types.stringU {
  const result = string(value);

  return result ? result : undefined;
}

/**
 * Do nothing converter.
 *
 * @param value - Value.
 * @returns Value.
 */
export function unknown(value: unknown): unknown {
  return value;
}
