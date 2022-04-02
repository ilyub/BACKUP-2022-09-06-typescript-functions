declare global {
  namespace configurable {
    interface LocaleName {}
  }
}

export type LocaleName = keyof configurable.LocaleName;
