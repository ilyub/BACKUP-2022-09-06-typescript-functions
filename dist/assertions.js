"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undefined = exports.toBeTrue = exports.toBeFalse = exports.stringU = exports.string = exports.objectU = exports.object = exports.numberU = exports.number = exports.numStrU = exports.numStr = exports.null = exports.instances = exports.instance = exports.indexedObject = exports.enumerationU = exports.enumeration = exports.empty = exports.callableU = exports.callable = exports.byGuard = exports.booleanU = exports.boolean = exports.array = exports.not = exports.toErrorArg = void 0;
const tslib_1 = require("tslib");
const AssertionError_1 = require("./errors/AssertionError");
const is = (0, tslib_1.__importStar)(require("./guards"));
/**
 * Converts error or error message to error argument usable with assertion.
 *
 * @param errorOrMessage - Error or error message.
 * @returns Error argument.
 */
function toErrorArg(errorOrMessage) {
    if (is.string(errorOrMessage))
        return errorOrMessage;
    return () => errorOrMessage;
}
exports.toErrorArg = toErrorArg;
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
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
 */
array.of = (value, guard, error) => {
    byGuard(value, is.factory(is.array.of, guard), error);
};
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
exports.boolean = boolean;
/**
 * Asserts that value type is booleanU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function booleanU(value, error) {
    byGuard(value, is.booleanU, error);
}
exports.booleanU = booleanU;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
 */
function byGuard(value, guard, error) {
    if (guard(value)) {
        // Valid
    }
    else
        throw toError(error);
}
exports.byGuard = byGuard;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function callable(value, error) {
    byGuard(value, is.callable, error);
}
exports.callable = callable;
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function callableU(value, error) {
    byGuard(value, is.callableU, error);
}
exports.callableU = callableU;
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function empty(value, error) {
    byGuard(value, is.empty, error);
}
exports.empty = empty;
/**
 * Asserts that value type is not empty.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
not.empty = (value, error) => {
    byGuard(value, is.not.empty, error);
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
function enumeration(value, vo, error) {
    byGuard(value, is.factory(is.enumeration, vo), error);
}
exports.enumeration = enumeration;
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
function enumerationU(value, vo, error) {
    byGuard(value, is.factory(is.enumerationU, vo), error);
}
exports.enumerationU = enumerationU;
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
 */
indexedObject.of = (value, guard, error) => {
    byGuard(value, is.factory(is.indexedObject.of, guard), error);
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
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
 * @param error - Error to be thrown.
 */
function instances(value, ctor, error) {
    byGuard(value, is.factory(is.instances, ctor), error);
}
exports.instances = instances;
/**
 * Asserts that value is _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function nullAssertion(value, error) {
    byGuard(value, is.null, error);
}
exports.null = nullAssertion;
/**
 * Asserts that value is not _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
not.null = (value, error) => {
    byGuard(value, is.not.null, error);
};
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
exports.numStr = numStr;
/**
 * Asserts that value type is NumStrU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function numStrU(value, error) {
    byGuard(value, is.numStrU, error);
}
exports.numStrU = numStrU;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function number(value, error) {
    byGuard(value, is.number, error);
}
exports.number = number;
/**
 * Asserts that value type is numberU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function numberU(value, error) {
    byGuard(value, is.numberU, error);
}
exports.numberU = numberU;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function object(value, error) {
    byGuard(value, is.object, error);
}
exports.object = object;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @param error - Error to be thrown.
 */
object.of = (value, requiredGuards, optionalGuards, error) => {
    byGuard(value, is.factory(is.object.of, requiredGuards, optionalGuards), error);
};
/**
 * Asserts that value type is objectU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function objectU(value, error) {
    byGuard(value, is.objectU, error);
}
exports.objectU = objectU;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function string(value, error) {
    byGuard(value, is.string, error);
}
exports.string = string;
/**
 * Asserts that value type is stringU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
exports.stringU = stringU;
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function toBeFalse(value, error) {
    if (value === false) {
        // Valid
    }
    else
        throw toError(error);
}
exports.toBeFalse = toBeFalse;
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function toBeTrue(value, error) {
    if (value === true) {
        // Valid
    }
    else
        throw toError(error);
}
exports.toBeTrue = toBeTrue;
/**
 * Asserts that value is _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function undefinedAssertion(value, error) {
    byGuard(value, is.undefined, error);
}
exports.undefined = undefinedAssertion;
/**
 * Asserts that value is not _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
not.undefined = (value, error) => {
    byGuard(value, is.not.undefined, error);
};
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * Converts error argument to error.
 *
 * @param error - Error argument.
 * @returns Error.
 */
function toError(error) {
    switch (typeof error) {
        case "function":
            return error();
        case "string":
        case "undefined":
            return new AssertionError_1.AssertionError(error);
    }
}
//# sourceMappingURL=assertions.js.map