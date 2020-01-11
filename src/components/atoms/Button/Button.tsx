import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  border: ${({ theme }) => theme.inputBorder};
  min-height: ${({ theme }) => theme.inputMinHeight};
  font-size: ${({ theme }) => theme.inputFontSize};
  border-radius: ${({ theme }) => theme.inputBorderRadius};
  cursor: pointer;
  width: 100%;
  color: ${({ theme }) => theme.inputColor};
  font-weight: bold;

  :focus {
    outline: none;
  }
`;
