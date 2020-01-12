import styled from "styled-components";
import { typography, space, TypographyProps, SpaceProps } from "styled-system";

export const Link = styled.a<TypographyProps & SpaceProps>`
  ${typography}
  ${space}
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue};

  :hover {
    text-decoration: underline;
  }
`;
