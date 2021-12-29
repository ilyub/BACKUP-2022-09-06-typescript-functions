import type * as types from "./types/core";
export declare type ExclusiveGuard<T> = <V>(value: V) => value is Exclude<V, T>;
export declare type Guard<T = unknown> = (value: unknown) => value is T;
export declare type Guards<T> = {
    readonly [K in keyof T]: Guard<T[K]>;
};
export declare type MultiArgGuard<T, A extends unknown[]> = (value: unknown, ...args: A) => value is T;
/**
 * Creates single-arg guard.
 *
 * @param guard - Multi-arg guard.
 * @param args - Rest arguments.
 * @returns Single-arg guard.
 */
export declare function factory<T, A extends unknown[]>(guard: MultiArgGuard<T, A>, ...args: A): Guard<T>;
/**
 * Checks that value type is A & B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A & B, _false_ otherwise.
 */
export declare function and<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A & B;
/**
 * Checks that value type is A & B & C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A & B & C, _false_ otherwise.
 */
export declare function and<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A & B & C;
/**
 * Checks that value type is A & B & C & D.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is A & B & C & D, _false_ otherwise.
 */
export declare function and<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A & B & C & D;
export declare namespace and {
    var factory: typeof andFactory;
}
/**
 * Creates guard for type A & B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A & B.
 */
export declare function andFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A & B>;
/**
 * Creates guard for type A & B & C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A & B & C.
 */
export declare function andFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A & B & C>;
/**
 * Creates guard for type A & B & C & D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A & B & C & D.
 */
export declare function andFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A & B & C & D>;
/**
 * Checks that value type is not T.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is not T, _false_ otherwise.
 */
export declare function not<T, V>(value: V, guard: Guard<T>): value is Exclude<V, T>;
export declare namespace not {
    export var factory: typeof notFactory;
    export var boolean: ExclusiveGuard<boolean>;
    export var booleanU: ExclusiveGuard<types.booleanU>;
    export var callable: ExclusiveGuard<Function>;
    export var callableU: ExclusiveGuard<Function | undefined>;
    export var empty: ExclusiveGuard<types.empty>;
    var _a: ExclusiveGuard<null>;
    export var numStr: ExclusiveGuard<types.NumStr>;
    export var numStrU: ExclusiveGuard<types.NumStrU>;
    export var number: ExclusiveGuard<number>;
    export var numberU: ExclusiveGuard<types.numberU>;
    export var object: ExclusiveGuard<object>;
    export var string: ExclusiveGuard<string>;
    export var stringU: ExclusiveGuard<types.stringU>;
    export var undefined: ExclusiveGuard<undefined>;
    export { _a as null };
}
/**
 * Creates guard for not T type.
 *
 * @param guard - Guard for type T.
 * @returns Guard for not T type.
 */
export declare function notFactory<T>(guard: Guard<T>): ExclusiveGuard<T>;
/**
 * Checks that value type is A | B.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is A | B, _false_ otherwise.
 */
export declare function or<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is A | B;
/**
 * Checks that value type is A | B | C.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is A | B | C, _false_ otherwise.
 */
export declare function or<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is A | B | C;
/**
 * Checks that value type is A | B | C | D.
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is A | B | C | D, _false_ otherwise.
 */
export declare function or<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is A | B | C | D;
export declare namespace or {
    var factory: typeof orFactory;
}
/**
 * Creates guard for type A | B.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type A | B.
 */
export declare function orFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<A | B>;
/**
 * Creates guard for type A | B | C.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type A | B | C.
 */
export declare function orFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<A | B | C>;
/**
 * Creates guard for type A | B | C | D.
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type A | B | C | D.
 */
export declare function orFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<A | B | C | D>;
/**
 * Checks that value is an array.
 *
 * @param value - Value.
 * @returns _True_ if value is an array, _false_ otherwise.
 */
export declare function array(value: unknown): value is readonly unknown[];
export declare namespace array {
    var of: typeof arrayOf;
}
export declare const arrays: Guard<readonly (readonly unknown[])[]>;
export declare const arraysU: Guard<readonly (readonly unknown[])[] | undefined>;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function arrayOf<T>(value: unknown, guard: Guard<T>): value is readonly T[];
/**
 * Checks that value is a boolean.
 *
 * @param value - Value.
 * @returns _True_ if value is a boolean, _false_ otherwise.
 */
export declare function boolean(value: unknown): value is boolean;
export declare const booleans: Guard<readonly boolean[]>;
export declare const booleansU: Guard<readonly boolean[] | undefined>;
/**
 * Checks that value type is booleanU.
 *
 * @param value - Value.
 * @returns _True_ if value type is booleanU, _false_ otherwise.
 */
export declare function booleanU(value: unknown): value is types.booleanU;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function callable<T extends Function>(value: unknown): value is T;
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export declare function callableU<T extends Function>(value: unknown): value is T | undefined;
/**
 * Checks that value type is empty.
 *
 * @param value - Value.
 * @returns _True_ if value type is empty, _false_ otherwise.
 */
export declare function empty(value: unknown): value is types.empty;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function enumeration<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>): value is T;
/**
 * Checks that value type is T | undefined.
 *
 * @param value - Value.
 * @param vo - Validation object.
 * @returns _True_ if value type is T | undefined, _false_ otherwise.
 */
export declare function enumerationU<T extends PropertyKey>(value: unknown, vo: types.ValidationObject<T>): value is T | undefined;
/**
 * Checks that value is _false_.
 *
 * @param value - Value.
 * @returns _True_ if value is _false_, _false_ otherwise.
 */
export declare function falseGuard(value: unknown): value is false;
export { falseGuard as false };
/**
 * Checks that value type is IndexedObject.
 *
 * @param value - Value.
 * @returns _True_ if value type is IndexedObject, _false_ otherwise.
 */
export declare function indexedObject(value: unknown): value is types.ReadonlyIndexedObject;
export declare namespace indexedObject {
    var of: typeof indexedObjectOf;
}
export declare const indexedObjectU: Guard<Readonly<types.IndexedObject<unknown>> | undefined>;
export declare const indexedObjects: Guard<readonly Readonly<types.IndexedObject<unknown>>[]>;
export declare const indexedObjectsU: Guard<readonly Readonly<types.IndexedObject<unknown>>[] | undefined>;
/**
 * Checks that value type is IndexedObject\<T\>.
 *
 * @param value - Value.
 * @param guard - Guard for type T.
 * @returns _True_ if value type is IndexedObject\<T\>, _false_ otherwise.
 */
export declare function indexedObjectOf<T>(value: unknown, guard: Guard<T>): value is types.ReadonlyIndexedObject<T>;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function instance<T>(value: unknown, ctor: types.Constructor<T>): value is T;
/**
 * Checks that value type is T[].
 *
 * @param value - Value.
 * @param ctor - Constructor.
 * @returns _True_ if value type is T[], _false_ otherwise.
 */
export declare function instances<T>(value: unknown, ctor: types.Constructor<T>): value is readonly T[];
/**
 * Checks that value type is Map<K, V>.
 *
 * @param value - Value.
 * @param keyGuard - Key guard.
 * @param valueGuard - Value guard.
 * @returns _True_ if value type is Map<K, V>, _false_ otherwise.
 */
export declare function map<K, V>(value: unknown, keyGuard: Guard<K>, valueGuard: Guard<V>): value is ReadonlyMap<K, V>;
/**
 * Checks that value is _null_.
 *
 * @param value - Value.
 * @returns _True_ if value is _null_, _false_ otherwise.
 */
declare function nullGuard(value: unknown): value is null;
export { nullGuard as null };
/**
 * Checks that value type is NumStr.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStr, _false_ otherwise.
 */
export declare function numStr(value: unknown): value is types.NumStr;
export declare const numStrs: Guard<readonly types.NumStr[]>;
export declare const numStrsU: Guard<readonly types.NumStr[] | undefined>;
/**
 * Checks that value type is NumStrU.
 *
 * @param value - Value.
 * @returns _True_ if value type is NumStrU, _false_ otherwise.
 */
export declare function numStrU(value: unknown): value is types.NumStrU;
/**
 * Checks that value is a number.
 *
 * @param value - Value.
 * @returns _True_ if value is a number, _false_ otherwise.
 */
export declare function number(value: unknown): value is number;
export declare const numbers: Guard<readonly number[]>;
export declare const numbersU: Guard<readonly number[] | undefined>;
/**
 * Checks that value type is numberU.
 *
 * @param value - Value.
 * @returns _True_ if value type is numberU, _false_ otherwise.
 */
export declare function numberU(value: unknown): value is types.numberU;
/**
 * Checks that value is an object.
 *
 * @param value - Value.
 * @returns _True_ if value is an object, _false_ otherwise.
 */
export declare function object(value: unknown): value is object;
export declare namespace object {
    var of: typeof objectOf;
}
export declare const objects: Guard<readonly object[]>;
export declare const objectsU: Guard<readonly object[] | undefined>;
/**
 * Checks that value type is T.
 *
 * @param value - Value.
 * @param requiredGuards - Guards for required properties.
 * @param optionalGuards - Guards for optional properties.
 * @returns _True_ if value type is T, _false_ otherwise.
 */
export declare function objectOf<A, B>(value: unknown, requiredGuards: Guards<A>, optionalGuards: Guards<B>): value is Required<A> & types.Optional<B>;
/**
 * Checks that value type is objectU.
 *
 * @param value - Value.
 * @returns _True_ if value type is objectU, _false_ otherwise.
 */
export declare function objectU(value: unknown): value is types.objectU;
/**
 * Checks that value type is Set<T>.
 *
 * @param value - Value.
 * @param guard - Guard.
 * @returns _True_ if value type is Set<T>, _false_ otherwise.
 */
export declare function set<T>(value: unknown, guard: Guard<T>): value is ReadonlySet<T>;
/**
 * Checks that value is a string.
 *
 * @param value - Value.
 * @returns _True_ if value is a string, _false_ otherwise.
 */
export declare function string(value: unknown): value is string;
export declare const strings: Guard<readonly string[]>;
export declare const stringsU: Guard<readonly string[] | undefined>;
/**
 * Checks that value type is stringU.
 *
 * @param value - Value.
 * @returns _True_ if value type is stringU, _false_ otherwise.
 */
export declare function stringU(value: unknown): value is types.stringU;
/**
 * Checks that value is _true_.
 *
 * @param value - Value.
 * @returns _True_ if value is _true_, _false_ otherwise.
 */
export declare function trueGuard(value: unknown): value is true;
export { trueGuard as true };
/**
 * Checks that value type is [A].
 *
 * @param value - Value.
 * @param guard - Guard .
 * @returns _True_ if value type is [A], _false_ otherwise.
 */
export declare function tuple<A>(value: unknown, guard: Guard<A>): value is readonly [A];
/**
 * Checks that value type is [A, B].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns _True_ if value type is [A, B], _false_ otherwise.
 */
export declare function tuple<A, B>(value: unknown, guard1: Guard<A>, guard2: Guard<B>): value is readonly [A, B];
/**
 * Checks that value type is [A, B, C].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns _True_ if value type is [A, B, C], _false_ otherwise.
 */
export declare function tuple<A, B, C>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): value is readonly [A, B, C];
/**
 * Checks that value type is [A, B, C, D].
 *
 * @param value - Value.
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns _True_ if value type is [A, B, C, D], _false_ otherwise.
 */
export declare function tuple<A, B, C, D>(value: unknown, guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): value is readonly [A, B, C, D];
export declare namespace tuple {
    var factory: typeof tupleFactory;
}
/**
 * Creates guard for type [A].
 *
 * @param guard - Guard.
 * @returns Guard for type [A].
 */
export declare function tupleFactory<A>(guard: Guard<A>): Guard<readonly [A]>;
/**
 * Creates guard for type [A, B].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @returns Guard for type [A, B].
 */
export declare function tupleFactory<A, B>(guard1: Guard<A>, guard2: Guard<B>): Guard<readonly [A, B]>;
/**
 * Creates guard for type [A, B, C].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @returns Guard for type [A, B, C].
 */
export declare function tupleFactory<A, B, C>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>): Guard<readonly [A, B, C]>;
/**
 * Creates guard for type [A, B, C, D].
 *
 * @param guard1 - Guard 1.
 * @param guard2 - Guard 2.
 * @param guard3 - Guard 3.
 * @param guard4 - Guard 4.
 * @returns Guard for type [A, B, C, D].
 */
export declare function tupleFactory<A, B, C, D>(guard1: Guard<A>, guard2: Guard<B>, guard3: Guard<C>, guard4: Guard<D>): Guard<readonly [A, B, C, D]>;
/**
 * Checks that value is _undefined_.
 *
 * @param value - Value.
 * @returns _True_ if value is _undefined_, _false_ otherwise.
 */
declare function undefinedGuard(value: unknown): value is undefined;
export { undefinedGuard as undefined };
/**
 * Checks that value is _unknown_.
 *
 * @param _value - Value.
 * @returns _True_ if value is _unknown_, _false_ otherwise.
 */
export declare function unknown(_value: unknown): _value is unknown;
//# sourceMappingURL=guards.d.ts.map