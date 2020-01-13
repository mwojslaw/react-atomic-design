import { CSSObject } from "styled-components";
import { inputBase } from "theme/input";

export type ButtonVariant = "primary" | "default";

export const buttonBase: CSSObject = {
  ...inputBase,
  padding: "6px 12px",
  fontWeight: "bold",
  cursor: "pointer"
};
