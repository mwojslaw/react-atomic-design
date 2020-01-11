import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  border: ${({ theme }) => theme.inputBorder};
  min-height: ${({ theme }) => theme.inputMinHeight};
  font-size: ${({ theme }) => theme.inputFontSize};
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
