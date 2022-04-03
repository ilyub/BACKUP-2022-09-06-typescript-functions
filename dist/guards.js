"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setU = exports.set = exports.objectOfFactory = exports.objectOf = exports.objectsU = exports.objects = exports.objectU = exports.object = exports.numbersU = exports.numbers = exports.numberU = exports.number = exports.numStrsU = exports.numStrs = exports.numStrU = exports.numStr = exports.null = exports.mapOf = exports.mapsU = exports.maps = exports.mapU = exports.map = exports.instances = exports.instance = exports.indexedObjectOf = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObjectU = exports.indexedObject = exports.false = exports._false = exports.enumeration = exports.empty = exports.callable = exports.booleansU = exports.booleans = exports.booleanU = exports.boolean = exports.arrayOf = exports.arraysU = exports.arrays = exports.arrayU = exports.array = exports.orFactory = exports.or = exports.notFactory = exports.not = exports.andFactory = exports.and = exports.factory = void 0;
exports.unknownsU = exports.unknowns = exports.unknown = exports.undefined = exports.tupleFactory = exports.tuple = exports.true = exports._true = exports.symbolsU = exports.symbols = exports.symbolU = exports.symbol = exports.stringsU = exports.strings = exports.stringU = exports.string = exports.setOf = exports.setsU = exports.sets = void 0;
const tslib_1 = require("tslib");
const a = tslib_1.__importStar(require("./array"));
const helpers_1 = require("./helpers");
const o = tslib_1.__importStar(require("./object"));
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
exports.factory = factory;
function and(value, ...guards) {
    return guards.every(guard => guard(value));
}
exports.and = and;
function andFactory(...guards) {
    return (value) => guards.every(guard => guard(value));
}
exports.andFactory = andFactory;
and.factory = andFactory;
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
function not(value, guard) {
    return !guard(value);
}
exports.not = not;
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function notFactory(guard) {
    return (value) => !guard(value);
}
exports.notFactory = notFactory;
not.factory = notFactory;
function or(value, ...guards) {
    return guards.some(guard => guard(value));
}
exports.or = or;
function orFactory(...guards) {
    return (value) => guards.some(guard => guard(value));
}
exports.orFactory = orFactory;
or.factory = orFactory;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
function array(value) {
    return Array.isArray(value);
}
exports.array = array;
not.array = notFactory(array);
exports.arrayU = orFactory(array, _undefined);
exports.arrays = factory(arrayOf, array);
exports.arraysU = orFactory(exports.arrays, _undefined);
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
function arrayOf(value, guard) {
    return array(value) && value.every(guard);
}
exports.arrayOf = arrayOf;
array.of = arrayOf;
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
function boolean(value) {
    return typeof value === "boolean";
}
exports.boolean = boolean;
not.boolean = notFactory(boolean);
exports.booleanU = orFactory(boolean, _undefined);
exports.booleans = factory(arrayOf, boolean);
exports.booleansU = orFactory(exports.booleans, _undefined);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function callable(value) {
    return typeof value === "function";
}
exports.callable = callable;
/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
function empty(value) {
    return value === null || value === undefined;
}
exports.empty = empty;
not.empty = notFactory(empty);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function enumeration(value, vo) {
    return (0, helpers_1.typedef)(vo).has(value);
}
exports.enumeration = enumeration;
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value) {
    return value === false;
}
exports._false = _false;
exports.false = _false;
not.false = notFactory(_false);
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
function indexedObject(value) {
    return typeof value === "object" && value !== null;
}
exports.indexedObject = indexedObject;
not.indexedObject = notFactory(indexedObject);
exports.indexedObjectU = orFactory(indexedObject, _undefined);
exports.indexedObjects = factory(arrayOf, indexedObject);
exports.indexedObjectsU = orFactory(exports.indexedObjects, _undefined);
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
function indexedObjectOf(value, guard) {
    return object(value) && o.values(value).every(guard);
}
exports.indexedObjectOf = indexedObjectOf;
indexedObject.of = indexedObjectOf;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function instance(value, ctor) {
    return value instanceof ctor;
}
exports.instance = instance;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
function instances(value, ctor) {
    return array(value) && value.every(v => v instanceof ctor);
}
exports.instances = instances;
/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
function map(value) {
    return value instanceof Map;
}
exports.map = map;
not.map = notFactory(map);
exports.mapU = orFactory(map, _undefined);
exports.maps = factory(arrayOf, map);
exports.mapsU = orFactory(exports.maps, _undefined);
/**
 * Checks that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
 */
function mapOf(value, keyGuard, valueGuard) {
    return (value instanceof Map &&
        a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v)));
}
exports.mapOf = mapOf;
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
exports.null = _null;
not.null = notFactory(_null);
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
function numStr(value) {
    switch (typeof value) {
        case "number":
        case "string":
            return true;
        default:
            return false;
    }
}
exports.numStr = numStr;
not.numStr = notFactory(numStr);
exports.numStrU = orFactory(numStr, _undefined);
exports.numStrs = factory(arrayOf, numStr);
exports.numStrsU = orFactory(exports.numStrs, _undefined);
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
function number(value) {
    return typeof value === "number";
}
exports.number = number;
not.number = notFactory(number);
exports.numberU = orFactory(number, _undefined);
exports.numbers = factory(arrayOf, number);
exports.numbersU = orFactory(exports.numbers, _undefined);
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
function object(value) {
    return typeof value === "object" && value !== null;
}
exports.object = object;
not.object = notFactory(object);
exports.objectU = orFactory(object, _undefined);
exports.objects = factory(arrayOf, object);
exports.objectsU = orFactory(exports.objects, _undefined);
function objectOf(value, required, optional) {
    return (indexedObject(value) &&
        o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
        o.every(optional, (guard, key) => checkOptionalProp(value, key, guard)));
}
exports.objectOf = objectOf;
object.of = objectOf;
function objectOfFactory(required, optional) {
    return (value) => objectOf(value, required, optional);
}
exports.objectOfFactory = objectOfFactory;
objectOf.factory = objectOfFactory;
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
function set(value) {
    return value instanceof Set;
}
exports.set = set;
not.set = notFactory(set);
exports.setU = orFactory(set, _undefined);
exports.sets = factory(arrayOf, set);
exports.setsU = orFactory(exports.sets, _undefined);
/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
function setOf(value, guard) {
    return value instanceof Set && a.fromIterable(value).every(v => guard(v));
}
exports.setOf = setOf;
set.of = setOf;
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function string(value) {
    return typeof value === "string";
}
exports.string = string;
not.string = notFactory(string);
exports.stringU = orFactory(string, _undefined);
exports.strings = factory(arrayOf, string);
exports.stringsU = orFactory(exports.strings, _undefined);
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
function symbol(value) {
    return typeof value === "symbol";
}
exports.symbol = symbol;
not.symbol = notFactory(symbol);
exports.symbolU = orFactory(symbol, _undefined);
exports.symbols = factory(arrayOf, symbol);
exports.symbolsU = orFactory(exports.symbols, _undefined);
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
exports._true = _true;
exports.true = _true;
not.true = notFactory(_true);
function tuple(value, ...guards) {
    return array(value) && guards.every((guard, index) => guard(value[index]));
}
exports.tuple = tuple;
function tupleFactory(...guards) {
    return (value) => array(value) && guards.every((guard, index) => guard(value[index]));
}
exports.tupleFactory = tupleFactory;
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
exports.undefined = _undefined;
not.undefined = notFactory(_undefined);
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
function unknown(_value) {
    return true;
}
exports.unknown = unknown;
exports.unknowns = factory(arrayOf, unknown);
exports.unknownsU = orFactory(exports.unknowns, _undefined);
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