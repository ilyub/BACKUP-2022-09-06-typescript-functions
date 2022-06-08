"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapError = exports.toBeTrue = exports.toBeFalse = exports.symbol = exports.stringU = exports.string = exports.object = exports.number = exports.numStr = exports.instances = exports.instance = exports.enumeration = exports.empty = exports.callable = exports.byGuard = exports.boolean = exports.set = exports.map = exports.indexedObject = exports.array = exports.not = void 0;
const tslib_1 = require("tslib");
const core_1 = require("./core");
const errors_1 = require("./errors");
const is = tslib_1.__importStar(require("./guards"));
exports.not = {
    empty: (value, error) => {
        byGuard(value, is.not.empty, error);
    }
};
exports.array = (0, core_1.defineFn)(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.array, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.array.of, guard), error);
    }
});
exports.indexedObject = (0, core_1.defineFn)(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.indexedObject, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, guard, error) => {
        byGuard(value, is.factory(is.indexedObject.of, guard), error);
    }
});
exports.map = (0, core_1.defineFn)(
// eslint-disable-next-line @skylib/require-jsdoc -- Ok
(value, error) => {
    byGuard(value, is.map, error);
}, {
    // eslint-disable-next-line @skylib/require-jsdoc -- Ok
    of: (value, keyGuard, valueGuard, error) => {
        byGuard(value, is.factory(is.map.of, keyGuard, valueGuard), error);
    }
});
exports.set = (0, core_1.defineFn)(
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
        throw errors_1.ErrorArg.toError(error);
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
/**
 * Wraps error.
 *
 * @param e - Error.
 * @returns Wrapped error.
 * @deprecated Use ErrorArg.wrapError instead.
 */
function wrapError(e) {
    return () => e;
}
exports.wrapError = wrapError;
//# sourceMappingURL=assertions.js.map