import * as a from "./array";
import { typedef } from "./helpers";
import * as o from "./object";
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
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
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
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
not.array = notFactory(array);
export const arrayU = orFactory(array, _undefined);
export const arrays = factory(arrayOf, array);
export const arraysU = orFactory(arrays, _undefined);
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function arrayOf(value, guard) {
    return array(value) && value.every(guard);
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
export const booleanU = orFactory(boolean, _undefined);
export const booleans = factory(arrayOf, boolean);
export const booleansU = orFactory(booleans, _undefined);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable(value) {
    return typeof value === "function";
}
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
    return typedef(vo).has(value);
}
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
export function _false(value) {
    return value === false;
}
export { _false as false };
not.false = notFactory(_false);
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(value) {
    return typeof value === "object" && value !== null;
}
not.indexedObject = notFactory(indexedObject);
export const indexedObjectU = orFactory(indexedObject, _undefined);
export const indexedObjects = factory(arrayOf, indexedObject);
export const indexedObjectsU = orFactory(indexedObjects, _undefined);
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
export function indexedObjectOf(value, guard) {
    return object(value) && o.values(value).every(guard);
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
    return array(value) && value.every(v => v instanceof ctor);
}
/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export function map(value) {
    return value instanceof Map;
}
not.map = notFactory(map);
export const mapU = orFactory(map, _undefined);
export const maps = factory(arrayOf, map);
export const mapsU = orFactory(maps, _undefined);
/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
export function mapOf(value, keyGuard, valueGuard) {
    return (value instanceof Map &&
        a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v)));
}
map.of = mapOf;
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value) {
    return value === null;
}
export { _null as null };
not.null = notFactory(_null);
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
export const numStrU = orFactory(numStr, _undefined);
export const numStrs = factory(arrayOf, numStr);
export const numStrsU = orFactory(numStrs, _undefined);
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
export const numberU = orFactory(number, _undefined);
export const numbers = factory(arrayOf, number);
export const numbersU = orFactory(numbers, _undefined);
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
export const objectU = orFactory(object, _undefined);
export const objects = factory(arrayOf, object);
export const objectsU = orFactory(objects, _undefined);
export function objectOf(value, required, optional) {
    return (indexedObject(value) &&
        o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
        o.every(optional, (guard, key) => checkOptionalProp(value, key, guard)));
}
object.of = objectOf;
export function objectOfFactory(required, optional) {
    return (value) => objectOf(value, required, optional);
}
objectOf.factory = objectOfFactory;
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export function set(value) {
    return value instanceof Set;
}
not.set = notFactory(set);
export const setU = orFactory(set, _undefined);
export const sets = factory(arrayOf, set);
export const setsU = orFactory(sets, _undefined);
/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
export function setOf(value, guard) {
    return value instanceof Set && a.fromIterable(value).every(v => guard(v));
}
set.of = setOf;
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
export const stringU = orFactory(string, _undefined);
export const strings = factory(arrayOf, string);
export const stringsU = orFactory(strings, _undefined);
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value) {
    return typeof value === "symbol";
}
not.symbol = notFactory(symbol);
export const symbolU = orFactory(symbol, _undefined);
export const symbols = factory(arrayOf, symbol);
export const symbolsU = orFactory(symbols, _undefined);
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
export function _true(value) {
    return value === true;
}
export { _true as true };
not.true = notFactory(_true);
export function tuple(value, ...guards) {
    return array(value) && guards.every((guard, index) => guard(value[index]));
}
export function tupleFactory(...guards) {
    return (value) => array(value) && guards.every((guard, index) => guard(value[index]));
}
tuple.factory = tupleFactory;
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value) {
    return value === undefined;
}
export { _undefined as undefined };
not.undefined = notFactory(_undefined);
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value) {
    return true;
}
export const unknowns = factory(arrayOf, unknown);
export const unknownsU = orFactory(unknowns, _undefined);
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * Checks optional prop.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns Check result.
 */
function checkOptionalProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}
/**
 * Checks required prop.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns Check result.
 */
function checkRequiredProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
//# sourceMappingURL=guards.js.map