import styled, { css } from "styled-components";

export const inputBase = css`
  border-radius: ${({ theme }) => theme.radii.s}px;
  border: ${({ theme }) => theme.borders.default};
  border-color: ${({ theme }) => theme.colors.gray};
  min-height: ${({ theme }) => theme.input.height}px;
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  color: ${({ theme }) => theme.colors.grayDark};
  width: 100%;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

export const Input = styled.input`
  ${inputBase}
  padding: 6px 8px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
`;
