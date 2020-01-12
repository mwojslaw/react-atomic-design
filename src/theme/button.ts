import { CSSObject } from "styled-components";
import { inputBase } from "theme/input";

export type ButtonVariants = {
  primary: CSSObject;
  default: CSSObject;
};

export const buttonBase: CSSObject = {
  ...inputBase,
  fontWeight: "bold",
  cursor: "pointer"
};
