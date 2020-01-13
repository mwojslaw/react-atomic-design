import styled from "styled-components";
import { buttonStyle, variant, compose, ButtonStyleProps } from "styled-system";

type ButtonProps = ButtonStyleProps & { active?: boolean };

export const Button = styled.button<ButtonProps>(
  compose(buttonStyle, variant),
  {
    ":focus": {
      outline: "none"
    },
    ":hover": {
      filter: "brightness(95%)"
    }
  }
);

Button.defaultProps = {
  variant: "default"
};
