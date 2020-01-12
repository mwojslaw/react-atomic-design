import { CSSObject } from "styled-components";
import { colors, ThemeColors } from "theme/colors";
import { space, Size, Spacing, radii, fontSizes } from "theme/sizes";
import { buttonBase, ButtonVariants } from "theme/button";
import { inputBase } from "theme/input";

export type Theme = {
  colors: ThemeColors;
  space: Spacing;
  radii: Spacing;
  fontSizes: Size;
  borders: {
    default: string;
    strong: string;
  };
  buttons: ButtonVariants;
  input: CSSObject;
};

const borders = {
  default: "1px solid",
  strong: "3px solid"
};

export const theme: Theme = {
  input: inputBase,
  buttons: {
    primary: {
      ...buttonBase,
      color: colors.white,
      borderColor: colors.grayDark,
      background: `linear-gradient(-180deg,${colors.greenLight},${colors.green} 90%)`
    },
    default: {
      ...buttonBase,
      background: `linear-gradient(-180deg,${colors.grayLight},${colors.gray} 90%)`
    }
  },
  borders,
  fontSizes,
  space,
  radii,
  colors
};
