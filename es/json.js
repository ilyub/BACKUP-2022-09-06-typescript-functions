/* skylib/eslint-plugin disable @skylib/disallow-identifier[json] */
import * as a from "./array";
import * as assert from "./assertions";
import * as is from "./guards";
import { createValidationObject } from "./types/core";
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
export function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source, reviver);
    }
    catch (_a) {
        // eslint-disable-next-line unicorn/no-null
        return null;
    }
    // eslint-disable-next-line unicorn/no-null
    return null;
}
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
export function encode(source) {
    return JSON.stringify(source, replacer);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value.
 * @param y - Value.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export function eq(x, y) {
    return encode(x) === encode(y);
}
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value.
 * @param y - Value.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export function neq(x, y) {
    return encode(x) !== encode(y);
}
const DataTypeVO = createValidationObject({
    "map-5702-3c89-3feb-75d4": "map-5702-3c89-3feb-75d4",
    "set-41ef-10c9-ae1f-15e8": "set-41ef-10c9-ae1f-15e8"
});
const isDataType = is.factory(is.enumeration, DataTypeVO);
const isCustomData = is.factory(is.object.of, {
    dataType: isDataType,
    value: is.unknown
}, {});
const isMapEntry = is.tuple.factory(is.unknown, is.unknown);
const isMapValue = is.factory(is.array.of, isMapEntry);
const isSetValue = is.factory(is.array);
/**
 * JSON replacer.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
    // eslint-disable-next-line unicorn/no-null
    if (is.empty(value))
        return null;
    if (value instanceof Map)
        return {
            dataType: "map-5702-3c89-3feb-75d4",
            value: a.fromIterable(value)
        };
    if (value instanceof Set)
        return {
            dataType: "set-41ef-10c9-ae1f-15e8",
            value: a.fromIterable(value)
        };
    return value;
}
/**
 * JSON reviver.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function reviver(_key, value) {
    // eslint-disable-next-line unicorn/no-null
    if (is.empty(value))
        return null;
    if (isCustomData(value))
        switch (value.dataType) {
            case "map-5702-3c89-3feb-75d4":
                assert.byGuard(value.value, isMapValue);
                return new Map(value.value);
            case "set-41ef-10c9-ae1f-15e8":
                assert.byGuard(value.value, isSetValue);
                return new Set(value.value);
        }
    return value;
}
//# sourceMappingURL=json.js.map