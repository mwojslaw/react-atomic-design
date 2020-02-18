import { ThemeContext } from "styled-components";
import { Theme } from "theme";
import { useContext } from "react";

export const useTheme = (): Theme => {
  const theme = useContext<Theme>(ThemeContext);
  return theme;
};
