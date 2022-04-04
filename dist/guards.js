"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbols = exports.symbolU = exports.symbol = exports.stringsU = exports.strings = exports.stringU = exports.string = exports.setsU = exports.sets = exports.setU = exports.set = exports.objectsU = exports.objects = exports.objectU = exports.object = exports.numbersU = exports.numbers = exports.numberU = exports.number = exports.numStrsU = exports.numStrs = exports.numStrU = exports.numStr = exports.null = exports.mapsU = exports.maps = exports.mapU = exports.map = exports.instances = exports.instance = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObjectU = exports.indexedObject = exports.false = exports.enumeration = exports.empty = exports.callable = exports.booleansU = exports.booleans = exports.booleanU = exports.boolean = exports.arraysU = exports.arrays = exports.arrayU = exports.array = exports.or = exports.and = exports.not = exports.factory = void 0;
exports.unknownsU = exports.unknowns = exports.unknown = exports.undefined = exports.tuple = exports.true = exports.symbolsU = void 0;
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
not.factory =
    (guard) => (value) => !guard(value);
function and(value, ...guards) {
    return guards.every(guard => guard(value));
}
exports.and = and;
function _andFactory(...guards) {
    return (value) => guards.every(guard => guard(value));
}
and.factory = _andFactory;
function or(value, ...guards) {
    return guards.some(guard => guard(value));
}
exports.or = or;
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
function array(value) {
    return Array.isArray(value);
}
exports.array = array;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
array.of = (value, guard) => array(value) && value.every(guard);
exports.arrayU = or.factory(array, _undefined);
exports.arrays = factory(array.of, array);
exports.arraysU = or.factory(exports.arrays, _undefined);
not.array = not.factory(array);
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
exports.booleanU = or.factory(boolean, _undefined);
exports.booleans = factory(array.of, boolean);
exports.booleansU = or.factory(exports.booleans, _undefined);
not.boolean = not.factory(boolean);
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
not.empty = not.factory(empty);
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
exports.false = _false;
not.false = not.factory(_false);
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
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
indexedObject.of = (value, guard) => object(value) && o.values(value).every(guard);
exports.indexedObjectU = or.factory(indexedObject, _undefined);
exports.indexedObjects = factory(array.of, indexedObject);
exports.indexedObjectsU = or.factory(exports.indexedObjects, _undefined);
not.indexedObject = not.factory(indexedObject);
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
exports.mapU = or.factory(map, _undefined);
exports.maps = factory(array.of, map);
exports.mapsU = or.factory(exports.maps, _undefined);
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
exports.null = _null;
not.null = not.factory(_null);
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
function numStr(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        default:
            return false;
    }
}
exports.numStr = numStr;
exports.numStrU = or.factory(numStr, _undefined);
exports.numStrs = factory(array.of, numStr);
exports.numStrsU = or.factory(exports.numStrs, _undefined);
not.numStr = not.factory(numStr);
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
exports.number = number;
exports.numberU = or.factory(number, _undefined);
exports.numbers = factory(array.of, number);
exports.numbersU = or.factory(exports.numbers, _undefined);
not.number = not.factory(number);
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
exports.objectU = or.factory(object, _undefined);
exports.objects = factory(array.of, object);
exports.objectsU = or.factory(exports.objects, _undefined);
not.object = not.factory(object);
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
/**
 * Checks that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
 */
set.of = (value, guard) => set(value) && a.fromIterable(value).every(v => guard(v));
exports.setU = or.factory(set, _undefined);
exports.sets = factory(array.of, set);
exports.setsU = or.factory(exports.sets, _undefined);
not.set = not.factory(set);
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
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
function stringU(value) {
    switch (typeof value) {
        case "string":
            return value !== "";
        case "undefined":
            return true;
        default:
            return false;
    }
}
exports.stringU = stringU;
exports.strings = factory(array.of, string);
exports.stringsU = or.factory(exports.strings, _undefined);
not.string = not.factory(string);
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
exports.symbolU = or.factory(symbol, _undefined);
exports.symbols = factory(array.of, symbol);
exports.symbolsU = or.factory(exports.symbols, _undefined);
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
exports.true = _true;
not.true = not.factory(_true);
function tuple(value, ...guards) {
    return array(value) && guards.every((guard, index) => guard(value[index]));
}
exports.tuple = tuple;
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
exports.undefined = _undefined;
not.undefined = not.factory(_undefined);
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
exports.unknowns = factory(array.of, unknown);
exports.unknownsU = or.factory(exports.unknowns, _undefined);
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