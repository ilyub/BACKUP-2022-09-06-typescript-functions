declare global {
  namespace configurable {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface LocaleName {}
  }
}

export type LocaleName = keyof configurable.LocaleName;
