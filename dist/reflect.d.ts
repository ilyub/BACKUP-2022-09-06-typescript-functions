import "reflect-metadata";
export declare type MetadataKey = string | symbol;
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
/**
 * Typed version of Reflect.set.
 *
 * @param target - Target object.
 * @param key - Property name.
 * @param value - Property value.
 */
export declare function set(target: object, key: PropertyKey, value: unknown): void;
//# sourceMappingURL=reflect.d.ts.map