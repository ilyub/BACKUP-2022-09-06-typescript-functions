import { defineFn } from "./core";
import { ErrorArg } from "./errors";
import * as is from "./guards";
export const not = {
    empty: (value, error) => {
        byGuard(value, is.not.empty, error);
    }
};
export const array = defineFn(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.array, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.array.of, guard), error);
    }
});
export const indexedObject = defineFn(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.indexedObject, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.indexedObject.of, guard), error);
    }
});
export const map = defineFn(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.map, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, keyGuard, valueGuard, error) => {
        byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
    }
});
export const set = defineFn(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.set, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.set.of, guard), error);
    }
});
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function boolean(value, error) {
    byGuard(value, is.boolean, error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
export function byGuard(value, guard, error) {
    if (guard(value)) {
        // Valid
    }
    else
        throw ErrorArg.toError(error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function callable(value, error) {
    byGuard(value, is.callable, error);
}
/**
 * Asserts that value type is empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function empty(value, error) {
    byGuard(value, is.empty, error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 */
export function enumeration(value, vo, error) {
    byGuard(value, is.factory(is.enumeration, vo), error);
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instance(value, ctor, error) {
    byGuard(value, is.factory(is.instance, ctor), error);
}
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 */
export function instances(value, ctor, error) {
    byGuard(value, is.factory(is.instances, ctor), error);
}
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function numStr(value, error) {
    byGuard(value, is.numStr, error);
}
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function number(value, error) {
    byGuard(value, is.number, error);
}
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function object(value, error) {
    byGuard(value, is.object, error);
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function string(value, error) {
    byGuard(value, is.string, error);
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function stringU(value, error) {
    byGuard(value, is.stringU, error);
}
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function symbol(value, error) {
    byGuard(value, is.symbol, error);
}
/**
 * Asserts value to be _false_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function toBeFalse(value, error) {
    byGuard(value, is.false, error);
}
/**
 * Asserts value to be _true_.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function toBeTrue(value, error) {
    byGuard(value, is.true, error);
}
/**
 * Wraps error.
 *
 * @param e - Error.
 * @returns Wrapped error.
 * @deprecated Use ErrorArg.wrapError instead.
 */
export function wrapError(e) {
    return () => e;
}
//# sourceMappingURL=assertions.js.map