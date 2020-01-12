import styled from "styled-components";
import {
  typography,
  TypographyProps,
  color,
  ColorProps,
  space,
  SpaceProps
} from "styled-system";

export const Text = styled.div<TypographyProps & ColorProps & SpaceProps>(
  typography,
  color,
  space
);
