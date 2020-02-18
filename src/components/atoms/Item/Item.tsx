import styled from "styled-components";
import { Box } from "components/atoms";

export const Item = styled(Box).attrs(({ theme }) => ({
  borderBottom: theme.borders.default,
  borderColor: theme.input.borderColor,
  width: 1
}))`
  padding-top: ${({ theme }): number => theme.space.xl}px;
  padding-bottom: ${({ theme }): number => theme.space.xl}px;
`;
