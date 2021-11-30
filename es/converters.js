import { ConversionError } from "./errors/ConversionError";
import * as is from "./guards";
import * as o from "./object";
export const orFail = Symbol("OrFail");
/**
 * Creates single-arg converter.
 *
 * @param converter - Multi-arg converter.
 * @param args - Rest arguments.
 * @returns Single-arg converter.
 */
export function factory(converter, ...args) {
    return (value) => converter(value, ...args);
}
/**
 * Not implemented.
 */
export function not() {
    throw new Error("Not implemented");
}
/**
 * Converts value to an array.
 *
 * @param value - Value.
 * @returns Value if it is an array, empty array otherwise.
 */
export function array(value) {
    return is.array(value) ? value : [];
}
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns An array of converted elements if value is an array, empty array otherwise.
 */
export function arrayOf(value, converter) {
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
export function arrayOfFiltered(value, guard) {
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
export function arrayOfOrFail(value, guard) {
    if (is.array.of(value, guard))
        return value;
    if (is.empty(value))
        return [];
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
export function arrayOfUndef(value, converter) {
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
export function boolean(value) {
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
export function byGuard(value, guard, defVal) {
    if (guard(value))
        return value;
    if (defVal === orFail)
        throw new ConversionError();
    return defVal;
}
/**
 * Not implemented.
 */
export function callable() {
    throw new Error("Not implemented");
}
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @returns Value if it is a Function.
 * @throws ConversionError otherwise.
 */
export function callableOrFail(value) {
    if (is.callable(value))
        return value;
    throw new ConversionError();
}
callable.orFail = callableOrFail;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @returns Value if it is a Function, _undefined_ otherwise.
 */
export function callableU(value) {
    return is.callable(value) ? value : undefined;
}
/**
 * Converts value to non-empty.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Value if it is not empty, defVal otherwise.
 */
export function notEmpty(value, defVal) {
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
export function enumeration(value, vo, defVal) {
    if (is.enumeration(value, vo))
        return value;
    if (defVal === orFail)
        throw new ConversionError();
    return defVal;
}
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns Value if it is of type T, _undefined_ otherwise.
 */
export function enumerationU(value, vo) {
    return is.enumeration(value, vo) ? value : undefined;
}
/**
 * Converts value to IndexedObject.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
export function indexedObject(value) {
    return is.indexedObject(value) ? value : {};
}
/**
 * Converts value to IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns Converted object if value is an object, empty object otherwise.
 */
export function indexedObjectOf(value, converter) {
    return is.object(value)
        ? o.fromEntries.exhaustive(Object.entries(value).map(([k, v]) => [k, converter(v)]))
        : {};
}
indexedObject.of = indexedObjectOf;
/**
 * Not implemented.
 */
export function instance() {
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
export function instanceOrFail(value, ctor) {
    if (value instanceof ctor)
        return value;
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
export function instanceU(value, ctor) {
    return value instanceof ctor ? value : undefined;
}
/**
 * Not implemented.
 */
export function instances() {
    throw new Error("Not implemented");
}
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
export function instancesFiltered(value, ctor) {
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
export function instancesOrFail(value, ctor) {
    return arrayOf.orFail(value, is.factory(is.instance, ctor));
}
instances.orFail = instancesOrFail;
/**
 * Converts value to NumStr.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function numStr(value) {
    return is.number(value) ? value : string(value);
}
/**
 * Converts value to NumStrU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function numStrU(value) {
    return is.number(value) ? value : stringU(value);
}
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
export function number(value, defVal = 0) {
    var _a;
    return (_a = numberU(value)) !== null && _a !== void 0 ? _a : defVal;
}
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError on failure.
 */
export function numberOrFail(value) {
    const result = numberU(value);
    if (is.not.empty(result))
        return result;
    throw new ConversionError();
}
number.orFail = numberOrFail;
/**
 * Converts value to numberU.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
export function numberU(value) {
    switch (typeof value) {
        case "boolean":
            return Number(value);
        case "number":
            return value;
        case "string": {
            if (value === "" || value === "\n" || value === "\r\n")
                return undefined;
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
export function object(value) {
    return is.object(value) ? value : {};
}
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function string(value) {
    return is.not.empty(value) ? String(value) : "";
}
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError if value is converted to an empty string.
 */
export function stringOrFail(value) {
    const result = string(value);
    if (result)
        return result;
    throw new ConversionError();
}
string.orFail = stringOrFail;
/**
 * Converts value to stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
export function stringU(value) {
    const result = string(value);
    return result ? result : undefined;
}
/**
 * Do nothing converter.
 *
 * @param value - Value.
 * @returns Value.
 */
export function unknown(value) {
    return value;
}
//# sourceMappingURL=converters.js.map