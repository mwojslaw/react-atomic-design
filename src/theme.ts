export type Theme = {
  inputBorder: string;
  inputMinHeight: string;
  inputFontSize: string;
  buttonBackground: string;
  space: number[];
};

export type ThemeModes = "light";

export const getTheme = (mode: ThemeModes): Theme =>
  ({
    light: {
      inputBorder: "1px solid #e1e4e8",
      inputFontSize: "14px",
      inputMinHeight: "34px",
      space: [0, 6, 12, 18, 24],
      buttonBackground: "linear-gradient(-180deg,#fafbfc,#eff3f6 90%)"
    }
  }[mode]);
