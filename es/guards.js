/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[guards] */
import * as o from "./object";
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Rest arguments.
 * @returns Single-arg guard.
 */
export function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
export function and(value, ...guards) {
    return guards.every(guard => guard(value));
}
export function andFactory(...guards) {
    return (value) => guards.every(guard => guard(value));
}
and.factory = andFactory;
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export function not(value, guard) {
    return !guard(value);
}
/**
 * Creates guard for not T type.
 *
 * @param guard - Guard for type T.
 * @returns Guard for not T type.
 */
export function notFactory(guard) {
    return (value) => !guard(value);
}
not.factory = notFactory;
export function or(value, ...guards) {
    return guards.some(guard => guard(value));
}
export function orFactory(...guards) {
    return (value) => guards.some(guard => guard(value));
}
or.factory = orFactory;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export function array(value) {
    return Array.isArray(value);
}
export const arrays = factory(arrayOf, array);
export const arraysU = orFactory(arrays, undefinedGuard);
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function arrayOf(value, guard) {
    return Array.isArray(value) && value.every(guard);
}
array.of = arrayOf;
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value) {
    return typeof value === "boolean";
}
not.boolean = notFactory(boolean);
export const booleans = factory(arrayOf, boolean);
export const booleansU = orFactory(booleans, undefinedGuard);
/**
 * Checks that value type is booleanU.
 *
 * @param value - Value.
 * @returns _True_ if value type is booleanU, _false_ otherwise.
 */
export function booleanU(value) {
    return typeof value === "boolean" || value === undefined;
}
not.booleanU = notFactory(booleanU);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable(value) {
    return typeof value === "function";
}
not.callable = notFactory(callable);
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export function callableU(value) {
    return typeof value === "function" || value === undefined;
}
not.callableU = notFactory(callableU);
/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value) {
    return value === null || value === undefined;
}
not.empty = notFactory(empty);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function enumeration(value, vo) {
    return vo.has(value);
}
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export function enumerationU(value, vo) {
    return vo.has(value) || value === undefined;
}
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
export function falseGuard(value) {
    return value === false;
}
export { falseGuard as false };
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(value) {
    return typeof value === "object" && value !== null;
}
export const indexedObjects = factory(arrayOf, indexedObject);
export const indexedObjectsU = orFactory(indexedObjects, undefinedGuard);
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
export function indexedObjectOf(value, guard) {
    return object(value) && Object.values(value).every(guard);
}
indexedObject.of = indexedObjectOf;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instance(value, ctor) {
    return value instanceof ctor;
}
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instances(value, ctor) {
    return Array.isArray(value) && value.every(x => x instanceof ctor);
}
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function nullGuard(value) {
    return value === null;
}
export { nullGuard as null };
not.null = notFactory(nullGuard);
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value) {
    switch (typeof value) {
        case "number":
        case "string":
            return true;
        default:
            return false;
    }
}
not.numStr = notFactory(numStr);
export const numStrs = factory(arrayOf, numStr);
export const numStrsU = orFactory(numStrs, undefinedGuard);
/**
 * Checks that value type is NumStrU.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStrU, _false_ otherwise.
 */
export function numStrU(value) {
    switch (typeof value) {
        case "number":
        case "string":
        case "undefined":
            return true;
        default:
            return false;
    }
}
not.numStrU = notFactory(numStrU);
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value) {
    return typeof value === "number";
}
not.number = notFactory(number);
export const numbers = factory(arrayOf, number);
export const numbersU = orFactory(numbers, undefinedGuard);
/**
 * Checks that value type is numberU.
 *
 * @param value - Value.
 * @returns _True_ if value type is numberU, _false_ otherwise.
 */
export function numberU(value) {
    return typeof value === "number" || value === undefined;
}
not.numberU = notFactory(numberU);
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export function object(value) {
    return typeof value === "object" && value !== null;
}
not.object = notFactory(object);
export const objects = factory(arrayOf, object);
export const objectsU = orFactory(objects, undefinedGuard);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function objectOf(value, requiredGuards, optionalGuards) {
    return (indexedObject(value) &&
        o.entries(requiredGuards).every(([name, guard]) => guard(value[name])) &&
        o
            .entries(optionalGuards)
            .every(([name, guard]) => o.hasOwnProp(name, value) ? guard(value[name]) : true));
}
object.of = objectOf;
/**
 * Checks that value type is objectU.
 *
 * @param value - Value.
 * @returns _True_ if value type is objectU, _false_ otherwise.
 */
export function objectU(value) {
    return object(value) || value === undefined;
}
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value) {
    return typeof value === "string";
}
not.string = notFactory(string);
export const strings = factory(arrayOf, string);
export const stringsU = orFactory(strings, undefinedGuard);
/**
 * Checks that value type is stringU.
 *
 * @param value - Value.
 * @returns _True_ if value type is stringU, _false_ otherwise.
 */
export function stringU(value) {
    return typeof value === "string" || value === undefined;
}
not.stringU = notFactory(stringU);
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
export function trueGuard(value) {
    return value === true;
}
export { trueGuard as true };
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function undefinedGuard(value) {
    return value === undefined;
}
export { undefinedGuard as undefined };
not.undefined = notFactory(undefinedGuard);
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value) {
    return true;
}
//# sourceMappingURL=guards.js.map