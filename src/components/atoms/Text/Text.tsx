import styled from "styled-components";
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  display,
  DisplayProps
} from "styled-system";

export const Text = styled.div<
  TypographyProps & ColorProps & SpaceProps & DisplayProps
>(typography, color, space, display);
