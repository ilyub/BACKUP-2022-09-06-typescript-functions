import type { stringE } from "./types/core";
/**
 * Decodes JSON string.
 *
 * @param source - JSON string.
 * @returns Decoded value.
 */
export declare function decode(source: stringE): unknown;
/**
 * Encodes to JSON string.
 *
 * @param source - Value to encode.
 * @returns JSON string.
 */
export declare function encode(source: unknown): string;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value.
 * @param y - Value.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export declare function eq(x: unknown, y: unknown): boolean;
/**
 * Compares two values as JSON strings.
 *
 * @param x - Value.
 * @param y - Value.
 * @returns _True_ if two values are not equal, _false_ otherwise.
 */
export declare function neq(x: unknown, y: unknown): boolean;
//# sourceMappingURL=json.d.ts.map