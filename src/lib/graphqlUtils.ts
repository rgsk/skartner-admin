type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]-?: T[K] extends object
        ? `${K & string}.${NestedKeyOf<T[K]>}`
        : `${K & string}`;
    }[keyof T]
  : never;

export const getSourceValidator =
  <Z>() =>
  (v: NestedKeyOf<Z>) => {
    return v;
  };
