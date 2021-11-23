declare global {
    namespace configurable {
        interface DefaultLocaleName {
            readonly "en-US": true;
        }
        interface LocaleName {
        }
    }
}
export declare type LocaleName = keyof configurable.LocaleName extends never ? keyof configurable.DefaultLocaleName : keyof configurable.LocaleName;
//# sourceMappingURL=locales.d.ts.map