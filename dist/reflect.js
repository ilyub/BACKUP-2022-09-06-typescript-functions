"use strict";
/* typerock/eslint-plugin disable @typerock/disallow-identifier[reflect] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = exports.getOwnMetadataKey = exports.getOwnMetadata = exports.getMetadataKey = exports.getMetadata = exports.get = exports.defineMetadataKey = exports.defineMetadata = void 0;
// eslint-disable-next-line import/no-unassigned-import
require("reflect-metadata");
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
function defineMetadata(metadataKey, metadataValue, target) {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
}
exports.defineMetadata = defineMetadata;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property name.
 */
function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
exports.defineMetadataKey = defineMetadataKey;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
function get(target, key) {
    return Reflect.get(target, key);
}
exports.get = get;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
function getMetadata(metadataKey, target) {
    return Reflect.getMetadata(metadataKey, target);
}
exports.getMetadata = getMetadata;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
function getMetadataKey(metadataKey, target, key) {
    return Reflect.getMetadata(metadataKey, target, key);
}
exports.getMetadataKey = getMetadataKey;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
function getOwnMetadata(metadataKey, target) {
    return Reflect.getOwnMetadata(metadataKey, target);
}
exports.getOwnMetadata = getOwnMetadata;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
exports.getOwnMetadataKey = getOwnMetadataKey;
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 */
function set(target, key, value) {
    Reflect.set(target, key, value);
}
exports.set = set;
//# sourceMappingURL=reflect.js.map