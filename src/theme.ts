import CSS from "csstype";

type ThemeColors = {
  grayLight: CSS.ColorProperty;
  gray: CSS.ColorProperty;
  grayDark: CSS.ColorProperty;
  blue: CSS.ColorProperty;
};

type Size = {
  s: number;
  m: number;
  l: number;
  xl: number;
};

type Spacing = Size & { none: number };

export const space: Spacing = {
  none: 0,
  s: 6,
  m: 12,
  l: 18,
  xl: 24
};

export const radii: Spacing = {
  none: 0,
  s: 3,
  m: 6,
  l: 10,
  xl: 20
};

export const fontSizes: Size = {
  s: 12,
  m: 14,
  l: 16,
  xl: 20
};

export type Theme = {
  colors: ThemeColors;
  space: Spacing;
  radii: Spacing;
  fontSizes: Size;
  borders: {
    default: CSS.BorderProperty<number>;
  };
  button: {
    background: CSS.BackgroundClipProperty;
  };
  input: {
    height: CSS.HeightProperty<number>;
  };
};

export const colors: ThemeColors = {
  grayLight: "#fafbfc",
  gray: "#e1e4e8",
  grayDark: "#666666",
  blue: "#0066D6"
};

export const theme: Theme = {
  input: {
    height: 34
  },
  button: {
    background: `linear-gradient(-180deg,${colors.grayLight},${colors.gray} 90%)`
  },
  borders: {
    default: "1px solid"
  },
  fontSizes,
  space,
  radii,
  colors
};
