export declare type IndexedObject<T = unknown> = Rec<PropertyKey, T>;
export declare type NumStr = number | string;
export declare type NumStrE = empty | NumStr;
export declare type NumStrU = NumStr | undefined;
export declare type NumStrs = readonly NumStr[];
export declare type PartialRecord<K extends PropertyKey, V> = {
    readonly [L in K]?: V;
};
export declare type PropertyKeyE = empty | PropertyKey;
export declare type PropertyKeyU = PropertyKey | undefined;
export declare type PropertyKeys = readonly PropertyKey[];
export declare type Rec<K extends PropertyKey, V> = {
    readonly [L in K]: V;
};
export declare type Writable<T> = {
    -readonly [P in keyof T]: T[P];
};
export declare type WritableIndexedObject<T = unknown> = WritableRecord<PropertyKey, T>;
export declare type WritablePartialRecord<K extends PropertyKey, V> = {
    [L in K]?: V;
};
export declare type WritableRecord<K extends PropertyKey, V> = {
    [L in K]: V;
};
export declare type booleanE = empty | boolean;
export declare type booleanU = boolean | undefined;
export declare type booleans = readonly boolean[];
export declare type empty = null | undefined;
export declare type falseU = false | undefined;
export declare type nevers = readonly never[];
export declare type numberE = empty | number;
export declare type numberU = number | undefined;
export declare type numbers = readonly number[];
export declare type objectE = empty | object;
export declare type objectU = object | undefined;
export declare type objects = readonly object[];
export declare type stringE = empty | string;
export declare type stringU = string | undefined;
export declare type strings = readonly string[];
export declare type trueU = true | undefined;
export declare type unknowns = readonly unknown[];
//# sourceMappingURL=core.d.ts.map