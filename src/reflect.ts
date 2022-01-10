/* skylib/eslint-plugin disable @skylib/disallow-identifier[reflect] */

// eslint-disable-next-line import/no-unassigned-import
import "reflect-metadata";

export type MetadataKey = string | symbol;

/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export function apply(
  target: Function,
  thisArg: unknown,
  args: ArrayLike<unknown>
): unknown {
  return Reflect.apply(target, thisArg, args);
}

/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export function construct(
  target: Function,
  args: ArrayLike<unknown>,
  newTarget?: Function
): unknown {
  return newTarget
    ? Reflect.construct(target, args, newTarget)
    : Reflect.construct(target, args);
}

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

export const defineProperty = Reflect.defineProperty;

export const deleteProperty = Reflect.deleteProperty;

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
export function hasMetadata(metadataKey: MetadataKey, target: object): boolean {
  return Reflect.hasMetadata(metadataKey, target);
}

/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): boolean {
  return Reflect.hasMetadata(metadataKey, target, key);
}

/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadata(
  metadataKey: MetadataKey,
  target: object
): boolean {
  return Reflect.hasOwnMetadata(metadataKey, target);
}

/**
 * Typed version of Reflect.hasMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns _True_ if key exists, _false_ otherwise.
 */
export function hasOwnMetadataKey(
  metadataKey: MetadataKey,
  target: object,
  key: MetadataKey
): boolean {
  return Reflect.hasOwnMetadata(metadataKey, target, key);
}

export const isExtensible = Reflect.isExtensible;

export const ownKeys = Reflect.ownKeys;

export const preventExtensions = Reflect.preventExtensions;

export const set = Reflect.set;

export const setPrototypeOf = Reflect.setPrototypeOf;
