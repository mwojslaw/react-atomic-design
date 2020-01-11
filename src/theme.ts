export type Theme = {
  inputBorder: string;
  space: number[];
};

export type ThemeModes = "light";

export const getTheme = (mode: ThemeModes): Theme =>
  ({
    light: {
      inputBorder: "1px solid #e1e4e8",
      space: [0, 6, 12, 18, 24]
    }
  }[mode]);
