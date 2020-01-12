export type Size = {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
};

export type Spacing = Size & { none: number };

export const space: Spacing = {
  none: 0,
  xs: 3,
  s: 6,
  m: 12,
  l: 18,
  xl: 24
};

export const radii: Spacing = {
  none: 0,
  xs: 1,
  s: 3,
  m: 6,
  l: 10,
  xl: 20
};

export const fontSizes: Size = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 20
};
