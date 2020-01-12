import styled from "styled-components";

export const Tab = styled.span<{ selected?: boolean; disabled?: boolean }>`
  padding: 16px 8px;
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
