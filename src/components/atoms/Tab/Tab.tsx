import styled from "styled-components";
import { Box } from "components/atoms";

export type TabProps = { selected?: boolean; disabled?: boolean };

export const Tab = styled(Box).attrs(({ theme }) => ({
  px: theme.space.s,
  py: theme.space.l
}))<TabProps>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  ${({ theme, selected }) =>
    selected
      ? `
        border-bottom: ${theme.borders.strong};
        border-color: ${theme.colors.orange};`
      : `
        :hover {
            border-bottom: ${theme.borders.strong};
            border-color: ${theme.colors.gray};
        }
     `}
`;
