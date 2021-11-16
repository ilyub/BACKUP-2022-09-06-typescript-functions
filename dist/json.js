"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-identifier[json] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = exports.decode = void 0;
const tslib_1 = require("tslib");
const is = (0, tslib_1.__importStar)(require("./guards"));
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
function decode(source) {
    try {
        if (is.not.empty(source))
            return JSON.parse(source);
    }
    catch (_a) {
        //
    }
    // eslint-disable-next-line unicorn/no-null
    return null;
}
exports.decode = decode;
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
function encode(source) {
    return JSON.stringify(source, replacer);
}
exports.encode = encode;
/*
|*******************************************************************************
|* Private
|*******************************************************************************
|*/
/**
 * JSON replacer. Replaces _undefined_ with _null_.
 *
 * @param _key - Key.
 * @param value - Value.
 * @returns New value.
 */
function replacer(_key, value) {
    // eslint-disable-next-line unicorn/no-null
    return is.not.empty(value) ? value : null;
}
//# sourceMappingURL=json.js.map