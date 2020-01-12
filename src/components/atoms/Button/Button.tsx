import styled from "styled-components";
import { buttonStyle, variant, compose, ButtonStyleProps } from "styled-system";

export const Button = styled.button<ButtonStyleProps>(
  compose(buttonStyle, variant)
);

Button.defaultProps = {
  variant: "default"
};
