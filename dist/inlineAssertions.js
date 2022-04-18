"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.symbol = exports.stringU = exports.string = exports.object = exports.number = exports.numStr = exports.instances = exports.instance = exports.enumeration = exports.callable = exports.boolean = exports.set = exports.not = exports.map = exports.indexedObject = exports.array = void 0;
const tslib_1 = require("tslib");
const assert = tslib_1.__importStar(require("./assertions"));
const moduleDefinition_1 = require("./moduleDefinition");
/**
 * Asserts that value is an array.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an array.
 * @throws Error otherwise.
 */
exports.array = (0, moduleDefinition_1.defineFn)((value, error) => {
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
/**
 * Asserts that value type is IndexedObject.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is IndexedObject.
 * @throws Error otherwise.
 */
exports.indexedObject = (0, moduleDefinition_1.defineFn)((value, error) => {
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
/**
 * Asserts that value type is Map.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Map.
 * @throws Error otherwise.
 */
exports.map = (0, moduleDefinition_1.defineFn)((value, error) => {
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
/**
 * Not implemented.
 */
exports.not = (0, moduleDefinition_1.defineFn)(() => {
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
/**
 * Asserts that value type is Set.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is Set.
 * @throws Error otherwise.
 */
exports.set = (0, moduleDefinition_1.defineFn)((value, error) => {
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
function boolean(value, error) {
    assert.boolean(value, error);
    return value;
}
exports.boolean = boolean;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function callable(value, error) {
    assert.callable(value, error);
    return value;
}
exports.callable = callable;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function enumeration(value, vo, error) {
    assert.enumeration(value, vo, error);
    return value;
}
exports.enumeration = enumeration;
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
function instance(value, ctor, error) {
    assert.instance(value, ctor, error);
    return value;
}
exports.instance = instance;
/**
 * Asserts that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @param error - Error.
 * @returns Value if value type is T[].
 * @throws Error otherwise.
 */
function instances(value, ctor, error) {
    assert.instances(value, ctor, error);
    return value;
}
exports.instances = instances;
/**
 * Asserts that value type is NumStr.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value type is NumStr.
 * @throws Error otherwise.
 */
function numStr(value, error) {
    assert.numStr(value, error);
    return value;
}
exports.numStr = numStr;
/**
 * Asserts that value is a number.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a number.
 * @throws Error otherwise.
 */
function number(value, error) {
    assert.number(value, error);
    return value;
}
exports.number = number;
/**
 * Asserts that value is an object.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is an object.
 * @throws Error otherwise.
 */
function object(value, error) {
    assert.object(value, error);
    return value;
}
exports.object = object;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
function string(value, error) {
    assert.string(value, error);
    return value;
}
exports.string = string;
/**
 * Asserts that value is a string.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a string.
 * @throws Error otherwise.
 */
function stringU(value, error) {
    assert.stringU(value, error);
    return value;
}
exports.stringU = stringU;
/**
 * Asserts that value is a symbol.
 *
 * @param value - Value.
 * @param error - Error.
 * @returns Value if value is a symbol.
 * @throws Error otherwise.
 */
function symbol(value, error) {
    assert.symbol(value, error);
    return value;
}
exports.symbol = symbol;
//# sourceMappingURL=inlineAssertions.js.map