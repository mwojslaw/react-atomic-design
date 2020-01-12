import { CSSObject } from "styled-components";
import { colors } from "theme/colors";
import { radii, fontSizes } from "theme/sizes";

export const inputBase: CSSObject = {
  minHeight: "34px",
  borderColor: colors.gray,
  borderWidth: "1px",
  borderStyle: "solid",
  borderRadius: `${radii.s}px`,
  fontSize: `${fontSizes.m}px`,
  color: colors.grayDark,
  width: "100%",
  boxSizing: "border-box",
  padding: "6px 8px",
  boxShadow: "inset 0 1px 2px rgba(27, 31, 35, 0.075)"
};
