import * as a from "./array";
import { typedef } from "./helpers";
import * as o from "./object";
export { _false as false, _null as null, _true as true, _undefined as undefined };
export const and = o.extend((value, ...guards) => guards.every(guard => guard(value)), {
    factory(...guards) {
        return (value) => guards.every(guard => guard(value));
    }
});
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export const array = o.extend((value) => Array.isArray(value), {
    /**
     * Checks that value type is T[].
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is T[], _false_ otherwise.
     */
    of(value, guard) {
        return array(value) && value.every(guard);
    }
});
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export const indexedObject = o.extend((value) => typeof value === "object" && value !== null, {
    /**
     * Checks that value type is IndexedObject\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
     */
    of(value, guard) {
        return object(value) && o.values(value).every(guard);
    }
});
/**
 * Checks that value type is Map.
 *
 * @param value - Value.
 * @returns _True_ if value type is Map, _false_ otherwise.
 */
export const map = o.extend((value) => value instanceof Map, {
    /**
     * Checks that value type is Map\<K, V\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param keyGuard - Key guard.
     * @param valueGuard - Value guard.
     * @returns _True_ if value type is Map\<K, V\>, _false_ otherwise.
     */
    of(value, keyGuard, valueGuard) {
        return (map(value) &&
            a.fromIterable(value).every(([k, v]) => keyGuard(k) && valueGuard(v)));
    }
});
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export const object = o.extend((value) => typeof value === "object" && value !== null, {
    factory(required, optional) {
        return (value) => object.of(value, required, optional);
    },
    of(value, required, optional) {
        return (indexedObject(value) &&
            o.every(required, (guard, key) => checkRequiredProp(value, key, guard)) &&
            o.every(optional, (guard, key) => checkOptionalProp(value, key, guard)));
    }
});
export const or = o.extend((value, ...guards) => guards.some(guard => guard(value)), {
    factory(...guards) {
        return (value) => guards.some(guard => guard(value));
    }
});
/**
 * Checks that value type is Set.
 *
 * @param value - Value.
 * @returns _True_ if value type is Set, _false_ otherwise.
 */
export const set = o.extend((value) => value instanceof Set, {
    /**
     * Checks that value type is Set\<T\>.
     *
     * @param this - No this.
     * @param value - Value.
     * @param guard - Guard for type T.
     * @returns _True_ if value type is Set\<T\>, _false_ otherwise.
     */
    of(value, guard) {
        return set(value) && a.fromIterable(value).every(v => guard(v));
    }
});
export const tuple = o.extend(
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
(value, ...guards) => array(value) && guards.every((guard, index) => guard(value[index])), {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Ok
    factory(...guards) {
        return (value) => array(value) && guards.every((guard, index) => guard(value[index]));
    }
});
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export const not = o.extend((value, guard) => !guard(value), {
    array: _notFactory(array),
    boolean: _notFactory(boolean),
    empty: _notFactory(empty),
    factory: _notFactory,
    false: _notFactory(_false),
    indexedObject: _notFactory(indexedObject),
    map: _notFactory(map),
    null: _notFactory(_null),
    numStr: _notFactory(numStr),
    number: _notFactory(number),
    object: _notFactory(object),
    set: _notFactory(set),
    string: _notFactory(string),
    stringU: _notFactory(stringU),
    symbol: _notFactory(symbol),
    true: _notFactory(_true),
    undefined: _notFactory(_undefined)
});
export const arrayU = or.factory(array, _undefined);
export const arrays = factory(array.of, array);
export const arraysU = or.factory(arrays, _undefined);
export const booleanU = or.factory(boolean, _undefined);
export const booleans = factory(array.of, boolean);
export const booleansU = or.factory(booleans, _undefined);
export const indexedObjectU = or.factory(indexedObject, _undefined);
export const indexedObjects = factory(array.of, indexedObject);
export const indexedObjectsU = or.factory(indexedObjects, _undefined);
export const mapU = or.factory(map, _undefined);
export const maps = factory(array.of, map);
export const mapsU = or.factory(maps, _undefined);
export const numStrU = or.factory(numStr, _undefined);
export const numStrs = factory(array.of, numStr);
export const numStrsU = or.factory(numStrs, _undefined);
export const numberU = or.factory(number, _undefined);
export const numbers = factory(array.of, number);
export const numbersU = or.factory(numbers, _undefined);
export const objectU = or.factory(object, _undefined);
export const objects = factory(array.of, object);
export const objectsU = or.factory(objects, _undefined);
export const setU = or.factory(set, _undefined);
export const sets = factory(array.of, set);
export const setsU = or.factory(sets, _undefined);
export const strings = factory(array.of, string);
export const stringsU = or.factory(strings, _undefined);
export const symbolU = or.factory(symbol, _undefined);
export const symbols = factory(array.of, symbol);
export const symbolsU = or.factory(symbols, _undefined);
export const unknowns = factory(array.of, unknown);
export const unknownsU = or.factory(unknowns, _undefined);
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export function boolean(value) {
    return typeof value === "boolean";
}
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function callable(value) {
    return typeof value === "function";
}
/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export function empty(value) {
    return value === null || value === undefined;
}
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function enumeration(value, vo) {
    return typedef(vo).has(value);
}
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Arguments.
 * @returns Single-arg guard.
 */
export function factory(guard, ...args) {
    return (value) => guard(value, ...args);
}
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export function instance(value, ctor) {
    return value instanceof ctor;
}
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export function instances(value, ctor) {
    return array(value) && value.every(v => v instanceof ctor);
}
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export function numStr(value) {
    switch (typeof value) {
        case "number":
            return !Number.isNaN(value);
        case "string":
            return true;
        default:
            return false;
    }
}
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export function number(value) {
    return typeof value === "number" && !Number.isNaN(value);
}
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function string(value) {
    return typeof value === "string";
}
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export function stringU(value) {
    switch (typeof value) {
        case "string":
            return value !== "";
        case "undefined":
            return true;
        default:
            return false;
    }
}
/**
 * Checks that value is a symbol.
 *
 * @param value - Value.
 * @returns _True_ if value is a symbol, _false_ otherwise.
 */
export function symbol(value) {
    return typeof value === "symbol";
}
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export function unknown(_value) {
    return true;
}
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
function _false(value) {
    return value === false;
}
/**
 * Creates guard for type not T.
 *
 * @param guard - Guard for type T.
 * @returns Guard for type not T.
 */
function _notFactory(guard) {
    return (value) => !guard(value);
}
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
function _null(value) {
    return value === null;
}
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
function _true(value) {
    return value === true;
}
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
function _undefined(value) {
    return value === undefined;
}
/**
 * Checks that object has optional property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has optional property, _false_ otherwise.
 */
function checkOptionalProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : true;
}
/**
 * Checks object has required property.
 *
 * @param obj - Object.
 * @param key - Key.
 * @param guard - Guard.
 * @returns _True_ if object has required property, _false_ otherwise.
 */
function checkRequiredProp(obj, key, guard) {
    return o.hasOwnProp(key, obj) ? guard(obj[key]) : false;
}
//# sourceMappingURL=guards.js.map