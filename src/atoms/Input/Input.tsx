import styled from "styled-components";

export const Input = styled.input`
  border-radius: 3px;
  padding: 6px 8px;
  box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);
  border: ${({ theme }) => theme.inputBorder};
  min-height: ${({ theme }) => theme.inputMinHeight};
  font-size: ${({ theme }) => theme.inputFontSize};
  box-sizing: border-box;
  width: 100%;

  :focus {
    outline: none;
  }
`;
