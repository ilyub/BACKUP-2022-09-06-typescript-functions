import { AssertionError } from "./errors/AssertionError";
import * as is from "./guards";
/**
 * Converts error or error message to error argument usable with assertion.
 *
 * @param errorOrMessage - Error or error message.
 * @returns Error argument.
 */
export function toErrorArg(errorOrMessage) {
    if (is.string(errorOrMessage))
        return errorOrMessage;
    return () => errorOrMessage;
}
/**
 * Not implemented.
 */
export function not() {
    throw new Error("Not implemented");
}
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function array(value, error) {
    byGuard(value, is.array, error);
}
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
export function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
/**
 * Asserts that value type is booleanU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function booleanU(value, error) {
    byGuard(value, is.booleanU, error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error to be thrown.
 */
export function byGuard(value, guard, error) {
    if (guard(value)) {
        // Valid
    }
    else
        throw toError(error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function callable(value, error) {
    byGuard(value, is.callable, error);
}
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function callableU(value, error) {
    byGuard(value, is.callableU, error);
}
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function empty(value, error) {
    byGuard(value, is.empty, error);
}
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
export function enumeration(value, vo, error) {
    byGuard(value, is.factory(is.enumeration, vo), error);
}
/**
 * Asserts that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error to be thrown.
 */
export function enumerationU(value, vo, error) {
    byGuard(value, is.factory(is.enumerationU, vo), error);
}
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function indexedObject(value, error) {
    byGuard(value, is.indexedObject, error);
}
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
export function instance(value, ctor, error) {
    byGuard(value, is.factory(is.instance, ctor), error);
}
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error to be thrown.
 */
export function instances(value, ctor, error) {
    byGuard(value, is.factory(is.instances, ctor), error);
}
/**
 * Asserts that value is _null_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function nullAssertion(value, error) {
    byGuard(value, is.null, error);
}
export { nullAssertion as null };
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
export function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function number(value, error) {
    byGuard(value, is.number, error);
}
/**
 * Asserts that value type is numberU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function numberU(value, error) {
    byGuard(value, is.numberU, error);
}
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function object(value, error) {
    byGuard(value, is.object, error);
}
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
export function objectU(value, error) {
    byGuard(value, is.objectU, error);
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function string(value, error) {
    byGuard(value, is.string, error);
}
/**
 * Asserts that value type is stringU.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function toBeFalse(value, error) {
    if (value === false) {
        // Valid
    }
    else
        throw toError(error);
}
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
export function toBeTrue(value, error) {
    if (value === true) {
        // Valid
    }
    else
        throw toError(error);
}
/**
 * Asserts that value is _undefined_.
 *
 * @param value - Value.
 * @param error - Error to be thrown.
 */
function undefinedAssertion(value, error) {
    byGuard(value, is.undefined, error);
}
export { undefinedAssertion as undefined };
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
            return new AssertionError(error);
    }
}
//# sourceMappingURL=assertions.js.map