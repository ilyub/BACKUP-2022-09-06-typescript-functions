"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeTrue = exports.toBeFalse = exports.symbol = exports.stringU = exports.string = exports.set = exports.object = exports.number = exports.numStr = exports.map = exports.instances = exports.instance = exports.indexedObject = exports.enumeration = exports.empty = exports.callable = exports.byGuard = exports.boolean = exports.array = exports.not = void 0;
const tslib_1 = require("tslib");
const AssertionError_1 = require("./errors/AssertionError");
const is = tslib_1.__importStar(require("./guards"));
/**
 * Not implemented.
 */
function not() {
    throw new Error("Not implemented");
}
exports.not = not;
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 */
function array(value, error) {
    byGuard(value, is.array, error);
}
exports.array = array;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
array.of = (value, guard, error) => {
    byGuard(value, is.factory(is.array.of, guard), error);
};
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 */
function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
exports.boolean = boolean;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
function byGuard(value, guard, error) {
    if (guard(value)) {
        // Valid
    }
    else
        switch (typeof error) {
            case "function":
                throw error();
            case "string":
            case "undefined":
                throw new AssertionError_1.AssertionError(error);
        }
}
exports.byGuard = byGuard;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 */
function callable(value, error) {
    byGuard(value, is.callable, error);
}
exports.callable = callable;
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
function empty(value, error) {
    byGuard(value, is.empty, error);
}
exports.empty = empty;
/**
 * Asserts that value type is not empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
not.empty = (value, error) => {
    byGuard(value, is.not.empty, error);
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 */
function enumeration(value, vo, error) {
    byGuard(value, is.factory(is.enumeration, vo), error);
}
exports.enumeration = enumeration;
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 */
function indexedObject(value, error) {
    byGuard(value, is.indexedObject, error);
}
exports.indexedObject = indexedObject;
/**
 * Asserts that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
indexedObject.of = (value, guard, error) => {
    byGuard(value, is.factory(is.indexedObject.of, guard), error);
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
function instance(value, ctor, error) {
    byGuard(value, is.factory(is.instance, ctor), error);
}
exports.instance = instance;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
function instances(value, ctor, error) {
    byGuard(value, is.factory(is.instances, ctor), error);
}
exports.instances = instances;
/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 */
function map(value, error) {
    byGuard(value, is.map, error);
}
exports.map = map;
/**
 * Asserts that value type is Map\<K, V\>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @param error - Error.
 */
map.of = (value, keyGuard, valueGuard, error) => {
    byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
};
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 */
function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
exports.numStr = numStr;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 */
function number(value, error) {
    byGuard(value, is.number, error);
}
exports.number = number;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 */
function object(value, error) {
    byGuard(value, is.object, error);
}
exports.object = object;
/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 */
function set(value, error) {
    byGuard(value, is.set, error);
}
exports.set = set;
/**
 * Asserts that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
set.of = (value, guard, error) => {
    byGuard(value, is.factory(is.set.of, guard), error);
};
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
function string(value, error) {
    byGuard(value, is.string, error);
}
exports.string = string;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
exports.stringU = stringU;
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 */
function symbol(value, error) {
    byGuard(value, is.symbol, error);
}
exports.symbol = symbol;
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error.
 */
function toBeFalse(value, error) {
    byGuard(value, is.false, error);
}
exports.toBeFalse = toBeFalse;
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error.
 */
function toBeTrue(value, error) {
    byGuard(value, is.true, error);
}
exports.toBeTrue = toBeTrue;
//# sourceMappingURL=assertions.js.map