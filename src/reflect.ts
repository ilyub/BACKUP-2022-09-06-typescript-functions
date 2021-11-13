/* skylib/eslint-plugin disable @skylib/disallow-identifier[reflect] */

// eslint-disable-next-line import/no-unassigned-import
import "reflect-metadata";

export type MetadataKey = string | symbol;

/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export function defineMetadata(
  metadataKey: MetadataKey,
  metadataValue: unknown,
  target: object
): void {
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
export function defineMetadataKey(
  metadataKey: MetadataKey,
  metadataValue: unknown,
  target: object,
  key: MetadataKey
): void {
  Reflect.defineMetadata(metadataKey, metadataValue, target, key);
}

/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
export function get(target: object, key: PropertyKey): unknown {
  return Reflect.get(target, key);
}

/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getMetadata(metadataKey: MetadataKey, target: object): unknown {
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
export function getMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): unknown {
  return Reflect.getMetadata(metadataKey, target, key);
}

/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export function getOwnMetadata(
  metadataKey: MetadataKey,
  target: object
): unknown {
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
export function getOwnMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): unknown {
  return Reflect.getOwnMetadata(metadataKey, target, key);
}

/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 */
export function set(target: object, key: PropertyKey, value: unknown): void {
  Reflect.set(target, key, value);
}
