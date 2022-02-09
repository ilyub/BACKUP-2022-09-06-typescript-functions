"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-by-regexp[guards] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringU = exports.stringsU = exports.strings = exports.string = exports.set = exports.objectU = exports.objectOf = exports.objectsU = exports.objects = exports.object = exports.numberU = exports.numbersU = exports.numbers = exports.number = exports.numStrU = exports.numStrsU = exports.numStrs = exports.numStr = exports.null = exports.map = exports.instances = exports.instance = exports.indexedObjectOf = exports.indexedObjectsU = exports.indexedObjects = exports.indexedObjectU = exports.indexedObject = exports.false = exports.falseGuard = exports.enumerationU = exports.enumeration = exports.empty = exports.callableU = exports.callable = exports.booleanU = exports.booleansU = exports.booleans = exports.boolean = exports.arrayOf = exports.arraysU = exports.arrays = exports.arrayU = exports.array = exports.orFactory = exports.or = exports.notFactory = exports.not = exports.andFactory = exports.and = exports.factory = void 0;
exports.unknowns = exports.unknown = exports.undefined = exports.tupleFactory = exports.tuple = exports.true = exports.trueGuard = exports.symbolsU = exports.symbols = exports.symbol = void 0;
const tslib_1 = require("tslib");
const a = (0, tslib_1.__importStar)(require("./array"));
const o = (0, tslib_1.__importStar)(require("./object"));
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Rest arguments.
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
 * Creates guard for not T type.
 *
 * @param guard - Guard for type T.
 * @returns Guard for not T type.
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
exports.arrayU = orFactory(array, undefinedGuard);
exports.arrays = factory(arrayOf, array);
exports.arraysU = orFactory(exports.arrays, undefinedGuard);
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
function arrayOf(value, guard) {
    return Array.isArray(value) && value.every(guard);
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
exports.booleans = factory(arrayOf, boolean);
exports.booleansU = orFactory(exports.booleans, undefinedGuard);
/**
 * Checks that value type is booleanU.
 *
 * @param value - Value.
 * @returns _True_ if value type is booleanU, _false_ otherwise.
 */
function booleanU(value) {
    return typeof value === "boolean" || value === undefined;
}
exports.booleanU = booleanU;
not.booleanU = notFactory(booleanU);
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
not.callable = notFactory(callable);
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
function callableU(value) {
    return typeof value === "function" || value === undefined;
}
exports.callableU = callableU;
not.callableU = notFactory(callableU);
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
    return vo.has(value);
}
exports.enumeration = enumeration;
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
function enumerationU(value, vo) {
    return vo.has(value) || value === undefined;
}
exports.enumerationU = enumerationU;
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function falseGuard(value) {
    return value === false;
}
exports.falseGuard = falseGuard;
exports.false = falseGuard;
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
exports.indexedObjectU = orFactory(indexedObject, undefinedGuard);
exports.indexedObjects = factory(arrayOf, indexedObject);
exports.indexedObjectsU = orFactory(exports.indexedObjects, undefinedGuard);
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
function indexedObjectOf(value, guard) {
    return object(value) && Object.values(value).every(guard);
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
    return Array.isArray(value) && value.every(x => x instanceof ctor);
}
exports.instances = instances;
/**
 * Checks that value type is Map<K, V>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map<K, V>, _false_ otherwise.
 */
function map(value, keyGuard, valueGuard) {
    return (value instanceof Map &&
        a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v)));
}
exports.map = map;
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function nullGuard(value) {
    return value === null;
}
exports.null = nullGuard;
not.null = notFactory(nullGuard);
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
exports.numStrs = factory(arrayOf, numStr);
exports.numStrsU = orFactory(exports.numStrs, undefinedGuard);
/**
 * Checks that value type is NumStrU.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStrU, _false_ otherwise.
 */
function numStrU(value) {
    switch (typeof value) {
        case "number":
        case "string":
        case "undefined":
            return true;
        default:
            return false;
    }
}
exports.numStrU = numStrU;
not.numStrU = notFactory(numStrU);
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
exports.numbers = factory(arrayOf, number);
exports.numbersU = orFactory(exports.numbers, undefinedGuard);
/**
 * Checks that value type is numberU.
 *
 * @param value - Value.
 * @returns _True_ if value type is numberU, _false_ otherwise.
 */
function numberU(value) {
    return typeof value === "number" || value === undefined;
}
exports.numberU = numberU;
not.numberU = notFactory(numberU);
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
exports.objects = factory(arrayOf, object);
exports.objectsU = orFactory(exports.objects, undefinedGuard);
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
function objectOf(value, requiredGuards, optionalGuards) {
    return (indexedObject(value) &&
        o.entries(requiredGuards).every(([name, guard]) => guard(value[name])) &&
        o
            .entries(optionalGuards)
            .every(([name, guard]) => o.hasOwnProp(name, value) ? guard(value[name]) : true));
}
exports.objectOf = objectOf;
object.of = objectOf;
/**
 * Checks that value type is objectU.
 *
 * @param value - Value.
 * @returns _True_ if value type is objectU, _false_ otherwise.
 */
function objectU(value) {
    return object(value) || value === undefined;
}
exports.objectU = objectU;
/**
 * Checks that value type is Set<T>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set<T>, _false_ otherwise.
 */
function set(value, guard) {
    return value instanceof Set && a.fromIterable(value).every(x => guard(x));
}
exports.set = set;
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
exports.strings = factory(arrayOf, string);
exports.stringsU = orFactory(exports.strings, undefinedGuard);
/**
 * Checks that value type is stringU.
 *
 * @param value - Value.
 * @returns _True_ if value type is stringU, _false_ otherwise.
 */
function stringU(value) {
    return (typeof value === "string" && value !== "") || value === undefined;
}
exports.stringU = stringU;
not.stringU = notFactory(stringU);
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
exports.symbols = factory(arrayOf, symbol);
exports.symbolsU = orFactory(exports.symbols, undefinedGuard);
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function trueGuard(value) {
    return value === true;
}
exports.trueGuard = trueGuard;
exports.true = trueGuard;
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
function undefinedGuard(value) {
    return value === undefined;
}
exports.undefined = undefinedGuard;
not.undefined = notFactory(undefinedGuard);
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
//# sourceMappingURL=guards.js.map