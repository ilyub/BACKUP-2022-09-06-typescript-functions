declare global {
  namespace configurable {
    interface DefaultLocaleName {
      readonly "en-US": true;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface LocaleName {}
  }
}

export type LocaleName = keyof configurable.LocaleName extends never
  ? keyof configurable.DefaultLocaleName
  : keyof configurable.LocaleName;
