"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknown = exports.stringU = exports.stringOrFail = exports.string = exports.object = exports.numberU = exports.numberOrFail = exports.number = exports.numStr = exports.instancesOrFail = exports.instancesFiltered = exports.instances = exports.instanceU = exports.instanceOrFail = exports.instance = exports.indexedObjectOf = exports.indexedObject = exports.enumerationU = exports.enumeration = exports.notEmpty = exports.callableU = exports.callableOrFail = exports.callable = exports.byGuard = exports.boolean = exports.arrayOfUndef = exports.arrayOfOrFail = exports.arrayOfFiltered = exports.arrayOf = exports.array = exports.not = exports.factory = exports.orFail = void 0;
const tslib_1 = require("tslib");
const ConversionError_1 = require("./errors/ConversionError");
const is = (0, tslib_1.__importStar)(require("./guards"));
const o = (0, tslib_1.__importStar)(require("./object"));
exports.orFail = Symbol("OrFail");
/**
 * Creates single-arg converter.
 *
 * @param converter - Multi-arg converter.
 * @param args - Rest arguments.
 * @returns Single-arg converter.
 */
function factory(converter, ...args) {
    return (value) => converter(value, ...args);
}
exports.factory = factory;
/**
 * Not implemented.
 */
function not() {
    throw new Error("Not implemented");
}
exports.not = not;
/**
 * Converts value to an array.
 *
 * @param value - Value.
 * @returns Value if it is an array, empty array otherwise.
 */
function array(value) {
    return is.array(value) ? value : [];
}
exports.array = array;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns An array of converted elements if value is an array, empty array otherwise.
 */
function arrayOf(value, converter) {
    return is.array(value) ? value.map(element => converter(element)) : [];
}
exports.arrayOf = arrayOf;
array.of = arrayOf;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
function arrayOfFiltered(value, guard) {
    return is.array(value) ? value.filter(guard) : [];
}
exports.arrayOfFiltered = arrayOfFiltered;
arrayOf.filtered = arrayOfFiltered;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
function arrayOfOrFail(value, guard) {
    if (is.array.of(value, guard))
        return value;
    if (is.empty(value))
        return [];
    throw new ConversionError_1.ConversionError();
}
exports.arrayOfOrFail = arrayOfOrFail;
arrayOf.orFail = arrayOfOrFail;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param converter - Converter for type T | undefined.
 * @returns Filtered array of converted elements if value is an array, empty array otherwise.
 */
function arrayOfUndef(value, converter) {
    return is.array(value)
        ? value.map(element => converter(element)).filter(is.not.empty)
        : [];
}
exports.arrayOfUndef = arrayOfUndef;
arrayOf.undef = arrayOfUndef;
/**
 * Converts value to a boolean.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function boolean(value) {
    return Boolean(value);
}
exports.boolean = boolean;
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param defVal - Default value.
 * @returns Value if it is of type T, defVal otherwise.
 * @throws ConversionError if defVal is equal to orFail.
 */
function byGuard(value, guard, defVal) {
    if (guard(value))
        return value;
    if (defVal === exports.orFail)
        throw new ConversionError_1.ConversionError();
    return defVal;
}
exports.byGuard = byGuard;
/**
 * Not implemented.
 */
function callable() {
    throw new Error("Not implemented");
}
exports.callable = callable;
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @returns Value if it is a Function.
 * @throws ConversionError otherwise.
 */
function callableOrFail(value) {
    if (is.callable(value))
        return value;
    throw new ConversionError_1.ConversionError();
}
exports.callableOrFail = callableOrFail;
callable.orFail = callableOrFail;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @returns Value if it is a Function, _undefined_ otherwise.
 */
function callableU(value) {
    return is.callable(value) ? value : undefined;
}
exports.callableU = callableU;
/**
 * Converts value to non-empty.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Value if it is not empty, defVal otherwise.
 */
function notEmpty(value, defVal) {
    return is.not.empty(value) ? value : defVal;
}
exports.notEmpty = notEmpty;
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
function enumeration(value, vo, defVal) {
    if (is.enumeration(value, vo))
        return value;
    if (defVal === exports.orFail)
        throw new ConversionError_1.ConversionError();
    return defVal;
}
exports.enumeration = enumeration;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns Value if it is of type T, _undefined_ otherwise.
 */
function enumerationU(value, vo) {
    return is.enumeration(value, vo) ? value : undefined;
}
exports.enumerationU = enumerationU;
/**
 * Converts value to IndexedObject.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
function indexedObject(value) {
    return is.indexedObject(value) ? value : {};
}
exports.indexedObject = indexedObject;
/**
 * Converts value to IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param converter - Converter for type T.
 * @returns Converted object if value is an object, empty object otherwise.
 */
function indexedObjectOf(value, converter) {
    return is.object(value)
        ? o.fromEntries.exhaustive(Object.entries(value).map(([k, v]) => [k, converter(v)]))
        : {};
}
exports.indexedObjectOf = indexedObjectOf;
indexedObject.of = indexedObjectOf;
/**
 * Not implemented.
 */
function instance() {
    throw new Error("Not implemented");
}
exports.instance = instance;
/**
 * Converts value to type T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance.
 * @throws ConversionError otherwise.
 */
function instanceOrFail(value, ctor) {
    if (value instanceof ctor)
        return value;
    throw new ConversionError_1.ConversionError();
}
exports.instanceOrFail = instanceOrFail;
instance.orFail = instanceOrFail;
/**
 * Converts value to type T | undefined.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is a class instance, _undefined_ otherwise.
 */
function instanceU(value, ctor) {
    return value instanceof ctor ? value : undefined;
}
exports.instanceU = instanceU;
/**
 * Not implemented.
 */
function instances() {
    throw new Error("Not implemented");
}
exports.instances = instances;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Filtered array if value is an array, empty array otherwise.
 */
function instancesFiltered(value, ctor) {
    return arrayOf.filtered(value, is.factory(is.instance, ctor));
}
exports.instancesFiltered = instancesFiltered;
instances.filtered = instancesFiltered;
/**
 * Converts value to type T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns Value if it is of type T[], empty array if value is empty.
 * @throws ConversionError otherwise.
 */
function instancesOrFail(value, ctor) {
    return arrayOf.orFail(value, is.factory(is.instance, ctor));
}
exports.instancesOrFail = instancesOrFail;
instances.orFail = instancesOrFail;
/**
 * Converts value to NumStr.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function numStr(value) {
    return is.number(value) ? value : string(value);
}
exports.numStr = numStr;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @param defVal - Default value.
 * @returns Converted value, defVal on failure.
 */
function number(value, defVal = 0) {
    var _a;
    return (_a = numberU(value)) !== null && _a !== void 0 ? _a : defVal;
}
exports.number = number;
/**
 * Converts value to a number.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError on failure.
 */
function numberOrFail(value) {
    const result = numberU(value);
    if (is.not.empty(result))
        return result;
    throw new ConversionError_1.ConversionError();
}
exports.numberOrFail = numberOrFail;
number.orFail = numberOrFail;
/**
 * Converts value to numberU.
 *
 * @param value - Value.
 * @returns Converted value, _undefined_ on failure.
 */
function numberU(value) {
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
exports.numberU = numberU;
/**
 * Converts value to an object.
 *
 * @param value - Value.
 * @returns Value if it is an object, empty object otherwise.
 */
function object(value) {
    return is.object(value) ? value : {};
}
exports.object = object;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function string(value) {
    return is.not.empty(value) ? String(value) : "";
}
exports.string = string;
/**
 * Converts value to a string.
 *
 * @param value - Value.
 * @returns Converted value.
 * @throws ConversionError if value is converted to an empty string.
 */
function stringOrFail(value) {
    const result = string(value);
    if (result)
        return result;
    throw new ConversionError_1.ConversionError();
}
exports.stringOrFail = stringOrFail;
string.orFail = stringOrFail;
/**
 * Converts value to stringU.
 *
 * @param value - Value.
 * @returns Converted value.
 */
function stringU(value) {
    const result = string(value);
    return result ? result : undefined;
}
exports.stringU = stringU;
/**
 * Do nothing converter.
 *
 * @param value - Value.
 * @returns Value.
 */
function unknown(value) {
    return value;
}
exports.unknown = unknown;
//# sourceMappingURL=converters.js.map