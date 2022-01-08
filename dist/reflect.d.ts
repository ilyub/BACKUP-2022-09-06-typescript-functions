import "reflect-metadata";
export declare type MetadataKey = string | symbol;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param thisArg - This argument.
 * @param args - Arguments.
 * @returns Function execution result.
 */
export declare function apply(target: Function, thisArg: unknown, args: ArrayLike<unknown>): unknown;
/**
 * Typed version of Reflect.construct.
 *
 * @param target - Target function.
 * @param args - Arguments.
 * @param newTarget - New target function.
 * @returns Constructed object.
 */
export declare function construct(target: Function, args: ArrayLike<unknown>, newTarget?: Function): unknown;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 */
export declare function defineMetadata(metadataKey: MetadataKey, metadataValue: unknown, target: object): void;
/**
 * Typed version of Reflect.defineMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param metadataValue - Metadata value.
 * @param target - Target object.
 * @param key - Property name.
 */
export declare function defineMetadataKey(metadataKey: MetadataKey, metadataValue: unknown, target: object, key: MetadataKey): void;
export declare const defineProperty: typeof Reflect.defineProperty;
export declare const deleteProperty: typeof Reflect.deleteProperty;
/**
 * Typed version of Reflect.get.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @returns Property value.
 */
export declare function get(target: object, key: PropertyKey): unknown;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export declare function getMetadata(metadataKey: MetadataKey, target: object): unknown;
/**
 * Typed version of Reflect.getMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
export declare function getMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): unknown;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @returns Metadata value.
 */
export declare function getOwnMetadata(metadataKey: MetadataKey, target: object): unknown;
/**
 * Typed version of Reflect.getOwnMetadata.
 *
 * @param metadataKey - Metadata key.
 * @param target - Target object.
 * @param key - Property name.
 * @returns Metadata value.
 */
export declare function getOwnMetadataKey(metadataKey: MetadataKey, target: object, key: MetadataKey): unknown;
export declare const getOwnPropertyDescriptor: typeof Reflect.getOwnPropertyDescriptor;
export declare const getPrototypeOf: typeof Reflect.getPrototypeOf;
export declare const has: typeof Reflect.has;
export declare const isExtensible: typeof Reflect.isExtensible;
export declare const ownKeys: typeof Reflect.ownKeys;
export declare const preventExtensions: typeof Reflect.preventExtensions;
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 * @returns Result.
 */
export declare function set(target: object, key: PropertyKey, value: unknown): boolean;
export declare const setPrototypeOf: typeof Reflect.setPrototypeOf;
//# sourceMappingURL=reflect.d.ts.map