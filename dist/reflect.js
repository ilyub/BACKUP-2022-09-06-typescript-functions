"use strict";
/* skylib/eslint-plugin disable @skylib/disallow-identifier[functions.reflect] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasOwnMetadataKey = exports.hasOwnMetadata = exports.hasMetadataKey = exports.hasMetadata = exports.getOwnMetadataKey = exports.getOwnMetadata = exports.getMetadataKey = exports.getMetadata = exports.defineMetadataKey = exports.defineMetadata = exports.setPrototypeOf = exports.set = exports.preventExtensions = exports.ownKeys = exports.isExtensible = exports.has = exports.getPrototypeOf = exports.getOwnPropertyDescriptor = exports.get = exports.deleteProperty = exports.defineProperty = exports.construct = exports.apply = void 0;
require("reflect-metadata");
/**
 * Typed version of Reflect.apply.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
exports.apply = Reflect.apply;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
exports.construct = Reflect.construct;
exports.defineProperty = Reflect.defineProperty;
exports.deleteProperty = Reflect.deleteProperty;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property key.
 * @returns Property value.
 */
exports.get = Reflect.get;
exports.getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
exports.getPrototypeOf = Reflect.getPrototypeOf;
exports.has = Reflect.has;
exports.isExtensible = Reflect.isExtensible;
exports.ownKeys = Reflect.ownKeys;
exports.preventExtensions = Reflect.preventExtensions;
exports.set = Reflect.set;
exports.setPrototypeOf = Reflect.setPrototypeOf;
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
 * @param key - Property key.
 */
function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
exports.defineMetadataKey = defineMetadataKey;
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
 * @param key - Property key.
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
 * @param key - Property key.
 * @returns Metadata value.
 */
function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
exports.getOwnMetadataKey = getOwnMetadataKey;
/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasMetadata(metadataKey, target) {
    return Reflect.hasMetadata(metadataKey, target);
}
exports.hasMetadata = hasMetadata;
/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasMetadataKey(metadataKey, target, key) {
    return Reflect.hasMetadata(metadataKey, target, key);
}
exports.hasMetadataKey = hasMetadataKey;
/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasOwnMetadata(metadataKey, target) {
    return Reflect.hasOwnMetadata(metadataKey, target);
}
exports.hasOwnMetadata = hasOwnMetadata;
/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
function hasOwnMetadataKey(metadataKey, target, key) {
    return Reflect.hasOwnMetadata(metadataKey, target, key);
}
exports.hasOwnMetadataKey = hasOwnMetadataKey;
//# sourceMappingURL=reflect.js.map