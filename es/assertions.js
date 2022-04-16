import { AssertionError } from "./errors";
import * as is from "./guards";
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function array(value, error) {
    byGuard(value, is.array, error);
}
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
        switch (typeof error) {
            case "function":
                throw error();
            case "string":
            case "undefined":
                throw new AssertionError(error);
        }
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
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function indexedObject(value, error) {
    byGuard(value, is.indexedObject, error);
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
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function map(value, error) {
    byGuard(value, is.map, error);
}
/**
 * Not implemented.
 */
export function not() {
    throw new Error("Not implemented");
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
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 */
export function set(value, error) {
    byGuard(value, is.set, error);
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
 * Asserts that value type is not empty.
 *
 * @param value - Value.
 * @param error - Error.
 */
not.empty = (value, error) => {
    byGuard(value, is.not.empty, error);
};
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
 * Asserts that value type is Set\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 */
set.of = (value, guard, error) => {
    byGuard(value, is.factory(is.set.of, guard), error);
};
//# sourceMappingURL=assertions.js.map