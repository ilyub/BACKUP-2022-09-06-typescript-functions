/* skylib/eslint-plugin disable @skylib/disallow-identifier[functions.reflect] */
import "reflect-metadata";
/**
 * Typed version of Reflect.apply.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export const apply = Reflect.apply;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export const construct = Reflect.construct;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export function defineMetadata(metadataKey, metadataValue, target) {
    Reflect.defineMetadata(metadataKey, metadataValue, target);
}
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property key.
 */
export function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
export const defineProperty = Reflect.defineProperty;
export const deleteProperty = Reflect.deleteProperty;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property key.
 * @returns Property value.
 */
export const get = Reflect.get;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getMetadata(metadataKey, target) {
    return Reflect.getMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export function getMetadataKey(metadataKey, target, key) {
    return Reflect.getMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getOwnMetadata(metadataKey, target) {
    return Reflect.getOwnMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns Metadata value.
 */
export function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
export const getOwnPropertyDescriptor = Reflect.getOwnPropertyDescriptor;
export const getPrototypeOf = Reflect.getPrototypeOf;
export const has = Reflect.has;
/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadata(metadataKey, target) {
    return Reflect.hasMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadataKey(metadataKey, target, key) {
    return Reflect.hasMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadata(metadataKey, target) {
    return Reflect.hasOwnMetadata(metadataKey, target);
}
/**
 * Typed version of Reflect.hasOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property key.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadataKey(metadataKey, target, key) {
    return Reflect.hasOwnMetadata(metadataKey, target, key);
}
export const isExtensible = Reflect.isExtensible;
export const ownKeys = Reflect.ownKeys;
export const preventExtensions = Reflect.preventExtensions;
export const set = Reflect.set;
export const setPrototypeOf = Reflect.setPrototypeOf;
//# sourceMappingURL=reflect.js.map