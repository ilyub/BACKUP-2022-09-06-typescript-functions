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
not.factory =
    (guard) => (value) => !guard(value);
export function and(value, ...guards) {
    return guards.every(guard => guard(value));
}
function _andFactory(...guards) {
    return (value) => guards.every(guard => guard(value));
}
and.factory = _andFactory;
export function or(value, ...guards) {
    return guards.some(guard => guard(value));
}
function _orFactory(...guards) {
    return (value) => guards.some(guard => guard(value));
}
or.factory = _orFactory;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export function array(value) {
    return Array.isArray(value);
}
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
array.of = (value, guard) => array(value) && value.every(guard);
export const arrayU = or.factory(array, _undefined);
export const arrays = factory(array.of, array);
export const arraysU = or.factory(arrays, _undefined);
not.array = not.factory(array);
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value) {
    return typeof value === "boolean";
}
export const booleanU = or.factory(boolean, _undefined);
export const booleans = factory(array.of, boolean);
export const booleansU = or.factory(booleans, _undefined);
not.boolean = not.factory(boolean);
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
not.empty = not.factory(empty);
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
function _false(value) {
    return value === false;
}
export { _false as false };
not.false = not.factory(_false);
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export function indexedObject(value) {
    return typeof value === "object" && value !== null;
}
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
indexedObject.of = (value, guard) => object(value) && o.values(value).every(guard);
export const indexedObjectU = or.factory(indexedObject, _undefined);
export const indexedObjects = factory(array.of, indexedObject);
export const indexedObjectsU = or.factory(indexedObjects, _undefined);
not.indexedObject = not.factory(indexedObject);
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
/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
map.of = (value, keyGuard, valueGuard) => map(value) &&
    a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v));
export const mapU = or.factory(map, _undefined);
export const maps = factory(array.of, map);
export const mapsU = or.factory(maps, _undefined);
not.map = not.factory(map);
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
not.null = not.factory(_null);
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        default:
            return false;
    }
}
export const numStrU = or.factory(numStr, _undefined);
export const numStrs = factory(array.of, numStr);
export const numStrsU = or.factory(numStrs, _undefined);
not.numStr = not.factory(numStr);
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
export const numberU = or.factory(number, _undefined);
export const numbers = factory(array.of, number);
export const numbersU = or.factory(numbers, _undefined);
not.number = not.factory(number);
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export function object(value) {
    return typeof value === "object" && value !== null;
}
function _objectFactory(required, optional) {
    return (value) => object.of(value, required, optional);
}
object.factory = _objectFactory;
function _objectOf(value, required, optional) {
    return (indexedObject(value) &&
        o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
        o.every(optional, (guard, key) => checkOptionalProp(value, key, guard)));
}
object.of = _objectOf;
export const objectU = or.factory(object, _undefined);
export const objects = factory(array.of, object);
export const objectsU = or.factory(objects, _undefined);
not.object = not.factory(object);
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export function set(value) {
    return value instanceof Set;
}
/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
set.of = (value, guard) => set(value) && a.fromIterable(value).every(v => guard(v));
export const setU = or.factory(set, _undefined);
export const sets = factory(array.of, set);
export const setsU = or.factory(sets, _undefined);
not.set = not.factory(set);
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value) {
    return typeof value === "string";
}
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function stringU(value) {
    switch (typeof value) {
        case "string":
            return value !== "";
        case "undefined":
            return true;
        default:
            return false;
    }
}
export const strings = factory(array.of, string);
export const stringsU = or.factory(strings, _undefined);
not.string = not.factory(string);
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value) {
    return typeof value === "symbol";
}
export const symbolU = or.factory(symbol, _undefined);
export const symbols = factory(array.of, symbol);
export const symbolsU = or.factory(symbols, _undefined);
not.symbol = not.factory(symbol);
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
export { _true as true };
not.true = not.factory(_true);
export function tuple(value, ...guards) {
    return array(value) && guards.every((guard, index) => guard(value[index]));
}
function _tupleFactory(...guards) {
    return (value) => array(value) && guards.every((guard, index) => guard(value[index]));
}
tuple.factory = _tupleFactory;
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
not.undefined = not.factory(_undefined);
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value) {
    return true;
}
export const unknowns = factory(array.of, unknown);
export const unknownsU = or.factory(unknowns, _undefined);
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * Checks that object has optional property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}
/**
 * Checks object has required property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
//# sourceMappingURL=guards.js.map