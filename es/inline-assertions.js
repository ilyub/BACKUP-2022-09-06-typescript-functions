import * as assert from "./assertions";
import { defineFn } from "./module-definition";
export const array = defineFn(
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an array.
 * @throws Error otherwise.
 */
(value, error) => {
    assert.array(value, error);
    return value;
}, {
    /**
     * Asserts that value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of(value, guard, error) {
        assert.array.of(value, guard, error);
        return value;
    }
});
export const indexedObject = defineFn(
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is IndexedObject.
 * @throws Error otherwise.
 */
(value, error) => {
    assert.indexedObject(value, error);
    return value;
}, {
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of(value, guard, error) {
        assert.indexedObject.of(value, guard, error);
        return value;
    }
});
export const map = defineFn(
/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Map.
 * @throws Error otherwise.
 */
(value, error) => {
    assert.map(value, error);
    return value;
}, {
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of(value, keyGuard, valueGuard, error) {
        assert.map.of(value, keyGuard, valueGuard, error);
        return value;
    }
});
export const not = defineFn(
/**
 * Not implemented.
 */
() => {
    throw new Error("Not implemented");
}, {
    /**
     * Asserts that value type is not empty.
     *
     * @param this - No this.
     * @param value - Value.
     * @param error - Error.
     * @returns Value if value type is not empty.
     * @throws Error otherwise.
     */
    empty(value, error) {
        assert.not.empty(value, error);
        return value;
    }
});
export const set = defineFn(
/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Set.
 * @throws Error otherwise.
 */
(value, error) => {
    assert.set(value, error);
    return value;
}, {
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of(value, guard, error) {
        assert.set.of(value, guard, error);
        return value;
    }
});
/**
 * Asserts that value is a boolean.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a boolean.
 * @throws Error otherwise.
 */
export function boolean(value, error) {
    assert.boolean(value, error);
    return value;
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function callable(value, error) {
    assert.callable(value, error);
    return value;
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function enumeration(value, vo, error) {
    assert.enumeration(value, vo, error);
    return value;
}
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function instance(value, ctor, error) {
    assert.instance(value, ctor, error);
    return value;
}
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
export function instances(value, ctor, error) {
    assert.instances(value, ctor, error);
    return value;
}
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is NumStr.
 * @throws Error otherwise.
 */
export function numStr(value, error) {
    assert.numStr(value, error);
    return value;
}
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a number.
 * @throws Error otherwise.
 */
export function number(value, error) {
    assert.number(value, error);
    return value;
}
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an object.
 * @throws Error otherwise.
 */
export function object(value, error) {
    assert.object(value, error);
    return value;
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export function string(value, error) {
    assert.string(value, error);
    return value;
}
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
export function stringU(value, error) {
    assert.stringU(value, error);
    return value;
}
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a symbol.
 * @throws Error otherwise.
 */
export function symbol(value, error) {
    assert.symbol(value, error);
    return value;
}
//# sourceMappingURL=inline-assertions.js.map