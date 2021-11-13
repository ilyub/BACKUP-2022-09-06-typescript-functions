/* typerock/eslint-plugin disable @typerock/disallow-identifier[reflect] */
// eslint-disable-next-line import/no-unassigned-import
import "reflect-metadata";
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
 * @param key - Property name.
 */
export function defineMetadataKey(metadataKey, metadataValue, target, key) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
export function get(target, key) {
    return Reflect.get(target, key);
}
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
 * @param key - Property name.
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
 * @param key - Property name.
 * @returns Metadata value.
 */
export function getOwnMetadataKey(metadataKey, target, key) {
    return Reflect.getOwnMetadata(metadataKey, target, key);
}
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 */
export function set(target, key, value) {
    Reflect.set(target, key, value);
}
//# sourceMappingURL=reflect.js.map