import * as assert from "./assertions";
import { defineFn } from "./core";
import { ErrorArg } from "./errors";
import * as is from "./guards";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export const array = defineFn(factory(is.array), {
    /**
     * Asserts that value type is T[].
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is T[].
     * @throws Error otherwise.
     */
    of: (value, guard, error) => {
        assert.array.of(value, guard, error);
        return value;
    }
});
export const arrayU = factory(is.arrayU);
export const arrays = factory(is.arrays);
export const arraysU = factory(is.arraysU);
export const boolean = factory(is.boolean);
export const booleanU = factory(is.booleanU);
export const booleans = factory(is.booleans);
export const booleansU = factory(is.booleansU);
export const empty = factory(is.empty);
export const indexedObject = defineFn(factory(is.indexedObject), {
    /**
     * Asserts that value type is IndexedObject\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is IndexedObject\<T\>.
     * @throws Error otherwise.
     */
    of: (value, guard, error) => {
        assert.indexedObject.of(value, guard, error);
        return value;
    }
});
export const indexedObjectU = factory(is.indexedObjectU);
export const indexedObjects = factory(is.indexedObjects);
export const indexedObjectsU = factory(is.indexedObjectsU);
export const map = defineFn(factory(is.map), {
    /**
     * Asserts that value type is Map\<K, V\>.
     *
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @param error - Error.
     * @returns Value if value type is Map\<K, V\>.
     * @throws Error otherwise.
     */
    of: (value, keyGuard, valueGuard, error) => {
        assert.map.of(value, keyGuard, valueGuard, error);
        return value;
    }
});
export const mapU = factory(is.mapU);
export const maps = factory(is.maps);
export const mapsU = factory(is.mapsU);
export const never = factory(is.never);
export const numStr = factory(is.numStr);
export const numStrU = factory(is.numStrU);
export const numStrs = factory(is.numStrs);
export const numStrsU = factory(is.numStrsU);
export const number = factory(is.number);
export const numberU = factory(is.numberU);
export const numbers = factory(is.numbers);
export const numbersU = factory(is.numbersU);
export const object = factory(is.object);
export const objectU = factory(is.objectU);
export const objects = factory(is.objects);
export const objectsU = factory(is.objectsU);
export const set = defineFn(factory(is.set), {
    /**
     * Asserts that value type is Set\<T\>.
     *
     * @param value - Value.
     * @param guard - Guard for type T.
     * @param error - Error.
     * @returns Value if value type is Set\<T\>.
     * @throws Error otherwise.
     */
    of: (value, guard, error) => {
        assert.set.of(value, guard, error);
        return value;
    }
});
export const setU = factory(is.setU);
export const sets = factory(is.sets);
export const setsU = factory(is.setsU);
export const string = factory(is.string);
export const stringU = factory(is.stringU);
export const strings = factory(is.strings);
export const stringsU = factory(is.stringsU);
export const symbol = factory(is.symbol);
export const symbolU = factory(is.symbolU);
export const symbols = factory(is.symbols);
export const symbolsU = factory(is.symbolsU);
export const unknown = factory(is.unknown);
export const unknowns = factory(is.unknowns);
export const unknownsU = factory(is.unknownsU);
export const not = {
    array: notFactory(is.not.array),
    boolean: notFactory(is.not.boolean),
    empty: notFactory(is.not.empty),
    false: notFactory(is.not.false),
    indexedObject: notFactory(is.not.indexedObject),
    map: notFactory(is.not.map),
    null: notFactory(is.not.null),
    numStr: notFactory(is.not.numStr),
    number: notFactory(is.not.number),
    object: notFactory(is.not.object),
    set: notFactory(is.not.set),
    string: notFactory(is.not.string),
    stringU: notFactory(is.not.stringU),
    symbol: notFactory(is.not.symbol),
    true: notFactory(is.not.true),
    undefined: notFactory(is.not.undefined)
};
/**
 * Asserts that value type is T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @param error - Error.
 * @returns Value if value type is T.
 * @throws Error otherwise.
 */
export function byGuard(value, guard, error) {
    assert.byGuard(value, guard, error);
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
const _false = factory(is.false);
const _null = factory(is.null);
const _true = factory(is.true);
const _undefined = factory(is.undefined);
/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type T.
 * @returns Inline assertion for type T.
 */
function factory(guard) {
    /**
     * Asserts that value has expected type.
     *
     * @param value - Value.
     * @param error - Error.
     * @returns Value if value has expected type.
     * @throws Error otherwise.
     */
    return (value, error) => {
        if (guard(value))
            return value;
        throw ErrorArg.toError(error);
    };
}
/**
 * Creates inline assertion.
 *
 * @param guard - Guard for type not T.
 * @returns Inline assertion for type not T.
 */
function notFactory(guard) {
    /**
     * Asserts that value has expected type.
     *
     * @param value - Value.
     * @param error - Error.
     * @returns Value if value has expected type.
     * @throws Error otherwise.
     */
    return (value, error) => {
        if (guard(value))
            return value;
        throw ErrorArg.toError(error);
    };
}
//# sourceMappingURL=inline-assertions.js.map